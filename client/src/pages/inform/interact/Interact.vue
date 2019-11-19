<template>
  <div>
    <div id="interact">
      <app-scroll class="scroll border-top fontXing">
        <ul>
          <!-- <li class="item">
        <div class="headImg">
          <img src="../../../assets/login.jpg" alt />
        </div>
        <div class="intContent border-bottom">
          <p class="showAll">
            <span class="iconfont icon-you"></span>
          </p>
          <p class="intType">评论了我的图片</p>
          <p class="intLetter">多好看的照片</p>
          <div class="essay">
            <img src="../../../assets/login.jpg" alt />
            <span class="yourName text-overflow">@Change的作品</span>
          </div>
          <p class="operator">
            <a href="/" class="reply">回复</a>
            <span class="time">21:34</span>
            <span class="link">点赞</span>
          </p>
        </div>
          </li>-->

          <li class="item">
            <div class="headImg">
              <img src="../../../assets/login.jpg" alt />
            </div>
            <div :class="['intContent','border-bottom']">
              <p @click="showAllAction(1)" class="showAll">
                <span class="iconfont icon-you"></span>
              </p>
              <template v-if="interact">
                <p class="intType">评论了我的图片:</p>
                <p class="intLetter">多好看的照片</p>
              </template>
              <p class="intType" v-if="like">喜欢了我的作品:</p>
              <p class="intType" v-if="atte">关注了我:</p>
              <div @click="goWorkDtailAction" :class="['essay',{isAtte:atte}]">
                <img v-if="interact||like" src="../../../assets/login.jpg" alt />
                <span class="yourName text-overflow">
                  @Change
                  <span v-if="interact||like">的作品</span>
                </span>
              </div>
              <p class="operator">
                <a @click="toIntAction('reply')" class="reply" v-if="interact">回复</a>
                <span class="time">2019-11-13</span>
                <span v-if="interact" class="link iconfont icon-icon-test"></span>
              </p>
            </div>
          </li>

          <the-end></the-end>
        </ul>
      </app-scroll>
    </div>
    <router-view></router-view>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <mask-module v-model="isInt" :title="title"></mask-module>
    </transition>
  </div>
</template>

<script>
import MaskModule from "../detail/children/mask-module";
export default {
  components: {
    [MaskModule.name]: MaskModule
  },
  data() {
    return {
      interact: true,
      like: false,
      atte: false,
      title:"",
      isInt: false,
    };
  },
  methods: {
    showAllAction(index) {
      this.$router.push("/inform/detail/" + index + "/123");
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
    goWorkDtailAction() {
      this.$router.push("/inform/detail/1");
    },
  }
};
</script>

<style lang="scss" scoped>
#interact {
  .scroll {
    position: absolute;
    background: url(../../../assets/t4.jpg) center center;
    background-size: cover;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  ul {
    list-style: none;
    .item {
      // height: 200px;
      width: 100%;
      padding: 10px 16px 10px 10px;
      box-sizing: border-box;
      display: flex;
      background: rgba(0, 0, 0, 0.06);
      .headImg {
        width: 40px;
        height: 40px;
        img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }
      }
      .intContent {
        margin-left: 10px;
        box-sizing: border-box;
        flex: 1;
        .showAll {
          height: 13px;
          margin-bottom: 5px;
          .iconfont {
            float: right;
            color: #444;
            font-size: 12px;
          }
        }
        .intType {
          font-size: 13px;
          color: #666;
          line-height: 16px;
        }
        .intLetter {
          line-height: 28px;
          font-size: 13px;
          color: #222;
        }
        .essay {
          // background: rgba(187, 187, 187, 0.829);
          margin-top: 6px;
          width: 100%;
          height: 100px;
          padding: 12px;
          display: flex;
          box-sizing: border-box;
          &.isAtte {
            height: 70px;
          }
          img {
            height: 100%;
            flex: 1;
          }
          .yourName {
            margin-left: 10px;
            width: 100%;
            line-height: 48px;
            font-size: 14px;
          }
        }
        .operator {
          line-height: 32px;
          height: 32px;
          .reply,
          .time,
          .link {
            font-size: 13px;
            color: #555;
          }
          .link {
            float: right;
          }
          .time {
            margin-left: 14px;
          }
        }
      }
    }
  }
}
</style>