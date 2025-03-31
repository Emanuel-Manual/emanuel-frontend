<script>
  // Dashboard component logic goes here
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs";
  import { Button } from "$lib/components/ui/button";
  import { Progress } from "$lib/components/ui/progress";
  import { BadgeInfo, Cpu, FilePen, PenLine, Users } from "lucide-svelte";
</script>

<main>
  <div
    class=" min-h-screen bg-gray-100 p-4"
  >
  <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <Card.Root
      class="sm:col-span-2"
      data-x-chunk-name="dashboard-05-chunk-0"
      data-x-chunk-description="A card for an orders dashboard with a description and a button to create a new order."
    >
      <Card.Header class="pb-3">
        <Card.Title>DigiFunk 1</Card.Title>
        <Card.Description class="max-w-lg text-balance leading-relaxed">
          2,4 GHz Funkübertragungssystem
          <br />
          Deutsch, Englisch
          <br />
          356 pages
          
          
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button>
          <FilePen class="mr-2 h-4 w-4" />
          Upload different Manual
        </Button>
      </Card.Footer>
    </Card.Root>
    <Card.Root
      data-x-chunk-name="dashboard-05-chunk-1"
      data-x-chunk-description="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar."
    >
      <Card.Header class="pb-2">
        <Card.Description>Score</Card.Description>
        <Card.Title class="text-4xl">89/100</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="text-muted-foreground text-xs">Needs improvement</div>
      </Card.Content>
      <Card.Footer>
        <Progress value={25} aria-label="25% increase" />
      </Card.Footer>
    </Card.Root>
    <Card.Root
      data-x-chunk-name="dashboard-05-chunk-2"
      data-x-chunk-description="A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar."
    >
      <Card.Header class="pb-2">
        <Card.Description>Tests</Card.Description>
        <Card.Title class="text-3xl">134/250</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="text-muted-foreground text-xs">53% of tests passed</div>
      </Card.Content>
      <Card.Footer>
        <Progress value={12} aria-label="12% increase" />
      </Card.Footer>
    </Card.Root>
  </div>
  <Tabs.Root value="personas">
    <div class="flex items-center">
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
    <Tabs.Content value="personas">
      <Card.Root>
        <Card.Header class="p-4">
          <Card.Title>Personas</Card.Title>
          <Card.Description>All personas.</Card.Description>
        </Card.Header>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="technical">
      <Card.Root>
        <Card.Header class="p-4">
          <Card.Title>Technical</Card.Title>
          <Card.Description>All technical details.</Card.Description>
        </Card.Header>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="style">
      <Card.Root>
        <Card.Header class="p-4">
          <Card.Title>Writing Style</Card.Title>
          <Card.Description>All writing style guidelines.</Card.Description>
        </Card.Header>
      </Card.Root>
    </Tabs.Content>
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
