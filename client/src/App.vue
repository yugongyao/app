<template>
  <div id="app"> 
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <tab-bar v-if="hasBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tab-bar";
export default {
  components: {
    [TabBar.name]: TabBar
  },
  data() {
    return {
      hasBar: true
    };
  },
  methods: {}
};
</script>
<style lang="scss">

span.van-dropdown-menu__title{
  font-size: 13px!important;
  color:#1989fa;
}
.van-ellipsis{
  color:#1989fa;
}
div.van-cell__title{
  text-indent: 17px;
  font-size: 14px;
}

</style>
