<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.js"></script>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container-fluid">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic carousel</h4>
              <div class="owl-carousel">
                <div class="item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg" alt="image" /> </div>
                <div class="item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
                <div class="item"> <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image" /> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
export default {
  mounted () {
  }
}
</script>
<style>
/* Click the image one by one to see the different layout */

/* Owl Carousel */

.owl-prev {
  background: url('https://res.cloudinary.com/milairagny/image/upload/v1487938188/left-arrow_rlxamy.png') left center no-repeat;
  height: 54px;
  position: absolute;
  top: 50%;
  width: 27px;
  z-index: 1000;
  left: 2%;
  cursor: pointer;
  color: transparent;
  margin-top: -27px;
}

.owl-next {
  background: url('https://res.cloudinary.com/milairagny/image/upload/v1487938220/right-arrow_zwe9sf.png') right center no-repeat;
  height: 54px;
  position: absolute;
  top: 50%;
  width: 27px;
  z-index: 1000;
  right: 2%;
  cursor: pointer;
  color: transparent;
  margin-top: -27px;
}

.owl-prev:hover,
.owl-next:hover {
  opacity: 0.5;
}

/* Owl Carousel */

/* Popup Text */

.white-popup-block {
  background: #FFF;
  padding: 20px 30px;
  text-align: left;
  max-width: 650px;
  margin: 40px auto;
  position: relative;
}

.popuptext {
  display: table;
}
.popuptext p {
  margin-bottom: 10px;
}
.popuptext span {
  font-weight: bold;
  float: right;
}
/* Popup Text */

/* Icon CSS */
.item {
  position: relative;
}
.item i {
  display: none;
  font-size: 4rem;
  color: #FFF;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}
.item a {
  display: block;
  width: 100%;
}
.item a:hover:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.item a:hover i {
  display: block;
  z-index: 2;
}
</style>
