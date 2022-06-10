<script setup lang="ts">
interface IProps {
  title?: string
}
withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<template>
  <el-card class="card-wrapper">
    <template #header v-if="title">
      <span class="card-title">{{ title }}</span>
    </template>

    <div class="card-content">
      <slot></slot>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #409eff;
}
</style>
