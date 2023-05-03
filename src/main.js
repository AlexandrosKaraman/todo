import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ClickOutside from 'vue-click-outside'
// SASS global
import './assets/styles/index.sass'
import './assets/styles/colors.sass'

Vue.config.productionTip = false

Vue.directive('click-outside', ClickOutside)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
