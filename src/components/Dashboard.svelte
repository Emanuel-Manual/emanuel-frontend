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
          "Beate is a 55-year-old non-technical user who uses the DigiFunk 1 system at home. She is not very tech-savvy and needs a simple and intuitive interface.",
        answered_questions: 55,
        total_questions: 77,
        total_satisfaction: 0.77,
        questions: [
          {
            question: "How do I turn on the system?",
            answer_found: "Press the power button on the front panel.",
            manual_reference: ["Front panel info"],
            answered: true,
            satisfaction: 0.77,
          },
          {
            question: "How do I adjust the volume?",
            answer_found: "Use the volume knob.",
            manual_reference: ["Volume knob details"],
            answered: false,
            satisfaction: 0.22,
          },
          {
            question: "How do I reset the system?",
            answer_found: "Press and hold the reset button for 5 seconds.",
            manual_reference: ["Reset button info"],
            answered: false,
            satisfaction: 0.5,
          },
          {
            question: "How do I connect to Wi-Fi?",
            answer_found: "Go to settings and select Wi-Fi.",
            manual_reference: ["Wi-Fi settings"],
            answered: false,
            satisfaction: 0.5,
          },
          {
            question: "How do I update the firmware?",
            answer_found: "Connect to the internet and follow instructions.",
            manual_reference: ["Firmware update guide"],
            answered: false,
            satisfaction: 0.5,
          },
          {
            question: "How do I check system status?",
            answer_found: "Navigate to the status tab.",
            manual_reference: ["Status tab"],
            answered: true,
            satisfaction: 0.80,
          },
          {
            question: "How do I troubleshoot errors?",
            answer_found: "Refer to the troubleshooting guide.",
            manual_reference: ["Troubleshooting guide"],
            answered: false,
            satisfaction: 0.60,
          },
          {
            question: "How do I configure network settings?",
            answer_found: "Access the network settings via the system menu.",
            manual_reference: ["Network settings"],
            answered: false,
            satisfaction: 0.50,
          },
          {
            question: "How do I view log files?",
            answer_found: "Logs can be viewed in the admin panel.",
            manual_reference: ["Admin panel logs"],
            answered: true,
            satisfaction: 0.70,
          },
          {
            question: " How do I exit the application?",
            answer_found: "Click on the exit button.",
            manual_reference: ["Exit instructions"],
            answered: false,
            satisfaction: 0.40,
          },
        ],
      },
      {
        name: "Alexandra Smith",
        age: 30,
        short_description: "Technical Expert",
        current_setting: "Office",
        short_scenario:
          "Alexandra is a skilled technical expert working in an office environment, focused on optimizing system performance.",
        answered_questions: 40,
        total_questions: 50,
        total_satisfaction: 0.80,
        questions: [
          {
            question: "How do I initialize the server?",
            answer_found: "Follow the startup protocol.",
            manual_reference: ["Startup protocol"],
            answered: true,
            satisfaction: 0.85,
          },
          {
            question: "How do I access the dashboard?",
            answer_found: "Login and navigate to the dashboard.",
            manual_reference: ["Dashboard login"],
            answered: true,
            satisfaction: 0.90,
          },
          {
            question: "How do I update API endpoints?",
            answer_found: "Consult the API documentation.",
            manual_reference: ["API docs"],
            answered: false,
            satisfaction: 0.70,
          },
          {
            question: "How do I monitor system performance?",
            answer_found: "Use the performance monitoring tool.",
            manual_reference: ["Monitoring tool"],
            answered: true,
            satisfaction: 0.80,
          },
          {
            question: "How do I reset credentials?",
            answer_found: "Follow the reset instructions.",
            manual_reference: ["Credential reset guide"],
            answered: false,
            satisfaction: 0.60,
          },
          {
            question: "How do I backup system data?",
            answer_found: "Use the backup utility.",
            manual_reference: ["Backup instructions"],
            answered: true,
            satisfaction: 0.85,
          },
          {
            question: "How do I restore from backup?",
            answer_found: "Follow the restore procedure.",
            manual_reference: ["Restore procedure"],
            answered: false,
            satisfaction: 0.65,
          },
          {
            question: "How do I configure the firewall?",
            answer_found: "Access firewall settings.",
            manual_reference: ["Firewall configuration"],
            answered: true,
            satisfaction: 0.75,
          },
          {
            question: "How do I execute a system update?",
            answer_found: "Run the system update command.",
            manual_reference: ["System update guide"],
            answered: false,
            satisfaction: 0.70,
          },
          {
            question: " How do I shut down the server?",
            answer_found: "Initiate the shutdown sequence.",
            manual_reference: ["Shutdown procedure"],
            answered: true,
            satisfaction: 0.80,
          },
        ],
      },
      {
        name: "John Doe",
        age: 40,
        short_description: "IT Specialist",
        current_setting: "Data Center",
        short_scenario:
          "John manages complex IT networks and ensures smooth operation of all systems.",
        answered_questions: 45,
        total_questions: 60,
        total_satisfaction: 0.75,
        questions: [
          {
            question: "How do I monitor network traffic?",
            answer_found: "Use the network monitor tool.",
            manual_reference: ["Network monitor"],
            answered: true,
            satisfaction: 0.80,
          },
          {
            question: "How do I restart routers?",
            answer_found: "Restart via the admin panel.",
            manual_reference: ["Admin panel"],
            answered: false,
            satisfaction: 0.65,
          },
          {
            question: "How do I configure network switches?",
            answer_found: "Setup using the CLI guide.",
            manual_reference: ["CLI guide"],
            answered: true,
            satisfaction: 0.75,
          },
          {
            question: "How do I update device firmware?",
            answer_found: "Use the firmware update tool.",
            manual_reference: ["Firmware update tool"],
            answered: false,
            satisfaction: 0.70,
          },
          {
            question: "How do I manage IP configurations?",
            answer_found: "Configure via DHCP settings.",
            manual_reference: ["DHCP guide"],
            answered: true,
            satisfaction: 0.85,
          },
          {
            question: "How do I access the control panel?",
            answer_found: "Login to the control panel.",
            manual_reference: ["Control panel access"],
            answered: false,
            satisfaction: 0.60,
          },
          {
            question: "How do I schedule maintenance?",
            answer_found: "Use the scheduling tool.",
            manual_reference: ["Maintenance scheduler"],
            answered: true,
            satisfaction: 0.80,
          },
          {
            question: "How do I view system logs?",
            answer_found: "Access logs via the admin section.",
            manual_reference: ["Admin logs"],
            answered: false,
            satisfaction: 0.70,
          },
          {
            question: "How do I set up error alerts?",
            answer_found: "Configure alerts in settings.",
            manual_reference: ["Alert settings"],
            answered: true,
            satisfaction: 0.75,
          },
          {
            question: " How do I troubleshoot outages?",
            answer_found: "Follow the outage troubleshooting guide.",
            manual_reference: ["Outage guide"],
            answered: false,
            satisfaction: 0.65,
          },
        ],
      },
      {
        name: "Maria Garcia",
        age: 35,
        short_description: "UX Designer",
        current_setting: "Remote",
        short_scenario:
          "Maria designs intuitive interfaces and ensures the system is user friendly.",
        answered_questions: 50,
        total_questions: 70,
        total_satisfaction: 0.85,
        questions: [
          {
            question: "How do I activate design mode?",
            answer_found: "Click on the design toggle.",
            manual_reference: ["Design toggle info"],
            answered: true,
            satisfaction: 0.90,
          },
          {
            question: "How do I preview layouts?",
            answer_found: "Use the preview button.",
            manual_reference: ["Preview instructions"],
            answered: true,
            satisfaction: 0.85,
          },
          {
            question: "How do I export prototypes?",
            answer_found: "Select export from the menu.",
            manual_reference: ["Export options"],
            answered: false,
            satisfaction: 0.80,
          },
          {
            question: "How do I collaborate with developers?",
            answer_found: "Utilize collaboration tools.",
            manual_reference: ["Collaboration guide"],
            answered: true,
            satisfaction: 0.88,
          },
          {
            question: "How do I use design templates?",
            answer_found: "Choose a template from the library.",
            manual_reference: ["Template library"],
            answered: true,
            satisfaction: 0.87,
          },
          {
            question: "How do I save my design changes?",
            answer_found: "Click the save icon.",
            manual_reference: ["Save instructions"],
            answered: false,
            satisfaction: 0.80,
          },
          {
            question: "How do I zoom in/out on designs?",
            answer_found: "Use the zoom controls.",
            manual_reference: ["Zoom control info"],
            answered: true,
            satisfaction: 0.85,
          },
          {
            question: "How do I reset design layout?",
            answer_found: "Click on reset to default.",
            manual_reference: ["Reset instructions"],
            answered: false,
            satisfaction: 0.75,
          },
          {
            question: "How do I add annotations?",
            answer_found: "Use the annotation feature.",
            manual_reference: ["Annotation tool"],
            answered: true,
            satisfaction: 0.90,
          },
          {
            question: " How do I share my designs?",
            answer_found: "Click on the share option.",
            manual_reference: ["Share settings"],
            answered: false,
            satisfaction: 0.80,
          },
        ],
      },
      {
        name: "Liam Nguyen",
        age: 28,
        short_description: "System Analyst",
        current_setting: "Head Office",
        short_scenario:
          "Liam analyzes business needs and refines system processes for optimal performance.",
        answered_questions: 30,
        total_questions: 40,
        total_satisfaction: 0.90,
        questions: [
          {
            question: "How do I analyze system performance?",
            answer_found: "Utilize the analysis tools provided.",
            manual_reference: ["Analysis tool info"],
            answered: true,
            satisfaction: 0.92,
          },
          {
            question: "How do I generate performance reports?",
            answer_found: "Run the report generator.",
            manual_reference: ["Reporting tool"],
            answered: false,
            satisfaction: 0.85,
          },
          {
            question: "How do I integrate with external APIs?",
            answer_found: "Follow the API integration steps.",
            manual_reference: ["API integration guide"],
            answered: true,
            satisfaction: 0.90,
          },
          {
            question: "How do I optimize system processes?",
            answer_found: "Adjust parameters based on usage metrics.",
            manual_reference: ["Optimization guide"],
            answered: false,
            satisfaction: 0.88,
          },
          {
            question: "How do I monitor resource usage?",
            answer_found: "View resources on the analytics dashboard.",
            manual_reference: ["Analytics dashboard"],
            answered: true,
            satisfaction: 0.91,
          },
          {
            question: "How do I configure system alerts?",
            answer_found: "Access alert configuration settings.",
            manual_reference: ["Alert configuration"],
            answered: false,
            satisfaction: 0.86,
          },
          {
            question: "How do I audit system logs?",
            answer_found: "Use the log management tool.",
            manual_reference: ["Log management"],
            answered: true,
            satisfaction: 0.89,
          },
          {
            question: "How do I update system modules?",
            answer_found: "Initiate the module update process.",
            manual_reference: ["Module update guide"],
            answered: true,
            satisfaction: 0.87,
          },
          {
            question: "How do I run diagnostics?",
            answer_found: "Select the diagnostics option from the menu.",
            manual_reference: ["Diagnostics info"],
            answered: false,
            satisfaction: 0.85,
          },
          {
            question: " How do I export analysis results?",
            answer_found: "Export results using the export function.",
            manual_reference: ["Export instructions"],
            answered: true,
            satisfaction: 0.90,
          },
        ],
      },
    ],
  };
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
