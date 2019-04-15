<template>
    <div>
      {{resultFromStore}}
    </div>
</template>

<script>
export default {
  name: 'Output',
  computed: {
    resultFromStore () {
      return this.$store.getters.getResult
    }
  }
}
</script>

<style scoped>
</style>