<template>
  <div class="space-y-8">
    <!-- Variants -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Variants</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="elevated">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Elevated Card</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            Elevated cards use shadow to create depth and hierarchy. Perfect for highlighting important content.
          </p>
        </Card>

        <Card variant="outlined">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Outlined Card</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            Outlined cards use borders for a clean, minimal appearance. Great for content organization.
          </p>
        </Card>

        <Card variant="filled">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Filled Card</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            Filled cards use background color for subtle differentiation. Ideal for content grouping.
          </p>
        </Card>
      </div>
    </section>

    <!-- Padding Options -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Padding Options</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card variant="outlined" padding="none">
          <div class="p-3 text-center">
            <p class="text-label-large text-on-surface mb-1">None</p>
            <p class="text-body-small text-on-surface-variant">Custom padding</p>
          </div>
        </Card>

        <Card variant="outlined" padding="sm">
          <p class="text-label-large text-on-surface mb-1">Small</p>
          <p class="text-body-small text-on-surface-variant">Compact spacing</p>
        </Card>

        <Card variant="outlined" padding="md">
          <p class="text-label-large text-on-surface mb-1">Medium</p>
          <p class="text-body-small text-on-surface-variant">Balanced spacing</p>
        </Card>

        <Card variant="outlined" padding="lg">
          <p class="text-label-large text-on-surface mb-1">Large</p>
          <p class="text-body-small text-on-surface-variant">Generous spacing</p>
        </Card>
      </div>
    </section>

    <!-- Density Modes -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Density Modes</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="outlined" density="compact">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Compact</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant mb-3">
            Tight spacing for data-heavy interfaces.
          </p>
          <template #footer>
            <p class="text-body-small">Optimal for dashboards</p>
          </template>
        </Card>

        <Card variant="outlined" density="comfortable">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Comfortable</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant mb-3">
            Balanced spacing for general use.
          </p>
          <template #footer>
            <p class="text-body-small">Default density mode</p>
          </template>
        </Card>

        <Card variant="outlined" density="spacious">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Spacious</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant mb-3">
            Generous spacing for accessibility.
          </p>
          <template #footer>
            <p class="text-body-small">Enhanced readability</p>
          </template>
        </Card>
      </div>
    </section>

    <!-- Interactive States -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Interactive States</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="outlined" hoverable>
          <template #header>
            <h4 class="text-title-medium text-on-surface">Hoverable</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            Hover over this card to see the visual feedback effect.
          </p>
        </Card>

        <Card variant="outlined" clickable @click="handleCardClick('clickable')">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Clickable</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            This card is clickable and will emit a click event.
          </p>
        </Card>

        <Card variant="outlined" hoverable clickable @click="handleCardClick('both')">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Both</h4>
          </template>
          <p class="text-body-medium text-on-surface-variant">
            Combines hover effects with click functionality.
          </p>
        </Card>
      </div>
      <div v-if="lastClicked" class="mt-4 p-3 bg-primary-container text-on-primary-container rounded-md text-body-small">
        Last clicked: {{ lastClicked }}
      </div>
    </section>

    <!-- ERP Use Cases -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">ERP Use Cases</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Financial Summary Card -->
        <Card variant="elevated" density="compact">
          <template #header>
            <div class="flex items-center justify-between">
              <h4 class="text-title-medium text-on-surface">Financial Summary</h4>
              <div class="w-3 h-3 bg-success rounded-full"></div>
            </div>
          </template>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-body-medium text-on-surface-variant">Revenue</span>
              <span class="text-body-medium font-mono tabular-nums text-on-surface">$2,451,200.00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-body-medium text-on-surface-variant">Expenses</span>
              <span class="text-body-medium font-mono tabular-nums text-on-surface">$1,832,450.00</span>
            </div>
            <div class="border-t border-outline-variant pt-3">
              <div class="flex justify-between items-center">
                <span class="text-title-small text-on-surface">Net Income</span>
                <span class="text-title-small font-mono tabular-nums text-success">$618,750.00</span>
              </div>
            </div>
          </div>
        </Card>

        <!-- Customer Card -->
        <Card variant="outlined" hoverable clickable @click="handleCardClick('Acme Corporation')">
          <template #header>
            <div class="flex items-center justify-between">
              <h4 class="text-title-medium text-on-surface">Acme Corporation</h4>
              <span class="text-label-small text-on-primary-container bg-primary-container px-2 py-1 rounded">Active</span>
            </div>
          </template>
          <div class="space-y-2">
            <p class="text-body-medium text-on-surface-variant">ID: CUST-001234</p>
            <p class="text-body-medium text-on-surface-variant">Contact: John Smith</p>
            <p class="text-body-medium text-on-surface-variant">Phone: (555) 123-4567</p>
            <div class="flex justify-between items-center mt-3">
              <span class="text-body-small text-on-surface-variant">Outstanding Balance</span>
              <span class="text-body-medium font-mono tabular-nums text-warning">$15,750.00</span>
            </div>
          </div>
          <template #actions>
            <Button variant="ghost" size="sm" @click.stop="handleAction('view')">View</Button>
            <Button variant="outline" size="sm" @click.stop="handleAction('edit')">Edit</Button>
          </template>
        </Card>

        <!-- Invoice Card -->
        <Card variant="filled" density="compact">
          <template #header>
            <div class="flex items-center justify-between">
              <h4 class="text-title-medium text-on-surface">Invoice #INV-2024-001</h4>
              <span class="text-label-small text-warning bg-warning-container px-2 py-1 rounded">Pending</span>
            </div>
          </template>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-body-small text-on-surface-variant">Due Date</p>
              <p class="text-body-medium text-on-surface">Jan 15, 2024</p>
            </div>
            <div>
              <p class="text-body-small text-on-surface-variant">Amount</p>
              <p class="text-body-medium font-mono tabular-nums text-on-surface">$8,250.00</p>
            </div>
            <div>
              <p class="text-body-small text-on-surface-variant">Customer</p>
              <p class="text-body-medium text-on-surface">Tech Solutions Inc.</p>
            </div>
            <div>
              <p class="text-body-small text-on-surface-variant">Days Overdue</p>
              <p class="text-body-medium text-error">12 days</p>
            </div>
          </div>
        </Card>

        <!-- Account Balance Card -->
        <Card variant="outlined">
          <template #header>
            <h4 class="text-title-medium text-on-surface">Cash Account - 1001</h4>
          </template>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-body-small text-on-surface-variant">Beginning Balance</p>
                <p class="text-body-medium font-mono tabular-nums text-on-surface">$125,430.50</p>
              </div>
              <div>
                <p class="text-body-small text-on-surface-variant">Current Balance</p>
                <p class="text-title-small font-mono tabular-nums text-on-surface">$98,245.25</p>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-body-small">
                <span class="text-on-surface-variant">Debits (5)</span>
                <span class="font-mono tabular-nums text-on-surface">$45,250.00</span>
              </div>
              <div class="flex justify-between text-body-small">
                <span class="text-on-surface-variant">Credits (3)</span>
                <span class="font-mono tabular-nums text-on-surface">$72,064.75</span>
              </div>
            </div>
          </div>
          <template #footer>
            <p class="text-body-small">Last transaction: 2 hours ago</p>
          </template>
        </Card>
      </div>
    </section>

    <!-- Interactive Example -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Interactive Example</h3>
      <div class="bg-surface-variant rounded-lg p-6 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label class="text-label-medium text-on-surface block mb-2">Variant</label>
            <select 
              v-model="interactive.variant" 
              class="w-full h-10 px-3 border border-outline-variant rounded-md bg-surface text-on-surface"
            >
              <option value="elevated">Elevated</option>
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
            </select>
          </div>
          <div>
            <label class="text-label-medium text-on-surface block mb-2">Padding</label>
            <select 
              v-model="interactive.padding" 
              class="w-full h-10 px-3 border border-outline-variant rounded-md bg-surface text-on-surface"
            >
              <option value="none">None</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
          <div>
            <label class="text-label-medium text-on-surface block mb-2">Density</label>
            <select 
              v-model="interactive.density" 
              class="w-full h-10 px-3 border border-outline-variant rounded-md bg-surface text-on-surface"
            >
              <option value="compact">Compact</option>
              <option value="comfortable">Comfortable</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="interactive.hoverable" />
              <span class="text-label-medium text-on-surface">Hoverable</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="interactive.clickable" />
              <span class="text-label-medium text-on-surface">Clickable</span>
            </label>
          </div>
        </div>
        
        <div class="max-w-md">
          <Card 
            :variant="interactive.variant"
            :padding="interactive.padding"
            :density="interactive.density"
            :hoverable="interactive.hoverable"
            :clickable="interactive.clickable"
            @click="handleCardClick('interactive')"
          >
            <template #header>
              <h4 class="text-title-medium text-on-surface">Interactive Card</h4>
            </template>
            <p class="text-body-medium text-on-surface-variant">
              This card updates based on your selections above. Try changing the options to see how they affect the appearance and behavior.
            </p>
            <template #footer>
              <p class="text-body-small">Configured dynamically</p>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Code Example -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Code Example</h3>
      <div class="bg-surface-variant border border-outline-variant rounded-lg p-4 text-body-small font-mono text-on-surface-variant overflow-x-auto">
        <pre><code>&lt;script setup&gt;
import { Card, Button } from 'pivotui'

const handleViewCustomer = (customerId) =&gt; {
  console.log('Viewing customer:', customerId)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Financial Summary Card --&gt;
  &lt;Card variant="elevated" density="compact"&gt;
    &lt;template #header&gt;
      &lt;h4 class="text-title-medium"&gt;Financial Summary&lt;/h4&gt;
    &lt;/template&gt;
    
    &lt;div class="space-y-3"&gt;
      &lt;div class="flex justify-between"&gt;
        &lt;span&gt;Revenue&lt;/span&gt;
        &lt;span class="font-mono"&gt;$2,451,200.00&lt;/span&gt;
      &lt;/div&gt;
      &lt;div class="flex justify-between"&gt;
        &lt;span&gt;Net Income&lt;/span&gt;
        &lt;span class="font-mono text-success"&gt;$618,750.00&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/Card&gt;

  &lt;!-- Interactive Customer Card --&gt;
  &lt;Card 
    variant="outlined" 
    hoverable 
    clickable 
    @click="handleViewCustomer('CUST-001')"
  &gt;
    &lt;template #header&gt;
      &lt;div class="flex justify-between"&gt;
        &lt;h4&gt;Acme Corporation&lt;/h4&gt;
        &lt;span class="badge"&gt;Active&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    
    &lt;p&gt;Outstanding Balance: $15,750.00&lt;/p&gt;
    
    &lt;template #actions&gt;
      &lt;Button variant="outline" size="sm"&gt;Edit&lt;/Button&gt;
    &lt;/template&gt;
  &lt;/Card&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Card from '../../lib/components/Card.vue'
import Button from '../../lib/components/Button.vue'

const lastClicked = ref('')

const interactive = reactive({
  variant: 'outlined' as const,
  padding: 'md' as const,
  density: 'comfortable' as const,
  hoverable: false,
  clickable: false
})

const handleCardClick = (cardName: string) => {
  lastClicked.value = cardName
  console.log('Card clicked:', cardName)
}

const handleAction = (action: string) => {
  console.log('Action:', action)
  lastClicked.value = `Action: ${action}`
}
</script>