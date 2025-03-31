<script>
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Progress } from "$lib/components/ui/progress";
  import { Separator } from "$lib/components/ui/separator";
  import { AlertTriangle, CheckCircle, CircleCheck, AlertCircle, Info, ShieldCheck, Globe, FileText } from "lucide-svelte";
</script>

<Card.Root>
  <Card.Header class="p-4">
    <Card.Title>Compliance</Card.Title>
    <Card.Description>Analysis of regulatory compliance and standards adherence in the satellite receiver manual.</Card.Description>
  </Card.Header>
  <Card.Content class="p-4">
    <div class="grid gap-6">
      <!-- Overall Compliance Score -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-medium mb-2">Overall Compliance Score</h3>
        <div class="flex items-center gap-2 mb-2">
          <Progress value={74} class="flex-1" />
          <span class="font-bold">74%</span>
        </div>
        <p class="text-sm text-gray-600">The manual meets most critical requirements but has several compliance gaps that need attention.</p>
      </div>

      <!-- Compliance Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-green-100 p-2 rounded-full mb-2">
            <CheckCircle class="h-6 w-6 text-green-600" />
          </div>
          <h4 class="font-medium">Safety Warnings</h4>
          <p class="text-sm text-gray-600 mt-1">All required safety warnings properly documented</p>
          <div class="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            100% Compliant
          </div>
        </div>
        
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-amber-100 p-2 rounded-full mb-2">
            <AlertTriangle class="h-6 w-6 text-amber-600" />
          </div>
          <h4 class="font-medium">Environmental Information</h4>
          <p class="text-sm text-gray-600 mt-1">Missing detailed recycling procedures</p>
          <div class="mt-2 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
            Partial Compliance
          </div>
        </div>
        
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-red-100 p-2 rounded-full mb-2">
            <AlertCircle class="h-6 w-6 text-red-600" />
          </div>
          <h4 class="font-medium">Warranty Terms</h4>
          <p class="text-sm text-gray-600 mt-1">Legal language unclear and incomplete</p>
          <div class="mt-2 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
            Non-Compliant
          </div>
        </div>
      </div>

      <!-- Regulatory Compliance -->
      <div>
        <h3 class="text-lg font-medium mb-3">Regulatory Compliance</h3>
        <Accordion.Root class="w-full">
          <Accordion.Item value="eu-regulations">
            <Accordion.Trigger>
              EU Regulations
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Partial Compliance
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div class="border rounded p-3">
                    <div class="flex items-center gap-2">
                      <CircleCheck class="h-4 w-4 text-green-500" />
                      <h4 class="font-medium text-sm">Radio Equipment Directive (RED)</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-1 ml-6">Declaration of Conformity included and properly formatted</p>
                  </div>
                  
                  <div class="border rounded p-3">
                    <div class="flex items-center gap-2">
                      <CircleCheck class="h-4 w-4 text-green-500" />
                      <h4 class="font-medium text-sm">Low Voltage Directive</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-1 ml-6">All safety warnings present and clearly visible</p>
                  </div>
                  
                  <div class="border rounded p-3">
                    <div class="flex items-center gap-2">
                      <AlertTriangle class="h-4 w-4 text-amber-500" />
                      <h4 class="font-medium text-sm">WEEE Directive</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-1 ml-6">Recycling symbol present but missing specific instructions</p>
                  </div>
                  
                  <div class="border rounded p-3">
                    <div class="flex items-center gap-2">
                      <AlertCircle class="h-4 w-4 text-red-500" />
                      <h4 class="font-medium text-sm">Consumer Rights Directive</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-1 ml-6">Warranty terms lack required clarity and completeness</p>
                  </div>
                </div>
                
                <div class="bg-gray-100 p-3 rounded text-sm flex items-start gap-2">
                  <Info class="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p>The manual fails to provide detailed information about the right of withdrawal within 14 days, which is mandatory under EU consumer protection laws.</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="fcc-regulations">
            <Accordion.Trigger>
              FCC Regulations
              <div class="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Compliant
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual meets all FCC requirements:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>FCC ID clearly displayed in the required format</li>
                  <li>RF exposure information properly documented</li>
                  <li>Interference statement included with proper wording</li>
                  <li>Modification warning present in the required location</li>
                </ul>
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>All FCC Part 15 statements are present and correctly worded</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="international-regulations">
            <Accordion.Trigger>
              International Standards
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Partial Compliance
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The manual has mixed compliance with international standards:</p>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-3 py-2">ISO/IEC Guide 37</td>
                        <td class="px-3 py-2">
                          <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">Partial</span>
                        </td>
                        <td class="px-3 py-2">Missing consistent navigation aids</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">IEC 62079</td>
                        <td class="px-3 py-2">
                          <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Compliant</span>
                        </td>
                        <td class="px-3 py-2">No issues found</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">ISO 18913</td>
                        <td class="px-3 py-2">
                          <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">Partial</span>
                        </td>
                        <td class="px-3 py-2">Image quality specifications incomplete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <!-- Language & Translation Compliance -->
      <div>
        <h3 class="text-lg font-medium mb-3">Language & Translation Compliance</h3>
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-gray-50 p-3 border-b">
            <div class="flex justify-between items-center">
              <h4 class="font-medium">Translation Quality Assessment</h4>
              <div class="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </div>
          </div>
          <div class="p-3 text-sm">
            <div class="space-y-3">
              <p>The manual is provided in multiple languages as required, but there are several issues with translations:</p>
              
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                      <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-3 py-2">English (Primary)</td>
                      <td class="px-3 py-2">
                        <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Good</span>
                      </td>
                      <td class="px-3 py-2">Minor grammatical errors</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2">German</td>
                      <td class="px-3 py-2">
                        <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">Good</span>
                      </td>
                      <td class="px-3 py-2">Inconsistent technical terminology</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2">French</td>
                      <td class="px-3 py-2">
                        <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">Fair</span>
                      </td>
                      <td class="px-3 py-2">Missing translations in technical section</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2">Spanish</td>
                      <td class="px-3 py-2">
                        <span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">Poor</span>
                      </td>
                      <td class="px-3 py-2">Numerous mistranslations and untranslated text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="bg-gray-100 p-3 rounded flex items-start gap-2">
                <AlertTriangle class="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p>The Spanish translation contains several critical safety warning mistranslations that could lead to improper use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div>
        <h3 class="text-lg font-medium mb-3">High Priority Recommendations</h3>
        <div class="grid gap-3">
          <div class="border-l-4 border-red-500 pl-3 py-2">
            <h4 class="font-medium">Update Warranty Information</h4>
            <p class="text-sm text-gray-700 mt-1">Revise warranty terms to comply with the EU Consumer Rights Directive, ensuring all mandatory information is included.</p>
          </div>
          
          <div class="border-l-4 border-red-500 pl-3 py-2">
            <h4 class="font-medium">Fix Spanish Translation</h4>
            <p class="text-sm text-gray-700 mt-1">Completely revise the Spanish translation, with particular attention to safety warnings and technical instructions.</p>
          </div>
          
          <div class="border-l-4 border-amber-500 pl-3 py-2">
            <h4 class="font-medium">Complete WEEE Information</h4>
            <p class="text-sm text-gray-700 mt-1">Add detailed recycling instructions and e-waste handling procedures according to WEEE Directive requirements.</p>
          </div>
        </div>
      </div>

      <!-- Certification & Documentation -->
      <div>
        <h3 class="text-lg font-medium mb-3">Certification & Documentation</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div class="border rounded-lg p-3 text-center">
            <div class="flex justify-center mb-2">
              <ShieldCheck class="h-6 w-6 text-gray-500" />
            </div>
            <h4 class="text-sm font-medium">CE Mark</h4>
            <div class="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Properly Documented
            </div>
          </div>
          
          <div class="border rounded-lg p-3 text-center">
            <div class="flex justify-center mb-2">
              <Globe class="h-6 w-6 text-gray-500" />
            </div>
            <h4 class="text-sm font-medium">FCC Certification</h4>
            <div class="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Properly Documented
            </div>
          </div>
          
          <div class="border rounded-lg p-3 text-center">
            <div class="flex justify-center mb-2">
              <FileText class="h-6 w-6 text-gray-500" />
            </div>
            <h4 class="text-sm font-medium">RoHS Compliance</h4>
            <div class="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              Properly Documented
            </div>
          </div>
          
          <div class="border rounded-lg p-3 text-center">
            <div class="flex justify-center mb-2">
              <FileText class="h-6 w-6 text-gray-500" />
            </div>
            <h4 class="text-sm font-medium">Energy Labeling</h4>
            <div class="mt-2 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
              Incomplete
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>