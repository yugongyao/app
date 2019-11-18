import AppHeader from '../components/app-header'
import JuanScroll from '../components/juan-scroll'
import AppTab from '../components/app-tab'
import TheEnd from '../components/the-end'

import {
    Icon,
    Toast,
    Lazyload,
    Uploader,
    DropdownMenu,
    DropdownItem,
    SwitchCell,
    Loading,
    Popup,
    Field,
    Cell,
    CellGroup,
    Picker,
    DatetimePicker,
    Radio,
    RadioGroup,
    Button,
    Collapse,
    CollapseItem,
    Switch,
    List,
    Tab,
    Tabs,
    ImagePreview,
    Swipe, 
    SwipeItem
} from 'vant'
export default {
    install(Vue) {
        // 使用vant的插件
        Vue.use(Icon)
        .use(Lazyload)
        .use(Uploader)
        .use(Icon)
        .use(Lazyload)
        .use(Uploader)
        .use(Tab)
        .use(Tabs)
        .use(List)
        .use(Loading)
        .use(DropdownMenu)
        .use(DropdownItem)
        .use(SwitchCell)
        .use(Popup)
        .use(Field)
        .use(Cell)
        .use(CellGroup)
        .use(Picker)
        .use(DatetimePicker)
        .use(Radio)
        .use(RadioGroup)
        .use(Button)
        .use(Collapse)
        .use(CollapseItem)
        .use(Switch)
        .use(ImagePreview)
        .use(Swipe)
        .use(SwipeItem);
        Vue.prototype.$Toast = Toast;
        Vue.component(AppHeader.name, AppHeader);
        Vue.component(JuanScroll.name, JuanScroll);
        Vue.component(AppTab.name, AppTab);
        Vue.component(TheEnd.name, TheEnd);
    }
}