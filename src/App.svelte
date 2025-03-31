<script lang="ts">
    import "./app.css";
    import "./app.pcss";
    import Dashboard from "./components/Dashboard.svelte";
    import PdfView from "./components/PdfView.svelte";
    import * as Resizable from "$lib/components/ui/resizable";
    import { Separator } from "$lib/components/ui/separator";
    import { CircleCheck, CircleAlert, Smile } from "lucide-svelte";
    
    // Import the dashboard data
    import dashboardData from "./assets/dashboardData.json";
    
    // State for the selected question
    let selectedPersona = null;
    let selectedQuestion = null;
    let highlightInfo = null;
    
    // Handle question selection
    function handleQuestionSelected(event) {
        selectedPersona = event.detail.persona;
        selectedQuestion = event.detail.question;
        console.log("Selected question:", selectedQuestion);
    }
    
    // Handle highlight complete event
    function handleHighlightComplete(event) {
        highlightInfo = event.detail;
        console.log("Highlight complete:", highlightInfo);
    }
</script>

<main class="relative h-screen">
    <img src="logo.png" alt="" class="absolute z-50 top-0 left-0 w-40 p-4" />
    <Resizable.PaneGroup direction="horizontal">
      <Resizable.Pane class="relative h-full overflow-hidden">
        {#if selectedQuestion}
        <div class="absolute bottom-0 z-50 w-full p-4  ">
            <div class="flex flex-row items-center gap-4 p-10 bg-white rounded-lg shadow-lg border-2  question-info">
                <div class="flex-1">
                    <div class="question">{selectedQuestion.question}</div>
                    {#if selectedQuestion.answer_found}
                    <div class="answer">Answer: {selectedQuestion.answer_found}</div>
                    {/if}
                    {#if selectedQuestion.manual_reference && selectedQuestion.manual_reference.length}
                    <div class="reference">
                        <span class="reference-label">Manual Reference:</span>
                        {#each selectedQuestion.manual_reference as ref, i}
                            <span class="reference-item">{ref}{i < selectedQuestion.manual_reference.length - 1 ? ', ' : ''}</span>
                        {/each}
                    </div>
                    {/if}
                </div>
                
                <div class="status-indicators">
                    <div class="flex flex-row items-center gap-2">
                        {#if selectedQuestion.answered}
                            <div class="bg-green-200 rounded-full w-fit p-2">
                                <CircleCheck class="h-5 w-5" />
                            </div>
                            <span class="text-sm">Question Answered</span>
                        {:else}
                            <div class="bg-red-200 rounded-full w-fit p-2">
                                <CircleAlert class="h-5 w-5" />
                            </div>
                            <span class="text-sm">Question Not Answered</span>
                        {/if}
                    </div>
                    
                    <Separator class="my-2" />
                    
                    <div class="flex flex-row items-center gap-2">
                        <div class="flex items-center bg-gray-200 rounded-full px-3 py-1">
                            <Smile class="h-5 w-5 mr-1" />
                            <span class="text-sm font-medium">{Math.round(selectedQuestion.satisfaction * 100)}% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
        <PdfView pdf={true} selectedQuestion={selectedQuestion} on:highlightComplete={handleHighlightComplete} />
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane>
        <Dashboard data={dashboardData} class="h-fit" on:questionSelected={handleQuestionSelected} />
      </Resizable.Pane>
    </Resizable.PaneGroup>
</main>

<style>
    .question-info {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    }
    
    .question {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 8px;
    }
    
    .answer {
        color: #444;
        margin-bottom: 8px;
    }
    
    .reference {
        font-size: 14px;
        color: #666;
    }
    
    .reference-label {
        font-weight: 500;
    }
    
    .reference-item {
        font-style: italic;
    }
    
    .status-indicators {
        min-width: 200px;
    }
</style>

