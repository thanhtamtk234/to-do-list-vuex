<template>
  <div>
    <section class="user">
      <h1>Chào mừng bạn</h1>
      <div class="user__group">
        <label>Tên thành viên: </label>
        <input type="text" class="input--add" v-model="info.name">
        <label>Tuổi: </label>
        <input type="text" class="input--add" v-model="info.age">
          <button @click="addInfo" class="button">
            Thêm
          </button>
          <list/>
      </div>
  </section>
  </div>
</template>

<script>

import list from './list'
export default {
  components: { list },
  data () {
    return {
      info: {}
    }
  },
  methods: {
    addInfo () {
      this.$store.dispatch('addInfo', this.info)
    }
  }
}
</script>

<style scoped>
  .user {
    width: 100%;
    background-color: white;
    max-width: 45rem;
    margin: 0 200px;
    overflow: auto;
  }
  .user__group{
    width: 100%;
    margin-bottom: 1rem;
  }
  .input--add{
    height: 1,5rem;
    border-radius: 0 0 0 0;
    margin: 0;
    width: 20%;
    font-family: inherit;
    font-size: 1rem;
    color: #0a0a0a;
  }
  .button{
    padding-top: 0;
    padding-bottom: 0;
    text-align: center;
    height: 25px;
    background-color: #1583cc;
    color: #fefefe;
    border: aliceblue;
  }
</style>
