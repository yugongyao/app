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
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  &.noBar {
    bottom: 0;
    z-index: 200;
  }
}

</style>
