<script>
  // Dashboard component logic goes here
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import { Button } from "$lib/components/ui/button";
  import { Progress } from "$lib/components/ui/progress";
  import * as Accordion from "$lib/components/ui/accordion";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Separator } from "$lib/components/ui/separator";

  import {
    BadgeInfo,
    CircleAlert,
    CircleCheck,
    CircleHelp,
    Cpu,
    FilePen,
    Languages,
    PenLine,
    Smile,
    Users,
  } from "lucide-svelte";

  // Accept data as a prop
  export let data;
</script>

<main>
  <div class=" min-h-screen bg-gray-100 p-4">
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <!-- General Overview Card -->
        <Card.Root class="sm:col-span-2" data-x-chunk-name="dashboard-05-chunk-0" data-x-chunk-description="A card for an orders dashboard with a description and a button to create a new order.">
          <Card.Header class="pb-3">
            <Card.Title>{data.general.title}</Card.Title>
            <Card.Description class="max-w-lg text-balance leading-relaxed">
              {data.general.subtitle}
              <br />
              {data.general.languages}
              <br />
              {data.general.pages} pages
            </Card.Description>
          </Card.Header>
          <Card.Footer>
            <Button>
              <FilePen class="mr-2 h-4 w-4" />
              Upload different Manual
            </Button>
          </Card.Footer>
        </Card.Root>

        <!-- Score Card -->
        <Card.Root data-x-chunk-name="dashboard-05-chunk-1" data-x-chunk-description="A stats card showing score.">
          <Card.Header class="pb-2">
            <Card.Description>Score</Card.Description>
            <Card.Title class="text-4xl">{data.general.score}/100</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-muted-foreground text-xs">Needs improvement</div>
          </Card.Content>
          <Card.Footer>
            <Progress value={25} aria-label="25% increase" />
          </Card.Footer>
        </Card.Root>

        <!-- Tests Card -->
        <Card.Root data-x-chunk-name="dashboard-05-chunk-2" data-x-chunk-description="A stats card showing tests.">
          <Card.Header class="pb-2">
            <Card.Description>Tests</Card.Description>
            <Card.Title class="text-3xl">{data.general.tests_passed}/{data.general.tests}</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-muted-foreground text-xs">53% of tests passed</div>
          </Card.Content>
          <Card.Footer>
            <Progress value={12} aria-label="12% increase" />
          </Card.Footer>
        </Card.Root>
      </div>

      <!-- Tabs -->
      <Tabs.Root value="personas">
        <div class="flex">
          <Tabs.List>
            <Tabs.Trigger class="px-4" value="personas">
              <Users class="mr-2 h-4 w-4 my-1" />
              Personas
            </Tabs.Trigger>
            <Tabs.Trigger class="px-4" value="technical">
              <Cpu class="mr-2 h-4 w-4 my-1" />
              Technical
            </Tabs.Trigger>
            <Tabs.Trigger class="px-4" value="style">
              <PenLine class="mr-2 h-4 w-4 my-1" />
              Writing Style
            </Tabs.Trigger>
            <Tabs.Trigger class="px-4" value="tips">
              <BadgeInfo class="mr-2 h-4 w-4 my-1" />
              Tips
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <!-- Personas Tab -->
        <Tabs.Content value="personas">
          <Card.Root class="">
            <Card.Content>
              <Accordion.Root class="w-full">
                {#each data.personas as persona, i}
                <Accordion.Item value={"item-" + i}>
                  <Accordion.Trigger>
                    <div class="flex items-start gap-4 text-left w-full pr-4">
                      <Avatar.Root>
                        <Avatar.Image src="https://thispersondoesnotexist.com?random={i}" />
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
                        <div class="flex flex-row justify-start items-center gap-2 hover:bg-gray-100 p-2">
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
        </Tabs.Content>

        <!-- Technical Tab -->
        <Tabs.Content value="technical">
          <Card.Root>
            <Card.Header class="p-4">
              <Card.Title>Technical</Card.Title>
              <Card.Description>All technical details.</Card.Description>
            </Card.Header>
          </Card.Root>
        </Tabs.Content>

        <!-- Writing Style Tab -->
        <Tabs.Content value="style">
          <Card.Root>
            <Card.Header class="p-4">
              <Card.Title>Writing Style</Card.Title>
              <Card.Description>All writing style guidelines.</Card.Description>
            </Card.Header>
          </Card.Root>
        </Tabs.Content>

        <!-- Tips Tab -->
        <Tabs.Content value="tips">
          <Card.Root>
            <Card.Header class="p-4">
              <Card.Title>Tips</Card.Title>
              <Card.Description>All tips and tricks.</Card.Description>
            </Card.Header>
          </Card.Root>
        </Tabs.Content>

      </Tabs.Root>
    </div>
  </div>
</main>

<style>
  /* Dashboard component styles go here */
</style>
