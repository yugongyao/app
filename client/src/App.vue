<template>
  <div id="app" >
    <keep-alive>
      <router-view v-if="!other"></router-view>
    </keep-alive>
    <router-view name="inform"></router-view>
    <router-view name="topic"></router-view>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <router-view v-if="other"></router-view>
    </transition>
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
      hasBar: true,
      other:false
    };
  },
  // watch: {
  //   $route: "getPath"
  // },
  // methods: {
  //   getPath() {
  //     console.log(this.$route.path);
  //   }
    watch: {
      $route(to, from) {
        if (this.$route.path.startsWith("/issue")) {
          this.hasBar = false;
          this.other = true;
        }else{
          this.hasBar = true;
          this.other = false;
        }
      },
  }
};
</script>
<style lang="scss">
</style>
