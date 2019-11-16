import AppHeader from '../components/app-header'
import AppScroll from '../components/app-scroll'
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
    Switch
} from 'vant'
export default {
    install(Vue) {
        // 使用vant的插件
        Vue.use(Icon)
        .use(Lazyload)
        .use(Uploader)
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
        ;
        Vue.prototype.$Toast = Toast;
        Vue.component(AppHeader.name, AppHeader);
        Vue.component(AppScroll.name, AppScroll);
    }
}