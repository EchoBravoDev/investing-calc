<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import { useEntryData } from '../states/entry'
import { Entry } from '../lib/calcule'

export type FormData = {
  initialValue: number
  monthlyValue: number
  monthlyTax: number
  period: number
}

export default defineComponent({
  name: 'Form',
  setup(_, { emit }) {
    const { entry, setState } = useEntryData()
    const form: Entry = reactive({
      initialValue: 0,
      monthlyValue: 0,
      monthlyTax: 0,
      period: 0,
    })

    watchEffect(() => {
      Object.assign(form, entry.value)
    })

    const calcule = () => {
      setState({ ...form })
    }

    return {
      calcule,
      form
    }
  }
})
</script>

<template>
  <div class="grid grid-cols-1 gap-2">
    <label>
      Aporte inicial
      <input
        v-model.number="form.initialValue"
        type="number"
        name="initial-value">
    </label>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <label>
      Aporte mensal
      <input
        v-model.number="form.monthlyValue"
        type="number"
        name="monthly-value">
    </label>

    <label>
      Juros mensais (%)
      <input
        v-model.number="form.monthlyTax"
        type="number"
        name="monthly-value">
    </label>
  </div>
  <div class="grid grid-cols-1 gap-2">
    <label>
      Período (meses)
      <input
        v-model.number="form.period"
        type="number"
        name="initial-value">
    </label>
    <button @click="calcule">
      Calcular
    </button>
  </div>
</template>