import Vue from 'vue'
import plugin from './plugin'
import App from './App.vue'
import Http from './utils/Http'
import Api from './utils/api'
import router from './router'
import store from './store'
import './style/common.scss'
Vue.prototype.$Http = Http;
Vue.prototype.$Api = Api;
Vue.use(plugin);
Vue.config.productionTip = false

Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
    }
  }
  return format;
}
Vue.prototype.$center = new Vue();
Vue.prototype.$ws = new WebSocket('ws://www.hellochange.cn:9000');
let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

