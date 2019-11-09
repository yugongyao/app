<template>
  <div id="app">
    <div class="tab-bar">
      <router-link class="tab-item" to="/home">首页</router-link>
      <router-link class="tab-item" to="/topic">话题</router-link>
      <router-link class="tab-item" to="/issue">发布</router-link>
      <router-link class="tab-item" to="/inform">通知</router-link>
      <router-link class="tab-item" to="/mine">我的</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app{
  .tab-bar{
    border: solid #ddd 2px;
    .tab-item{
      background: #ccc;
      color: #333;
    }
    .router-link-active{
      color: red;
    }
  }
}
</style>
