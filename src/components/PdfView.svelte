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
        let found = false;
        
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
                
                // Return the first occurrence for scrolling
                if (!found) {
                    found = true;
                    return {
                        element: ctx.canvas,
                        position: y
                    };
                }
            }
        }
        return null;
    }
    
    // Custom event dispatcher to inform App when highlighting is complete
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
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
        
        let firstHighlight = null;
        
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
                const highlight = highlightSearchTerms(ctx, viewport, text, searchTerm);
                if (highlight && !firstHighlight) {
                    firstHighlight = highlight;
                }
                
                // Also highlight terms from the answer if available
                if (selectedQuestion.answer_found) {
                    const answerHighlight = highlightSearchTerms(ctx, viewport, text, selectedQuestion.answer_found);
                    if (answerHighlight && !firstHighlight) {
                        firstHighlight = answerHighlight;
                    }
                }
                
                // Highlight manual references if available
                if (selectedQuestion.manual_reference && selectedQuestion.manual_reference.length) {
                    for (const ref of selectedQuestion.manual_reference) {
                        const refHighlight = highlightSearchTerms(ctx, viewport, text, ref);
                        if (refHighlight && !firstHighlight) {
                            firstHighlight = refHighlight;
                        }
                    }
                }
            }
            
            container.append(canvas);
            pages = [...pages, [page, canvas, text]];
        }
        
        // Scroll to the first highlight if found
        if (firstHighlight) {
            setTimeout(() => {
                firstHighlight.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                dispatch('highlightComplete', { 
                    found: true,
                    element: firstHighlight.element,
                    position: firstHighlight.position
                });
            }, 200); // Small delay to ensure DOM is updated
        } else {
            dispatch('highlightComplete', { found: false });
        }
    }
    
    // Initial render
    $effect(() => {
        renderPdf();
    });
</script>

<div class="viewer">
    <div class="container" bind:this={container}></div>
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
</style>


