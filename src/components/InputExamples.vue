<template>
  <div class="space-y-8">
    <!-- Variants -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Variants</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input 
          v-model="sampleValues.outlined"
          variant="outlined" 
          label="Outlined" 
          placeholder="Enter text..."
        />
        <Input 
          v-model="sampleValues.filled"
          variant="filled" 
          label="Filled" 
          placeholder="Enter text..."
        />
        <Input 
          v-model="sampleValues.underlined"
          variant="underlined" 
          label="Underlined" 
          placeholder="Enter text..."
        />
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Sizes</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input 
          v-model="sampleValues.small"
          size="sm" 
          label="Small" 
          placeholder="Small input..."
        />
        <Input 
          v-model="sampleValues.medium"
          size="md" 
          label="Medium" 
          placeholder="Medium input..."
        />
        <Input 
          v-model="sampleValues.large"
          size="lg" 
          label="Large" 
          placeholder="Large input..."
        />
      </div>
    </section>

    <!-- Density Modes -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Density Modes</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Input 
          v-model="sampleValues.compact"
          density="compact" 
          label="Compact" 
          placeholder="Compact density..."
          helper-text="Optimal for data-heavy forms"
        />
        <Input 
          v-model="sampleValues.comfortable"
          density="comfortable" 
          label="Comfortable" 
          placeholder="Comfortable density..."
          helper-text="Balanced spacing for most use cases"
        />
        <Input 
          v-model="sampleValues.spacious"
          density="spacious" 
          label="Spacious" 
          placeholder="Spacious density..."
          helper-text="Generous spacing for accessibility"
        />
      </div>
    </section>

    <!-- Input Types -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Input Types</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Input 
          v-model="sampleValues.text"
          type="text" 
          label="Text Input" 
          placeholder="Enter text..."
        />
        <Input 
          v-model="sampleValues.email"
          type="email" 
          label="Email" 
          placeholder="user@example.com"
        />
        <Input 
          v-model="sampleValues.password"
          type="password" 
          label="Password" 
          placeholder="Enter password..."
        />
        <Input 
          v-model="sampleValues.number"
          type="number" 
          label="Number" 
          placeholder="0"
        />
        <Input 
          v-model="sampleValues.tel"
          type="tel" 
          label="Phone" 
          placeholder="(555) 123-4567"
        />
        <Input 
          v-model="sampleValues.url"
          type="url" 
          label="Website" 
          placeholder="https://example.com"
        />
      </div>
    </section>

    <!-- ERP Features -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">ERP Features</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          v-model="sampleValues.currency"
          currency 
          label="Amount" 
          placeholder="0.00"
          helper-text="Currency formatting for financial data"
        />
        <Input 
          v-model="sampleValues.withPrefix"
          prefix="ID-" 
          label="Invoice Number" 
          placeholder="12345"
        />
        <Input 
          v-model="sampleValues.withSuffix"
          suffix="%" 
          label="Tax Rate" 
          placeholder="8.25"
        />
        <Input 
          v-model="sampleValues.account"
          prefix="ACC-" 
          suffix="-GL" 
          label="Account Code" 
          placeholder="1000"
          helper-text="General ledger account identifier"
        />
      </div>
    </section>

    <!-- States -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">States</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          v-model="sampleValues.required"
          required 
          label="Required Field" 
          placeholder="This field is required"
          helper-text="Required fields are marked with an asterisk"
        />
        <Input 
          v-model="sampleValues.disabled"
          disabled 
          label="Disabled Field" 
          placeholder="Cannot edit this field"
          helper-text="Field is disabled"
        />
        <Input 
          v-model="sampleValues.error"
          error 
          label="Error State" 
          placeholder="Invalid input"
          helper-text="Please enter a valid value"
        />
        <Input 
          v-model="sampleValues.success"
          label="Success State" 
          placeholder="Valid input"
          helper-text="Input validation passed"
        />
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
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
              <option value="underlined">Underlined</option>
            </select>
          </div>
          <div>
            <label class="text-label-medium text-on-surface block mb-2">Size</label>
            <select 
              v-model="interactive.size" 
              class="w-full h-10 px-3 border border-outline-variant rounded-md bg-surface text-on-surface"
            >
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
          <div>
            <label class="text-label-medium text-on-surface block mb-2">Type</label>
            <select 
              v-model="interactive.type" 
              class="w-full h-10 px-3 border border-outline-variant rounded-md bg-surface text-on-surface"
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-4 mb-4">
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="interactive.required" />
            <span class="text-label-medium text-on-surface">Required</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="interactive.disabled" />
            <span class="text-label-medium text-on-surface">Disabled</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="interactive.error" />
            <span class="text-label-medium text-on-surface">Error</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="interactive.currency" />
            <span class="text-label-medium text-on-surface">Currency</span>
          </label>
        </div>
        
        <div class="max-w-md">
          <Input 
            v-model="interactive.value"
            :variant="interactive.variant"
            :size="interactive.size"
            :density="interactive.density"
            :type="interactive.type"
            :required="interactive.required"
            :disabled="interactive.disabled"
            :error="interactive.error"
            :currency="interactive.currency"
            label="Interactive Input"
            placeholder="Try changing the options above..."
            helper-text="This input updates based on your selections"
          />
        </div>
        
        <div class="text-body-small text-on-surface-variant">
          Current value: <span class="font-mono">{{ interactive.value || 'empty' }}</span>
        </div>
      </div>
    </section>

    <!-- Code Example -->
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Code Example</h3>
      <div class="bg-surface-variant border border-outline-variant rounded-lg p-4 text-body-small font-mono text-on-surface-variant overflow-x-auto">
        <pre><code>&lt;script setup&gt;
import { ref } from 'vue'
import { Input } from 'pivotui'

const customerName = ref('')
const invoiceAmount = ref(0)
const accountCode = ref('')
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="space-y-4"&gt;
    &lt;!-- Basic input --&gt;
    &lt;Input 
      v-model="customerName"
      label="Customer Name" 
      placeholder="Enter customer name..."
      required
    /&gt;
    
    &lt;!-- Currency input --&gt;
    &lt;Input 
      v-model="invoiceAmount"
      type="number"
      currency
      label="Invoice Amount" 
      placeholder="0.00"
      helper-text="Enter amount in USD"
    /&gt;
    
    &lt;!-- Prefixed input --&gt;
    &lt;Input 
      v-model="accountCode"
      prefix="ACC-"
      suffix="-GL"
      label="Account Code" 
      placeholder="1000"
      density="compact"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Input from '../../lib/components/Input.vue'

const sampleValues = reactive({
  outlined: '',
  filled: '',
  underlined: '',
  small: '',
  medium: '',
  large: '',
  compact: '',
  comfortable: '',
  spacious: '',
  text: '',
  email: '',
  password: '',
  number: 0,
  tel: '',
  url: '',
  currency: 0,
  withPrefix: '',
  withSuffix: '',
  account: '',
  required: '',
  disabled: 'Cannot edit',
  error: 'Invalid value',
  success: 'Valid input'
})

const interactive = reactive({
  variant: 'outlined' as const,
  size: 'md' as const,
  density: 'comfortable' as const,
  type: 'text' as const,
  required: false,
  disabled: false,
  error: false,
  currency: false,
  value: ''
})
</script>