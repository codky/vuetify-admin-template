import Vue from 'vue'
import App from './App.vue'

// import router from './router/router'
import router from "./router"

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./router/router"

// createApp(App).use(router).mount('#app');