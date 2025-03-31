<script>
  import * as Card from "$lib/components/ui/card";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Progress } from "$lib/components/ui/progress";
  import { Separator } from "$lib/components/ui/separator";
  import { AlertTriangle, CheckCircle, FileText, Info, AlertCircle, Cpu, Wifi, Settings, ZapOff } from "lucide-svelte";
</script>

<Card.Root>
  <Card.Header class="p-4">
    <Card.Title>Technical</Card.Title>
    <Card.Description>Technical accuracy and completeness assessment of the satellite receiver manual.</Card.Description>
  </Card.Header>
  <Card.Content class="p-4">
    <div class="grid gap-6">
      <!-- Overall Technical Score -->
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="text-lg font-medium mb-2">Technical Accuracy Score</h3>
        <div class="flex items-center gap-2 mb-2">
          <Progress value={78} class="flex-1" />
          <span class="font-bold">78%</span>
        </div>
        <p class="text-sm text-gray-600">The manual is generally technically accurate but has several areas needing improvement.</p>
      </div>

      <!-- Technical Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-green-100 p-2 rounded-full mb-2">
            <CheckCircle class="h-6 w-6 text-green-600" />
          </div>
          <h4 class="font-medium">Hardware Specifications</h4>
          <p class="text-sm text-gray-600 mt-1">Detailed and accurate technical specifications</p>
          <div class="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            95% Accurate
          </div>
        </div>
        
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-amber-100 p-2 rounded-full mb-2">
            <AlertTriangle class="h-6 w-6 text-amber-600" />
          </div>
          <h4 class="font-medium">Setup Instructions</h4>
          <p class="text-sm text-gray-600 mt-1">Some steps missing or unclear</p>
          <div class="mt-2 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
            72% Complete
          </div>
        </div>
        
        <div class="rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center">
          <div class="bg-red-100 p-2 rounded-full mb-2">
            <AlertCircle class="h-6 w-6 text-red-600" />
          </div>
          <h4 class="font-medium">Troubleshooting</h4>
          <p class="text-sm text-gray-600 mt-1">Common issues not adequately addressed</p>
          <div class="mt-2 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
            58% Complete
          </div>
        </div>
      </div>

      <!-- Technical Accuracy Assessment -->
      <div>
        <h3 class="text-lg font-medium mb-3">Technical Content Assessment</h3>
        <Accordion.Root class="w-full">
          <Accordion.Item value="specifications">
            <Accordion.Trigger>
              Hardware Specifications
              <div class="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Excellent
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The hardware specifications section is comprehensive and accurate:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>All technical specifications are accurately documented</li>
                  <li>Input/output connectors properly labeled with correct specifications</li>
                  <li>Power requirements clearly stated with appropriate warnings</li>
                  <li>RF and signal parameters completely and accurately documented</li>
                </ul>
                
                <div class="bg-gray-100 p-3 rounded text-sm flex items-start gap-2">
                  <Info class="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p>Minor improvement needed: Add thermal specifications for proper ventilation requirements.</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="installation-setup">
            <Accordion.Trigger>
              Installation & Setup
              <div class="ml-auto bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                Needs Improvement
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">Several important issues were identified in the installation and setup sections:</p>
                
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200 text-sm">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Issue</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Impact</th>
                        <th scope="col" class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-3 py-2">DiSEqC setup procedure incomplete</td>
                        <td class="px-3 py-2">Users may fail to correctly configure multiple satellite inputs</td>
                        <td class="px-3 py-2">Add detailed DiSEqC configuration steps with examples</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">LNB configuration parameters outdated</td>
                        <td class="px-3 py-2">Newer universal LNBs have different specifications</td>
                        <td class="px-3 py-2">Update LNB configuration parameters for current models</td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2">Network setup lacks wireless options</td>
                        <td class="px-3 py-2">Wi-Fi setup not adequately explained</td>
                        <td class="px-3 py-2">Add complete Wi-Fi setup procedure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div class="bg-red-50 p-3 rounded flex items-start gap-2 text-sm">
                  <AlertTriangle class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p>Critical issue: The manual incorrectly states polarization settings for Astra 19.2°E, which could prevent users from receiving channels.</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="software-features">
            <Accordion.Trigger>
              Software Features
              <div class="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                Good
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The software features are generally well-documented:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 class="font-medium text-sm mb-2">Strengths</h4>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                      <li>Menu navigation accurately described</li>
                      <li>Recording functions thoroughly explained</li>
                      <li>Electronic Program Guide usage well documented</li>
                      <li>Parental control features clearly explained</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-sm mb-2">Weaknesses</h4>
                    <ul class="list-disc pl-5 text-sm space-y-1">
                      <li>New smart features added in firmware v2.3 not documented</li>
                      <li>Media player format compatibility list incomplete</li>
                      <li>Network streaming setup lacks detail</li>
                    </ul>
                  </div>
                </div>
                
                <div class="bg-gray-100 p-3 rounded flex items-center gap-2 text-sm">
                  <Info class="h-4 w-4 text-blue-500" />
                  <span>Software features are 86% accurately documented, but firmware update information is outdated</span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="troubleshooting">
            <Accordion.Trigger>
              Troubleshooting & Maintenance
              <div class="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                Inadequate
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              <div class="space-y-3">
                <p class="text-sm">The troubleshooting section has significant gaps:</p>
                <ul class="list-disc pl-5 text-sm space-y-1">
                  <li>Common signal loss issues not adequately addressed</li>
                  <li>No solutions for frequent software freeze problems</li>
                  <li>HDMI connection troubleshooting missing</li>
                  <li>Network connectivity problems not covered</li>
                  <li>Error codes table incomplete (only 12 of 36 error codes documented)</li>
                </ul>
                
                <div class="border p-3 rounded-lg mt-3">
                  <h4 class="text-sm font-medium mb-2">Missing Critical Troubleshooting Scenarios:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div class="flex items-start gap-2 text-sm">
                      <ZapOff class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Signal quality issues in bad weather</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <ZapOff class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Recording failure troubleshooting</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <ZapOff class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Channel scanning errors</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <ZapOff class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Remote control pairing issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <!-- Technical Accuracy by Section -->
      <div>
        <h3 class="text-lg font-medium mb-3">Technical Accuracy by Section</h3>
        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Hardware Specifications</span>
              <span class="text-sm text-gray-500">95%</span>
            </div>
            <Progress value={95} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Connection Diagrams</span>
              <span class="text-sm text-gray-500">90%</span>
            </div>
            <Progress value={90} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Installation Procedures</span>
              <span class="text-sm text-gray-500">72%</span>
            </div>
            <Progress value={72} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Menu Navigation</span>
              <span class="text-sm text-gray-500">85%</span>
            </div>
            <Progress value={85} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Software Features</span>
              <span class="text-sm text-gray-500">86%</span>
            </div>
            <Progress value={86} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Advanced Functions</span>
              <span class="text-sm text-gray-500">75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Error Codes</span>
              <span class="text-sm text-gray-500">33%</span>
            </div>
            <Progress value={33} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Troubleshooting Guide</span>
              <span class="text-sm text-gray-500">58%</span>
            </div>
            <Progress value={58} />
          </div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-medium">Firmware Updates</span>
              <span class="text-sm text-gray-500">65%</span>
            </div>
            <Progress value={65} />
          </div>
        </div>
      </div>

      <!-- Technical Errors -->
      <div>
        <h3 class="text-lg font-medium mb-3">Critical Technical Errors</h3>
        <div class="border rounded-lg overflow-hidden">
          <div class="bg-red-50 p-3 border-b">
            <h4 class="font-medium text-red-800">4 Critical Errors Detected</h4>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="p-3">
              <div class="flex items-start gap-2">
                <AlertCircle class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 class="font-medium text-sm">Incorrect Satellite Position</h5>
                  <p class="text-sm text-gray-700 mt-1">Page 43: Lists Astra satellite position as 19.5°E, but correct position is 19.2°E.</p>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="flex items-start gap-2">
                <AlertCircle class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 class="font-medium text-sm">Wrong LNB Frequency Range</h5>
                  <p class="text-sm text-gray-700 mt-1">Page 45: Universal LNB frequency range listed incorrectly as 10.7-11.7 GHz (Low) and 11.7-12.75 GHz (High). Correct range is 10.7-11.7 GHz (Low) and 11.7-12.75 GHz (High).</p>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="flex items-start gap-2">
                <AlertCircle class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 class="font-medium text-sm">Outdated Firmware Update URL</h5>
                  <p class="text-sm text-gray-700 mt-1">Page 112: Firmware update server URL is incorrect. Points to outdated domain that no longer hosts firmware.</p>
                </div>
              </div>
            </div>
            <div class="p-3">
              <div class="flex items-start gap-2">
                <AlertCircle class="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 class="font-medium text-sm">Incorrect USB Format Requirements</h5>
                  <p class="text-sm text-gray-700 mt-1">Page 87: States USB drives must be FAT32 format only, but the receiver also supports NTFS as of firmware v2.1.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Recommendations -->
      <div>
        <h3 class="text-lg font-medium mb-3">Key Technical Recommendations</h3>
        <div class="grid gap-3">
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <Cpu class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Correct Critical Technical Errors</h4>
              <p class="text-sm text-gray-700 mt-1">Fix the 4 critical errors identified regarding satellite positions, LNB frequencies, firmware URL, and USB format support.</p>
            </div>
          </div>
          
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <Wifi class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Expand Network Connectivity Section</h4>
              <p class="text-sm text-gray-700 mt-1">Add detailed Wi-Fi setup instructions, network troubleshooting, and streaming service configuration steps.</p>
            </div>
          </div>
          
          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <ZapOff class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Complete Troubleshooting Section</h4>
              <p class="text-sm text-gray-700 mt-1">Develop comprehensive troubleshooting guide covering all common issues, particularly signal problems, recording failures, and connectivity issues.</p>
            </div>
          </div>

          <div class="flex items-start p-3 border rounded-lg">
            <div class="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
              <Settings class="h-4 w-4 text-blue-700" />
            </div>
            <div>
              <h4 class="font-medium">Update for Latest Firmware</h4>
              <p class="text-sm text-gray-700 mt-1">Revise manual to include all features added in firmware versions 2.1, 2.2, and 2.3, and provide updated firmware update procedures.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparison with Industry Standards -->
      <div>
        <h3 class="text-lg font-medium mb-3">Comparison with Industry Standards</h3>
        <div class="overflow-hidden rounded-lg border">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry Standard</th>
                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">This Manual</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm">Technical Accuracy</td>
                <td class="px-4 py-3 text-sm">95%+</td>
                <td class="px-4 py-3 text-sm">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    78% (Below Standard)
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Troubleshooting Coverage</td>
                <td class="px-4 py-3 text-sm">90%+ of common issues</td>
                <td class="px-4 py-3 text-sm">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    58% (Significantly Below)
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Feature Documentation</td>
                <td class="px-4 py-3 text-sm">All features documented</td>
                <td class="px-4 py-3 text-sm">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    86% (Below Standard)
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Diagram Accuracy</td>
                <td class="px-4 py-3 text-sm">100% accurate</td>
                <td class="px-4 py-3 text-sm">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    95% (Meets Standard)
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">Error Reporting</td>
                <td class="px-4 py-3 text-sm">All error codes documented</td>
                <td class="px-4 py-3 text-sm">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    33% (Severely Lacking)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Card.Content>
</Card.Root>