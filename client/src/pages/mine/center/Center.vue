<template>
  <div class="page modal-page" id="center">
    <app-header :title="title" :hasBack="hasBack"></app-header>
    <app-scroll class="content">
      <div class="top">
        <img src="../../../assets/centerbg.jpg" alt class="centerbg"/>
        <div class="user-icon">
          <p></p>
        </div>
      </div>
      <div class="btn1" @click="goLogin()">前往登录</div>
      <div v-for="item in 50" :key="item">{{item}}</div>
    </app-scroll>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'个人中心',
      hasBack:true
    }
  },
  methods: {
    goLogin() {
      this.$router.push(`/login`);
    }
  }
};
</script>

<style scoped lang="scss">
#center {
  .app-header{
    z-index: 200;
    .back-btn{
      color: #ddd;
    }
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
    color: #ddd
;
    z-index: 200;
  }
  .top {
    width: 100%;
    height: 150px;
    .centerbg {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    top: 0;
  }
}
</style>