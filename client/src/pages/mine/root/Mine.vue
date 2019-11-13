<template>
  <div class="page" id="mine">
    <h1>mine</h1>
    <div class="link">
      <router-link to="/mine/center">个人中心</router-link>
      <router-link to="/mine/collect">收藏</router-link>
      <router-link to="/mine/follow">关注</router-link>
      <router-link to="/mine/feedback">反馈</router-link>
    </div>
    <router-view></router-view>
    <div class="btn1" @click="goLogin()">前往登录</div>
    <div class="btn2" @click="goRegiester()">前往注册</div>
  </div>
</template>
<script>
export default {
  methods:{
    goLogin(){
      this.$router.push(`/login`);
    },
    goRegiester(){
      this.$router.push(`/regiester`);
    }
  }
}
</script>

<style scoped>
  .router-link-active{
    color: red;
  }
</style>