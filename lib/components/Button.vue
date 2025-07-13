<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../types/components'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50'
  ]

  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:bg-primary-800 focus-visible:ring-primary-600',
    secondary: 'bg-secondary-container text-on-secondary-container hover:bg-neutral-200 focus-visible:ring-secondary',
    outline: 'border border-outline bg-transparent text-on-surface hover:bg-surface-variant focus-visible:ring-primary',
    ghost: 'text-on-surface hover:bg-surface-variant focus-visible:ring-primary',
    danger: 'bg-error text-on-error hover:bg-error-container focus-visible:ring-error'
  }

  const sizeClasses = {
    sm: 'h-8 px-3 text-label-small',
    md: 'h-10 px-4 text-label-medium',
    lg: 'h-11 px-6 text-label-large'
  }

  return [
    ...baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size]
  ].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.loading-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>