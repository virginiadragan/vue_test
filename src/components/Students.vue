<template>
    <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        >
        <template v-slot:items="st">
        <td>{{ st.item.name }}</td>
        <td class="text-xs-right">{{ st.item.media }}</td>  
      </template>
    </v-data-table>
</template>

<script>
export default {
  name: 'Students',
  data() {
    return {
      studentsList: null,
      headers: [
        {
          text: 'Nume',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Media', value: 'media' }
      ],
    }
  },
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
  .material-icons {
      display: none !important;
    }
<style scoped>
</style>