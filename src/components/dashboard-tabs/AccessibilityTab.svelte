<script>
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Progress } from "$lib/components/ui/progress";
  import { Separator } from "$lib/components/ui/separator";
  import { AlertTriangle, CheckCircle, ExternalLink, FileText, Info } from "lucide-svelte";
</script>

<Card.Root>
  <Card.Header class="p-4">
    <Card.Title>Accessibility</Card.Title>
    <Card.Description>Analysis of accessibility features and compliance in the satellite receiver manual.</Card.Description>
  </Card.Header>
  <Card.Content class="p-4">
    <div class="grid gap-6">
      <!-- Overall Accessibility Score -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-medium mb-2">Overall Accessibility Score</h3>
        <div class="flex items-center gap-2 mb-2">
          <Progress value={68} class="flex-1" />
          <span class="font-bold">68%</span>
        </div>
        <p class="text-sm text-gray-600">The manual needs improvements in several key accessibility areas.</p>
      </div>

      <!-- Key Findings -->
      <div>
        <h3 class="text-lg font-medium mb-3">Key Findings</h3>
        <div class="grid gap-3">
          <div class="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-medium">Low Color Contrast</h4>
              <p class="text-sm text-gray-700">Many diagrams use color combinations that don't meet WCAG 2.1 AA standards for contrast ratio (4.5:1).</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
            <AlertTriangle class="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-medium">Complex Instructions</h4>
              <p class="text-sm text-gray-700">Setup instructions use technical jargon without adequate explanations, making them difficult to follow for users with cognitive limitations.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-medium">Clear Headings Structure</h4>
              <p class="text-sm text-gray-700">The manual uses consistent heading levels and clear section organization, which aids screen reader navigation.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Assessment -->
      <div>
        <h3 class="text-lg font-medium mb-3">Detailed Assessment</h3>
        <Accordion.Root class="w-full" multiple>
          <Accordion.Item value="visual-accessibility">
            <Accordion.Trigger>
              Visual Accessibility
              <div class="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                Poor
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual's visual elements present significant barriers:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>Text size in diagrams is consistently below 12pt, making it difficult to read</li>
                  <li>Remote control button labels use low contrast gray-on-black</li>
                  <li>Connection diagrams rely solely on color to differentiate ports</li>
                  <li>No alt-text equivalents for important setup images</li>
                </ul>
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>56% of visual elements fail accessibility standards</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="cognitive-accessibility">
            <Accordion.Trigger>
              Cognitive Accessibility
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">Several issues impact cognitive accessibility:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>Complex setup procedures exceed 15 steps without visual aids</li>
                  <li>Technical terms like "LNB," "DiSEqC," and "PID" used without explanation</li>
                  <li>Menu navigation sequences lack visual references</li>
                  <li>Troubleshooting section uses advanced terminology without simpler alternatives</li>
                </ul>
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>Readability analysis: Requires college-level reading (Flesch-Kincaid Grade Level: 13.2)</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="physical-accessibility">
            <Accordion.Trigger>
              Physical Accessibility
              <div class="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Good
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual addresses physical accessibility well:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>Clear instructions for one-handed operation of the remote</li>
                  <li>Voice command options properly documented</li>
                  <li>Alternative methods provided for most functions</li>
                  <li>Button size and spacing on remote adequately described</li>
                </ul>
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>82% compliance with physical accessibility guidelines</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <!-- Recommendations -->
      <div>
        <h3 class="text-lg font-medium mb-3">Recommendations</h3>
        <div class="grid gap-3">
          <div class="border border-gray-200 rounded-lg p-3">
            <h4 class="font-medium flex items-center gap-2">
              <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
              Improve Visual Content
            </h4>
            <p class="text-sm ml-8 text-gray-700 mt-1">Increase text size to minimum 12pt, enhance color contrast in diagrams, and add text labels to accompany color-coding.</p>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-3">
            <h4 class="font-medium flex items-center gap-2">
              <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
              Simplify Instructions
            </h4>
            <p class="text-sm ml-8 text-gray-700 mt-1">Break down complex procedures into smaller steps, include more visuals, and provide a glossary for technical terms.</p>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-3">
            <h4 class="font-medium flex items-center gap-2">
              <span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
              Create Alternative Formats
            </h4>
            <p class="text-sm ml-8 text-gray-700 mt-1">Develop a simplified quick-start guide and make the manual available in digital accessible format (tagged PDF).</p>
          </div>
        </div>
      </div>

      <!-- Standards Compliance -->
      <div>
        <h3 class="text-lg font-medium mb-3">Standards Compliance</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-sm">
              <tr>
                <td class="px-3 py-2 whitespace-nowrap">WCAG 2.1 AA</td>
                <td class="px-3 py-2 whitespace-nowrap">
                  <span class="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">Non-compliant</span>
                </td>
                <td class="px-3 py-2">Fails 7 success criteria</td>
              </tr>
              <tr>
                <td class="px-3 py-2 whitespace-nowrap">EN 301 549</td>
                <td class="px-3 py-2 whitespace-nowrap">
                  <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs">Partial</span>
                </td>
                <td class="px-3 py-2">Meets 62% of requirements</td>
              </tr>
              <tr>
                <td class="px-3 py-2 whitespace-nowrap">Plain Language</td>
                <td class="px-3 py-2 whitespace-nowrap">
                  <span class="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">Non-compliant</span>
                </td>
                <td class="px-3 py-2">Technical vocabulary too complex</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>