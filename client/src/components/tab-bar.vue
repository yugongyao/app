<template>
<nav  class="tab-bar border-top">
  <router-link class="tab-item" v-for="item in tabList" :key="item.id" :to="item.path">
    <span :class="item.icon" id="icon"></span>
    <span class="title">{{item.title}}</span>
  </router-link>
</nav>
</template>

<script>
export default {
  name: 'tab-bar',

  data(){
    return {
      tabList: [
        {id: 1, path: '/home', title: '首页', icon: 'iconfont icon-xiangxiasanjiaoxing'},
        {id: 2, path: '/topic', title: '话题', icon: 'iconfont icon-chahao'},
        {id: 3, path: '/issue', title: '发布', icon: 'iconfont icon-jia1'},
        {id: 4, path: '/inform', title: '通知', icon: 'iconfont icon-weibiaoti38'},
        {id: 5, path: '/mine', title: '我的', icon: 'iconfont icon-cub'}
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar{
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  overflow: hidden;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    #icon{
      font-size: 24px;
      margin-bottom: 5px;
      margin-top: 5px;
    }
    .title{
      font-size: 12px;
      margin-bottom: 5px;
    }
    &.router-link-active{
      color: goldenrod;
    }
  }
}
</style>