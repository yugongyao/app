<template>
  <div class="list">
    <div class="item" v-for="item in 6" :key="item">
      <div class="item-top">
        <div class="item-logo">
          <img src="../../../../assets/star.jpg" alt />
        </div>
        <div class="tip">
          <span>发布:</span>
        </div>
        <h2 class="item-name fontXing">用户名user</h2>
      </div>
      <p class="inner text-overflow">用户发表的动态的文字描述</p>
      <p class="tag fontXing">
        <span>标签</span>
      </p>
      <div class="main-img"><img src="../../../../assets/centerbg.jpg" alt=""></div>
      <div class="item-handle">
        <p><span class="iconfont icon-icon-test"></span><i>2</i></p>
        <p><span class="iconfont icon-pinglun"></span><i>3</i></p>
        <p>2019/11/08</p>
      </div>
    </div>
    <div class="end"><p class="fontXing">-The End-</p></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.list {
  padding: 20px 15px;
  .end{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .item {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    // background: #eee;
    box-shadow: 2px 2px 5px #aaa;
    border-radius: 5px;
    box-sizing: border-box;
    .item-top {
      height: 40px;
      display: flex;
      flex-direction: row;
      .item-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: blue;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .tip {
        width: 40px;
        text-align: center;
        font-size: 12px;
        color: #999;
        padding-top: 23px;
      }
      .item-name {
        text-align: center;
        line-height: 40px;
        padding-right: 60px;
        flex: 1;
        font-size: 16px;
        color: #333;
      }
    }
    .inner {
      padding-left: 12px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #494949;
    }
    .tag {
      padding: 1px 10px;
      span {
        padding: 3px;
        font-size: 12px;
        color: #608bc8;
        border-radius: 5px;
        background: #ecf5fc;
      }
    }
    .main-img{
      width: 100%;
      height: 120px;
      padding: 10px 0;
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .item-handle{
      width: 100%;
      height: 30px;
      display: flex;
      line-height: 30px;
      p{
        margin-left: 10px;
        span{
          color: #B4B4B4;
        }
        i{
          padding-left: 10px;
          font-size: 14px;
          color: #B4B4B4;
        }
      }
      p:nth-of-type(3){
        margin-left: 30px;
        color: #B4B4B4;
        font-size: 12px;
      }
    }
  }
}
</style>