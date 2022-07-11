<script lang="ts" setup>
import { ref, computed } from 'vue'

import type { IFormItems } from './types'
interface IProps {
  // TODO: any 类型修正
  modelValue: any
  formItems: IFormItems[]
  rules?: any[]
  showHeader?: boolean
  showFooter?: boolean
  showOperation?: boolean
  labelWidth?: string
  formSize?: string
  itemStyle?: object
  colLayout?: object
}

const props = withDefaults(defineProps<IProps>(), {
  showHeader: false,
  showFooter: false,
  showOperation: true,
  colLayout: () => ({
    xl: 6,
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24
  })
})
const emit = defineEmits(['update:modelValue', 'selectChange'])

// TIP: 日期格式
const formatDate = computed(() => {
  return (item: IFormItems) => {
    return item.otherOptions?.formatDate ?? 'YYYY-MM-DD'
  }
})

// TIP: 组件的双向绑定
// TODO: any 类型修正
const handleValueChange = (value: any, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}

// TIP: 选择项发生改变时
// TODO: any 类型修正
const handleSelectChange = (value: any) => {
  emit('selectChange', value)
}

const formRef = ref(null)
defineExpose({
  formRef
})
</script>

<template>
  <div class="form-wrapper">
    <!-- Header 插槽 -->
    <template v-if="showHeader">
      <div class="form-header"><slot name="header" /></div>
    </template>

    <div class="form-main">
      <el-form
        ref="formRef"
        :label-width="labelWidth"
        :size="formSize"
        :rules="rules"
        :model="modelValue"
      >
        <el-row>
          <template v-for="item in formItems" :key="item.field">
            <template v-if="!item?.otherOptions?.hidden && item.type">
              <el-col v-bind="item?.otherOptions?.unique ? { span: 24 } : colLayout">
                <el-form-item :style="itemStyle" :label="item.label" :prop="item.field">
                  <template v-if="item.element === 'el-input'">
                    <el-input
                      v-bind="item.otherOptions"
                      :type="item.type"
                      :rows="item.otherOptions?.rows"
                      :placeholder="item.placeholder"
                      :show-password="item.type === 'password'"
                      :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="handleValueChange($event, item.field)"
                    />
                  </template>

                  <template v-if="item.element === 'el-select'">
                    <el-select
                      v-bind="item.otherOptions"
                      :placeholder="item.placeholder"
                      :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="handleValueChange($event, item.field)"
                      @change="handleSelectChange"
                    >
                      <el-option
                        v-for="option in item.options"
                        :key="option.title"
                        :label="option.title"
                        :value="option.value"
                      >
                      </el-option>
                    </el-select>
                  </template>

                  <template v-if="item.element === 'el-date-picker'">
                    <el-date-picker
                      v-bind="item.otherOptions"
                      :type="item.type"
                      :placeholder="item.placeholder"
                      :format="formatDate(item)"
                      :value-format="formatDate(item)"
                      :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="handleValueChange($event, item.field)"
                      @change="handleSelectChange"
                    >
                    </el-date-picker>
                  </template>
                </el-form-item>
              </el-col>
            </template>
          </template>
        </el-row>
      </el-form>

      <template v-if="showOperation">
        <!-- FIXME: 该处 style 类型值是? -->
        <div class="operation" :style:HTMLAttributes="itemStyle">
          <slot name="operation" />
        </div>
      </template>
    </div>

    <!-- 底部插槽 -->
    <template v-if="showFooter">
      <div class="form-footer"><slot name="footer" /></div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.form-wrapper {
  padding: 0;
  padding-top: 10px;
}
.form-main {
  display: flex;
  flex-wrap: nowrap;
  .el-form {
    flex: 1;
    padding-right: 15px;
  }
  .operation {
    min-width: 180px;
  }
}

// AIM: 使带图标的控件宽度和不带图标的控件宽度保持一致
:deep(.el-input__wrapper) {
  width: calc(100% - 30px);
}
.el-select,
.el-input,
:deep(.el-date-editor.el-input) {
  width: 100%;
}

//AIM: 去除浏览器自动填充时的背景色
//TODO: 此方法需要优化,效果并不是很好
:deep(input:-internal-autofill-previewed),
:deep(input:-internal-autofill-selected) {
  -webkit-text-fill-color: #000000;
  transition: background-color 5000s ease-out 0.5s;
}
</style>
