<template>
  <div class="page modal-page" id="center">
    <div class="title">个人中心</div>
    <div class="top">
      <img src="../../../assets/centerbg2.jpg" alt />
    </div>
    <app-scroll class="content">
      <div class="btn1" @click="goLogin()">前往登录</div>
      <div class="btn2" @click="goRegiester()">前往注册</div>
      <div v-for="item in 50" :key="item">{{item}}</div>
    </app-scroll>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push(`/login`);
    },
    goRegiester() {
      this.$router.push(`/regiester`);
    }
  }
};
</script>

<style scoped lang="scss">
#center {
  background: #fff;
  .title {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
  }
  .top {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    top: 150px;

    
  }
}
</style>