<script lang="ts">
    import "./app.css";
    import "./app.pcss";
    import Dashboard from "./components/Dashboard.svelte";
    import PdfView from "./components/PdfView.svelte";
    import * as Resizable from "$lib/components/ui/resizable";
</script>

<main>
    <Resizable.PaneGroup direction="horizontal">
      <Resizable.Pane><PdfView/></Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane><Dashboard/></Resizable.Pane>
    </Resizable.PaneGroup>
</main>

<style>

</style>

