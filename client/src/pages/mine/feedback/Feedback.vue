<template>
<div class="page" id="feedback">
  <h1>意见反馈</h1>
  <div class="btn1" @click="goLogin()">前往登录</div>
</div>
</template>

<script>
export default {
   methods: {
    goLogin() {
      this.$router.push(`/login`);
    }
  }
}
</script>

<style scoped lang="scss">
.btn1{
  color: #ddd;
}
</style>