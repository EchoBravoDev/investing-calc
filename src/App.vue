<template>
  <PageHeader />
  <main class="container">
    <PageForm />
    <Results />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue'
import PageForm from './components/Form.vue'
import Results from './components/Results.vue'

export default defineComponent({
  name: 'App',
  components: {
    PageForm,
    PageHeader,
    Results
  }
})
</script>
