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

  export let data = {
    general: {
      title: "DigiFunk 1",
      subtitle: "2,4 GHz Funkübertragungssystem",
      languages: "Deutsch, Englisch",
      pages: "356",
      score: 89,
      tests: 256,
      tests_passed: 134,
    },
    personas: [
      {
        name: "Beate Bumsbaum",
        age: 55,
        short_description: "Non Technical",
        current_setting: "At home",
        short_scenario:
          "Beate is a 55-year-old non-technical user who uses the DigiFunk 1 system at home. She is not very tech-savvy and needs a simple and intuitive interface to operate the system. Beate is looking for a user-friendly manual that can help her understand the basic functions of the system without overwhelming her with technical jargon.",
        answered_questions: 55,
        total_questions: 77,
        total_satisfaction: 0.77,
        questions: [
          {
            question: "How do I turn on the system?",
            answer_found: "Press the power button located on the front panel.",
            manual_reference: [
              "The power button is located on the front panel of the device.",
            ],
            answered: true,
            satisfaction: 0.77,
          },
          {
            question: "How do I adjust the volume?",
            answer_found:
              "Use the volume knob on the right side of the device.",
            manual_reference: [
              "The volume knob is located on the right side of the device.",
            ],
            answered: false,
            satisfaction: 0.22,
          },

          {
            question: "How do I reset the system?",
            answer_found: "Press and hold the reset button for 5 seconds.",
            manual_reference: [
              "The reset button is located on the back of the device.",
            ],
            answered: false,
            satisfaction: 0.5,
          },
          {
            question: "How do I connect to Wi-Fi?",
            answer_found: "Go to settings and select Wi-Fi.",
            manual_reference: [
              "To connect to Wi-Fi, go to the settings menu and select Wi-Fi.",
            ],
            answered: false,
            satisfaction: 0.5,
          },
          {
            question: "How do I update the firmware?",
            answer_found:
              "Connect to the internet and follow the instructions.",
            manual_reference: [
              "To update the firmware, connect to the internet and follow the instructions in the settings menu.",
            ],
            answered: false,
            satisfaction: 0.5,
          },
        ],
      },
    ],
  };
</script>

<main>
  <div class=" min-h-screen bg-gray-100 p-4">
    <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
      >
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
        <Tabs.Content value="personas">
          <Card.Root class="">
            <!-- <Card.Header>
          <Card.Title>Personas</Card.Title>
          <Card.Description>All personas.</Card.Description>
        </Card.Header> -->
            <Card.Content>
              <Accordion.Root class="w-full">
                <Accordion.Item value="item-1">
                  <Accordion.Trigger>
                    <div class="flex items-start gap-4 text-left w-full pr-4">
                      <Avatar.Root>
                        <Avatar.Image
                          src="https://thispersondoesnotexist.com"
                        />
                        <Avatar.Fallback>BB</Avatar.Fallback>
                      </Avatar.Root>
                      <div class="grid gap-1">
                        <p class="text-sm font-medium leading-none">
                          Beate Bumsbaum
                        </p>
                        <p class="text-muted-foreground text-sm">
                          55 Years | Non Technical | At home
                        </p>
                      </div>
                      <div
                        class="ml-auto font-medium bg-gray-200 rounded-full p-2 px-3"
                      >
                      <div class="flex justify-center mx-1">
                        <Smile class="h-4 w-4" />
                        <p class="text-xs mx-1">22%</p>
                   
                        <CircleHelp class="ml-5 h-4 w-4" />
                        <p class="text-xs mx-1">55 / 77</p>
                      </div>
                      
                      </div>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content>
                    <div class="w-full rounded bg-gray-100 p-2 mb-2">
                      Beate is a 55-year-old non-technical user who uses the DigiFunk 1 system at home. She is not very tech-savvy and needs a simple and intuitive interface to operate the system. Beate is looking for a user-friendly manual that can help her understand the basic functions of the system without overwhelming her with technical jargon.

                    </div>
                    <div class="w-full">
                      <Separator />
                      <div
                        class="flex flex-row justify-start items-center gap-2 hover:bg-gray-100 p-2"
                      >
                        <div
                          class="flex flex-row items-center bg-gray-200 rounded-full w-fit"
                        >
                          <div class="bg-green-200 rounded-full w-fit p-2">
                            <CircleCheck class="h-4 w-4 white" />
                          </div>
                          <div class="flex justify-center mx-1">
                            <Smile class="h-4 w-4" />
                            <p class="text-xs mx-1">77%</p>
                          </div>
                        </div>
                        <div class="text-sm font-medium leading-none">
                          Find volume settings in the menu bar
                        </div>
                      </div>
                    </div>
                    <div class="w-full">
                      <Separator />
                      <div
                        class="flex flex-row justify-start items-center gap-2 hover:bg-gray-100 p-2"
                      >
                        <div
                          class="flex flex-row items-center bg-gray-200 rounded-full w-fit"
                        >
                          <div class="bg-red-200 rounded-full w-fit p-2">
                            <CircleAlert class="h-4 w-4" />
                          </div>
                          <div class="flex justify-center mx-1">
                            <Smile class="h-4 w-4" />
                            <p class="text-xs mx-1">22%</p>
                          </div>
                        </div>

                        <div class="text-sm font-medium leading-none">
                          Find volume settings in the menu bar
                        </div>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                  <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes. It comes with default styles that matches the other
                    components' aesthetic.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-3">
                  <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </Card.Content>
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
