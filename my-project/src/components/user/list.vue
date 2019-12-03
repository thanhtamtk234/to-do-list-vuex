<template>
<div class="list_user">
  <ul class="todo-list">
    <label>Tên thành viên</label>
    <label>Tuổi</label>
    <hr style="width: 50%">
     <li  v-for="(user,index) in users" :key="index"
      class="user"
      v-bind:class="{editing: user == edittingUser}"
     >
       <div class="view" v-show="user !== edittingUser">
          <label @dblclick="editInfo(user)" class="label_user">{{user.name}}</label>
          <label @dblclick="editInfo(user)">{{user.age}}</label>
           <button class="destroy" @click="deleteInfo(user)" v-show="user !== edittingUser">Xóa</button>
       </div>
       <input
          type="text"
          v-model="edittingUser.name"
          class="edit"
          v-show="user == edittingUser"
          @keyup.enter="saveUser()"
       >
       <input
          type="text"
          v-model='edittingUser.age'
          v-show="user == edittingUser"
          @keyup.enter="saveUser()"
          class="edit"
       >
      <hr style="width: 50%">
     </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
      edittingUser: {}
    }
  },
  computed: {
    users () {
      return this.$store.state.user
    }
  },
  methods: {
    deleteInfo (user) {
      this.$store.dispatch('deleteInfo', user)
    },
    editInfo (user) {
      this.edittingUser = user
    },
    saveUser () {
      this.edittingUser = {}
    }
  }
}
</script>

<style scoped>
  .todo-list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .todo-list li label {
    padding: 15px 15px 15px 60px;
  }
  .list_user {
    padding: 15px;
  }
  .edit{
    height: 1,5rem;
    border-radius: 0 0 0 0;
    margin: 0;
    width: 20%;
    font-family: inherit;
    font-size: 1rem;
    color: #0a0a0a;
  }
  .destroy{
    background: red;
    color: white;
    border: aliceblue;
  }
  .todo-list li .edit {
    display: none;
  }
  .todo-list li.editing .edit {
    display: block;
    margin: 0 280px
  }
</style>
