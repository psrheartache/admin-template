import Vue from 'vue'
import App from '@layout/App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import './layout'
import './packages'
import './common/directive'
import './assets/style/index.less'
import './config/log'
Vue.use(Antd)
Vue.config.productionTip = false
Vue.config.performance = process.env.NODE_ENV !== 'production'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
