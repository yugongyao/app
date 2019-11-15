import AppHeader from '../components/app-header'
import AppScroll from '../components/app-scroll'
import AppTab from '../components/app-tab'
import {
    Icon,
    Toast,
    Lazyload,
    Uploader,
    DropdownMenu,
    DropdownItem,
    SwitchCell,
    Loading,
    List,
    Tab,
    Tabs
} from 'vant'
export default {
    install(Vue) {
        // 使用vant的插件
        Vue
        .use(Icon)
        .use(Lazyload)
        .use(Uploader)
        .use(Tab)
        .use(Tabs)
        .use(List)
        .use(Loading)
        .use(DropdownMenu)
        .use(DropdownItem)
        .use(SwitchCell);
        Vue.prototype.$Toast = Toast;
        Vue.component(AppHeader.name, AppHeader);
        Vue.component(AppScroll.name, AppScroll);
        Vue.component(AppTab.name, AppTab);
    }
}