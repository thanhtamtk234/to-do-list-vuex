import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: '',
    point: 0,
    number: [1, 2, 3, 4, 5],
    info: [],
    name: '',
    age: '',
    todos: [
      { name: 'eat', done: false },
      { name: 'eat2', done: false }

    ]
  },
  getters: {

  },
  actions: {
    addInfo ({commit}, payload) {
      commit('setInfo', payload)
    },
    deleteInfo ({commit}, payload) {
      commit('deleteInfo', payload)
    },
    addTodo ({commit}, payload) {
      commit('addTodo', payload)
    },
    deleteToDo ({commit}, payload) {
      commit('deleteTodo', payload)
    },
    setUser ({commit}, payload) {
      commit('setUser', payload)
    }
  },
  mutations: {
    setInfo (state, payload) {
      state.user.push(payload)
    },
    deleteInfo (state, payload) {
      state.user.splice(payload, 1)
    },
    addTodo (state, todo) {
      return state.todos.push({
        name: todo,
        done: false
      })
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload, 1)
    },
    setUser (state, payload) {
      state.user = payload
    }
  }
})
