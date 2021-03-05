<template>
  <PageHeader />
  <main class="container">
    <UpdateDetection />
    <PageForm />
    <Results />
    <PageFooter />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import PageForm from './components/Form.vue'
import UpdateDetection from './components/UpdateDetection.vue'
import Results from './components/Results.vue'

export default defineComponent({
  name: 'App',
  components: {
    UpdateDetection,
    PageForm,
    PageHeader,
    PageFooter,
    Results
  }
})
</script>
