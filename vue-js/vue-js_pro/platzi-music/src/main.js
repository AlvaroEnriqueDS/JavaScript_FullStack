import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import routes from '@/routes'
import VueRouter from 'vue-router';

Vue.use(vueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
