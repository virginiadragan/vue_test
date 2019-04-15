<template>
    <v-data-table
        :headers="headers"
        class="elevation-1"
        striped hover :items="items"
        >
    </v-data-table>
</template>

<script>
export default {
  name: 'Students',
  computed: {
    items () {
      return this.$store.getters.getStudents
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  }
}
</script>

<style scoped>
</style>