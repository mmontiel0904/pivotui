<template>
  <nav class="w-64 bg-surface border-r border-outline-variant h-screen sticky top-0 flex flex-col">
    <!-- Header -->
    <div class="p-6 border-b border-outline-variant">
      <h1 class="text-title-large text-on-surface font-semibold">PivotUI</h1>
      <p class="text-body-small text-on-surface-variant mt-1">Component Library</p>
    </div>

    <!-- Navigation Items -->
    <div class="flex-1 py-4">
      <!-- Getting Started Section -->
      <div class="px-4 mb-6">
        <h2 class="text-label-medium text-on-surface-variant uppercase tracking-wider mb-3">
          Getting Started
        </h2>
        <ul class="space-y-1">
          <li>
            <button
              @click="$emit('navigate', 'overview')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'overview' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Overview
            </button>
          </li>
          <li>
            <button
              @click="$emit('navigate', 'installation')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'installation' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Installation
            </button>
          </li>
          <li>
            <button
              @click="$emit('navigate', 'design-tokens')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'design-tokens' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Design Tokens
            </button>
          </li>
        </ul>
      </div>

      <!-- Components Section -->
      <div class="px-4 mb-6">
        <h2 class="text-label-medium text-on-surface-variant uppercase tracking-wider mb-3">
          Components
        </h2>
        <ul class="space-y-1">
          <li>
            <button
              @click="$emit('navigate', 'button')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'button' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Button
            </button>
          </li>
          <li>
            <button
              @click="$emit('navigate', 'table')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'table' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Table
            </button>
          </li>
          <!-- Future components -->
          <li>
            <button
              disabled
              class="w-full text-left px-3 py-2 rounded-md text-label-large text-on-surface-variant opacity-50 cursor-not-allowed"
            >
              Input (Coming Soon)
            </button>
          </li>
          <li>
            <button
              disabled
              class="w-full text-left px-3 py-2 rounded-md text-label-large text-on-surface-variant opacity-50 cursor-not-allowed"
            >
              Card (Coming Soon)
            </button>
          </li>
        </ul>
      </div>

      <!-- Foundations Section -->
      <div class="px-4">
        <h2 class="text-label-medium text-on-surface-variant uppercase tracking-wider mb-3">
          Foundations
        </h2>
        <ul class="space-y-1">
          <li>
            <button
              @click="$emit('navigate', 'typography')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'typography' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Typography
            </button>
          </li>
          <li>
            <button
              @click="$emit('navigate', 'colors')"
              :class="[
                'w-full text-left px-3 py-2 rounded-md text-label-large transition-colors',
                activeSection === 'colors' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface hover:bg-surface-variant'
              ]"
            >
              Colors
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-outline-variant">
      <div class="text-body-small text-on-surface-variant">
        <p>Version 0.1.0</p>
        <p class="mt-1">Material Design 3</p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  activeSection?: string
}

withDefaults(defineProps<Props>(), {
  activeSection: 'overview'
})

defineEmits<{
  navigate: [section: string]
}>()
</script>