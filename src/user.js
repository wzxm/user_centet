import Vue from 'vue'

import User from './UserCenter'
import store from './vuex/store'
import router from './routers'

/**
 * [template 实例化Vue]
 * @type {String}
 */
new Vue({
  store,
  router,
  template: '<User/>',
  components: { User }
}).$mount('#user')

