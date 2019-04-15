import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        x: 0,
        y: 0,
        selected: ' ',
        students: []
    },
    mutations: {
        setX: (state, x) => {
        state.x = x
        },
        setY: (state, y) => {
        state.y = y
         },
        setOp:(state, selected) =>{
            state.selected = selected;
        },
    setStudents (state, data) {
        state.numbers = data
    }
    },
getters: {
    getResult (state) {
        switch(state.selected){
            case 'adunare':
                return state.x + state.y
            break;
            case 'scadere':
                return state.x - state.y
                break;
            case 'inmultire':
                return state.x * state.y
                break;
            case 'impartire':
                return state.x / state.y
                break;
        }

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