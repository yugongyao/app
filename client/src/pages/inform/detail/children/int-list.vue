<template>
  <div id="intList">
    <header class="border-bottom">
      <a v-if="isIntDetail" @click="goWorkDtailAction">进入作品详情页</a>
      <span @click="backAction" class="iconfont icon-icon3"></span>
    </header>
    <app-scroll class="scroll">
      <slot v-if="!isIntDetail" />

      <div v-if="isIntDetail" class="nowInt border-bottom">
        <h3 class="title">当前评论</h3>
        <div class="contentInt">
          <div class="headImg">
            <img src="../../../../assets/login.jpg" alt />
          </div>
          <div class="center">
            <h3 class="name">余光耀</h3>
            <p
              class="intLetter"
            >多好看的多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片照片</p>
            <p class="operator">
              <a @click="toIntAction('reply')" class="reply">回复</a>
              <span class="time">2019/11/13</span>
            </p>
          </div>
          <div class="right">
            <span class="link iconfont icon-icon-test"></span>
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>
      </div>
      <div class="to-int" @click="toIntAction" v-if="!isIntDetail">
        <div class="you-headImg">
          <img
            src="https://imgsa.baidu.com/forum/pic/item/269759ee3d6d55fb4fa2695f62224f4a20a4dd67.jpg"
            alt
          />
        </div>
        <div class="click-send">点击发表你的评论</div>
        <span class="close">×</span>
      </div>
      <div class="newInt">
        <h3 class="title">最新评论</h3>
        <div class="contentInt">
          <div class="headImg">
            <img src="../../../../assets/login.jpg" alt />
          </div>
          <div class="center border-bottom">
            <h3 class="name">余光耀</h3>
            <p
              class="intLetter"
            >多好看的多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片多好看的照片照片</p>
            <p class="operator">
              <a @click="toIntAction('reply')" class="reply">回复</a>
              <span class="time">2019/11/13</span>
            </p>
          </div>
          <div class="right">
            <span class="link iconfont icon-icon-test"></span>
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>
      </div>
      <the-end></the-end>
    </app-scroll>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <mask-module v-model="isInt" :title="title"></mask-module>
    </transition>
  </div>
</template>

<script>
import MaskModule from "./mask-module";
export default {
  name: "int-list",
  components:{
    [MaskModule.name]:MaskModule
  },
  props: {
    workid: String,
    intid: String,
    // 是评论的详情页还是作品的详情页
    // 作品详情页是false
    isIntDetail: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isInt: false,
      title: ""
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    goWorkDtailAction() {
      this.$router.push("/inform/detail/1");
    },
    toIntAction(option = "int") {
      console.log(option);

      if (option == "reply") {
        this.title = "回复";
      } else {
        this.title = "评论";
      }
      this.isInt = true;
    },
 
  },
  
};
</script>

<style lang="scss" scoped>
header {
  height: 44px;
  padding: 10px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 12px;
  a {
    float: left;
    font-size: 12px;
    color: #ffffff;
    border: 1px solid #ccc;
    padding: 4px 6px;
    background: #333333;
  }
  span {
    float: right;
    font-size: 12px;
    margin-top: 8px;
  }
}
.to-int {
  padding: 10px;
  height: 46px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  .you-headImg {
    height: 36px;
    width: 36px;
    border-radius: 50%;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
  .click-send {
    flex: 1;
    margin: 0 15px;
    height: 36px;
    background: #222;
    color: #eeeeee;
    border: 1px solid #eee;
    font-size: 13px;
    padding: 7px;
    box-sizing: border-box;
    line-height: 21px;
    letter-spacing: 11px;
    border-radius: 5px;
  }
  .close {
    width: 24px;
    height: 36px;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #fff;
  }
}
.nowInt,
.newInt {
  padding: 20px 10px 0px 10px;
  .title {
    font-size: 13px;
    color: #fff;
  }
  .contentInt {
    margin-top: 16px;
    display: flex;
    width: 100%;
    .headImg {
      width: 40px;
      height: 40px;
      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }
    .center {
      flex: 1;
      margin: 0 10px;
      & > * {
        line-height: 24px;
      }
      .name {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
      }
      .intLetter {
        font-size: 13px;
        color: #cccccc;
        margin: 5px 0;
        text-indent: 26px;
      }
      .operator {
        height: 32px;
        line-height: 32px;
        .reply {
          float: left;
          color: #dddddd;
          font-size: 13px;
        }
        .time {
          margin-left: 26px;
          color: #bbbbbb;
          font-size: 13px;
        }
      }
    }
    .right {
      display: flex;
      width: 30px;
      text-align: center;
      color: #cccccc;
      flex-direction: column;
      span {
        flex: 1;
        margin-bottom: 0;
        position: relative;
        &.icon-gengduo:before {
          position: absolute;
          bottom: 10px;
          transform: translateX(-50%);
        }
      }
    }
  }
}
.scroll {
  position: absolute;
  top: 45px;
  bottom: 0;
}

</style>