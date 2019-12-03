<template>
<div>
  <section class="todo_list">
    <AddTodo/>
    <div class="list_todos">
       <ul>
        <li v-for="(todo, index) in listTodos" :key="index"
          v-bind:class="{completed: todo.completed, editing: todo == edittingTodo}"
        >
          <div class="view" v-show="todo.done && todo !== edittingTodo">
            <input class="toggle" type="checkbox" v-on:click="handleCheck(todo)" v-bind:checked="todo.done">
          <label @dblclick="editTodo(todo)" class="label_todo">{{todo.name}}</label>
          <button class="destroy" @click="deleteTodo(todo)">Xóa</button>
       </div>
       <input
          type="text"
          v-model="edittingTodo.name"
          class="edit_todo"
          v-show="todo == edittingTodo"
          @keyup.enter="saveTodo()"
       >
        </li>
  </ul>
    </div>
    <hr/>
    <Footer/>
  </section>

</div>
</template>
<script>
import AddTodo from './../todo/add_todo'
import Footer from './../todo/footer'
export default {
  name: 'All',
  components: {
    AddTodo,
    Footer
  },
  data () {
    return (
      {
        edittingTodo: {}
      }
    )
  },
  computed: {
    listTodos () {
      return this.$store.state.todos
    }
  },
  methods: {

    editTodo (todo) {
      this.edittingTodo = todo
    },
    deleteTodo (todo) {
      this.$store.dispatch('deleteToDo', todo)
    },
    saveTodo () {
      this.edittingTodo = {}
    },
    handleCheck (todo) {
      todo.done = !todo.done
    }
  }
}
</script>
<style scoped>
.todo_list {
  background: white;
  width: 50%;
  margin: 0 300px;
  padding: 10px;
}
.list_todos ul {
  list-style: none;
  padding: 0
}
.view {
  background: #F6F4F4;
  border-radius: 5px;
  padding: 7px;
  width: 70%;
  margin: 3px 76px;
}
.label_todo {
  margin-right: 150px
}
.edit_todo {
  width: 70%;
  height: 21px;
  padding: 7px;
  border: 1px solid;
  border-radius: 5px;
}
.destroy {
    float: right;
    background: #F30A0A;
    border: none;
    border-radius: 2px;
    color: white;
    width: 50px;
    height: 25px;
}
.toggle {
  float: left;
}
</style>
