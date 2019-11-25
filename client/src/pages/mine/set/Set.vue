<template>
  <div class="page modal-page" id="set">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom"></app-header>
    <app-scroll class="content bg">
      <div class="set-main">
        <div class="toCenter border-bottom" @click="goCenter">
          <div class="user-logo">
            <img src="/assets/star.jpg" alt />
          </div>
          <div class="user-name">
            <p>{{$store.state.userInfo.username}}</p>
            <p>用户简介</p>
          </div>
          <div class="arrow">
            <span class="iconfont icon-you"></span>
          </div>
        </div>
        <div class="safety">
          <p>账户与安全</p>
          <div class="arrow">
            <span class="iconfont icon-you"></span>
          </div>
        </div>
        <!-- <div class="otherApp set-common">
          <div class="weChat border-bottom iconAll">
            <p>
              <span class="iconfont icon-weixin"></span>微信
            </p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
          <div class="QQ border-bottom iconAll">
            <p>
              <span class="iconfont icon-icon"></span>QQ
            </p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
          <div class="weibo border-bottom iconAll">
            <p>
              <span class="iconfont icon-weibo"></span>微博
            </p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
          <div class="google border-bottom iconAll">
            <p>
              <span class="iconfont icon-google"></span>谷歌
            </p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
        </div> -->
        <div class="set-inform set-common">
          <div class="privacy border-bottom iconAll">
            <p>隐私</p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
          <div class="notice border-bottom iconAll">
            <p>通知</p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
        </div>
        <div class="platform set-common">
          <div class="platform-inner border-bottom iconAll">
            <p>关于平台</p>
            <p>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
        </div>
        <div v-if="!isLogin" class="toLogin" @click="goLogin">
          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">{{login}}</van-button>
        </div>
        <div v-if="isLogin" class="toLogin" @click="goOut">
          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">退出登录</van-button>
        </div>
        <div class="end">
          <p class="fontXing">-The End-</p>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import store from "../../../store";
import Http from '../../../utils/Http'
export default {
  data() {
    return {
      title: "设置中心",
      hasBack: true,
      checked1: true,
      login: "登录",
      isLogin:store.state.isLogin
    };
  },
  methods: {
    goLogin() {
      this.$router.push(`/login`);
    },
    goCenter() {
      this.$router.push(`/mine/center`);
    },
    async goOut(){
      this.$store.commit('setLogin',false);
       let result = await Http.get("api/user/logout");
        if(result.data.status === 0){
          this.$Toast('退出成功！')
        } else {
          this.$Toast('退出失败')
        }
      this.$router.push("/login")
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
  .page {
    background: #fff !important;
  }
}
#set {
  font-size: 14px;
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
  .bg {
    background: url(/assets/t4.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .toLogin {
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  .end{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }
  .set-main {
    margin-top: 5px;
    background: #eff0f0;
    .toCenter {
      padding: 10px;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      background: #fff;
      box-sizing: border-box;
      .user-logo {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .user-name {
        flex: 1;
        padding: 0 15px;
        p {
          height: 20px;
          line-height: 20px;
        }
        p:nth-of-type(1) {
          color: #010102;
        }
        p:nth-of-type(2) {
          color: #727272;
          font-size: 12px;
        }
      }
    }
    .safety {
      padding: 10px;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 1px 1px 5px #999;
      p {
        flex: 1;
      }
    }
    .set-common {
      margin-top: 20px;
      background: #fff;
      box-shadow: 1px 1px 5px #999;
      .iconAll{
        padding: 10px;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        p:nth-of-type(1){
          flex: 1;
          span{
            padding-right: 10px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .icon-you{
    font-size: 12px;
  }
}
</style>