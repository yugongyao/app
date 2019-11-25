<template>
  <div>
    <div v-if="!other" class="page" id="topic">
      <!-- <app-tab></app-tab> -->
      <van-tabs class="content border-bottom" v-model="active" swipeable>
        <van-tab v-for="(item,index) in list" :title="item.title" :to="item.link" :key="index">
          <router-view :name="item.title=='今日'?'today':'past'"></router-view>
        </van-tab>
      </van-tabs>
      <!-- <div class="content noBar">
      <router-view></router-view>
      </div>-->
    </div>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <router-view name="topicDetail"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      list: [
        { title: "今日", link: "/topic/today" },
        { title: "往期", link: "/topic/past" }
      ],
      hasBar: true,
      other: false
    };
  },
  watch: {
    active() {
      if (this.active == 1 && this.$route.path == "/topic/today") {
        this.$router.push("/topic/past");
      } else if (this.active == 0 && this.$route.path == "/topic/past") {
        this.$router.push("/topic/today");
      }
    }
  }
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