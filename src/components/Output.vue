<template>
    <div>
      	<v-text-field :label="'result = '" :value="result"/>
   		<v-select v-bind:items="operations" v-model="selected" label="Select operation" autocomplete @change="items()"></v-select>
    </div>
</template>

<script>
export default {
  name: 'Output',
  data() {
    return {
      selected : null,
      result : "alege operatia",
      operations : ["adunarea", "scaderea", "inmultirea", "impartirea"]
    }
  },
	methods: {
		items () {
		  switch(this.selected){
		    case "adunarea":
		      this.result = parseInt(this.$store.getters.getX) + parseInt(this.$store.getters.getY)
		      break
		    case "scaderea":
		      this.result = parseInt(this.$store.getters.getX) - parseInt(this.$store.getters.getY)
		      break
		    case "inmultirea":
		      this.result = parseInt(this.$store.getters.getX) * parseInt(this.$store.getters.getY)
		      break
		    case "impartirea":
		      let impartitor = parseInt(this.$store.getters.getY)
		      if (impartitor != 0)
		        this.result = parseInt(this.$store.getters.getX) / impartitor
		        break
		    default :
		    
		  }
		  
		}
	}
  
}
</script>

<style scoped>
</style>