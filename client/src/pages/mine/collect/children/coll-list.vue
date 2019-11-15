<template>
  <div class="list">
    <div class="item" v-for="item in 6" :key="item">
      <div class="choice"><span class="iconfont icon-weibiaoti38"></span></div>
      <div class="item-img">
        <img src="../../../../assets/moban.jpg" alt />
      </div>
      <div class="item-inner">
        <p class="item-title more-overflow">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
        <p class="item-tag">#标签</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.list {
  padding: 10px 10px;
  .item {
    padding: 10px;
    height: 120px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px #999;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
    .choice{
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      left: -30px;
      line-height: 120px;
    }
    .item-img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
      }
    }
    .item-inner {
      position: relative;
      flex: 1;
      padding: 10px;
      .item-title{
        color: #464646;
        font-weight: bolder;
        font-size: 14px;
      }
      .item-tag{
        position: absolute;
        left: 10px;
        bottom: 10px;
        color: #C9C9C9;
      }
    }
  }
}
</style>