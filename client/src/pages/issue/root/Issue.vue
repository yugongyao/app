<template>
  <div class="page" id="issue">
    <app-header :hasBack="true" title="发布">
      <span slot="right-btn" class="right-btn" @click="uploaderAction">上传</span>
    </app-header>

    <div class="content noBar">
      <van-uploader v-model="fileList" multiple :max-count="4" />
      <div class="desc">
        <div class="desc-title">
          <h3>描述</h3>
          <p>{{words.length}}/1000</p>
        </div>
        <textarea ref="desc" v-model="words" placeholder="填写描述和主题，可以让更多的人看到你的作品"></textarea>
      </div>
      <div class="theme">
        <h3>主题</h3>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="address">
        <h3>位置</h3>
        <a href="#">点击添加作品位置</a>
      </div>
      <div class="pro">
        <van-switch-cell v-model="checked" title="原创保护" />
        <span>保存或下载是自动增加水印</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      words: "",
      value1: 0,
      option1: [
        { text: "摄影师日常", value: 0 },
        { text: "分享一个好天气", value: 1 },
        { text: "假日旅行计划", value: 2 },
        { text: "趣味图片", value: 3 },
        { text: "吃货的世界", value: 4 },
        { text: "电影看这里", value: 5 },
        { text: "我爱这世界", value: 6 },
        { text: "拒绝平庸", value: 7 },
        { text: "美妆你懂吗", value: 8 },
        { text: "无尽天光与你", value: 9 },
        { text: "其他", value: 10 }
      ],
      checked: true
    };
  },

  methods: {
    uploaderAction() {
      if (this.fileList.length == 0) {
        this.$Toast("请添加至少一张图片");
      } else {
        var formData = new FormData();
        //  将所有图片挂到formData上
        this.fileList.forEach(item => {
          formData.append("img", item.file);
        });

        // 开始上传
        let config = {
          //添加请求头
          headers: { "Content-Type": "multipart/form-data" }
        };
        axios
          .post("http://localhost:3000/upload/img", formData, config)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        // console.log(formData.get("img"));
      }
    }
  },
  watch: {
    words() {
      if (this.words.length >= 1000) {
        this.words = this.words.substr(0, 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#issue {
  height: 100%;
  width: 100%;
}
.content {
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  .desc{
    width: 100%;
    display: flex;
    margin-top: 20px;
    .desc-title{
      width: 60px;
      text-align: center;
      h3{
        font-size: 14px;
        color: #555;
      }
      p{
        font-size: 12px;
        color: #bbb;
        line-height: 24px;
      }

    }
    textarea{
      flex:1;
      height: 100px;
      border: 1px solid #cccccc;
      padding: 5px;
      box-sizing: border-box;
    }
  }
}
</style>