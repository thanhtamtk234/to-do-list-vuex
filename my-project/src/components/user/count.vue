<template>
  <div id="count">
    <h1>Dem so</h1>
    <span>{{point}}</span>
    <span>{{sum}}</span>
  <ul>
      <li v-for=" user in user" :key="user">
       <span>{{user.name}}</span>
       <span>{{user.age}}</span>
    </li>
    </ul>

        <div class="list-group-item" v-for="users in user" :key="users.name">
            <h4>
                {{ users.name }}
            </h4>

            <h5>
                {{ users.age }}
            </h5>
            <button class="btn_delete_info" @click="deleteInfo(users)">Delete</button>
        </div>

  </div>
</template>

<script>
export default {
  name: 'count',
  computed: {
    point () {
      return this.$store.state.point
    },
    count () {
      return this.$store.getters.count
    },
    sum () {
      return this.$store.getters.sum
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    deleteInfo (user) {
      console.log(user)
      this.$store.dispatch('deleteInfo', user)
    }
  }
}
</script>

<style>
</style>
