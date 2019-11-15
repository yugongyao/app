<template>

  <div class="page" id="inform">
    <!-- <app-tab></app-tab> -->
    <van-tabs class="content border-bottom" v-model="active" swipeable>
      <van-tab v-for="(item,index) in list" :title="item.title" :to="item.link" :key="index">
          <router-view :name="item.title=='互动'?'interact':'letter'"></router-view>
      </van-tab>
    </van-tabs>
    <!-- <div class="content noBar">
      <router-view></router-view>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:2,
      list: [
        { title: "互动", link: "/inform/interact" },
        { title: "私信", link: "/inform/letter" }
      ]
    };
  },
  watch:{
    active(){
      if(this.active==1&&this.$route.path=="/inform/interact"){
        this.$router.push("/inform/letter")
      }else if(this.active==0&&this.$route.path=="/inform/letter"){
        this.$router.push("/inform/interact")
      }
    }
    
  }
};
</script>

<style lang="scss" scoped>
.van-tabs__content,.content {
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