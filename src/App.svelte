<script lang="ts">
    import "./app.css";
    import "./app.pcss";
    import Dashboard from "./components/Dashboard.svelte";
    import PdfView from "./components/PdfView.svelte";
    import * as Resizable from "$lib/components/ui/resizable";
    
    // Import the dashboard data
    import dashboardData from "./assets/dashboardData.json";
    
    // State for the selected question
    let selectedPersona = null;
    let selectedQuestion = null;
    
    // Handle question selection
    function handleQuestionSelected(event) {
        selectedPersona = event.detail.persona;
        selectedQuestion = event.detail.question;
        console.log("Selected question:", selectedQuestion);
    }
</script>

<main>
    <img src="logo.png" alt="" class="absolute z-50 top-0 left-0 w-40 p-4" />
    <Resizable.PaneGroup direction="horizontal">
      <Resizable.Pane><PdfView pdf={true} selectedQuestion={selectedQuestion} /></Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane><Dashboard data={dashboardData} on:questionSelected={handleQuestionSelected} /></Resizable.Pane>
    </Resizable.PaneGroup>
</main>

<style>
</style>

