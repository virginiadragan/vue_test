import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        x: 0,
        y: 0,
        students: []
    },
    mutations: {
        setX: (state, x) => {
        state.x = x
        },
        setY: (state, y) => {
        state.y = y
         },
	    setStudents (state, data) {
	        state.students = data
	    }
    },
	getters: {
	    getX (state) {
	      return state.x
	    },
	    getY (state) {
	        return state.y
	    },
	    getStudents (state) {
	        return state.students
	    }
	},
	actions: {
	    fetchData (context) {
	        fetch('http://localhost:3000/students')
	            .then(response => {
	            return response.json()
	        })
		    .then(data => {
		            context.commit('setStudents', data)
		    })
	    }
	}
})

export default store