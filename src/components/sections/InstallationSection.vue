<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-display-small text-on-surface mb-4">Installation</h1>
      <p class="text-body-large text-on-surface-variant max-w-2xl">
        Get started with PivotUI in your Vue 3 project. Follow these simple steps to install and configure the component library.
      </p>
    </div>

    <!-- Installation Steps -->
    <div class="space-y-6">
      <!-- Step 1: Install Package -->
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center flex-shrink-0 text-label-large font-semibold">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-title-large text-on-surface mb-3">Install the Package</h3>
            <p class="text-body-medium text-on-surface-variant mb-4">
              Install PivotUI using your preferred package manager:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class="text-label-medium text-on-surface-variant mb-2">NPM</p>
                <div class="bg-neutral-900 rounded-lg p-4">
                  <code class="text-green-400 font-mono text-body-small">npm install pivotui</code>
                </div>
              </div>
              <div>
                <p class="text-label-medium text-on-surface-variant mb-2">Yarn</p>
                <div class="bg-neutral-900 rounded-lg p-4">
                  <code class="text-green-400 font-mono text-body-small">yarn add pivotui</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Import Styles -->
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center flex-shrink-0 text-label-large font-semibold">
            2
          </div>
          <div class="flex-1">
            <h3 class="text-title-large text-on-surface mb-3">Import Styles</h3>
            <p class="text-body-medium text-on-surface-variant mb-4">
              Import the CSS file in your main application file or component:
            </p>
            <div class="bg-neutral-900 rounded-lg p-4">
              <pre class="text-blue-300 font-mono text-body-small"><code>// main.ts or main.js
import 'pivotui/dist/style.css'</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Import Components -->
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center flex-shrink-0 text-label-large font-semibold">
            3
          </div>
          <div class="flex-1">
            <h3 class="text-title-large text-on-surface mb-3">Import Components</h3>
            <p class="text-body-medium text-on-surface-variant mb-4">
              Import and use components in your Vue templates:
            </p>
            <div class="bg-neutral-900 rounded-lg p-4">
              <pre class="text-blue-300 font-mono text-body-small"><code>&lt;script setup&gt;
import { Button } from 'pivotui'
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="primary"&gt;
    Click me!
  &lt;/Button&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Complete Example -->
    <div>
      <h2 class="text-headline-medium text-on-surface mb-6">Complete Example</h2>
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="grid lg:grid-cols-2 gap-6">
          <div>
            <h3 class="text-title-medium text-on-surface mb-4">App.vue</h3>
            <div class="bg-neutral-900 rounded-lg p-4">
              <pre class="text-blue-300 font-mono text-body-small"><code>&lt;script setup lang="ts"&gt;
import { Button } from 'pivotui'
import 'pivotui/dist/style.css'

const handleSave = () => {
  console.log('Record saved!')
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="p-6"&gt;
    &lt;h1 class="text-headline-large mb-6"&gt;
      Financial Dashboard
    &lt;/h1&gt;
    
    &lt;div class="space-y-4"&gt;
      &lt;Button 
        variant="primary" 
        @click="handleSave"
      &gt;
        Save Record
      &lt;/Button&gt;
      
      &lt;Button variant="secondary"&gt;
        Cancel
      &lt;/Button&gt;
    &lt;/div&gt;
    
    &lt;div class="text-numeric mt-6"&gt;
      $1,234,567.89
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
          <div>
            <h3 class="text-title-medium text-on-surface mb-4">Live Preview</h3>
            <div class="bg-surface-variant rounded-lg p-6 border border-outline-variant">
              <h1 class="text-headline-large mb-6">Financial Dashboard</h1>
              <div class="space-y-4">
                <Button variant="primary">Save Record</Button>
                <Button variant="secondary">Cancel</Button>
              </div>
              <div class="text-numeric mt-6">$1,234,567.89</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Requirements -->
    <div>
      <h2 class="text-headline-medium text-on-surface mb-6">Requirements</h2>
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-title-medium text-on-surface mb-2">Vue.js</h3>
            <p class="text-body-medium text-on-surface-variant">Vue 3.5.0 or higher</p>
          </div>
          <div>
            <h3 class="text-title-medium text-on-surface mb-2">TypeScript</h3>
            <p class="text-body-medium text-on-surface-variant">Optional but recommended</p>
          </div>
          <div>
            <h3 class="text-title-medium text-on-surface mb-2">Modern Browser</h3>
            <p class="text-body-medium text-on-surface-variant">ES2020+ support required</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@lib/components'
</script>