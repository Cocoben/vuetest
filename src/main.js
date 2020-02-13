import Vue from 'vue'
import App from './App.vue'
import router from './router'




import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBD_ZqxJbzgqk50VaGWoWZDojNirkqmMJM',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');





