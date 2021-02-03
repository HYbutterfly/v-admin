import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import axios from 'axios'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.prototype.post = function (path, args) {
    return axios.post(path, args);
}

if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
    Vue.prototype.is_mobile = true;
}


Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
