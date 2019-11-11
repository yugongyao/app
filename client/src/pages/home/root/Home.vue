<template>
  <div class="page" id="home">
    <!-- <app-header title="首页"></app-header> -->
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