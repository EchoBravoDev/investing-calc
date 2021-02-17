<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Result } from '../lib/calcule'

export default defineComponent({
  name: 'ResultResume',
  props: {
    values: {
      required: true,
      type: Array as PropType<Result[]>
    }
  },
  setup (props) {
    return {
      result: computed(() => {
        const { values } = props
        const size = values.length

        const last = values[size - 1] || {
          accumulative: 0,
          value: 0,
          tax: 0,
          index: '#'
        }

        return {
          ...last,
          tax: last.value - last.accumulative
        }
      })
    }
  }
})
</script>

<template>
  <div id="result-resume">
    <h2>{{ $filters.money(result.value) }}</h2>
    <hr>
    <div class="details">
      <div>
        <h3>
          {{ $filters.money(result.tax) }}
          <small>(Rendimento)</small>
        </h3>
      </div>
      <div>
        <h3>
          {{ $filters.money(result.accumulative) }}
          <small>(Total investido)</small>
        </h3>
      </div>
    </div>
  </div>
</template>
