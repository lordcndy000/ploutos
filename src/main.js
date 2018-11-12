import '@babel/polyfill'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/vuetify'

import { db } from './plugins/firebase'


db.settings({ timestampsInSnapshots: true })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
