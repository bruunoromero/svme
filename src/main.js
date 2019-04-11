import "./firebase"

import Vue from "vue"
import Ionic from "@ionic/vue"
import VueI18n from "vue-i18n"
import Vuelidate from "vuelidate"
import { firestorePlugin } from "vuefire"

import "@ionic/core/css/ionic.bundle.css"

import App from "./App.vue"
import store from "./store"
import router from "./router"
import messages from "./messages"

import "./registerServiceWorker"

Vue.config.productionTip = false

Vue.use(Ionic)
Vue.use(VueI18n)
Vue.use(Vuelidate)
Vue.use(firestorePlugin)

const i18n = new VueI18n({
  locale: "pt",
  messages
})

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app")
