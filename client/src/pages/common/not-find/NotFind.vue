<template>
  <div class="page modal-page" id="not-find">
    <div class="btn" @click="goHome"></div>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
}
#not-find{
  background:url(../../../assets/404.jpg) no-repeat;
  background-size: 100% 100%;
  .btn{
    width: 56%;
    height: 52px;
    border-radius: 26px;
    position: absolute;
    left: 22%;
    bottom: 28%;
  }
}
</style>>
