<script setup lang="ts">
import { ref } from 'vue'
import DemoNavigation from './components/DemoNavigation.vue'
import OverviewSection from './components/sections/OverviewSection.vue'
import InstallationSection from './components/sections/InstallationSection.vue'
import TableSection from './components/sections/TableSection.vue'
import ButtonExamples from './components/ButtonExamples.vue'

// Navigation state
const activeSection = ref('overview')

const navigateToSection = (section: string) => {
  activeSection.value = section
}

// Section titles for header
const sectionTitles: Record<string, string> = {
  overview: 'Overview',
  installation: 'Installation',
  'design-tokens': 'Design Tokens',
  button: 'Button',
  table: 'Table',
  typography: 'Typography',
  colors: 'Colors'
}
</script>

<template>
  <div class="min-h-screen bg-surface flex">
    <!-- Side Navigation -->
    <DemoNavigation 
      :active-section="activeSection" 
      @navigate="navigateToSection" 
    />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Header -->
      <header class="bg-surface border-b border-outline-variant px-8 py-6 sticky top-0 z-10">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-headline-large text-on-surface">
              {{ sectionTitles[activeSection] }}
            </h1>
            <p class="text-body-medium text-on-surface-variant mt-1">
              PivotUI Component Library Documentation
            </p>
          </div>
          <div class="flex gap-3">
            <a 
              href="https://github.com" 
              target="_blank"
              class="text-label-large text-on-surface-variant hover:text-on-surface transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://npmjs.com" 
              target="_blank"
              class="text-label-large text-on-surface-variant hover:text-on-surface transition-colors"
            >
              NPM
            </a>
          </div>
        </div>
      </header>
      
      <!-- Content Area -->
      <main class="flex-1 p-8 overflow-y-auto">
        <div class="max-w-5xl">
          <!-- Overview Section -->
          <OverviewSection v-if="activeSection === 'overview'" />
          
          <!-- Installation Section -->
          <InstallationSection v-if="activeSection === 'installation'" />
          
          <!-- Design Tokens Section -->
          <div v-if="activeSection === 'design-tokens'" class="space-y-8">
            <div>
              <h1 class="text-display-small text-on-surface mb-4">Design Tokens</h1>
              <p class="text-body-large text-on-surface-variant max-w-2xl">
                PivotUI uses Material Design 3 design tokens implemented with OKLCH color space 
                for superior color precision and professional aesthetics.
              </p>
            </div>
            <div class="bg-surface rounded-lg p-6 border border-outline-variant">
              <p class="text-body-medium text-on-surface-variant">
                Detailed design token documentation coming soon...
              </p>
            </div>
          </div>
          
          <!-- Button Section -->
          <div v-if="activeSection === 'button'" class="space-y-8">
            <div>
              <h1 class="text-display-small text-on-surface mb-4">Button</h1>
              <p class="text-body-large text-on-surface-variant max-w-2xl">
                A versatile button component with multiple variants, sizes, and states. 
                Optimized for enterprise applications with Material Design 3 principles.
              </p>
            </div>
            <div class="bg-surface rounded-lg p-6 border border-outline-variant">
              <ButtonExamples />
            </div>
          </div>

          <!-- Table Section -->
          <TableSection v-if="activeSection === 'table'" />
          
          <!-- Typography Section -->
          <div v-if="activeSection === 'typography'" class="space-y-8">
            <div>
              <h1 class="text-display-small text-on-surface mb-4">Typography</h1>
              <p class="text-body-large text-on-surface-variant max-w-2xl">
                Complete Material Design 3 typography system with self-hosted fonts optimized for ERP applications.
              </p>
            </div>
            <div class="bg-surface rounded-lg p-6 border border-outline-variant">
              <p class="text-body-medium text-on-surface-variant">
                Typography documentation coming soon...
              </p>
            </div>
          </div>
          
          <!-- Colors Section -->
          <div v-if="activeSection === 'colors'" class="space-y-8">
            <div>
              <h1 class="text-display-small text-on-surface mb-4">Colors</h1>
              <p class="text-body-large text-on-surface-variant max-w-2xl">
                Professional color palette with OKLCH color space, featuring elegant dark teal and blue-gray tones.
              </p>
            </div>
            <div class="bg-surface rounded-lg p-6 border border-outline-variant">
              <p class="text-body-medium text-on-surface-variant">
                Color palette documentation coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
