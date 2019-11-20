<template>
  <div id="app">
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
      other: false
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
      } else {
        this.hasBar = true;
        this.other = false;
      }
    }
  },
  beforeCreate() {
    this.$ws.onopen = () => {
      console.log("上线了");
    };

    this.$ws.onerror = () => {
      console.log("断线了");
    };

    this.$ws.onclose = () => {
      console.log("下线了");
    };

    this.$ws.onmessage = ev => {
      if (!window.localStorage.getItem("chatData")) {
        window.localStorage.setItem("chatData", "[]");
      }
      var dataArr = JSON.parse(window.localStorage.getItem("chatData"));
      var data = JSON.parse(ev.data);
      dataArr.push(data);
      this.wordData = dataArr;
      window.localStorage.setItem("chatData", JSON.stringify(dataArr));
    };
  }
};
</script>
<style lang="scss">
</style>
