<template>
  <div class="container">
    <router-link to="/add-product">
      <b-button>add product</b-button>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        name: '',
        price: '',
      }
    }
  }
}
</script>
