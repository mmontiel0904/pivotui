<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-display-small text-on-surface mb-4">Table</h1>
      <p class="text-body-large text-on-surface-variant max-w-2xl">
        A powerful data table component optimized for ERP applications with sorting, 
        custom formatting, multiple density options, and flexible cell content. 
        Perfect for displaying financial data, employee records, and business analytics.
      </p>
    </div>
    
    <div class="bg-surface rounded-lg p-6 border border-outline-variant">
      <TableExamples />
    </div>

    <div class="space-y-6">
      <section>
        <h2 class="text-headline-medium text-on-surface mb-4">Features</h2>
        <div class="grid md:grid-cols-2 gap-4 text-body-medium text-on-surface-variant">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Sortable columns with visual indicators</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Multiple density options (compact, comfortable, spacious)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Custom cell formatting and content</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Striped and hoverable row options</span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Numeric column alignment and formatting</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Empty state customization</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Row and column click events</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Material Design 3 styling</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-headline-medium text-on-surface mb-4">Props</h2>
        <div class="overflow-x-auto">
          <table class="w-full border border-outline-variant rounded-lg">
            <thead>
              <tr class="bg-surface-container border-b border-outline-variant">
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Prop</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Type</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Default</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody class="text-body-medium text-on-surface">
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">columns</td>
                <td class="px-4 py-3 font-mono">TableColumn[]</td>
                <td class="px-4 py-3">-</td>
                <td class="px-4 py-3">Array of column definitions</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">data</td>
                <td class="px-4 py-3 font-mono">any[]</td>
                <td class="px-4 py-3">-</td>
                <td class="px-4 py-3">Array of data objects</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">density</td>
                <td class="px-4 py-3 font-mono">'compact' | 'comfortable' | 'spacious'</td>
                <td class="px-4 py-3">'comfortable'</td>
                <td class="px-4 py-3">Row height and padding density</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">striped</td>
                <td class="px-4 py-3 font-mono">boolean</td>
                <td class="px-4 py-3">false</td>
                <td class="px-4 py-3">Alternating row background colors</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">hoverable</td>
                <td class="px-4 py-3 font-mono">boolean</td>
                <td class="px-4 py-3">true</td>
                <td class="px-4 py-3">Row hover effects</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">sortable</td>
                <td class="px-4 py-3 font-mono">boolean</td>
                <td class="px-4 py-3">true</td>
                <td class="px-4 py-3">Enable global sorting functionality</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-mono text-primary">rowKey</td>
                <td class="px-4 py-3 font-mono">string</td>
                <td class="px-4 py-3">-</td>
                <td class="px-4 py-3">Property to use as unique row identifier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="text-headline-medium text-on-surface mb-4">Column Configuration</h2>
        <div class="overflow-x-auto">
          <table class="w-full border border-outline-variant rounded-lg">
            <thead>
              <tr class="bg-surface-container border-b border-outline-variant">
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Property</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Type</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody class="text-body-medium text-on-surface">
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">key</td>
                <td class="px-4 py-3 font-mono">string</td>
                <td class="px-4 py-3">Property key in data object</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">title</td>
                <td class="px-4 py-3 font-mono">string</td>
                <td class="px-4 py-3">Column header text</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">sortable</td>
                <td class="px-4 py-3 font-mono">boolean</td>
                <td class="px-4 py-3">Enable sorting for this column</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">align</td>
                <td class="px-4 py-3 font-mono">'left' | 'center' | 'right'</td>
                <td class="px-4 py-3">Text alignment</td>
              </tr>
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">numeric</td>
                <td class="px-4 py-3 font-mono">boolean</td>
                <td class="px-4 py-3">Apply monospace font and tabular numbers</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-mono text-primary">format</td>
                <td class="px-4 py-3 font-mono">(value: any) => string</td>
                <td class="px-4 py-3">Custom value formatting function</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="text-headline-medium text-on-surface mb-4">Events</h2>
        <div class="overflow-x-auto">
          <table class="w-full border border-outline-variant rounded-lg">
            <thead>
              <tr class="bg-surface-container border-b border-outline-variant">
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Event</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Payload</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody class="text-body-medium text-on-surface">
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">sort</td>
                <td class="px-4 py-3 font-mono">(column: string, direction: 'asc' | 'desc')</td>
                <td class="px-4 py-3">Fired when column sorting changes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-mono text-primary">rowClick</td>
                <td class="px-4 py-3 font-mono">(row: any, index: number)</td>
                <td class="px-4 py-3">Fired when a row is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="text-headline-medium text-on-surface mb-4">Slots</h2>
        <div class="overflow-x-auto">
          <table class="w-full border border-outline-variant rounded-lg">
            <thead>
              <tr class="bg-surface-container border-b border-outline-variant">
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Slot</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Props</th>
                <th class="px-4 py-3 text-left text-label-medium font-medium text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody class="text-body-medium text-on-surface">
              <tr class="border-b border-outline-variant">
                <td class="px-4 py-3 font-mono text-primary">cell-{column.key}</td>
                <td class="px-4 py-3 font-mono">{ value, row, column, index }</td>
                <td class="px-4 py-3">Custom cell content for specific columns</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-mono text-primary">empty</td>
                <td class="px-4 py-3 font-mono">-</td>
                <td class="px-4 py-3">Custom empty state content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import TableExamples from '../TableExamples.vue'
</script>