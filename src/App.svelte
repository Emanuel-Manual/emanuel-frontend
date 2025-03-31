<script lang="ts">
    import "./app.css";
    import "./app.pcss";
    import Dashboard from "./components/Dashboard.svelte";
    import PdfView from "./components/PdfView.svelte";
    import * as Resizable from "./lib/components/ui/resizable";
    import { Separator } from "./lib/components/ui/separator";
    import { Progress } from "./lib/components/ui/progress";
    import { Button } from "./lib/components/ui/button";
    import { CircleCheck, CircleAlert, Smile, ChevronUp, ChevronDown, Upload, File as FileIcon } from "lucide-svelte";
    import { onMount } from "svelte";
    
    // Import the dashboard data
    import dashboardData from "./assets/dashboardData.json";
    
    // State for the selected question
    interface Question {
        question: string;
        answer_found?: string;
        answered: boolean;
        satisfaction: number;
        improvement_suggestions?: string[];
        comment?: string;
        manual_reference?: string[];
    }
    
    interface Persona {
        name: string;
        questions: Question[];
        [key: string]: any;
    }
    
    let selectedPersona: Persona | null = null;
    let selectedQuestion: Question | null = null;
    let highlightInfo: { found: boolean; element?: HTMLElement; position?: number } | null = null;
    let isMinimized = false;
    
    // State for PDF upload and loading
    let hasPdf = false;
    let isLoading = false;
    let loadingProgress = 0;
    let loadingMessage = "";
    let fileInput: HTMLInputElement;
    let pdfFile: globalThis.File | null = null;
    
    // Array of entertaining loading messages
    const loadingMessages = [
        "Scanning pages for hidden meanings...",
        "Analyzing technical jargon...",
        "Teaching AI to understand human confusion...",
        "Identifying potential improvement areas...",
        "Calculating user satisfaction probabilities...",
        "Decoding complex instructions...",
        "Finding answers to all possible questions...",
        "Converting manualese to plain English...",
        "Teaching robots to read like humans...",
        "Extracting knowledge from dense paragraphs...",
        "Measuring clarity on a scale of 1 to 'what?'...",
        "Detecting frustration-inducing instructions...",
    ];
    
    // Handle question selection
    function handleQuestionSelected(event: CustomEvent<{persona: Persona, question: Question}>) {
        selectedPersona = event.detail.persona;
        selectedQuestion = event.detail.question;
        console.log("Selected question:", selectedQuestion);
    }
    
    // Handle highlight complete event
    function handleHighlightComplete(event: CustomEvent<{found: boolean, element?: HTMLElement, position?: number}>) {
        highlightInfo = event.detail;
        console.log("Highlight complete:", highlightInfo);
    }
    
    // Toggle between minimized and maximized states
    function toggleMinimize() {
        isMinimized = !isMinimized;
    }
    
    // Handle file upload
    function handleFileUpload(event: Event) {
        const files = (event.target as HTMLInputElement).files || 
                     ((event as DragEvent).dataTransfer && (event as DragEvent).dataTransfer!.files);
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type === "application/pdf") {
                pdfFile = file;
                startLoading();
            } else {
                alert("Please upload a PDF file.");
            }
        }
    }
    
    // Handle drag and drop events
    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.dataTransfer!.dropEffect = "copy";
    }
    
    function handleDrop(event: DragEvent) {
        event.preventDefault();
        handleFileUpload(event);
    }
    
    // Simulate loading process
    function startLoading() {
        isLoading = true;
        loadingProgress = 0;
        let messageIndex = 0;
        loadingMessage = loadingMessages[messageIndex];
        
        const interval = setInterval(() => {
            loadingProgress += 100/13; // 13 seconds total as requested
            
            // Change message every ~3 seconds
            if (loadingProgress % 25 < 10) {
                messageIndex = (messageIndex + 1) % loadingMessages.length;
                loadingMessage = loadingMessages[messageIndex];
            }
            
            if (loadingProgress >= 100) {
                clearInterval(interval);
                isLoading = false;
                hasPdf = true;
            }
        }, 1000);
    }
    
    // Trigger file input click
    function openFileDialog() {
        fileInput.click();
    }
</script>

<main class="relative h-screen">
    <img src="logo.png" alt="" class="absolute z-50 top-0 left-0 w-40 p-4" />
    
    {#if !hasPdf}
        <!-- Empty state with file upload -->
        <div 
            class="h-screen w-full bg-gray-200 flex flex-col items-center justify-center"
            on:dragover={handleDragOver}
            on:drop={handleDrop}
        >
            <div class="text-center max-w-md mx-auto p-6">
                <FileIcon class="h-24 w-24 mx-auto mb-4 text-gray-400" />
                <h2 class="text-2xl font-semibold mb-2 text-gray-700">No PDF Manual Loaded</h2>
                <p class="text-gray-600 mb-6">Upload or drag a PDF manual to analyze it and get insights.</p>
                
                <input 
                    type="file" 
                    accept="application/pdf" 
                    class="hidden" 
                    bind:this={fileInput} 
                    on:change={handleFileUpload}
                />
                
                <Button class="w-full flex items-center justify-center" on:click={openFileDialog}>
                    <Upload class="mr-2 h-4 w-4" />
                    Upload PDF Manual
                </Button>
                
                <p class="mt-4 text-sm text-gray-500">
                    Drag and drop a PDF file anywhere on this screen
                </p>
            </div>
        </div>
    {:else}
        <!-- Main app with resizable panes -->
        <Resizable.PaneGroup direction="horizontal">
          <Resizable.Pane class="relative h-full overflow-hidden">
            {#if selectedQuestion}
            <div class="absolute bottom-0 z-50 w-full p-4">
              <div class={`items-center gap-4 p-10 bg-white rounded-lg shadow-lg border-2 question-info ${isMinimized ? 'minimized' : 'maximized'}`}>
                <button class="absolute right-2 transform top-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" on:click={toggleMinimize}>
                  {#if isMinimized}
                    <ChevronUp class="h-5 w-5" />
                  {:else}
                    <ChevronDown class="h-5 w-5" />
                  {/if}
                </button>
                
                <div class="flex flex-row">
                    <div class="flex-1">
                        <div class="question">{selectedQuestion.question}</div>
                        {#if selectedQuestion.answer_found}
                        <div class="answer">Answer: {selectedQuestion.answer_found}</div>
                        {/if}
                        {#if selectedQuestion.comment}
                        <div class="comment-box">
                            <p class="comment-text">"<em><strong>{selectedQuestion.comment}</strong></em>"</p>
                        </div>
                        {/if}
                    </div>
                    
                    <div class="status-indicators p-5">
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
                {#if selectedQuestion.improvement_suggestions && selectedQuestion.improvement_suggestions.length}
                        <div class="improvements-box mt-4">
                            <h4 class="improvements-title">Improvement Suggestions:</h4>
                            <ul class="improvements-list">
                                {#each selectedQuestion.improvement_suggestions as suggestion}
                                    <li class="improvement-item">{suggestion}</li>
                                {/each}
                            </ul>
                        </div>
                {/if}
                </div>
            </div>
            {/if}
            <PdfView pdf={true} search="" selectedQuestion={selectedQuestion} on:highlightComplete={handleHighlightComplete} />
          </Resizable.Pane>
          <Resizable.Handle />
          <Resizable.Pane>
            <Dashboard data={dashboardData} on:questionSelected={handleQuestionSelected} />
          </Resizable.Pane>
        </Resizable.PaneGroup>
    {/if}
    
    <!-- Loading overlay -->
    {#if isLoading}
        <div class="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center">
            <div class="max-w-md w-full bg-white p-8 rounded-lg">
                <h2 class="text-xl font-semibold mb-4 text-center">Analyzing PDF Manual</h2>
                
                <Progress value={loadingProgress} class="h-2 mb-6" />
                
                <p class="text-center text-gray-600 italic">{loadingMessage}</p>
            </div>
        </div>
    {/if}
</main>

<style>
    .question-info {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: max-height 0.3s ease;
        position: relative;
        overflow-y: auto;
    }
    
    .question-info.minimized {
        max-height: 10vh;
        overflow-y: auto;
    }
    
    .question-info.maximized {
        max-height: 60vh;
        overflow-y: auto;
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
    
    .comment-box {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        margin-top: 10px;
    }
    
    .comment-text {
        color: #444;
        margin: 0;
    }
    
    .improvements-box {
        background-color: #e6f7ff;
        padding: 10px;
        border-radius: 4px;
        max-height: 20vh;
        overflow-y: auto;
        border-left: 4px solid #1890ff;
    }
    
    .improvements-title {
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 8px;
        color: #1890ff;
    }
    
    .improvements-list {
        list-style-type: disc;
        padding-left: 20px;
        margin: 0;
    }
    
    .improvement-item {
        margin-bottom: 4px;
    }
</style>

