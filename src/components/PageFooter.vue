<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'page-footer',
  setup () {
    return {
      version: import.meta.env.VITE_APP_VERSION
    }
  }
})
</script>

<template>
  <footer class="page-footer">
    <div class="container">
      <p>Feito por <a href="https://vinicius73.dev" target="_blank">Vinicius73</a></p>
      <p>
        <small>
          v{{version}}
        </small>
      </p>
    </div>
  </footer>
</template>