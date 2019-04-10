import "./firebase"

import Vue from "vue"
import Ionic from "@ionic/vue"
import { firestorePlugin } from "vuefire"

import "@ionic/core/css/ionic.bundle.css"

import App from "./App.vue"
import store from "./store"
import router from "./router"
import "./registerServiceWorker"

Vue.config.productionTip = false

Vue.use(Ionic)
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
