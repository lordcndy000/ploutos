<template>
  <div class="dashboard">
    <Navigation />
    <v-container fluid>
      <PageTitle title="Treasury" />
      <Treasures />
    </v-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import PageTitle from '@/components/PageTitle.vue'
import Treasures from '@/components/Treasury/Treasures.vue'

export default {
  name: 'treasury',
  components: {
    Navigation,
    PageTitle,
    Treasures
  }
}
</script>

<style>
</style>
