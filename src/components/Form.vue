<script lang="ts">
import { defineComponent, reactive, watchEffect, nextTick } from 'vue'
import { useEntryData } from '../states/entry'
import { Entry } from '../lib/calcule'
import Maska from 'maska'

export type FormData = {
  initialValue: number
  monthlyValue: number
  monthlyTax: number
  period: number
}

export default defineComponent({
  name: 'Form',
  setup() {
    const { entry, setState } = useEntryData()

    const model = reactive({
      initialValue: '1000',
      monthlyValue: '0'
    })

    Object.keys(model)
      .forEach((key:  string) => {
        // @ts-ignore
        model[key] = String(entry.value[key])
      })

    const form: Entry = reactive({
      initialValue: 0,
      monthlyValue: 0,
      monthlyTax: 0,
      period: 0,
    })

    watchEffect(() => {
      Object.assign(form, entry.value)
    })

    const onInputMask = (el: Event) => {
      const target = el.target as HTMLInputElement

      nextTick(() => {
        const {name, dataset} = target
        const value = parseInt(dataset?.maskRawValue || "0")
        // @ts-ignore
        form[name] = value
      })
    }

    const calcule = () => {
      setState({ ...form })
    }

    return {
      onInputMask,
      calcule,
      model,
      form
    }
  }
})
</script>

<template>
  <div class="entry-form">
    <div class="grid grid-cols-1 gap-2">
      <label>
        Aporte inicial
        <input
          v-model="model.initialValue"
          v-maska="'R$ #*'"
          @maska=onInputMask
          type="text"
          inputmode="numeric"
          name="initialValue">
      </label>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <label>
        Aporte mensal
        <input
          v-model="model.monthlyValue"
          v-maska="'R$ #*'"
          type="text"
          @maska=onInputMask
          inputmode="numeric"
          name="monthlyValue">
      </label>

      <label>
        Juros mensais (%)
        <input
          v-model.number="form.monthlyTax"
          type="number"
          inputmode="numeric"
          name="monthly-tax">
      </label>
    </div>
    <div class="grid grid-cols-1 gap-2">
      <label>
        Período (meses)
        <input
          v-model.number="form.period"
          type="number"
          inputmode="numeric"
          name="period">
      </label>
      <button @click="calcule">
        Calcular
      </button>
    </div>
  </div>
</template>

<style>
.entry-form {
  @apply mt-5
}
</style>