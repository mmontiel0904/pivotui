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

export interface InputProps {
  variant?: 'filled' | 'outlined' | 'underlined'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  modelValue?: string | number
  density?: 'compact' | 'comfortable' | 'spacious'
  prefix?: string
  suffix?: string
  currency?: boolean
}

export interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
  density?: 'compact' | 'comfortable' | 'spacious'
}