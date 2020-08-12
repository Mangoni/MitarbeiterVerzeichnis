import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    snackbar: {
      show: false,
      message: 'Erfolgreich geklickt'
    }

  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('Log A')
