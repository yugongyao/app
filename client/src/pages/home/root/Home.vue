<template>
  <div class="page" id="home">
    <h1>home</h1>
    <router-link to="/home/bannerDetail/1">前往轮播详情</router-link>
    <router-view></router-view>
    <div class="btn1" @click="goUserDetail()">前往用户详情</div>
    <div class="btn2" @click="goDynamic()">前往动态详情</div>
    <banner :list="bannerList"/>
    <!-- <img src="../../../assets/banner1.jpg" alt=""> -->
  </div>
</template>

<script>
import banner from './children/banner'
export default {
  components: {
    banner
  },
  data(){
    return {
      bannerList:[
        {id:1,picUrl:`../../../assets/banner1.jpg`},
        {id:2,picUrl:`../../../assets/banner2.jpg`},
        {id:3,picUrl:`../../../assets/banner3.jpeg`},
        {id:4,picUrl:`../../../assets/banner4.jpg`},
        {id:5,picUrl:`../../../assets/banner5.jpg`},
      ]
    }
  },
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