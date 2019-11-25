<template>
<nav  class="tab-bar border-top">
  <router-link class="tab-item" v-for="item in tabList" :key="item.id" :to="item.path">
    <span :class="item.icon" id="icon"></span>
    <span class="title">{{item.title}}</span>
  </router-link>
</nav>
</template>

<script>
// 使用vant代替
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
  background:#fff;
  color: #777;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    #icon{
      font-size: 20px;
      margin-bottom: 5px;
      margin-top: 5px;
      color: #777;
    }
    .title{
      font-size: 12px;
      margin-bottom: 5px;
      color: #777;
    }
    &.router-link-active{
      span{
        font-weight: bold;
        color: #000;
        &#icon.iconfont{
          color: #000;
          text-shadow: 2px 2px #aaaaaa;
        }
        &.title{
          text-shadow: 2px 2px #aaaaaa;
        }
      }
    }
  }
}
</style>