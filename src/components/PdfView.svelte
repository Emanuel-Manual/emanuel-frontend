<script lang="ts">
    import * as p from "pdfjs-dist";
    import { resource } from "../lib/resource.svelte";
    import { onMount } from "svelte";
    import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
    let { search, pdf, selectedQuestion } = $props();
    import a from "../assets/pdf.pdf";
    p.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    let container: HTMLDivElement;
    let pages = $state([]);
    
    // Function to highlight search terms in the PDF
    function highlightSearchTerms(ctx, viewport, text, searchTerm) {
        if (!searchTerm) return;
        
        const term = searchTerm.toLowerCase();
        
        for(const t of text.items) {
            if("str" in t && t.str.toLowerCase().includes(term)) {
                ctx.save();
                let [w, h] = [t.width, t.height];
                ctx.fillStyle = "#FFFF0055"; // Yellow highlight with transparency
                let [x, y] = [t.transform[4], t.transform[5]];
                const padding = 5;
                [x, y, w, h] = viewport.convertToViewportRectangle([x, y, x + t.width, y + t.height]);
                ctx.fillRect(x - padding, y + padding, w - x + 2.0*padding, h - y - 2.0*padding);
                ctx.restore();
            }
        }
    }
    
    // Watch for changes in the selected question
    $effect(() => {
        if(selectedQuestion) {
            console.log("PdfView received question:", selectedQuestion.question);
            // Re-render the PDF with highlighted search terms
            renderPdf();
        }
    });
    
    // Render the PDF with any search terms
    async function renderPdf() {
        if(!pdf) return;
        
        container.innerHTML = "";
        let scale = window.devicePixelRatio ?? 1;
        let doc = await p.getDocument(a).promise;
        pages = [];
        
        for(let i = 0; i < doc.numPages; i++) {
            let canvas = document.createElement("canvas");
            canvas.classList.add("pdf-display");
            let page = await doc.getPage(i + 1);
            
            // Define search terms based on selected question
            let searchTerm = selectedQuestion ? selectedQuestion.question : null;
            
            let viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            let ctx = canvas.getContext("2d")!;
            
            await page.render({
                canvasContext: ctx,
                viewport,
            }).promise;
            
            let text = await page.getTextContent();
            
            // Highlight search terms if we have a selected question
            if (searchTerm) {
                highlightSearchTerms(ctx, viewport, text, searchTerm);
                
                // Also highlight terms from the answer if available
                if (selectedQuestion.answer_found) {
                    highlightSearchTerms(ctx, viewport, text, selectedQuestion.answer_found);
                }
                
                // Highlight manual references if available
                if (selectedQuestion.manual_reference && selectedQuestion.manual_reference.length) {
                    selectedQuestion.manual_reference.forEach(ref => {
                        highlightSearchTerms(ctx, viewport, text, ref);
                    });
                }
            }
            
            container.append(canvas);
            pages = [...pages, [page, canvas, text]];
        }
    }
    
    // Initial render
    $effect(() => {
        renderPdf();
    });
</script>

<div class="viewer">
    <div class="container" bind:this={container}></div>
    {#if selectedQuestion}
    <div class="question-info">
        <div class="question">{selectedQuestion.question}</div>
        {#if selectedQuestion.answer_found}
        <div class="answer">Answer: {selectedQuestion.answer_found}</div>
        {/if}
    </div>
    {/if}
</div>

<style>
.viewer {
    overflow: auto;
    height: 100vh;
    user-select: none;
    position: relative;
}
:global(.pdf-display) {
    width: 100%;
}
.question-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
.question {
    font-weight: bold;
    margin-bottom: 5px;
}
.answer {
    color: #555;
}
</style>


