import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {store} from './store'
import VueRouter from 'vue-router'
import Users from "@/components/Users"
import Home from "@/components/Home"
import Magazin from "@/components/Magazin"
import Steplist from "@/components/Steplist/Steplist"
import Danke from "@/components/Danke"
import EditResearcher from "@/components/EditResearcher"

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/Magazin/:MagazinId', component: Magazin},
  {path: '/users', component: Users},
  {path: '/Steplist', component: Steplist, name:'nSteplist'},
  {path: '/', component: Home, name:'nHome'},
  {path: '/Danke', component: Danke, name:'nDanke'},
  {path: '/editresearcher', component: EditResearcher, name:'nEditResearcher'}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

console.log('Log A')
