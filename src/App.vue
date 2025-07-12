<script setup lang="ts">
import ButtonExamples from './components/ButtonExamples.vue'
import { Button } from '@lib/components'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">PivotUI Components</h1>
            <p class="text-gray-600 mt-2">A Vue 3 component library with Tailwind CSS</p>
          </div>
          <div class="flex gap-3">
            <Button variant="outline" size="sm">Documentation</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid gap-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Getting Started</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-600 mb-4">
              Welcome to PivotUI! This is the demo site for the component library.
              Install the library and start using beautiful, accessible components.
            </p>
            <div class="bg-gray-100 rounded p-4 text-sm font-mono">
              <code>npm install pivotui</code>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-6">Button Component</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <ButtonExamples />
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">More Components Coming Soon</h2>
          <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-600 mb-4">
              This library is actively being developed. More components will be added soon:
            </p>
            <ul class="space-y-2 text-gray-600">
              <li>• Input & Form Components</li>
              <li>• Cards & Layouts</li>
              <li>• Navigation Components</li>
              <li>• Data Display Components</li>
              <li>• Feedback Components</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
