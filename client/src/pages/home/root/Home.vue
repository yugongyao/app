<template>
  <div class="page-wrap">
    <div class="page" id="home">
      <app-scroll class="home-content">
        <van-tabs v-model="active" swipeable animated background="#22263f" color="#ebe" titleActiveColor="#fff" titleInactiveColor="#feeeee" id="home-tab">
          <van-tab title="精选">
              <!-- <router-link to="/home/bannerDetail/1">前往轮播详情</router-link>
              
              <div class="btn1" @click="goUserDetail()">前往用户详情</div>
              <div class="btn2" @click="goDynamic()">前往动态详情</div> -->
             <banner :list="bannerList" />.
             <recommend :moments="momentsList" />
          </van-tab>
        <van-tab title="关注">内容 2</van-tab>
        </van-tabs>
      </app-scroll>
    </div>
    <van-loading v-if="isLoading" type="spinner" />
  </div>
</template>

<script>
import banner from "./children/banner";
import hot from "./children/hotIssue";
// 推荐动态模块
import recommend from "./children/momentsList";
// 引入仓库方法
import {mapState} from 'vuex';
export default {
  components: {
        banner,
        recommend,
        hot
    },
  computed: {
    ...mapState({
      isLoading: state=>state.moments.isLoading,
      momentsList: state=>state.moments.momentsData,
      issuesList: state=>state.moments.hotIssues
    })
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
  },

  created(){
    this.$store.dispatch('moments/requestMomentsList');
    this.$store.dispatch('moments/requestHotIssues')
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
.home-content{
  width: 100%;
  height: 100%;
}
.tab-bar{
  position:fixed!important;
}
.page {
  background: url(../../../assets/mine1.jpg) no-repeat;
  background-size: 100% 100%;
}
.van-loading__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.van-loading{
    text-align: center;
    width: 100%;
    height: 100%;
}
</style>