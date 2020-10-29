<template>
  <div id="home">
    <Slide/>
    <section>
      <div class="list-item">
        <h1>List Product Category</h1>
        <hr class="container"/>
        <div class="container">
          <div class="row">
            <div class="col-sm product-item__list card" v-for="(product, index) in listProduct" :key="index">
              <img :src=product.image class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="list-item">
        <h1>List Product</h1>
        <hr class="container">
        <div class="container">
          <div class="row">
            <div class="col-sm" v-for="(productItem, index) in listItemProduct" :key="index">
              <div class="card">
                <img :src=productItem.image[0] class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ productItem.name }}</h5>
                  <a href="#" class="btn btn-primary">Detail</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="site-section block-3">
        <div class="container">

          <div class="mb-5">
            <h3 class="section-subtitle">Product Favorite</h3>
            <h2 class="section-title mb-4">Explore Our <strong>Recent Projects</strong></h2>
          </div>
          <div class="projects-carousel-wrap">
            <div class="owl-carousel owl-slide-3">
              <div class="project-item">
                <div class="project-item-contents">
                  <a href="#">
                    <span class="project-item-category">Factory</span>
                    <h2 class="project-item-title">
                      Building Refinery
                    </h2>
                  </a>
                </div>
                <img src="../assets/image/works_1.jpg" alt="Image" class="img-fluid">
              </div>
              <div class="project-item">
                <div class="project-item-contents">
                  <a href="#">
                    <span class="project-item-category">Factory</span>
                    <h2 class="project-item-title">
                      Building Refinery
                    </h2>
                  </a>
                </div>
                <img src="../assets/image/works_2.jpg" alt="Image" class="img-fluid">
              </div>
              <div class="project-item">
                <div class="project-item-contents">
                  <a href="#">
                    <span class="project-item-category">Factory</span>
                    <h2 class="project-item-title">
                      Building Refinery
                    </h2>
                  </a>
                </div>
                <img src="../assets/image/works_3.jpg" alt="Image" class="img-fluid">
              </div>
              <div class="project-item">
                <div class="project-item-contents">
                  <a href="#">
                    <span class="project-item-category">Factory</span>
                    <h2 class="project-item-title">
                      Building Refinery
                    </h2>
                  </a>
                </div>
                <img src="../assets/image/works_4.jpg" alt="Image" class="img-fluid">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>
<script>
import App from '../App'
import Footer from '../components/layout/footer'
import Slide from '../components/layout/slide'
import { getListProduct, getListProductItem } from '../api/util'
export default {
  components: {Footer, App, Slide},
  data () {
    return {
      listProduct: [],
      listItemProduct: []
    }
  },
  created () {
    this.getDataListProduct()
    this.getDateListProductItem()
  },
  methods: {
    async getDataListProduct () {
      this.listProduct = await getListProduct()
    },
    async getDateListProductItem () {
      this.listItemProduct = await getListProductItem()
    }
  }
}
</script>
<style>
.list-item {
  padding: 20px;
}
.product-item__list {
  border-radius: unset;
}
.product-favorite__list {
  height: 520px;
  background: #737373;
}

.project-item {
  position: relative;
  overflow: hidden; }
.project-item:before {
  content: "";
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
.project-item img {
  -webkit-transition: .5s all ease;
  -o-transition: .5s all ease;
  transition: .5s all ease;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1); }
.project-item .project-item-contents {
  z-index: 9;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  opacity: 0;
  visibility: hidden; }
.project-item .project-item-contents .project-item-category {
  color: #ff5e15;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase; }
.project-item .project-item-contents .project-item-title {
  color: #fff;
  margin-bottom: 0; }
.project-item:hover:before {
  opacity: 1;
  visibility: visible; }
.project-item:hover .project-item-contents {
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  opacity: 1;
  visibility: visible; }
.project-item:hover img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2); }
.site-section {
  padding: 2.5em 0; }
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0; } }
.site-section.site-section-sm {
  padding: 4em 0; }

.site-section-heading {
  padding-bottom: 20px;
  margin-bottom: 0px;
  position: relative;
  font-size: 2.5rem; }
@media (min-width: 768px) {
  .site-section-heading {
    font-size: 3rem; } }
.block-3 {
  background: #1b5e8a;
  margin-bottom: 14rem; }
.section-title {
  color: #fff;
  font-weight: 300; }
.section-title strong {
  font-weight: 700; }

.section-subtitle {
  font-weight: 300;
  color: #ff5e15;
  text-transform: uppercase;
  font-size: 1.3rem; }

.projects-carousel-wrap {
  position: relative;
  margin-bottom: -200px; }

.owl-carousel {
  display: flex;
}
</style>
