<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Result } from '../lib/calcule'

export default defineComponent({
  name: 'ResultTable',
  props: {
    values: {
      required: true,
      type: Array as PropType<Result[]>
    }
  },
  setup (props) {
    return {
      values: props.values
    }
  }
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Total</th>
        <th>Rendimento</th>
        <th>Total Investido</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in values" :key="row.index">
        <td>{{ $filters.money(row.value) }}</td>
        <td>{{ $filters.money(row.tax) }}</td>
        <td>{{ $filters.money(row.accumulative) }}</td>
      </tr>
    </tbody>
  </table>
</template>