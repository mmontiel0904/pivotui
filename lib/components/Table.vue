<template>
  <div class="table-container">
    <div class="overflow-x-auto rounded-lg border border-outline-variant bg-surface">
      <table class="w-full">
        <thead>
          <tr class="border-b border-outline-variant bg-surface-container">
            <th
              v-for="column in columns"
              :key="column.key"
              :class="getHeaderClasses(column)"
              @click="handleSort(column)"
            >
              <div class="flex items-center gap-2">
                <span>{{ column.title }}</span>
                <span
                  v-if="column.sortable && sortColumn === column.key"
                  class="sort-icon"
                  :class="sortDirection === 'asc' ? 'rotate-180' : ''"
                >
                  ▼
                </span>
                <span
                  v-else-if="column.sortable"
                  class="sort-icon opacity-30"
                >
                  ▼
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in sortedData"
            :key="getRowKey(row, index)"
            :class="getRowClasses(index)"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              :class="getCellClasses(column)"
            >
              <slot
                :name="`cell-${column.key}`"
                :value="getColumnValue(row, column.key)"
                :row="row"
                :column="column"
                :index="index"
              >
                {{ formatValue(getColumnValue(row, column.key), column) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div
        v-if="!sortedData.length"
        class="p-8 text-center text-on-surface-variant"
      >
        <slot name="empty">
          <div class="text-body-medium">No data available</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TableProps, TableColumn } from '../types/components'

const props = withDefaults(defineProps<TableProps>(), {
  density: 'comfortable',
  striped: false,
  hoverable: true,
  sortable: true
})

const emit = defineEmits<{
  sort: [column: string, direction: 'asc' | 'desc']
  rowClick: [row: any, index: number]
}>()

const sortColumn = ref<string>('')
const sortDirection = ref<'asc' | 'desc'>('asc')

const sortedData = computed(() => {
  if (!props.sortable || !sortColumn.value) {
    return props.data
  }

  const column = props.columns.find(col => col.key === sortColumn.value)
  if (!column?.sortable) {
    return props.data
  }

  return [...props.data].sort((a, b) => {
    const aValue = getColumnValue(a, sortColumn.value)
    const bValue = getColumnValue(b, sortColumn.value)
    
    let comparison = 0
    if (aValue < bValue) comparison = -1
    if (aValue > bValue) comparison = 1
    
    return sortDirection.value === 'desc' ? -comparison : comparison
  })
})

const getRowKey = (row: any, index: number): string => {
  return props.rowKey ? row[props.rowKey] : `row-${index}`
}

const getColumnValue = (row: any, key: string): any => {
  return key.split('.').reduce((obj, k) => obj?.[k], row)
}

const formatValue = (value: any, column: TableColumn): string => {
  if (value == null) return ''
  
  if (column.format) {
    return column.format(value)
  }
  
  return String(value)
}

const handleSort = (column: TableColumn) => {
  if (!props.sortable || !column.sortable) return
  
  if (sortColumn.value === column.key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column.key
    sortDirection.value = 'asc'
  }
  
  emit('sort', column.key, sortDirection.value)
}

const getHeaderClasses = (column: TableColumn): string => {
  const baseClasses = [
    'px-4 py-3 text-left text-label-medium font-medium text-on-surface',
    'select-none'
  ]
  
  if (column.sortable && props.sortable) {
    baseClasses.push('cursor-pointer hover:bg-surface-variant transition-colors')
  }
  
  if (column.align === 'center') baseClasses.push('text-center')
  if (column.align === 'right') baseClasses.push('text-right')
  
  return baseClasses.join(' ')
}

const getRowClasses = (index: number): string => {
  const baseClasses = ['border-b border-outline-variant last:border-b-0']
  
  if (props.hoverable) {
    baseClasses.push('hover:bg-surface-variant transition-colors cursor-pointer')
  }
  
  if (props.striped && index % 2 === 1) {
    baseClasses.push('bg-surface-container/30')
  }
  
  return baseClasses.join(' ')
}

const getCellClasses = (column: TableColumn): string => {
  const densityClasses = {
    compact: 'px-4 py-2',
    comfortable: 'px-4 py-3',
    spacious: 'px-4 py-4'
  }
  
  const baseClasses = [
    densityClasses[props.density],
    'text-body-medium text-on-surface'
  ]
  
  if (column.align === 'center') baseClasses.push('text-center')
  if (column.align === 'right') baseClasses.push('text-right')
  if (column.numeric) baseClasses.push('font-mono tabular-nums')
  
  return baseClasses.join(' ')
}
</script>

<style scoped>
.sort-icon {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.table-container {
  @apply w-full;
}
</style>