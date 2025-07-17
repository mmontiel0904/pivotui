<template>
  <div class="space-y-8 bg-surface p-6 rounded-lg">
    <section>
      <h3 class="text-title-large text-on-surface mb-4">Basic Table</h3>
      <Table :columns="basicColumns" :data="basicData" />
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Employee Table with Sorting</h3>
      <Table 
        :columns="employeeColumns" 
        :data="employeeData"
        :sortable="true"
        :hoverable="true"
        @sort="handleSort"
        @row-click="handleRowClick"
      />
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Financial Data (Compact Density)</h3>
      <Table 
        :columns="financialColumns" 
        :data="financialData"
        density="compact"
        :striped="true"
        :sortable="true"
      />
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Table Densities</h3>
      <div class="space-y-4">
        <div>
          <h4 class="text-title-medium text-on-surface mb-2">Compact</h4>
          <Table :columns="densityColumns" :data="densityData" density="compact" />
        </div>
        <div>
          <h4 class="text-title-medium text-on-surface mb-2">Comfortable (Default)</h4>
          <Table :columns="densityColumns" :data="densityData" density="comfortable" />
        </div>
        <div>
          <h4 class="text-title-medium text-on-surface mb-2">Spacious</h4>
          <Table :columns="densityColumns" :data="densityData" density="spacious" />
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Custom Cell Content</h3>
      <Table :columns="statusColumns" :data="statusData">
        <template #cell-status="{ value }">
          <span :class="getStatusClass(value)">
            {{ value }}
          </span>
        </template>
        <template #cell-actions="{ row }">
          <div class="flex gap-2">
            <Button size="sm" variant="outline" @click.stop="editItem(row)">Edit</Button>
            <Button size="sm" variant="danger" @click.stop="deleteItem(row)">Delete</Button>
          </div>
        </template>
      </Table>
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Interactive Example</h3>
      <div class="space-y-4">
        <div class="flex gap-3">
          <Button @click="addRandomEmployee">Add Random Employee</Button>
          <Button variant="outline" @click="clearEmployees">Clear All</Button>
          <Button variant="ghost" @click="toggleStriped">
            {{ isStriped ? 'Disable' : 'Enable' }} Striped Rows
          </Button>
        </div>
        <div v-if="lastAction" class="text-body-small text-on-surface-variant">
          {{ lastAction }}
        </div>
        <Table 
          :columns="interactiveColumns" 
          :data="interactiveData"
          :striped="isStriped"
          :sortable="true"
          @sort="handleInteractiveSort"
        />
      </div>
    </section>

    <section>
      <h3 class="text-title-large text-on-surface mb-4">Code Example</h3>
      <div class="bg-surface-variant border border-outline-variant rounded-lg p-4 text-body-small font-mono text-on-surface-variant">
        <pre><code>&lt;script setup&gt;
import { Table } from 'pivotui'

const columns = [
  { key: 'id', title: 'ID', sortable: true, numeric: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'salary', 
    title: 'Salary', 
    sortable: true, 
    numeric: true,
    align: 'right',
    format: (value) => `$${value.toLocaleString()}`
  }
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@company.com', salary: 75000 },
  { id: 2, name: 'Jane Smith', email: 'jane@company.com', salary: 85000 }
]

const handleSort = (column, direction) => {
  console.log(`Sorting by ${column} in ${direction} order`)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;Table 
    :columns="columns" 
    :data="data"
    :sortable="true"
    density="comfortable"
    @sort="handleSort"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table, Button } from '@lib/components'
import type { TableColumn } from '@lib/types/components'

const lastAction = ref('')
const isStriped = ref(false)

// Basic table data
const basicColumns: TableColumn[] = [
  { key: 'id', title: 'ID', sortable: true, numeric: true },
  { key: 'name', title: 'Product Name', sortable: true },
  { key: 'category', title: 'Category', sortable: true }
]

const basicData = [
  { id: 1, name: 'Laptop Pro 15"', category: 'Electronics' },
  { id: 2, name: 'Office Chair', category: 'Furniture' },
  { id: 3, name: 'Wireless Mouse', category: 'Electronics' }
]

// Employee table data
const employeeColumns: TableColumn[] = [
  { key: 'id', title: 'Employee ID', sortable: true, numeric: true },
  { key: 'name', title: 'Full Name', sortable: true },
  { key: 'department', title: 'Department', sortable: true },
  { key: 'email', title: 'Email Address', sortable: true },
  { 
    key: 'salary', 
    title: 'Annual Salary', 
    sortable: true, 
    numeric: true,
    align: 'right',
    format: (value: number) => `$${value.toLocaleString()}`
  }
]

const employeeData = [
  { id: 1001, name: 'Alice Johnson', department: 'Engineering', email: 'alice.johnson@company.com', salary: 95000 },
  { id: 1002, name: 'Bob Smith', department: 'Marketing', email: 'bob.smith@company.com', salary: 72000 },
  { id: 1003, name: 'Carol Davis', department: 'Finance', email: 'carol.davis@company.com', salary: 88000 },
  { id: 1004, name: 'David Wilson', department: 'Engineering', email: 'david.wilson@company.com', salary: 102000 },
  { id: 1005, name: 'Eva Brown', department: 'HR', email: 'eva.brown@company.com', salary: 67000 }
]

// Financial data
const financialColumns: TableColumn[] = [
  { key: 'account', title: 'Account', sortable: true },
  { key: 'type', title: 'Type', sortable: true },
  { 
    key: 'debit', 
    title: 'Debit', 
    align: 'right', 
    numeric: true,
    format: (value: number) => value ? `$${value.toLocaleString()}` : '-'
  },
  { 
    key: 'credit', 
    title: 'Credit', 
    align: 'right', 
    numeric: true,
    format: (value: number) => value ? `$${value.toLocaleString()}` : '-'
  },
  { 
    key: 'balance', 
    title: 'Balance', 
    align: 'right', 
    numeric: true,
    format: (value: number) => `$${value.toLocaleString()}`
  }
]

const financialData = [
  { account: '1000 - Cash', type: 'Asset', debit: 50000, credit: 0, balance: 50000 },
  { account: '1200 - Accounts Receivable', type: 'Asset', debit: 25000, credit: 0, balance: 25000 },
  { account: '2000 - Accounts Payable', type: 'Liability', debit: 0, credit: 15000, balance: -15000 },
  { account: '3000 - Owner\'s Equity', type: 'Equity', debit: 0, credit: 60000, balance: -60000 }
]

// Density example data
const densityColumns: TableColumn[] = [
  { key: 'id', title: 'ID', numeric: true },
  { key: 'item', title: 'Item' },
  { key: 'status', title: 'Status' }
]

const densityData = [
  { id: 1, item: 'Sample Item 1', status: 'Active' },
  { id: 2, item: 'Sample Item 2', status: 'Pending' },
  { id: 3, item: 'Sample Item 3', status: 'Inactive' }
]

// Status table with custom cells
const statusColumns: TableColumn[] = [
  { key: 'id', title: 'Order ID', sortable: true, numeric: true },
  { key: 'customer', title: 'Customer', sortable: true },
  { key: 'status', title: 'Status' },
  { key: 'actions', title: 'Actions', align: 'center' }
]

const statusData = [
  { id: 1001, customer: 'Acme Corp', status: 'Completed' },
  { id: 1002, customer: 'Tech Solutions', status: 'Processing' },
  { id: 1003, customer: 'Global Industries', status: 'Pending' },
  { id: 1004, customer: 'Local Business', status: 'Cancelled' }
]

// Interactive table
const interactiveColumns: TableColumn[] = [
  { key: 'id', title: 'ID', sortable: true, numeric: true },
  { key: 'name', title: 'Name', sortable: true },
  { key: 'role', title: 'Role', sortable: true }
]

const interactiveData = ref([
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' }
])

const handleSort = (column: string, direction: 'asc' | 'desc') => {
  lastAction.value = `Sorted by ${column} in ${direction} order`
}

const handleRowClick = (row: any, index: number) => {
  lastAction.value = `Clicked on row ${index + 1}: ${row.name}`
}

const handleInteractiveSort = (column: string, direction: 'asc' | 'desc') => {
  lastAction.value = `Interactive table sorted by ${column} (${direction})`
}

const getStatusClass = (status: string) => {
  const baseClasses = 'px-2 py-1 rounded-md text-label-small font-medium'
  switch (status) {
    case 'Completed':
      return `${baseClasses} bg-success-container text-on-success-container`
    case 'Processing':
      return `${baseClasses} bg-warning-container text-on-warning-container`
    case 'Pending':
      return `${baseClasses} bg-secondary-container text-on-secondary-container`
    case 'Cancelled':
      return `${baseClasses} bg-error-container text-on-error-container`
    default:
      return `${baseClasses} bg-surface-variant text-on-surface-variant`
  }
}

const editItem = (row: any) => {
  lastAction.value = `Edit action for: ${row.customer}`
}

const deleteItem = (row: any) => {
  lastAction.value = `Delete action for: ${row.customer}`
}

const addRandomEmployee = () => {
  const names = ['Mike Johnson', 'Sarah Wilson', 'Tom Brown', 'Lisa Garcia', 'Chris Lee']
  const roles = ['Developer', 'Designer', 'Manager', 'Analyst', 'Coordinator']
  
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomRole = roles[Math.floor(Math.random() * roles.length)]
  const newId = Math.max(...interactiveData.value.map(e => e.id)) + 1
  
  interactiveData.value.push({
    id: newId,
    name: randomName,
    role: randomRole
  })
  
  lastAction.value = `Added new employee: ${randomName}`
}

const clearEmployees = () => {
  interactiveData.value = []
  lastAction.value = 'Cleared all employees'
}

const toggleStriped = () => {
  isStriped.value = !isStriped.value
  lastAction.value = `${isStriped.value ? 'Enabled' : 'Disabled'} striped rows`
}
</script>