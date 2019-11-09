<template>
  <div class="page" id="home">
    <h1>home</h1>
    <router-link to="/home/bannerDetail/1">前往轮播详情</router-link>
    <router-view></router-view>
    <div class="btn1" @click="goUserDetail()">前往用户详情</div>
    <div class="btn2" @click="goDynamic()">前往动态详情</div>
  </div>
</template>

<script>
export default {
  methods:{
    goUserDetail(){
      this.$router.push(`/userDetail`);
    },
    goDynamic(){
      this.$router.push(`/dynamic`);
    }
  }
}
</script>

<style scoped>
.btn1{
  background: yellowgreen;
}
.btn2{
  background: #ddd;
}
</style>