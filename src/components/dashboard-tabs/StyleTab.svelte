<script>
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Progress } from "$lib/components/ui/progress";
  import { Separator } from "$lib/components/ui/separator";
  import { AlertTriangle, CheckCircle, FileText, Info, Lightbulb, FileBarChart, BookOpen } from "lucide-svelte";
</script>

<Card.Root>
  <Card.Header class="p-4">
    <Card.Title>Writing Style</Card.Title>
    <Card.Description>Analysis of writing style and clarity in the satellite receiver manual.</Card.Description>
  </Card.Header>
  <Card.Content class="p-4">
    <div class="grid gap-6">
      <!-- Overall Style Score -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-medium mb-2">Overall Style Score</h3>
        <div class="flex items-center gap-2 mb-2">
          <Progress value={62} class="flex-1" />
          <span class="font-bold">62%</span>
        </div>
        <p class="text-sm text-gray-600">The writing style needs significant improvement to enhance user understanding.</p>
      </div>

      <!-- Style Metrics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white border rounded-lg p-4">
          <h4 class="text-sm font-medium text-gray-500 mb-2">Readability Score</h4>
          <div class="flex items-baseline">
            <span class="text-2xl font-bold">Grade 13.2</span>
            <span class="text-xs text-red-500 ml-2">Too High</span>
          </div>
          <p class="text-xs text-gray-600 mt-1">Target: Grade 8-10</p>
          <Progress value={45} class="mt-2" />
        </div>
        
        <div class="bg-white border rounded-lg p-4">
          <h4 class="text-sm font-medium text-gray-500 mb-2">Sentence Length</h4>
          <div class="flex items-baseline">
            <span class="text-2xl font-bold">23.7</span>
            <span class="text-xs text-amber-500 ml-2">Words/Sentence</span>
          </div>
          <p class="text-xs text-gray-600 mt-1">Target: 15-20 words</p>
          <Progress value={67} class="mt-2" />
        </div>
        
        <div class="bg-white border rounded-lg p-4">
          <h4 class="text-sm font-medium text-gray-500 mb-2">Passive Voice</h4>
          <div class="flex items-baseline">
            <span class="text-2xl font-bold">32%</span>
            <span class="text-xs text-amber-500 ml-2">Too Frequent</span>
          </div>
          <p class="text-xs text-gray-600 mt-1">Target: Below 20%</p>
          <Progress value={58} class="mt-2" />
        </div>
        
        <div class="bg-white border rounded-lg p-4">
          <h4 class="text-sm font-medium text-gray-500 mb-2">Technical Jargon</h4>
          <div class="flex items-baseline">
            <span class="text-2xl font-bold">High</span>
            <span class="text-xs text-red-500 ml-2">Excessive</span>
          </div>
          <p class="text-xs text-gray-600 mt-1">42 undefined terms</p>
          <Progress value={40} class="mt-2" />
        </div>
      </div>

      <!-- Content Organization -->
      <div>
        <h3 class="text-lg font-medium mb-3">Content Organization</h3>
        <div class="overflow-hidden rounded-lg border">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issues</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm">Introduction</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Good
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">Minor improvements needed</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Installation Guide</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Fair
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">Steps unclear, excessive technical terms</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Menu Navigation</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Poor
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">Confusing layout, inconsistent terminology</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Troubleshooting</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Fair
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">Lacks common scenarios, too technical</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Specifications</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Good
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">Well-organized but lacks explanations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Style Analysis -->
      <div>
        <h3 class="text-lg font-medium mb-3">Detailed Style Analysis</h3>
        <Accordion.Root class="w-full">
          <Accordion.Item value="clarity-conciseness">
            <Accordion.Trigger>
              Clarity & Conciseness
              <div class="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual suffers from several clarity issues:</p>
                <ul class="list-disc pl-5 text-sm space-y-2">
                  <li>Sentences average 23.7 words (recommended: 15-20 words)</li>
                  <li>32% of sentences use passive voice, making instructions less direct</li>
                  <li>Numerous complex sentences with multiple clauses and conditions</li>
                  <li>Inconsistent terminology across sections (e.g., "channel list" vs. "program guide")</li>
                </ul>
                
                <div class="bg-gray-50 p-3 rounded-lg mt-3">
                  <h4 class="text-sm font-medium mb-2">Example of Poor Clarity:</h4>
                  <div class="text-xs text-gray-700 bg-white p-2 border rounded">
                    "The activation of the satellite frequency scanning capability, which requires proper dish alignment and LNB configuration, can be initiated through the system installation menu that is accessible via the main system settings located within the configuration options."
                  </div>
                  <h4 class="text-sm font-medium mb-2 mt-3">Improved Version:</h4>
                  <div class="text-xs text-gray-700 bg-white p-2 border rounded">
                    "To scan for satellite channels:<br>
                    1. Align your satellite dish<br>
                    2. Configure your LNB<br>
                    3. Go to Menu > System Settings > Installation<br>
                    4. Select 'Scan for Channels'"
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="terminology-consistency">
            <Accordion.Trigger>
              Terminology & Consistency
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Inconsistent
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual uses inconsistent terminology:</p>
                
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Term</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Alternate Terms Used</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-3 py-2">Channel List</td>
                        <td class="px-3 py-2">Program Guide, TV List, Service List</td>
                        <td class="px-3 py-2">Use "Channel List" consistently</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">Signal Quality</td>
                        <td class="px-3 py-2">Signal Strength, Reception Quality</td>
                        <td class="px-3 py-2">Distinguish between "Signal Strength" and "Signal Quality"</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">Remote Control</td>
                        <td class="px-3 py-2">Controller, Handset, Remote</td>
                        <td class="px-3 py-2">Use "Remote Control" consistently</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>42 technical terms are used without definition in the manual</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="instructions-usability">
            <Accordion.Trigger>
              Instructions & Usability
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual's instruction format has several usability issues:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>Instructions often buried within dense paragraphs rather than using numbered steps</li>
                  <li>Critical setup information separated from relevant procedures</li>
                  <li>Visual aids don't align with corresponding text instructions</li>
                  <li>Lack of troubleshooting steps within procedure sections</li>
                </ul>
                
                <div class="bg-gray-50 p-3 rounded-lg text-sm">
                  <h4 class="font-medium mb-2">Recommendation:</h4>
                  <p>Restructure all instructions using:<br>
                  1. Clear, numbered steps<br>
                  2. Concise, action-oriented language<br>
                  3. Visual aids matched to each step<br>
                  4. Common issues and solutions with each procedure</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="readability-analysis">
            <Accordion.Trigger>
              Readability Analysis
              <div class="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                Poor
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-medium text-sm mb-2">Readability Scores</h4>
                    <ul class="text-sm space-y-1">
                      <li class="flex justify-between">
                        <span>Flesch-Kincaid Grade Level:</span>
                        <span class="font-medium">13.2</span>
                      </li>
                      <li class="flex justify-between">
                        <span>Flesch Reading Ease:</span>
                        <span class="font-medium">42.3</span>
                      </li>
                      <li class="flex justify-between">
                        <span>Gunning Fog Index:</span>
                        <span class="font-medium">15.6</span>
                      </li>
                      <li class="flex justify-between">
                        <span>SMOG Index:</span>
                        <span class="font-medium">14.2</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-medium text-sm mb-2">Text Metrics</h4>
                    <ul class="text-sm space-y-1">
                      <li class="flex justify-between">
                        <span>Average Sentence Length:</span>
                        <span class="font-medium">23.7 words</span>
                      </li>
                      <li class="flex justify-between">
                        <span>Complex Words:</span>
                        <span class="font-medium">18.4%</span>
                      </li>
                      <li class="flex justify-between">
                        <span>Passive Voice:</span>
                        <span class="font-medium">32%</span>
                      </li>
                      <li class="flex justify-between">
                        <span>Technical Terms Without Definition:</span>
                        <span class="font-medium">42</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="bg-gray-100 p-3 rounded flex items-start gap-2 text-sm">
                  <AlertTriangle class="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p>All readability metrics indicate the manual requires college-level reading comprehension, which is inappropriate for a consumer product manual. Target should be Grade 8-10 reading level.</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <!-- Visual Content Analysis -->
      <div>
        <h3 class="text-lg font-medium mb-3">Visual Content Analysis</h3>
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-gray-50 p-3 border-b">
            <div class="flex justify-between items-center">
              <h4 class="font-medium">Diagram & Illustration Quality</h4>
              <div class="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </div>
          </div>
          <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <h5 class="text-sm font-medium">Strengths</h5>
              <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Hardware diagrams clearly labeled</li>
                <li>Remote control buttons clearly identified</li>
                <li>Connection diagrams show all inputs/outputs</li>
                <li>Consistent visual style throughout manual</li>
              </ul>
            </div>
            
            <div class="space-y-3">
              <h5 class="text-sm font-medium">Weaknesses</h5>
              <ul class="list-disc pl-5 text-sm space-y-1 text-gray-700">
                <li>Menu screenshots often outdated or unclear</li>
                <li>Too few illustrations for complex procedures</li>
                <li>Diagrams lack callout numbers matching text steps</li>
                <li>Small text on images often illegible</li>
                <li>Connection scenarios too simplified</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Recommendations -->
      <div>
        <h3 class="text-lg font-medium mb-3">Key Recommendations</h3>
        <div class="grid gap-3">
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <Lightbulb class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Simplify Language</h4>
              <p class="text-sm text-gray-700 mt-1">Reduce sentence length to 15-20 words, eliminate unnecessary technical jargon, and aim for Grade 8-10 reading level.</p>
            </div>
          </div>
          
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <FileBarChart class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Reorganize Instructions</h4>
              <p class="text-sm text-gray-700 mt-1">Use numbered steps for all procedures, place troubleshooting tips near relevant procedures, and create clear task-based sections.</p>
            </div>
          </div>
          
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <BookOpen class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Add Glossary & Visual Index</h4>
              <p class="text-sm text-gray-700 mt-1">Create a comprehensive glossary for all technical terms and add a visual index for quick reference to features and functions.</p>
            </div>
          </div>

          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <FileText class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Standardize Terminology</h4>
              <p class="text-sm text-gray-700 mt-1">Create and implement a consistent terminology guide across all sections of the manual to eliminate confusion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>