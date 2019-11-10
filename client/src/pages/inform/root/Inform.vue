<template>
  <div class="page" id="inform">
    <h1>通知inform</h1>
    <router-link to="/inform/interact">互动</router-link>
    <router-link to="/inform/letter">私信</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active{
  color: red;
}
</style>