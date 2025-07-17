<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-display-small text-on-surface mb-4">Input</h1>
      <p class="text-body-large text-on-surface-variant max-w-2xl">
        Material Design 3 input component optimized for ERP applications. Features comprehensive validation states, 
        density modes, and specialized formatting for financial data entry.
      </p>
    </div>
    
    <div class="bg-surface rounded-lg p-6 border border-outline-variant">
      <InputExamples />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputExamples from '../InputExamples.vue'
</script>