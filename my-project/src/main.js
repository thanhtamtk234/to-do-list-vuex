// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import AppToDo from './App'
import {store} from './store/store'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyC8aQBX0AjlNIm-oVxPRPpz8DeSZ3vGcXE',
  authDomain: 'vue-project-f13c8.firebaseapp.com',
  databaseURL: 'https://vue-project-f13c8.firebaseio.com',
  projectId: 'vue-project-f13c8',
  storageBucket: 'vue-project-f13c8.appspot.com',
  messagingSenderId: '386858390727',
  appId: '1:386858390727:web:da99f8bc8cd99e0bbedae2',
  measurementId: 'G-KN9ENWFD3L'
}
firebase.initializeApp(firebaseConfig)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { AppToDo },
  template: '<AppToDo/>'
})
