<template>
  <div class="page modal-page" id="feedback">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom"></app-header>
    <app-scroll class="content">
      <div class="main-inner">
        <div class="feed-img">
          <img src="../../../assets/feedback.jpg" alt />
        </div>
        <div class="feed-title">
          <h3 class="fontXing">`P-X-C`用户反馈中心</h3>
        </div>
        <div class="feed-check">
          <p>
            我要
            <i>*</i>
          </p>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell
                v-for="(item,index) in list"
                :title="`${item}`"
                :key="index"
                clickable
                @click="radio = `${item}`"
              >
                <van-radio slot="right-icon" :name="`${item}`" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <p>
            在这里详细说说
            <i>*</i>
          </p>
          <van-cell-group>
            <van-field
              v-model="message"
              rows="4"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入留言"
              show-word-limit
            />
          </van-cell-group>
          <div class="btn" @click="submit">
            <van-button type="primary" size="large" >提交反馈</van-button>
          </div>
        </div>
      </div>
      <div class="end">
        <p class="fontXing">-The End-</p>
      </div>
    </app-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "反馈中心",
      hasBack: true,
      radio: "",
      list: [
        "报使用BUG",
        "提需求和建议",
        "吐槽和举报",
        "给该软件点个赞",
        "旧数据丢失找回",
        "注销账号",
        "申请人工服务"
      ],
      message:'',
    };
  },
  methods: {
    submit(){
      console.log(this.radio);
      console.log(this.message);
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
#feedback {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
  .end{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .main-inner {
    background: #edeef2;
    padding: 10px;
    .feed-img {
      width: 100%;
      height: 200px;
      box-shadow: 2px 2px 5px #999;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .feed-title {
      background: #fff;
      width: 100%;
      height: 60px;
      h3 {
        line-height: 60px;
        text-align: center;
        font-size: 24px;
      }
    }
    .feed-check {
      background: #fff;
      width: 100%;
      p {
        line-height: 30px;
        color: #333;
        font-weight: bolder;
        font-size: 16px;
        padding-left: 20px;
        i {
          color: red;
        }
      }
      .btn{
        margin-top: 20px;
      }
    }
  }
}
</style>