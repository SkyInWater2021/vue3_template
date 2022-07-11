export type FormItemType = 'input' | 'textarea' | 'password' | 'select' | 'date'

export type FormItemElement = 'el-select' | 'el-input' | 'el-textarea' | 'el-date-picker'

export interface IFormItems {
  label: string
  field: string
  type: FormItemType
  element: FormItemElement
  // TODO: 如果 type === select 的时候,该值为必传,其他情况不传
  options?: any[]
  defaultValue?: string
  placeholder?: string
  otherOptions?: {
    hidden?: boolean
    disabled?: boolean
    readonly?: boolean
    show?: boolean
    formatDate?: string
    unique: boolean
    rows?: number
  }
}
