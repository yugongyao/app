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
import store from "./store/index";

import api from './utils/api';
import Http from './utils/Http';

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
  },
  async mounted(){
    let result = await Http.get(api.CHECK_LOGIN);
    console.log(result);
    
    if(result.data.status == 0){
      this.$store.commit('setLogin',true);
      this.$store.dispatch('requestUserInfo');
    } else {
      this.$store.commit('setLogin',true);
    }
  }
};
</script>
<style lang="scss">
</style>
