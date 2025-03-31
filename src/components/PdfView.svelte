
<script lang="ts">
    import * as p from "pdfjs-dist";
    import { resource } from "../lib/resource.svelte";
    import { onMount } from "svelte";
    import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

    let { search, pdf } = $props();

    import a from "../assets/pdf.pdf";

    p.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    let container: HTMLDivElement;

    let pages = $state([]);

    $effect(() => {
        (async () => {
            if(pdf) {
                container.innerHTML = "";

                let scale = window.devicePixelRatio ?? 1;
                let doc = await p.getDocument(a).promise;
                for(let i = 0; i < doc.numPages; i++) {
                    let canvas = document.createElement("canvas");
                    canvas.classList.add("pdf-display");
                    let page = await doc.getPage(i + 1);

                    let search = "wandeln".toLowerCase();

                    let viewport = page.getViewport({ scale });
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    let ctx = canvas.getContext("2d")!;
                    await page.render({
                        canvasContext: ctx,
                        viewport,
                    }).promise;
                    let text = await page.getTextContent();

                    for(const t of text.items) {
                        if("str" in t && t.str.toLowerCase().includes(search)) {
                            ctx.save();
                            let [w, h] = [t.width, t.height];
                            ctx.fillStyle = "#00000055";
                            // let [x, y] = [t.transform[4], t.transform[5]];
                            let [x, y] = [t.transform[4], t.transform[5]];
                            const padding = 5;
                            [x, y, w, h] = viewport.convertToViewportRectangle([x, y, x + t.width, y + t.height]);
                            console.log(`${x}, ${y}, ${w}, ${h}`);
                            ctx.fillRect(x - padding, y + padding, w - x + 2.0*padding, h - y - 2.0*padding);
                            ctx.restore();
                        }
                    }
                    container.append(canvas);
                    pages = [...pages, [page, canvas, text]];
                }
            }
        })
    })

    $effect(() => {
        for(const [page, canvas, text] of pages) {

        }
    })

</script>

<div class="viewer">
    <div class="container" bind:this={container}></div>
</div>

<style>
.viewer {
    overflow: auto;
    height: 100vh;
    user-select: none;
}

:global(.pdf-display) {
    width: 100%;
}
</style>


