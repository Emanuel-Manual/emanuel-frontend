<script lang="ts">
    import "./app.css";
    import "./app.pcss";
    import Dashboard from "./components/Dashboard.svelte";
    import PdfView from "./components/PdfView.svelte";
    import * as Resizable from "$lib/components/ui/resizable";
    
    // Import the dashboard data
    import dashboardData from "./assets/dashboardData.json";
</script>

<main>
    <img src="logo.png" alt="" class="absolute z-50 top-0 left-0 w-40 p-4" />
    <Resizable.PaneGroup direction="horizontal">
      <Resizable.Pane><PdfView/></Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane><Dashboard data={dashboardData}/></Resizable.Pane>
    </Resizable.PaneGroup>
</main>

<style>

</style>

