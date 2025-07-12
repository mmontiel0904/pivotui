<template>
  <div class="space-y-8">
    <section>
      <h3 class="text-lg font-semibold mb-4">Button Variants</h3>
      <div class="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-4">Button Sizes</h3>
      <div class="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-4">Button States</h3>
      <div class="flex flex-wrap gap-3">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-4">Interactive Example</h3>
      <div class="space-y-4">
        <div class="flex gap-3">
          <Button @click="handleClick">Click me!</Button>
          <Button variant="outline" @click="toggleLoading">
            {{ isLoading ? 'Stop Loading' : 'Show Loading' }}
          </Button>
        </div>
        <div v-if="clickCount > 0" class="text-sm text-gray-600">
          Button clicked {{ clickCount }} times
        </div>
        <Button :loading="isLoading" variant="primary">
          {{ isLoading ? 'Loading...' : 'Toggle Loading State' }}
        </Button>
      </div>
    </section>

    <section>
      <h3 class="text-lg font-semibold mb-4">Code Example</h3>
      <div class="bg-gray-100 rounded-lg p-4 text-sm font-mono">
        <pre><code>&lt;script setup&gt;
import { Button } from 'pivotui'

const handleClick = () => {
  console.log('Button clicked!')
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="primary" @click="handleClick"&gt;
    Click me!
  &lt;/Button&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@lib/components'

const clickCount = ref(0)
const isLoading = ref(false)

const handleClick = () => {
  clickCount.value++
}

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>