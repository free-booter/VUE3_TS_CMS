<template>
  <div class="pie-chart">
    <base-chart :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import baseChart from './base-chart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartsData } from '../types'

interface IProps {
  pieData: IEchartsData[]
}
const props = defineProps<IProps>()
const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {},
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: props.pieData
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>
