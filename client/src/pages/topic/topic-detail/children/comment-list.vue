<template>
  <div class="list">
    <h2>
      热门评论
      <span class="iconfont icon-you"></span>
    </h2>
    <div class="item">
      <div class="user-img">
        <img src="../../../../assets/star.jpg" alt="">
      </div>
      <div class="user-inner">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list{
    padding:20px 15px;
    background: #fff;
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    h2{
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      font-weight: bolder;
      margin-bottom: 20px;
      span{
        font-size: 14px;
        color: #727272;
        padding-left: 15px;
      }
    }
    .item{
      width: 100%;
      display: flex;
      height: 300px;
      background: #fff;
      box-sizing: border-box;
      .user-img{
        width:60px;
        height: 100%;
        position: relative;
        img{
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 10px;
          border-radius: 50%;
        }
      }
    }
  }
</style>