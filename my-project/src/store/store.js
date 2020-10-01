import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: [
      { name: 'tam', age: 23 },
      { name: 'thanh', age: 4 },
      { name: 'doan', age: 96 }
    ],
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
    listTodos: state => {
      var todos = state.todos
      return todos
    },
    count: state => {
      var count = state.user.map(item => {
        return {
          age: item.age + 1
        }
      })
      return count
    },
    sum: state => {
      let sumAll = state.point
      state.user.forEach(item => {
        sumAll = sumAll + parseInt(item.age || 0)
      })
      return (sumAll)
    }
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
    }
  },
  mutations: {
    addAge (state) {
      state.user.forEach(item => {
        item.age += 1
      })
    },
    addNum (state, num) {
      return state.number.push(num)
    },
    removeNum (state, num) {
      return state.numberer.include(num)
    },
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
    }
  }
})
