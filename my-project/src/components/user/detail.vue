<template>
  <div id="detail">
    <h1>doan thanh tam</h1>
    <label>Nhập ten: </label>
    <input v-model="info.name">
    <label>Nhập tuoi: </label>
    <input v-model="info.age">
       <button @click="addInfo">OK</button>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    addInfo () {
      this.$store.dispatch('addInfo', this.info)
    }
    // changeInfo (event) {
    //   this.$store.commit('setInfo', this.info)
    // }
    // changeAge (event) {
    //   this.$store.commit('setAge', event.target.value)
    // }
  }
}
</script>

<style>
</style>
