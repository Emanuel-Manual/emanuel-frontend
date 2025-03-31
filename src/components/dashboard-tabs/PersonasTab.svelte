<script>
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Separator } from "$lib/components/ui/separator";
  import { CircleAlert, CircleCheck, CircleHelp, Smile } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";

  // Create event dispatcher
  const dispatch = createEventDispatcher();

  // Function to handle question click
  function handleQuestionClick(persona, question) {
    dispatch('questionSelected', { persona, question });
  }

  // Accept data as a prop
  export let data;
</script>

<Card.Root class="">
  <Card.Content>
    <Accordion.Root class="w-full">
      {#each data.personas as persona, i}
      <Accordion.Item value={"item-" + i}>
        <Accordion.Trigger>
          <div class="flex items-start gap-4 text-left w-full pr-4">
            <Avatar.Root>
              <Avatar.Image src="https://randomuser.me/api/portraits/{persona.gender}/{i}.jpg" />
              <!-- derive initials from first and last name -->
              <Avatar.Fallback>
                {persona.name.split(' ')[0][0]}{persona.name.split(' ')[1] ? persona.name.split(' ')[1][0] : ''}
              </Avatar.Fallback>
            </Avatar.Root>
            <div class="grid gap-1">
              <p class="text-sm font-medium leading-none">{persona.name}</p>
              <p class="text-muted-foreground text-sm">{persona.age} Years | {persona.short_description} | {persona.current_setting}</p>
            </div>
            <div class="ml-auto font-medium bg-gray-200 rounded-full p-2 px-3">
              <div class="flex justify-center mx-1">
                <Smile class="h-4 w-4" />
                <p class="text-xs mx-1">{Math.round(persona.total_satisfaction * 100)}%</p>
                <CircleHelp class="ml-5 h-4 w-4" />
                <p class="text-xs mx-1">{persona.answered_questions} / {persona.total_questions}</p>
              </div>
            </div>
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <div class="w-full rounded bg-gray-100 p-2 mb-2">
            {persona.short_scenario}
          </div>
          {#if persona.questions && persona.questions.length}
            {#each persona.questions as question}
            <div class="w-full">
              <Separator />
              <div 
                class="flex flex-row justify-start items-center gap-2 hover:bg-gray-100 p-2 cursor-pointer" 
                on:click={() => handleQuestionClick(persona, question)}
                on:keydown={(e) => e.key === 'Enter' && handleQuestionClick(persona, question)}
                tabindex="0"
                role="button"
                aria-label="Select question: {question.question}"
              >
                <div class="flex flex-row items-center bg-gray-200 rounded-full w-fit">
                  {#if question.answered}
                    <div class="bg-green-200 rounded-full w-fit p-2">
                      <CircleCheck class="h-4 w-4" />
                    </div>
                  {:else}
                    <div class="bg-red-200 rounded-full w-fit p-2">
                      <CircleAlert class="h-4 w-4" />
                    </div>
                  {/if}
                  <div class="flex justify-center mx-1">
                    <Smile class="h-4 w-4" />
                    <p class="text-xs mx-1">{Math.round(question.satisfaction * 100)}%</p>
                  </div>
                </div>
                <div class="text-sm font-medium leading-none">
                  {question.question}
                </div>
              </div>
            </div>
            {/each}
          {/if}
        </Accordion.Content>
      </Accordion.Item>
      {/each}
    </Accordion.Root>
  </Card.Content>
</Card.Root>