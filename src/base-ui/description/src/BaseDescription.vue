<script lang="ts" setup>
interface IDescription {
  name: string
  description: string
}
interface IProps {
  descriptionData: IDescription[]
  title?: string
  column?: number
  isShowBorder?: boolean
}
withDefaults(defineProps<IProps>(), {
  descriptionData: () => [],
  title: '',
  column: 1,
  isShowBorder: true
})
</script>

<template>
  <div class="base-description">
    <el-descriptions :title="title" :column="column" :border="isShowBorder">
      <template v-for="(itemData, index) in descriptionData" :key="index">
        <el-descriptions-item>
          <template #label> {{ itemData.name }} </template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<style lang="less" scoped>
.base-description {
  margin-bottom: 20px;
}
</style>
