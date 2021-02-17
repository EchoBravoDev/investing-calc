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
  <table id="result-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Total</th>
        <th>Rendimento</th>
        <th>Total Investido</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in values" :key="row.index">
        <td>{{ row.index }}</td>
        <td>{{ $filters.money(row.value) }}</td>
        <td>{{ $filters.money(row.tax) }}</td>
        <td>{{ $filters.money(row.accumulative) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
#result-table thead tr th:first-child {
  width: 10px;
  text-align: center;
}

#result-table thead tr th:first-child, #result-table tbody tr td:first-child {
  @apply text-gray-400;
}
</style>