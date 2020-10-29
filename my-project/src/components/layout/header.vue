<template>
  <div class="header-top bg-light">
    <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

      <div class="container">
        <div class="d-flex align-items-center">

          <div class="mr-auto">
            <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
                  <a href="/" class="nav-link text-left">Home</a>
                </li>
                <li><a href="#" class="nav-link text-left">About</a></li>
                <li>
                  <a href="list-product" class="nav-link text-left">Product</a>
                </li>
                <li><a href="#" class="nav-link text-left">News</a></li>
                <li>
                  <a href="#" class="nav-link text-left">Contact</a>
                </li>
<!--                <li>-->
<!--                  <b-button variant="primary" v-b-modal.modal-1>Login</b-button>-->
<!--                </li>-->
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
    <modal-sign-in/>
  </div>
</template>
<script>
import ModalSignIn from '../ModalSignIn'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {ModalSignIn},
  methods: {
    showModalLogin () {
      this.show = true
    },
    closeModalLogin () {
      this.show = false
    }
  }
}
</script>
<style>
.site-navbar {
  font-family: "Oswald", sans-serif;
  margin-bottom: 0px;
  z-index: 1999;
  width: 100%;
}
.site-navbar .container-fluid {
  padding-left: 7rem;
  padding-right: 7rem; }
.site-navbar .site-navigation.border-bottom {
  border-bottom: 1px solid #f3f3f4 !important; }
.site-navbar .site-navigation .site-menu {
  margin-bottom: 0; }
.site-navbar .site-navigation .site-menu .active > a {
  color: #000;
  display: inline-block;
  padding: 5px 20px; }
.site-navbar .site-navigation .site-menu a {
  text-decoration: none !important;
  display: inline-block; }
.site-navbar .site-navigation .site-menu > li {
  display: inline-block; }
.site-navbar .site-navigation .site-menu > li .desc {
  font-size: 12px;
  color: #969696; }
.site-navbar .site-navigation .site-menu > li > a {
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: .05rem;
  font-weight: 900;
  padding: 20px 20px;
  color: #fff;
  display: inline-block;
  text-decoration: none !important; }
.site-navbar .site-navigation .site-menu > li > a:hover {
  color: #000; }
.site-navbar .site-navigation .site-menu .has-children {
  position: relative; }
.site-navbar .site-navigation .site-menu .has-children > a {
  position: relative;
  padding-right: 20px; }
.site-navbar .site-navigation .site-menu .has-children > a:before {
  position: absolute;
  content: "\e313";
  font-size: 16px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: 'icomoon',serif;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  position: absolute;
  text-align: left;
  border-top: 2px solid #000;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  border-left: 1px solid #edf0f5;
  border-right: 1px solid #edf0f5;
  border-bottom: 1px solid #edf0f5;
  padding: 0px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s; }
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top {
  position: absolute; }
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none; }
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px; }
.site-navbar .site-navigation .site-menu .has-children .dropdown a {
  font-size: 16px;
  text-transform: none;
  letter-spacing: normal;
  -webkit-transition: 0s all;
  -o-transition: 0s all;
  transition: 0s all;
  color: #343a40; }
.site-navbar .site-navigation .site-menu .has-children .dropdown .active > a {
  color: #175292 !important; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li > a {
  padding: 9px 20px;
  display: block; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li > a:hover {
  background: #f4f5f9;
  color: #25262a; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > a:before {
  content: "\e315";
  right: 20px; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > .dropdown, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children > ul {
  left: 100%;
  top: 0; }
.site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:hover > a, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:active > a, .site-navbar .site-navigation .site-menu .has-children .dropdown > li.has-children:focus > a {
  background: #f4f5f9;
  color: #25262a; }
.site-navbar .site-navigation .site-menu .has-children:hover > a, .site-navbar .site-navigation .site-menu .has-children:focus > a, .site-navbar .site-navigation .site-menu .has-children:active > a {
  color: #000; }
.site-navbar .site-navigation .site-menu .has-children:hover, .site-navbar .site-navigation .site-menu .has-children:focus, .site-navbar .site-navigation .site-menu .has-children:active {
  cursor: pointer; }
.site-navbar .site-navigation .site-menu .has-children:hover > .dropdown, .site-navbar .site-navigation .site-menu .has-children:focus > .dropdown, .site-navbar .site-navigation .site-menu .has-children:active > .dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1; }
.site-navbar .site-navigation .site-menu.site-menu-dark > li > a {
  color: #000; }
.sticky-wrapper {
  position: absolute;
  z-index: 100;
  width: 100%;
  background: #fff; }
@media (max-width: 991.98px) {
  .sticky-wrapper {
    display: none; }
}
.sticky-wrapper + .site-blocks-cover {
  margin-top: 96px; }
.site-navbar {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  background: #1c5e8a;
}
.sticky-wrapper .site-navbar .site-logo a {
  color: #000; }
.sticky-wrapper .site-navbar .site-menu > li {
  display: inline-block; }
.sticky-wrapper .site-navbar .site-menu > li > a.active {
  color: #000;
  position: relative; }
.sticky-wrapper .site-navbar .site-menu > li > a.active:after {
  height: 2px;
  background: #fff;
  content: "";
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px; }
.sticky-wrapper .site-navbar .site-menu > li.active > a {
  color: #000; }
.sticky-wrapper.is-sticky .site-navbar {
  -webkit-box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2); }
.sticky-wrapper.is-sticky .site-navbar .site-logo a {
  color: #000; }
.sticky-wrapper.is-sticky .site-navbar .site-menu > li {
  display: inline-block; }
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a {
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none !important; }
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a:hover {
  color: #000; }
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a.active:after {
  background: #ff5e15; }
.sticky-wrapper.is-sticky .site-navbar .site-menu > li.active > a {
  color: #000; }
.sticky-wrapper .shrink {
  padding-top: 10px !important;
  padding-bottom: 10px !important; }
</style>
