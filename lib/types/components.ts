export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface TableColumn {
  key: string
  title: string
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  numeric?: boolean
  format?: (value: any) => string
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  density?: 'compact' | 'comfortable' | 'spacious'
  striped?: boolean
  hoverable?: boolean
  sortable?: boolean
  rowKey?: string
}