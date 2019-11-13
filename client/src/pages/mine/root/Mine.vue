<template>
  <div class="page-wrap">
    <div class="page" id="mine">
      <!-- 顶部 -->
      <div class="top">我的</div>
      <!-- 用户 -->
      <div class="page-content">
        <div class="user card fontXing">
          <div class="user-icon">
            <p>
              <img src="../../../assets/star.jpg" alt />
            </p>
          </div>
          <div class="user-name">
            <p>
              <i>用户名user</i>
            </p>
          </div>
          <div class="user-center">
            <p>
              <router-link to="/mine/center" class="link-center">个人中心</router-link>
              <span class="iconfont icon-you"></span>
            </p>
          </div>
          <div class="user-main">
            <div class="user-collect main-all">
              <span class="iconfont icon-icon-test"></span>
              <router-link to="/mine/collect" class="link-collect">收藏</router-link>
            </div>
            <div class="user-line"></div>
            <div class="user-follow main-all">
              <span class="iconfont icon-guanzhu"></span>
              <router-link to="/mine/follow" class="link-follow">关注</router-link>
            </div>
          </div>
        </div>
        <!-- 其他 -->
        <div class="other card fontXing">
          <div class="other-item border-bottom">
            <router-link to="/mine/feedback">反馈中心</router-link>
            <span class="iconfont icon-you"></span>
          </div>
          <div class="other-item border-bottom">
            <router-link to="/mine/feedback">帮助中心</router-link>
            <span class="iconfont icon-you"></span>
          </div>
          <div class="other-item border-bottom">
            <router-link to="/mine/feedback">充值系统</router-link>
            <span class="iconfont icon-you"></span>
          </div>
          <div class="other-item border-bottom">
            <router-link to="/mine/feedback">vip系统</router-link>
            <span class="iconfont icon-you"></span>
          </div>
          <div class="other-item">
            <router-link to="/mine/feedback">我要投稿</router-link>
            <span class="iconfont icon-you"></span>
          </div>
        </div>
        <!-- 结束 -->
        <div class="end">
          <h4>&copy;WELCOME TO P-X-C APP</h4>
        </div>
      </div>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.router-link-active {
  color: red;
}
.page {
  background: url(../../../assets/mine1.jpg) no-repeat;
  background-size: 100% 100%;
}
.page-content {
  padding: 0px 20px;
  box-sizing: border-box;
}
.card {
  border-radius: 10px;
}
.top {
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  color: #ddd;
  text-align: center;
  width: 100%;
}
.user {
  padding-top: 10px;
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  .user-icon {
    width: 100%;
    height: 74px;
    position: relative;
    left: 0;
    top: 0;
    p {
      width: 70px;
      height: 70px;
      padding: 2px;
      box-sizing: border-box;
      border: solid 2px #ddd;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }
  .user-name {
    width: 100%;
    height: 30px;
    p {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      i {
        color: #ddd;
      }
    }
  }
  .user-center {
    width: 100%;
    height: 40px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      .link-center {
        color: #ddd;
        font-size: 12px;
      }
      span {
        color: #ddd;
        font-size: 12px;
      }
    }
  }
  .user-main {
    padding: 10px;
    overflow: hidden;
    display: flex;
    .main-all {
      height: 40px;
      line-height: 40px;
      text-align: center;
      flex: 1;
      color: #ddd;
      span {
        padding-right: 5px;
        color: #ddd;
      }
      a {
        color: #ddd;
      }
    }
    .user-line {
      height: 40px;
      width: 1px;
      background: #ddd;
    }
  }
}
.other {
  margin-top: 20px;
  padding: 0px 20px;
  background: rgba(0, 0, 0, 0.3);
  .other-item {
    line-height: 30px;
    text-align: center;
    a {
      font-size: 14px;
      color: #ddd;
    }
    span {
      float: right;
      font-size: 12px;
      color: #ddd;
    }
  }
}
.end {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  h4 {
    font-size: 12px;
    color: #ddd;
    text-align: center;
    text-shadow: 2px 2px #777;
  }
}
</style>