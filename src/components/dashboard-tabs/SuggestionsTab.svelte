<script>
  import * as Card from "$lib/components/ui/card";
  import { Separator } from "$lib/components/ui/separator";
  import { createEventDispatcher } from "svelte";

  // Create event dispatcher
  const dispatch = createEventDispatcher();

  // Accept data as a prop
  export let data;

  // Function to handle question click
  function handleQuestionClick(persona, question) {
    dispatch('questionSelected', { persona, question });
  }

  // Function to get all suggestions from all personas and questions
  function getAllSuggestions() {
    const allSuggestions = [];
    
    for (const persona of data.personas) {
      for (const question of persona.questions) {
        if (question.improvement_suggestions) {
          for (const suggestion of question.improvement_suggestions) {
            allSuggestions.push({
              suggestion,
              persona,
              question
            });
          }
        }
      }
    }
    
    return allSuggestions;
  }
</script>

<Card.Root>
  <Card.Header class="p-4">
    <Card.Title>Suggestions</Card.Title>
    <Card.Description>All suggestions for manual improvement.</Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
      {#each getAllSuggestions() as suggestionItem}
        <div class="w-full">
          <div 
            class="flex flex-row justify-start items-center gap-2 hover:bg-gray-100 p-2 cursor-pointer" 
            on:click={() => handleQuestionClick(suggestionItem.persona, suggestionItem.question)}
            on:keydown={(e) => e.key === 'Enter' && handleQuestionClick(suggestionItem.persona, suggestionItem.question)}
            tabindex="0"
            role="button"
            aria-label="Select suggestion: {suggestionItem.suggestion}"
          >
            <div class="text-sm font-medium leading-none">
              {suggestionItem.suggestion}
            </div>
            <div class="ml-auto text-xs text-muted-foreground">
              {suggestionItem.persona.name} - {suggestionItem.question.question.length > 40 ? suggestionItem.question.question.substring(0, 40) + '...' : suggestionItem.question.question}
            </div>
          </div>
          <Separator />
        </div>
      {/each}
    </div>
  </Card.Content>
</Card.Root>