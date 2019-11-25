<template>
  <div>
    <div v-if="!other" class="page" id="inform">
      <!-- <app-tab></app-tab> -->
      <van-tabs class="content border-bottom" v-model="active" swipeable>
        <van-tab v-for="(item,index) in list" :title="item.title" :to="item.link" :key="index">
          <keep-alive>
            <router-view :name="item.title=='互动'?'interact':'letter'"></router-view>
          </keep-alive>
        </van-tab>
      </van-tabs>
      <!-- <div class="content noBar">
      <router-view></router-view>
      </div>-->
    </div>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <router-view v-if="other"></router-view>
    </transition>
  </div>
</template>

<script>
import store from "../../../store";
export default {
  beforeRouteEnter(to, from, next) {
    if (store.state.isLogin) {
      next();
    } else {
      next("/login");
    }
  },
  data() {
    return {
      active: 2,
      list: [
        { title: "互动", link: "/inform/interact" },
        { title: "私信", link: "/inform/letter" }
      ],
      hasBar: true,
      other: false
    };
  },
  watch: {
    active: {
      handler: function() {
        if (this.active == 1 && this.$route.path == "/inform/interact") {
          this.$router.push("/inform/letter");
        } else if (this.active == 0 && this.$route.path == "/inform/letter") {
          this.$router.push("/inform/interact");
        }
      },
      immediate: true
    },
    // $route(to, from) {

    //   if (this.$route.path.startsWith("/inform/detail")) {
    //     this.other = true;
    //   } else {
    //     this.other = false;
    //   }
    // }

    $route: {
      handler: function(newRouter, oldRouter) {
        // console.log(newRouter);
        if (
          newRouter.path.startsWith("/inform/detail") ||
          newRouter.path.startsWith("/inform/chat")
        ) {
          this.other = true;
        } else {
          this.other = false;
        }
      },
      immediate: true
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.van-tabs__content,
.content {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  font-family: STXingkai;
  &.noBar {
    bottom: 0;
    z-index: 200;
  }
}
</style>