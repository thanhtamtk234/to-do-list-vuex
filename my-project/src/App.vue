<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Home from './components/user/home'
export default {
  name: 'app',
  components: {Home, Header},
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    console.log(this.$router.meta)
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-items: center;
}
html {
  overflow-x: hidden; }

body {
  line-height: 1.7;
  color: gray;
  font-weight: 300;
  font-size: 1.1rem; }

::-moz-selection {
  background: #000;
  color: #fff; }

::selection {
  background: #000;
  color: #fff; }

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
a:hover {
  text-decoration: none; }

h1, h2, h3, h4, h5,
.h1, .h2, .h3, .h4, .h5 {
  font-family: "Oswald", sans-serif; }

.border-2 {
  border-width: 2px; }

.text-black {
  color: #000 !important; }

.bg-black {
  background: #000 !important; }

.color-black-opacity-5 {
  color: rgba(0, 0, 0, 0.5); }

.color-white-opacity-5 {
  color: rgba(255, 255, 255, 0.5); }

.site-wrap:before {
  display: none;
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  content: "";
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden; }

.offcanvas-menu .site-wrap {
  height: 100%;
  width: 100%;
  z-index: 2; }
.offcanvas-menu .site-wrap:before {
  opacity: 1;
  visibility: visible; }

.line-height-1 {
  line-height: 1 !important; }

.bg-black {
  background: #000; }

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

.border-top {
  border-top: 1px solid #edf0f5 !important; }

.site-footer {
  padding: 4em 0; }
@media (min-width: 768px) {
  .site-footer {
    padding: 8em 0; } }
.site-footer p {
  color: #737373; }
.site-footer h2, .site-footer h3, .site-footer h4, .site-footer h5 {
  color: #fff; }
.site-footer a {
  color: #999999; }
.site-footer a:hover {
  color: black; }
.site-footer ul li {
  margin-bottom: 10px; }
.site-footer .footer-heading {
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900; }

.bg-text-line {
  display: inline;
  background: #000;
  -webkit-box-shadow: 20px 0 0 #000, -20px 0 0 #000;
  box-shadow: 20px 0 0 #000, -20px 0 0 #000; }

.text-white-opacity-05 {
  color: rgba(255, 255, 255, 0.5); }

.text-black-opacity-05 {
  color: rgba(0, 0, 0, 0.5); }

.hover-bg-enlarge {
  overflow: hidden;
  position: relative; }
@media (max-width: 991.98px) {
  .hover-bg-enlarge {
    height: auto !important; } }
.hover-bg-enlarge > div {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: .8s all ease-in-out;
  -o-transition: .8s all ease-in-out;
  transition: .8s all ease-in-out; }
.hover-bg-enlarge:hover > div, .hover-bg-enlarge:focus > div, .hover-bg-enlarge:active > div {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2); }
@media (max-width: 991.98px) {
  .hover-bg-enlarge .bg-image-md-height {
    height: 300px !important; } }

.bg-image {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed; }
.bg-image.overlay {
  position: relative; }
.bg-image.overlay:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7); }
.bg-image > .container {
  position: relative;
  z-index: 1; }

@media (max-width: 991.98px) {
  .img-md-fluid {
    max-width: 100%; } }

@media (max-width: 991.98px) {
  .display-1, .display-3 {
    font-size: 3rem; } }

.play-single-big {
  width: 90px;
  height: 90px;
  display: inline-block;
  border: 2px solid #fff;
  color: #fff !important;
  border-radius: 50%;
  position: relative;
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out; }
.play-single-big > span {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-40%, -50%);
  -ms-transform: translate(-40%, -50%);
  transform: translate(-40%, -50%); }
.play-single-big:hover {
  width: 120px;
  height: 120px; }

.overlap-to-top {
  margin-top: -150px; }

.ul-check {
  margin-bottom: 50px; }
.ul-check li {
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  line-height: 1.5; }
.ul-check li:before {
  left: 0;
  font-size: 20px;
  top: -.3rem;
  font-family: "icomoon";
  content: "\e5ca";
  position: absolute; }
.ul-check.white li:before {
  color: #fff; }
.ul-check.success li:before {
  color: #8bc34a; }
.ul-check.primary li:before {
  color: #ff5e15; }

.select-wrap, .wrap-icon {
  position: relative; }
.select-wrap .icon, .wrap-icon .icon {
  position: absolute;
  right: 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 22px; }
.select-wrap select, .wrap-icon select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%; }
</style>
