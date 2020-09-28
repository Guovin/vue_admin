import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routers/routers'
import VueReSource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueReSource)

//创建路由
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
