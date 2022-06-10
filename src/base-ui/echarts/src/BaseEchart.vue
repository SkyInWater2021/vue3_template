<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

interface IProps {
  height: string
  options: EChartsOption
  width?: string
}
const props = withDefaults(defineProps<IProps>(), {
  width: '100%'
})

const echartContainerRef = ref()

onMounted(() => {
  const { setOptions } = useEchart(echartContainerRef.value)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<template>
  <div class="echart-wrapper">
    <div ref="echartContainerRef" :style="{ width, height }"></div>
  </div>
</template>

<style scoped></style>
