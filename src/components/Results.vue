<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useEntryData } from '../states/entry'
import { calcule, Result } from '../lib/calcule'

export default defineComponent({
  name: 'Result',
  setup () {
    const values = ref<Result[]>([])
    const { entry } = useEntryData()

    watchEffect(async () => {
      values.value = await calcule({...entry.value})
    })

    return {
      values,
      entry
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
        <td>{{ row.value }}</td>
        <td>{{ row.tax }}</td>
        <td>{{ row.accumulative }}</td>
      </tr>
    </tbody>
  </table>
</template>