<template>
  <div class="page modal-page" id="center">
    <app-header :title="title" :hasBack="hasBack" class="topColor"></app-header>
    <div class="top">
      <img src="../../../assets/centerbg.jpg" alt class="centerbg" />
      <div class="user-icon">
        <p class="user-logo">
          <img src="../../../assets/star.jpg" alt />
        </p>
      </div>
    </div>
    <div class="user-main">
      <h2 class="user-name fontXing">{{userInfo.username}}</h2>
      <div class="user-edit fontXing">
        <router-link to="/mine/center/edit">编辑资料</router-link>
      </div>
    </div>
    <div class="user-tab">
      <div class="tab-inner">
        <div class="tabs prod">
          <span>{{prodNum}}</span>
          <span>作品</span>
        </div>
        <div class="tabs atten">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="tabs fans">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <app-scroll class="content bg">
      <issueList />
    </app-scroll>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../../../store";
import issueList from "./children/issue-list";

export default {
  components: {
    issueList
  },
  data() {
    return {
      title: "个人中心",
      hasBack: true,
      prodNum:0
    };
  },
  methods: {},
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  mounted(){
    if (!storage.get('soso')) {
      this.prodNum=0;
    }
    this.prodNum=storage.get('soso').length;
  }
};
</script>

<style scoped lang="scss">
#center {
  .topColor {
    color: #ddd;
  }
  .app-header {
    z-index: 200;
  }
  .bg {
    background: url(../../../assets/t4.jpg) no-repeat;
    background-size: 100% 100%;
  }
  background: #fff;
  .title {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    color: #ddd;
    z-index: 200;
  }
  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 150px;
    .centerbg {
      width: 100%;
      height: 150px;
    }
    .user-icon {
      position: absolute;
      height: 60px;
      width: 100%;
      left: 0;
      bottom: -15px;
      z-index: 200;
      .user-logo {
        width: 60px;
        height: 60px;
        border: solid 2px #fff;
        border-radius: 50%;
        margin-left: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
  .user-main {
    height: 50px;
    width: 100%;
    background: #fff;
    position: relative;
    .user-name {
      line-height: 50px;
      text-align: center;
      font-size: 20px;
    }
    .user-edit {
      width: 60px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 12px;
      background: #eee;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .user-tab {
    height: 50px;
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 5px #999;
    .tab-inner {
      width: 100%;
      height: 100%;
      background: #eee;
      border-radius: 5px;
      display: flex;
      padding: 5px 0;
      box-sizing: border-box;
      .tabs {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        span:nth-of-type(1) {
          flex: 1;
          font-size: 20px;
        }
        span:nth-of-type(2) {
          margin-top: 4px;
          flex: 1;
          font-size: 12px;
          color: #aaa;
        }
      }
    }
  }
  .content {
    top: 250px;
  }
}
</style>