<template>
  <div id="issue">
    <div style="display:none" id="allmap"></div>
    <app-header :hasBack="true" title="发布">
      <span slot="right-btn" class="right-btn" @click="uploaderAction">上传</span>
    </app-header>

    <div class="content noBar">
      <van-uploader v-model="fileList" multiple :max-count="4" class="uploader" />
      <div class="desc border-bottom">
        <div class="desc-title">
          <h3>描述</h3>
          <p>{{words.length}}/1000</p>
        </div>
        <textarea ref="desc" v-model="words" placeholder="填写描述和主题，可以让更多的人看到你的作品"></textarea>
      </div>
      <div class="theme border-bottom">
        <h3>主题</h3>
        <van-dropdown-menu style="height: 18px;">
          <van-dropdown-item v-model="value1" :options="option1" style="font-size: 13px;" />
        </van-dropdown-menu>
      </div>
      <div class="address border-bottom">
        <h3>位置</h3>
        <a v-if="!address" href="#" @click="geoAction">点击获得作品位置</a>
        <a v-if="address">{{address}}</a>
      </div>
      <div class="pro">
        <van-switch-cell class="border-bottom" v-model="checked" title="原创" />
      </div>
      <div class="footerEnd">
        <p>-The end-</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store";
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    if (store.state.isLogin) {
      next();
    } else {
      next("/login");
    }
  },
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
      checked: true,
      address: "",
      url: ""
    };
  },

  methods: {
    uploaderAction() {
      if (this.fileList.length == 0) {
        this.$Toast("请添加至少一张图片");
      } else if (this.$refs.desc.value == "" || this.address == "") {
        this.$Toast("请将信息填写完整");
      } else {
        this.$Toast.loading("正在发布...");
        var formData = new FormData();
        var baseImg = [];
        //  将所有图片挂到formData上
        this.fileList.forEach(item => {
          formData.append("img", item.file);
          baseImg.push(this.fileList.value);
        });

        const v = document.querySelector(".van-uploader__input").value;
        console.log(v);

        formData.append("desc", this.$refs.desc.value);
        formData.append("address", this.address);
        formData.append("theme", this.option1[this.value1].text);
        formData.append("pro", this.checked);

        var self = this;

        // 开始上传
        let config = {
          //添加请求头
          headers: { "Content-Type": "multipart/form-data" }
        };
        axios
          .post("http://localhost:4000/upload/img", formData, config)
          .then(function(response) {
            var data = {
              username:store.state.userInfo.username,
              img: response.data,
              desc: self.$refs.desc.value,
              address: self.address,
              pro: self.option1[self.value1].text,
              checked: self.checked
            };

            if (!storage.get("soso")) {
              storage.set("soso", []);
            }

            var localData = storage.get("soso");

            localData.push(data);
            // console.log(localData);
            storage.set("soso", localData);
            self.$router.push('/topic/today');
            console.log(111);
            
            // this.$router.push("/home");
            self.$Toast.clear();
            
          })
          .catch(function(error) {
            // alert("上传失败！");
            console.log(error);
          });
        // console.log(formData.get("img"));
      }
     
    },
    geoAction() {
      this.$Toast.loading({
        message: "位置获取中...",
        forbidClick: true,
        duration: 0
      });

      var self = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          self.getAddress(r.point);
        } else {
          alert("failed" + this.getStatus());
        }
      });
    },
    //获取地址信息，设置地址label
    getAddress(point) {
      var self = this;
      var gc = new BMap.Geocoder();
      gc.getLocation(point, function(rs) {
        var addComp = rs.addressComponents;
        var address =
          addComp.province +
          addComp.city +
          addComp.district +
          addComp.street +
          addComp.streetNumber; //获取地址
        self.address = address;
        self.$Toast.clear();
      });
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
.content {
  position: absolute;
  top: 45px;
  bottom: 49px;
  width: 100%;

  &.noBar {
    bottom: 0;
    z-index: 200;
  }
}
#issue {
  height: 100%;
  width: 100%;

  font-family: STXingkai;
}
h3 {
  font-size: 14px;
  color: #333;
  width: 70px;
  text-align: center;
}
.content {
  box-sizing: border-box;
  background: #fff;
  position: absolute;
  .uploader {
    padding: 15px 11px;
    box-sizing: border-box;
  }
  .desc {
    width: 100%;
    display: flex;
    padding: 15px 11px;
    box-sizing: border-box;
    .desc-title {
      width: 70px;
      text-align: center;

      p {
        font-size: 12px;
        color: #bbb;
        line-height: 24px;
      }
    }
    textarea {
      flex: 1;
      height: 100px;
      border: none;
      box-sizing: border-box;
      color: #666;
      font-size: 13px;
    }
    textarea::-webkit-input-placeholder {
      font-size: 13px;
      color: #bbb;
      resize: none;
    }
  }
  .theme {
    width: 100%;
    display: flex;
    padding: 15px 11px;
    height: 48px;
    box-sizing: border-box;
    h3 {
      line-height: 18px;
    }
  }
  .address {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 15px 11px;
    a {
      font-size: 13px;
      color: #1989fa;
    }
  }
}

.footerEnd {
  position: absolute;
  bottom: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  line-height: 49px;
}
</style>