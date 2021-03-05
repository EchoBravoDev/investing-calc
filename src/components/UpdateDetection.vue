<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'update-detection',
  setup () {
    const hasUpdate = ref(false)

    document.addEventListener('sw:update', () => {
      hasUpdate.value = true
    })

    return {
      update :() => window.location.reload(),
      hasUpdate
    }
  }
})
</script>

<template>
  <div class="grid mt-5" v-if="hasUpdate">
    <button @click="update" class="is-alert">
     Uma nova versão esta disponível. <br />
     <strong>Toque</strong> ou <strong>clique</strong> aqui para atualizar.
    </button>
  </div>
</template>