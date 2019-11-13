import AppScroll from '../components/app-scroll'


export default {
  install(Vue){
    // 使用vant的插件
    // 使用自定义的滚动组件
    Vue.component(AppScroll.name, AppScroll);

    Vue.$center = Vue.prototype.$center = new Vue();

  }
}