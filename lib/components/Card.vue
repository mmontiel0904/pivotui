<template>
  <div 
    :class="cardClasses"
    @click="handleClick"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeydown"
  >
    <!-- Header Slot -->
    <header v-if="$slots.header" :class="headerClasses">
      <slot name="header"/>
    </header>

    <!-- Main Content -->
    <div :class="contentClasses">
      <slot />
    </div>

    <!-- Footer Slot -->
    <footer v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </footer>

    <!-- Actions Slot -->
    <div v-if="$slots.actions" :class="actionsClasses">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '../types/components'

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'outlined',
  padding: 'md',
  density: 'comfortable',
  hoverable: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.clickable && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    emit('click', event as any)
  }
}

const cardClasses = computed(() => {
  const baseClasses = [
    'rounded-md transition-all duration-200',
    'bg-surface text-on-surface'
  ]
  
  const variantClasses = {
    elevated: [
      'shadow-md border border-outline-variant/20',
      props.hoverable ? 'hover:shadow-lg hover:-translate-y-0.5' : ''
    ],
    outlined: [
      'border border-outline-variant',
      props.hoverable ? 'hover:border-outline hover:shadow-sm' : ''
    ],
    filled: [
      'bg-surface-variant border-0',
      props.hoverable ? 'hover:bg-surface-variant/80 hover:shadow-sm' : ''
    ]
  }
  
  const clickableClasses = props.clickable ? [
    'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    'active:scale-[0.98]'
  ] : []
  
  const densityClasses = {
    compact: 'space-y-2',
    comfortable: 'space-y-3',
    spacious: 'space-y-4'
  }
  
  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    ...clickableClasses,
    densityClasses[props.density]
  ].join(' ')
})

const paddingClasses = computed(() => {
  const paddingMap = {
    none: '',
    sm: {
      compact: 'p-3',
      comfortable: 'p-4',
      spacious: 'p-5'
    },
    md: {
      compact: 'p-4',
      comfortable: 'p-6',
      spacious: 'p-8'
    },
    lg: {
      compact: 'p-6',
      comfortable: 'p-8',
      spacious: 'p-10'
    }
  }
  
  if (props.padding === 'none') return ''
  return paddingMap[props.padding][props.density]
})

const headerClasses = computed(() => {
  const baseClasses = [
    'border-b border-outline-variant'
  ]
  
  const paddingClasses = {
    none: 'py-3 px-3',
    sm: {
      compact: 'py-2 px-3',
      comfortable: 'py-3 px-4',
      spacious: 'py-4 px-5'
    },
    md: {
      compact: 'py-3 px-4',
      comfortable: 'py-4 px-6',
      spacious: 'py-5 px-8'
    },
    lg: {
      compact: 'py-4 px-6',
      comfortable: 'py-5 px-8',
      spacious: 'py-6 px-10'
    }
  }
  
  const headerPadding = props.padding === 'none' ? 'py-3 px-3' : paddingClasses[props.padding][props.density]
  
  return [
    ...baseClasses,
    headerPadding
  ].join(' ')
})

const contentClasses = computed(() => {
  return paddingClasses.value
})

const footerClasses = computed(() => {
  const baseClasses = [
    'border-t border-outline-variant text-on-surface-variant'
  ]
  
  const paddingClasses = {
    none: 'py-3 px-3',
    sm: {
      compact: 'py-2 px-3',
      comfortable: 'py-3 px-4',
      spacious: 'py-4 px-5'
    },
    md: {
      compact: 'py-3 px-4',
      comfortable: 'py-4 px-6',
      spacious: 'py-5 px-8'
    },
    lg: {
      compact: 'py-4 px-6',
      comfortable: 'py-5 px-8',
      spacious: 'py-6 px-10'
    }
  }
  
  const footerPadding = props.padding === 'none' ? 'py-3 px-3' : paddingClasses[props.padding][props.density]
  
  return [
    ...baseClasses,
    footerPadding
  ].join(' ')
})

const actionsClasses = computed(() => {
  const baseClasses = [
    'flex items-center justify-end gap-3 border-t border-outline-variant'
  ]
  
  const paddingClasses = {
    none: 'py-3 px-3',
    sm: {
      compact: 'py-2 px-3',
      comfortable: 'py-3 px-4',
      spacious: 'py-4 px-5'
    },
    md: {
      compact: 'py-3 px-4',
      comfortable: 'py-4 px-6',
      spacious: 'py-5 px-8'
    },
    lg: {
      compact: 'py-4 px-6',
      comfortable: 'py-5 px-8',
      spacious: 'py-6 px-10'
    }
  }
  
  const actionsPadding = props.padding === 'none' ? 'py-3 px-3' : paddingClasses[props.padding][props.density]
  
  return [
    ...baseClasses,
    actionsPadding
  ].join(' ')
})
</script>