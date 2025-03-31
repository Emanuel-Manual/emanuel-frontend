<script>
  // Dashboard component logic goes here
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import { Button } from "$lib/components/ui/button";
  import { Progress } from "$lib/components/ui/progress";
  import { createEventDispatcher } from "svelte";

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
    Sun,
    ShieldCheck
  } from "lucide-svelte";

  // Import tab components
  import PersonasTab from "./dashboard-tabs/PersonasTab.svelte";
  import TechnicalTab from "./dashboard-tabs/TechnicalTab.svelte";
  import StyleTab from "./dashboard-tabs/StyleTab.svelte";
  import AccessibilityTab from "./dashboard-tabs/AccessibilityTab.svelte";
  import ComplianceTab from "./dashboard-tabs/ComplianceTab.svelte";
  import SuggestionsTab from "./dashboard-tabs/SuggestionsTab.svelte";

  // Create event dispatcher
  const dispatch = createEventDispatcher();

  // Forward events from child components
  function forwardQuestionSelected(event) {
    dispatch('questionSelected', event.detail);
  }

  // Accept data as a prop
  export let data;
</script>

<main>
  <div class="h-screen overflow-scroll bg-gray-100 p-4">
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
            <Progress value={data.general.score} aria-label={`${data.general.score} increase`}/>
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
            <Progress value={100 * data.general.tests_passed / data.general.tests} aria-label={`${100 * data.general.tests_passed / data.general.tests} increase`}/>
          </Card.Footer>
        </Card.Root>
      </div>

      <!-- Tabs -->
      <Tabs.Root value="personas">
        <div class="flex">
          <Tabs.List>
            <Tabs.Trigger class="px-2" value="personas">
              <Users class="mr-2 h-4 w-4 my-1" />
              Personas
            </Tabs.Trigger>
            <Tabs.Trigger class="px-2" value="technical">
              <Cpu class="mr-2 h-4 w-4 my-1" />
              Technical
            </Tabs.Trigger>
            <Tabs.Trigger class="px-2" value="style">
              <PenLine class="mr-2 h-4 w-4 my-1" />
              Style
            </Tabs.Trigger>
            <Tabs.Trigger class="px-2" value="accessibility">
              <Sun class="mr-2 h-4 w-4 my-1" />
              Accessibility
            </Tabs.Trigger>
            <Tabs.Trigger class="px-2" value="compliance">
              <ShieldCheck class="mr-2 h-4 w-4 my-1" />
              Compliance
            </Tabs.Trigger>
            <Tabs.Trigger class="px-2" value="suggestions">
              <BadgeInfo class="mr-2 h-4 w-4 my-1" />
              Suggestions
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <!-- Personas Tab -->
        <Tabs.Content value="personas">
          <PersonasTab data={data} on:questionSelected={forwardQuestionSelected} />
        </Tabs.Content>

        <!-- Technical Tab -->
        <Tabs.Content value="technical">
          <TechnicalTab />
        </Tabs.Content>

        <!-- Writing Style Tab -->
        <Tabs.Content value="style">
          <StyleTab />
        </Tabs.Content>

        <!-- Accessibility Tab -->
        <Tabs.Content value="accessibility">
          <AccessibilityTab />
        </Tabs.Content>

        <!-- Compliance Tab -->
        <Tabs.Content value="compliance">
          <ComplianceTab />
        </Tabs.Content>

        <!-- Suggestions Tab -->
        <Tabs.Content value="suggestions">
          <SuggestionsTab data={data} on:questionSelected={forwardQuestionSelected} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</main>

<style>
  /* Dashboard component styles go here */
</style>
