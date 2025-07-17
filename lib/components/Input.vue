<template>
  <div :class="containerClasses">
    <!-- Label -->
    <label 
      v-if="$slots.label || label" 
      :for="inputId"
      :class="labelClasses"
    >
      <slot name="label">{{ label }}</slot>
      <span v-if="required" class="text-error ml-1">*</span>
    </label>

    <!-- Input Container -->
    <div :class="inputContainerClasses">
      <!-- Prefix -->
      <span v-if="prefix || currency" :class="affixClasses">
        {{ currency ? '$' : prefix }}
      </span>

      <!-- Input Element -->
      <input
        :id="inputId"
        ref="inputRef"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <!-- Suffix -->
      <span v-if="suffix" :class="affixClasses">
        {{ suffix }}
      </span>

      <!-- Error Icon -->
      <div v-if="error" class="flex items-center justify-center w-5 h-5 text-error">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Helper Text -->
    <div v-if="helperText || error" :class="helperTextClasses">
      {{ helperText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import type { InputProps } from '../types/components'

const props = withDefaults(defineProps<InputProps & { label?: string }>(), {
  variant: 'outlined',
  size: 'md',
  type: 'text',
  density: 'comfortable',
  disabled: false,
  required: false,
  error: false,
  currency: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputRef = ref<HTMLInputElement>()
const inputId = useId()
const isFocused = ref(false)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value
  
  if (props.type === 'number') {
    value = target.valueAsNumber || 0
  }
  
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const containerClasses = computed(() => {
  const densitySpacing = {
    compact: 'space-y-1',
    comfortable: 'space-y-2',
    spacious: 'space-y-3'
  }
  
  return [
    'w-full',
    densitySpacing[props.density]
  ].join(' ')
})

const labelClasses = computed(() => {
  const sizeClasses = {
    sm: 'text-label-small',
    md: 'text-label-medium',
    lg: 'text-label-large'
  }
  
  return [
    'block font-medium',
    sizeClasses[props.size],
    props.error ? 'text-error' : 'text-on-surface',
    props.disabled ? 'opacity-50' : ''
  ].join(' ')
})

const inputContainerClasses = computed(() => {
  const baseClasses = [
    'relative flex items-center',
    'transition-colors duration-200',
    'rounded-md'
  ]
  
  const variantClasses = {
    filled: [
      'bg-surface-variant border-0 border-b-2',
      props.error ? 'border-error' : 
      isFocused.value ? 'border-primary' : 'border-outline'
    ],
    outlined: [
      'bg-surface border-2',
      props.error ? 'border-error' : 
      isFocused.value ? 'border-primary' : 'border-outline-variant'
    ],
    underlined: [
      'bg-transparent border-0 border-b-2',
      props.error ? 'border-error' : 
      isFocused.value ? 'border-primary' : 'border-outline'
    ]
  }
  
  const disabledClasses = props.disabled ? [
    'opacity-50 pointer-events-none'
  ] : []
  
  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    ...disabledClasses
  ].join(' ')
})

const inputClasses = computed(() => {
  const baseClasses = [
    'flex-1 bg-transparent border-0 outline-none',
    'text-on-surface placeholder:text-on-surface-variant',
    props.currency || props.type === 'number' ? 'font-mono tabular-nums' : 'font-sans'
  ]
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-body-small',
    md: 'h-10 px-4 text-body-medium',
    lg: 'h-11 px-6 text-body-large'
  }
  
  const densityClasses = {
    compact: props.size === 'sm' ? 'h-7 px-2' : props.size === 'md' ? 'h-8 px-3' : 'h-9 px-4',
    comfortable: sizeClasses[props.size],
    spacious: props.size === 'sm' ? 'h-9 px-4' : props.size === 'md' ? 'h-12 px-5' : 'h-14 px-7'
  }
  
  return [
    ...baseClasses,
    densityClasses[props.density]
  ].join(' ')
})

const affixClasses = computed(() => {
  const sizeClasses = {
    sm: 'text-label-small px-2',
    md: 'text-label-medium px-3',
    lg: 'text-label-large px-4'
  }
  
  return [
    'text-on-surface-variant font-medium',
    sizeClasses[props.size]
  ].join(' ')
})

const helperTextClasses = computed(() => {
  const sizeClasses = {
    sm: 'text-label-small',
    md: 'text-body-small',
    lg: 'text-body-medium'
  }
  
  return [
    sizeClasses[props.size],
    props.error ? 'text-error' : 'text-on-surface-variant'
  ].join(' ')
})
</script>