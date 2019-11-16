<template>
  <div id="works">
    <int-list :isIntDetail="false">
      <div class="work-content">
        <div class="header border-bottom">
          <div class="headImg">
            <img src="https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portraith/item/tb.1.96ccdaa.fqaF4falPQP-O9L_bOl3eQ?t=1436072912" alt="">
          </div>
          <div class="name-time">
            <p class="name">change</p>
            <span>14:33</span>
          </div>
          <span class="follow">+关注</span>
        </div>
        <p class="word-content">
          今天大约十多个就是要发给手动阀U阿斯顿湖岸上的恢复按发送到很舒服爱好速度发哈三叉戟
        </p>
        <div class="picture-content">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573809897438&di=df487914a7759a2c2c6f87e4852e523d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F057c50ab3dc879fe71f73661d8b7bff8b8034b1f28907-LWqMS5_fw658" alt="">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573809897438&di=df487914a7759a2c2c6f87e4852e523d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F057c50ab3dc879fe71f73661d8b7bff8b8034b1f28907-LWqMS5_fw658" alt="">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573809897438&di=df487914a7759a2c2c6f87e4852e523d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F057c50ab3dc879fe71f73661d8b7bff8b8034b1f28907-LWqMS5_fw658" alt="">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573809897438&di=df487914a7759a2c2c6f87e4852e523d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F057c50ab3dc879fe71f73661d8b7bff8b8034b1f28907-LWqMS5_fw658" alt="">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573809897438&di=df487914a7759a2c2c6f87e4852e523d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F057c50ab3dc879fe71f73661d8b7bff8b8034b1f28907-LWqMS5_fw658" alt="">
        </div>
      </div>
    </int-list>
  </div>
</template>

<script>
import IntList from "./children/int-list";
export default {
  components:{
    [IntList.name]:IntList
  }
};
</script>

<style lang="scss" scoped>
#works {
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: #454545;
  width: 100%;
  z-index: 200;
  .work-content{
    width: 100%;
    .header{
      height: 40px;
      padding: 10px 16px 10px 10px;
      img{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%
      }
      .name-time{
        float: left;
        // text-align: center;
        margin-left: 10px;
      
        .name{
            color: #fff;
          line-height: 24px;
          font-size: 16px;
        }
        span{
            color: #aaaaaa;
          line-height: 16px;
          font-size: 13px;
        }
      }
      .follow{
        float: right;
        width: 44px;
        height: 25px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 12px;
        color: #eee;
        text-align: center;
        // border-radius: 5px;
        border-bottom: 1px dashed red;
        margin-top: 13px;
       
      }

    }
    .word-content{
      padding: 10px 10px 0px;
      text-indent: 28px;
      font-size: 14px;
      line-height: 20px;
      color: #eeeeee;
      letter-spacing: 3px;
    }
    .picture-content{
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      img{
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
  
}
</style>