<template>
  <div>
    <input v-model="todo" type="text">
    <button @click = addTodo>Add</button>
  </div>
</template>
<script>

export default {
  name: 'add',
  data () {
    return (
      {
        todo: ''
      }
    )
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.todo)
      this.todo = ''
    }
  }
}
</script>
<style scoped>
.input_add {
    width: 70%;
    height: 21px;
    padding: 7px;
    border: 1px solid;
    border-radius: 5px;
}
</style>
