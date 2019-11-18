<template>
  <div class="page-wrap">
    <div class="page" id="home">
      
        <van-tabs v-model="active" swipeable animated background="#22263f" color="#ebe" titleActiveColor="#fff" titleInactiveColor="#feeeee" id="home-tab">
          <van-tab title="精选">
              <!-- <router-link to="/home/bannerDetail/1">前往轮播详情</router-link>
              <div class="btn1" @click="goUserDetail()">前往用户详情</div>-->
              <juan-scroll class="homeContent" ref="homeContent" :pullup="pullup" @requestData="handleRefresh" @modifyTxt="setPullUpMsg" @setRefresh="setRereshing">
                <banner :list="bannerList" />
                <recommendUser />
                <hot :issues="issuesList"/>
                <recommend :moments="momentsList" />
                <div class="loadmore">
                  <span v-if="!isRefreshing">{{pullUpMsg}}</span>
                </div>
             </juan-scroll>
          </van-tab>
        <van-tab title="关注">
          <juan-scroll class="homeContent" :pullup="pullup" @requestData="handleRefresh" @modifyTxt="setPullUpMsg" @setRefresh="setRereshing">
            <recommendUser />
            <recommend :moments="myMoments" />
             <div class="loadmore">
                <span v-if="!isRefreshing">{{pullUpMsg}}</span>
              </div>
          </juan-scroll>
        </van-tab>
        </van-tabs>
        
      
    </div>
    <van-loading class="page" v-if="isLoading" type="spinner">
      <span></span>
    </van-loading>
  </div>
</template>

<script>
import banner from "./children/banner";
import hot from "./children/hotIssue";
import recommend from "./children/momentsList";
import recommendUser from "./children/stars"

// 引入仓库方法
import {mapState} from 'vuex';
export default {

  components: {
        banner,
        recommend,
        hot,
        recommendUser
    },
  computed: {
    ...mapState({
      isLoading: state=>state.moments.isLoading,
      momentsList: state=>state.moments.momentsData,
      issuesList: state=>state.moments.hotIssues,
      myMoments: state=>state.moments.myMoment,
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
      ],
      isRefreshing: false,
      pullUpMsg: '上拉以刷新',
      pullup: true
    };
  },
  methods: {
    goUserDetail() {
      this.$router.push(`/userDetail`);
    },

    // 设置上拉刷新提示框文字
    setPullUpMsg(msg){
      this.pullUpMsg = msg;
    },
    // 设置是否开启刷新功能
    setRereshing(bool){
      this.isRefreshing = bool;
    },
    // 设置刷新的回调
    handleRefresh(){
      this.$store.dispatch('moments/refreshMoments');
      this.$store.dispatch('moments/requestMyMoment');
    }
  },

  created(){
    
    this.$store.dispatch('moments/requestMomentsList');
    this.$store.dispatch('moments/requestHotIssues');
    this.$store.dispatch('moments/requestMyMoment');
  },

}

</script>

<style scoped lang="scss">

.tab-bar{
  position:fixed!important;
}
.homeContent{
  width: 100%;
  height: 574px;
  background: url('../../../assets/t4.jpg') no-repeat;
}
.van-loading__spinner {
  position: absolute;
  width: 10px;
  left: 50%;
  top: 50%;
  z-index: 500;
  transform: translate(-50%, -50%);
}
.van-loading{
    text-align: center;
    position: relative;
    span{
      position: absolute;
      width: 50px;
      height: 50px;
      left: 0;
      top: 0;
      transform: translate(-50%,-50%);
    }
}
.loadmore{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  bottom: -50px;
}
.loadmore img{
  width: 20px;
  height: 20px;
  transition: 300ms;
  transform: rotate(180deg);
  display: inline-block;
}
.loadmore img.active{
  transform: rotate(0);
}

.loadmore span{
  height: 20px;
  font-size: 16px;
  color: #666;
}
</style>