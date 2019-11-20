<template>
  <div id="letter">
    <app-scroll class="scroll border-top fontXing">
      <ul>
        <li @click="chatAction" class="item border-bottom">
          <div class="headImg">
            <img src="../../../assets/login.jpg" alt />
          </div>
          <div class="letterContent">
            <p class="name">余光耀</p>
            <p class="time">
              <span class="left">20:03</span>
              <span class="right iconfont icon-you"></span>
            </p>
            <p class="letterText text-overflow" ref="nowWords">y按时大大发光时代奉公守法广东省</p>
          </div>
        </li>
        <div class="footerEnd">
          <p>-The end-</p>
        </div>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
export default {
  methods: {
    chatAction() {
      this.$router.push("/inform/chat/1");
    }
  },
  mounted(){
    let d = JSON.parse(window.localStorage.getItem("chatData"));
    
    
  }
};
</script>

<style lang="scss" scoped>
#letter {
  .scroll {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background: url(../../../assets/t4.jpg) no-repeat center center;
    background-size: cover;
    ul {
      list-style: none;
      li {
        background: rgba(0, 0, 0, 0.06);

        width: 100%;
        padding: 10px 16px 10px 10px;
        box-sizing: border-box;
        display: flex;
        .headImg {
          width: 40px;
          height: 40px;
          overflow: hidden;
          img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
        }
        .letterContent {
          overflow: hidden;
          flex: 1;
          margin-left: 10px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          p {
            width: 100%;
            line-height: 22px;
            font-size: 14px;
          }
          .name {
            font-size: 15px;
            color: #222;
            font-weight: bold;
          }

          .left {
            float: left;
            color: #666;
          }
          .right {
            float: right;
            &.iconfont {
              font-size: 12px;
              color: #666;
            }
          }
          .letterText {
            color: #444;
          }
        }
      }
    }
  }
}
</style>