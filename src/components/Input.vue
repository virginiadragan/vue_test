<template>
  <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6 md3>
            <v-text-field label="x" v-model="x"></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field label="y" v-model="y"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
</template>

<script>
export default {
  name: 'Input',
  data () {
      return{
        x: this.$store.state['x'],
        y: this.$store.state['y'],
      }
  },
  watch: {
    x: function (val) {
      this.x = parseInt(val)
      this.$store.commit('setX', val)
    },
     y: function (val) {
      this.y = parseInt(val)
      this.$store.commit('setY', val)
    }
  }
}
</script>

<style>
  #input-usage .v-input__prepend-outer,
    #input-usage .v-input__append-outer,
    #input-usage .v-input__slot,
    #input-usage .v-messages {
      border: 1px dashed rgba(0,0,0, .4);
    }
</style>