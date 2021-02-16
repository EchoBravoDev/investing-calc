<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { useEntryData } from '../states/entry'
import { calcule, Result } from '../lib/calcule'
import ResultTable from './ResultTable.vue'

export default defineComponent({
  name: 'Result',
  components: {ResultTable},
  setup () {
    const values = ref<Result[]>([])
    const loading = ref(false)
    const { entry } = useEntryData()

    watchEffect(async () => {
      loading.value = true
      try {
        values.value = await calcule({...entry.value})
      } catch (error) {
        values.value = []
      } finally {
        loading.value = false
      }
    })

    return {
      values,
      loading
    }
  }
})
</script>

<template>
  <div v-if="loading">
    Carregando...
  </div>
  <div v-else>

    <ResultTable :values="values" />
  </div>
</template>