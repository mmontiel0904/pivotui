<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-display-small text-on-surface mb-4">Card</h1>
      <p class="text-body-large text-on-surface-variant max-w-2xl">
        Flexible card component for organizing and displaying content in ERP interfaces. 
        Supports multiple variants, density modes, and interactive states for enhanced user experience.
      </p>
    </div>
    
    <div class="bg-surface rounded-lg p-6 border border-outline-variant">
      <CardExamples />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardExamples from '../CardExamples.vue'
</script>