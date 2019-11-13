<template>
  <div class="page-wrap">
    <div class="page" id="home">
      <van-tabs v-model="active" swipeable color="#ebe">
        <van-tab title="首页">
          <router-link to="/home/bannerDetail/1">前往轮播详情</router-link>
          <router-view></router-view>
          <div class="btn1" @click="goUserDetail()">前往用户详情</div>
          <div class="btn2" @click="goDynamic()">前往动态详情</div>
          <banner :list="bannerList" />
        </van-tab>
       <van-tab title="关注">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import banner from "./children/banner";
export default {
  components: {
    banner
  },
  data() {
    return {
      active: 0,
      bannerList: [
        { id: 1, picUrl: `./images/banner1.jpg` },
        { id: 2, picUrl: `./images/banner2.jpg` },
        { id: 3, picUrl: `./images/banner3.jpeg` },
        { id: 4, picUrl: `./images/banner4.jpg` },
        { id: 5, picUrl: `./images/banner5.jpg` }
      ]
    };
  },
  methods: {
    goUserDetail() {
      this.$router.push(`/userDetail`);
    },
    goDynamic() {
      this.$router.push(`/dynamic`);
    }
  }
}

</script>

<style scoped lang="scss">
.btn1 {
  background: yellowgreen;
}
.btn2 {
  background: #ddd;
}
.list{
  overflow: hidden;
}
.van-ellipsis{
  color:''!important;
}
</style>