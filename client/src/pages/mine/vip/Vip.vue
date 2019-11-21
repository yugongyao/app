<template>
  <div class="page modal-page" id="vip">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom"></app-header>
    <app-scroll class="content">
      <div class="vip-img">
        <img src="/assets/vip.jpg" alt />
      </div>
      <div class="vip-img2">
        <img src="/assets/vip3.jpg" alt />
      </div>
      <div class="btn" @click="topUp">
        <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">前往充值</van-button>
      </div>
      <div class="end">
        <p class="fontXing">-The End-</p>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { Dialog ,Toast} from 'vant' 
export default {
  data() {
    return {
      title: "成为vip",
      hasBack: true
    };
  },
  methods: {
    topUp() {
      Dialog.confirm({
        title: "充值提示",
        message: "禁止未成年人充值!是否充值,成为VIP?"
      })
        .then(() => {
          // on confirm
          Toast.success('充值成功');
        })
        .catch(() => {
          // on cancel
          Toast.fail('充值失败');
        });
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
  .page {
    background: #fff !important;
  }
}
.end {
  margin: 20px 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
#vip {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
  .vip-img {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .vip-img2 {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .btn {
    margin-top: 30px;
  }
}
</style>