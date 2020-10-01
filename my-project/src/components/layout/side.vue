<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner slide-item">
      <div class="carousel-item active">
        <img class="d-block w-100 image-item" src="../../assets/hero_1.jpg" alt="First slide" >
        <div class="carousel-caption d-none d-md-block">
          <h5>...test</h5>
          <p>..tam.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 image-item" src="../../assets/post_h_1.png" alt="Second slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<style>
.image-item {
  /*min-height: 400px;*/
}
</style>
