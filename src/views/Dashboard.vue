<template>
  <div class="dashboard">
    <Navigation />
      <v-container fluid>
        <PageTitle title="Dashboard" />
      </v-container>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation,
    PageTitle
  }
}
</script>

<style>
</style>
