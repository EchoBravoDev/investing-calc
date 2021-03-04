<script lang="ts">
import { defineComponent } from 'vue'
import IconCalc from './icons/Calc.vue'

export default defineComponent({
  name: 'PageHeader',
  components: {
    IconCalc
  }
})
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="flex items-center justify-center">
        <h1>
          <IconCalc /> EchoBravo Investing
        </h1>
      </div>
    </div>
  </header>
</template>
