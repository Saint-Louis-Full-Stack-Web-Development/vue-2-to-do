import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

require('./style/main.scss');

// Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = "http://localhost:8082"

new Vue({
  el: '#app',
  render: h => h(App)
})
