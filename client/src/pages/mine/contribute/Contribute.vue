<template>
  <div class="page modal-page fontXing" id="contribute">
    <app-header :title="title" :hasBack="hasBack" class="topColor"></app-header>
    <div class="logo">
      <p class="fontXing">WELCOME TO P-X-C</p>
    </div>
    <div class="main-inner">
      <p>成为P-X-C的作者,发布你的作品</p>
      <p>注册并申请成为作者,将能发布你的高清作品</p>
      <p>并可以通过移动设备与用户互动</p>
    </div>
    <div class="btn">
      <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">跳转至开发平台</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "成为作者",
      hasBack: true
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
  .page{
    background: url(/assets/contribute.jpg) no-repeat;
    background-size:100% 100%; 
  }
}
#contribute {
  .topColor {
    color: #ddd;
  }
  .logo{
    width: 100%;
    position: absolute;
    left: 0;
    top: 20%;
    color: #ddd;
    font-size: 28px;
    p{
      text-align: center;
      text-shadow: 2px 2px #999;
    }
  }
  .main-inner{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 40%;
    color: #efefef;
    font-size: 20px;
    p:nth-of-type(1){
      text-align: center;
      font-weight: bolder;
      text-shadow: 2px 2px #999;
      line-height: 50px;
    }
    p:nth-of-type(2){
      text-align: center;
      font-size: 16px;
      color: #ddd;
      line-height: 30px;
    }
    p:nth-of-type(3){
      text-align: center;
      font-size: 16px;
      color: #ddd;
      line-height: 30px;
    }
  }
  .btn{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 25%;
    padding: 0 30px;
    box-sizing: border-box;
  }
}
</style>