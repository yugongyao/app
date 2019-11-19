<template>
  <div id="chat">
    <app-header :hasBack="true" title="余光耀" class="border-bottom"></app-header>
    <div class="chat-panel" ref="wrap" :style="'bottom:'+(22+textHeight)+'px'">
      <div class="scoll-wrap" ref="content">
        <one-word :wordData="wordData"></one-word>
      </div>
    </div>
    <div class="send-box border-top">
      <textarea
        @keypress.enter.prevent="sendAction"
        ref="textarea"
        v-model="words"
        type="text"
        :style="'height:'+textHeight+'px'"
        placeholder="发送消息"
      ></textarea>
      <div @click="sendAction" class="send">发送</div>
    </div>
  </div>
</template>

<script>
import OneWord from "./children/one-word";
export default {
  components: {
    [OneWord.name]: OneWord
  },
  data() {
    return {
      words: "",
      textareaWidth: 0,
      wrapHeight: 0,
      wordData:[] 
    };
  },
  computed: {
    textHeight() {
      // console.log(this.textareaWidth);
      return Math.floor(
        this.words.length / Math.ceil(this.textareaWidth / 13.8)
      ) *
        16 +
        28 >=
        108
        ? 108
        : Math.floor(this.words.length / Math.ceil(this.textareaWidth / 13.8)) *
            16 +
            28;
    }
  },
  methods: {
    sendAction() {
      if(!this.words){
        this.$Toast("请输入些内容吧！");
        return;
      }
      var thisWord = {
          time: (new Date()).getTime(),
          data: this.words,
          img: "/assets/logo.png",
          right: true,
        }
      var dataArr = JSON.parse(window.localStorage.getItem('chatData'));
      dataArr.push(thisWord);
      window.localStorage.setItem("chatData",JSON.stringify(dataArr));
      this.wordData.push(thisWord);

      this.ws.send(JSON.stringify({
        time: (new Date()).getTime(),
          data: this.words,
          img: "/assets/logo.png",
          right: false,
      }));
      this.$Toast("发送成功！");
      this.words = "";
      setTimeout(() => {
          this.setScrollAction();
      }, 0);
    },
    setScrollAction() { 
      this.wrapHeight = parseInt(
        getComputedStyle(this.$refs.content, null).getPropertyValue("height")
      );
      // console.log(this.wrapHeight);
      
      this.$refs.wrap.scrollTop = this.wrapHeight;
    },

    
  },
  beforeCreate(){
    this.ws = new WebSocket('ws://10.20.152.18:9001');
      this.ws.onopen = () => {
      console.log('上线了');
      }

      this.ws.onerror = () => {
      console.log('断线了');
      }

      this.ws.onclose = () => {
      console.log('下线了');
      }

      this.ws.onmessage = (ev) => {
        var dataArr = JSON.parse(window.localStorage.getItem("chatData"))
        var data = JSON.parse(ev.data);
        dataArr.push(data);
        this.wordData = dataArr;
        window.localStorage.setItem("chatData",JSON.stringify(dataArr));
      }
  },
  // created(){
  //   this.setScrollAction();

  // },
  mounted() {
    if(!window.localStorage.getItem("chatData")){
      window.localStorage.setItem("chatData","[]");
    }
    setTimeout(() => {
          this.setScrollAction();
      }, 0);
    this.wordData = JSON.parse(window.localStorage.getItem("chatData"));
    this.textareaWidth =
      parseInt(
        window
          .getComputedStyle(this.$refs.textarea, null)
          .getPropertyValue("width")
      ) - 20;
  },

};
</script>

<style lang="scss">
#chat {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 200;
  //   padding: 0 10px;
  //   box-sizing: border-box;
  .chat-panel {
  background: url(../../../assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
    transition: bottom 0.5s;
    position: absolute;
    top: 45px;
    bottom: 50px;
    overflow: auto;
    //   background: blue;

    width: 100%;
    .chat-box {
      overflow: hidden;
      .time {
        text-align: center;
        font-size: 13px;
        color: #666;
        margin-top: 20px;
      }
      .chat-content {
        margin-top: 8px;
        display: flex;
       &.right{
            flex-direction: row-reverse;
       }
      
        .headImg {
          height: 40px;
          width: 40px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
          margin: 0 10px;
        }
        .data {
        //   border: 1px solid rgb(0, 132, 255);
          flex: 1;
          max-width: 55%;
          font-size: 14px;
          color: #333;
          line-height: 17px;
          padding: 4px;
          border-radius: 7px;
          span{
              padding: 3px 6px;
              border-radius: 8px;
              border:1px solid #ccc;
              word-break:break-all;
          }
          span.right{
              float: right;
              background: rgb(49, 140, 245);
              color: #fff;
            //   border:1px solid rgb(58, 135, 236);
          }
        }
      }
    }
  }
  .send-box {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-right: 70px;
    overflow: hidden;
    textarea {
      transition: height 0.5s;
      height: 28px;
      float: left;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #333;
      border-radius: 15px;
      padding: 5px 10px;
      font-size: 14px;
      resize: none;
      line-height: 16px;
      margin-right: 60px;
    }
    .send {
      position: absolute;
      right: 20px;
      float: left;
      margin-left: -60px;
      transform: translateX(10px);
      width: 50px;
      text-align: center;
      line-height: 27px;
      border: 1px solid #333;
      font-size: 14px;
      height: 26px;
      border-radius: 12px;
    }
  }
}
</style>