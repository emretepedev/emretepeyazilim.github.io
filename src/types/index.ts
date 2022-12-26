export interface Item {
  name: string
  image: string
  category: string
  url: string
  color?: string
  description: string
}

export interface Header {
  text?: string
  value: string
  class?: string
  divider?: boolean
  align?: string
  groupable?: boolean
  sortable?: boolean
  filterable?: boolean
}

export interface DataTableProps {
  headers: Header[]
  items: Item[]
}
