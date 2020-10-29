<template>
  <div>
    <div class="product">
      <h1>product 1</h1>
      <div>
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img src="../assets/image/product_item1.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <img src="../assets/image/product_item2.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <img src="../assets/image/product_item3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">Detail</a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <img src="../assets/image/product_item_4.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import App from '../App'
export default {
  components: {App},
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store.state)
  }
}

</script>
