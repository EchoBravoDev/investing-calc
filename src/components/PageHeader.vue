<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconCalc from './icons/Calc.vue'
import CloudOff from './icons/CloudOff.vue'

export default defineComponent({
  name: 'PageHeader',
  components: {
    IconCalc,
    CloudOff
  },
  setup () {
    const online = ref(navigator.onLine)

    const buildConnChange = (val: boolean) => {
      return () => online.value = val
    }

    window.addEventListener('online', buildConnChange(true));
    window.addEventListener('offline', buildConnChange(false));

    return {
      online
    }
  }
})
</script>

<template>
  <header class="page-header" :class="{ 'is-offline': !online }">
    <div class="container">
      <div class="flex items-center justify-center">
        <h1>
          <IconCalc v-if="online" />
          <CloudOff v-else />

          EchoBravo Invest
        </h1>
      </div>
    </div>
  </header>
</template>
