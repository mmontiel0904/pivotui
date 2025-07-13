<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="bg-surface-variant rounded-lg p-8 border border-outline-variant">
      <h1 class="text-display-small text-on-surface mb-4">
        Welcome to PivotUI
      </h1>
      <p class="text-body-large text-on-surface-variant mb-6 max-w-2xl">
        Enterprise-grade Vue 3 component library implementing Material Design 3 principles, 
        optimized for ERP and accounting systems with professional aesthetics and superior usability.
      </p>
      <div class="flex gap-4">
        <Button variant="primary" size="md">Get Started</Button>
        <Button variant="outline" size="md">View Components</Button>
      </div>
    </div>

    <!-- Key Features -->
    <div>
      <h2 class="text-headline-medium text-on-surface mb-6">Why PivotUI?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-surface rounded-lg p-6 border border-outline-variant">
          <div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
            <span class="text-on-primary-container text-title-medium">🎨</span>
          </div>
          <h3 class="text-title-large text-on-surface mb-2">Enterprise-Ready</h3>
          <p class="text-body-medium text-on-surface-variant">
            Material Design 3 adapted specifically for business applications with professional color palettes.
          </p>
        </div>

        <div class="bg-surface rounded-lg p-6 border border-outline-variant">
          <div class="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
            <span class="text-on-secondary-container text-title-medium">🔧</span>
          </div>
          <h3 class="text-title-large text-on-surface mb-2">TypeScript First</h3>
          <p class="text-body-medium text-on-surface-variant">
            Full type safety and IntelliSense support for enhanced developer experience.
          </p>
        </div>

        <div class="bg-surface rounded-lg p-6 border border-outline-variant">
          <div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
            <span class="text-on-primary-container text-title-medium">📊</span>
          </div>
          <h3 class="text-title-large text-on-surface mb-2">ERP-Optimized</h3>
          <p class="text-body-medium text-on-surface-variant">
            Data density, financial formatting, and accessibility features for professional workflows.
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Example -->
    <div>
      <h2 class="text-headline-medium text-on-surface mb-6">Quick Example</h2>
      <div class="bg-surface rounded-lg p-6 border border-outline-variant">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-title-medium text-on-surface mb-4">Installation & Usage</h3>
            <div class="bg-neutral-900 rounded-lg p-4 text-body-small">
              <pre class="text-green-400 font-mono"><code>npm install pivotui</code></pre>
            </div>
            <div class="mt-4 bg-neutral-900 rounded-lg p-4 text-body-small">
              <pre class="text-blue-300 font-mono"><code>&lt;script setup&gt;
import { Button } from 'pivotui'
import 'pivotui/dist/style.css'
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="primary"&gt;
    Save Record
  &lt;/Button&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
          <div>
            <h3 class="text-title-medium text-on-surface mb-4">Live Preview</h3>
            <div class="bg-surface-variant rounded-lg p-6 border border-outline-variant">
              <div class="space-y-4">
                <Button variant="primary">Save Record</Button>
                <Button variant="secondary">Cancel</Button>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="bg-surface rounded-lg p-6 border border-outline-variant">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div class="text-headline-medium text-on-surface font-semibold">5</div>
          <div class="text-body-small text-on-surface-variant">Button Variants</div>
        </div>
        <div>
          <div class="text-headline-medium text-on-surface font-semibold">OKLCH</div>
          <div class="text-body-small text-on-surface-variant">Color Space</div>
        </div>
        <div>
          <div class="text-headline-medium text-on-surface font-semibold">MD3</div>
          <div class="text-body-small text-on-surface-variant">Design System</div>
        </div>
        <div>
          <div class="text-headline-medium text-on-surface font-semibold">100%</div>
          <div class="text-body-small text-on-surface-variant">TypeScript</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@lib/components'
</script>