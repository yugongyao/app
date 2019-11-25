<template>
  <div class="list">
    <h2>
      热门评论
      <span class="iconfont icon-you"></span>
    </h2>
    <div class="item" v-for="item in 5" :key="item">
      <div class="user-img">
        <img src="/assets/star.jpg" alt />
      </div>
      <div class="user-inner border-bottom">
        <div class="inner-head">
          <h2 class="user-name">用户名username</h2>
          <p class="user-icon">
            <i>10</i>
            <span class="iconfont icon-icon-test"></span>
          </p>
        </div>
        <div class="inner-content">
          <p>风里笑着风里唱</p>
          <p>感激天意碰见你</p>
          <p>纵使苦涩都变得美</p>
          <p>天也老任海也老</p>
          <p>唯望此爱爱未老</p>
          <p>愿意今生约定他生再拥抱~</p>
        </div>
        <div class="inner-footer">
          <span class="back">回复</span>
          <span class="share">分享</span>
          <span class="time">2019/11/09</span>
        </div>
      </div>
    </div>
    <the-end></the-end>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list {
  padding: 20px 15px;
  background: #fff;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  h2 {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #333;
    font-weight: bolder;
    margin-bottom: 20px;
    span {
      font-size: 14px;
      color: #727272;
      padding-left: 15px;
    }
  }
  .item {
    width: 100%;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
    .user-img {
      width: 60px;
      height: 100%;
      position: relative;
      background: blue;
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 10px;
        border-radius: 50%;
      }
    }
    .user-inner {
      flex: 1;
      background: #fff;
      .inner-head {
        height: 30px;
        display: flex;
        .user-name {
          line-height: 30px;
          font-size: 14px;
          flex: 1;
        }
        .user-icon {
          width: 50px;
          line-height: 30px;
          i {
            padding-right: 5px;
          }
        }
      }
    }
    .inner-content{
      margin: 20px 0;
      p{
        line-height: 30px;
      }
    }
    .inner-footer{
      display: flex;
      margin-bottom: 20px;
      span{
        color: #727272;
        font-size: 12px;
        padding: 10px 10px 10px 0;
      }
    }
  }
}
</style>