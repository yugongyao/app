<template>
  <div v-if="value" class="mask">
    <span @click="closeMaskAction" class="mask-close iconfont inco-chahao">×</span>
    <div class="input-area">
      <nav>
        <span @click="closeMaskAction" class="cancel">×</span>
        <span class="title">{{title}}</span>
        <span @click="submitAction" class="ok">√</span>
      </nav>
      <textarea autofocus ref="textarea" v-model="words" placeholder="发表你的评论..."></textarea>
      <p :class="['footer',{red:words.length>=500}]">500</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mask-module",
  props: ["value","title"],
  data(){
      return{
          words:""
      }
  },
  methods: {
    
    closeMaskAction() {
        this.$emit("input",false);
    //   this.isInt = false;

    },
    submitAction() {
      // console.log(this.$refs.textarea.value);
      this.$Toast("提交成功！");
      this.closeMaskAction();
    }
  },
  watch: {
    words() {
      if (this.words.length >= 500) {
        this.words = this.words.substr(0, 500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.521);
  .mask-close {
    position: absolute;
    right: 0;
    color: #fff;
    font-size: 32px;
    text-align: center;
    line-height: 44px;
    width: 44px;
    height: 44px;
    &:hover {
      color: red;
    }
  }
  .input-area {
    height: 38.2%;
    width: 100%;
    background: #f0f0ef;
    position: absolute;
    bottom: 0;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    nav {
      height: 44px;
      width: 100%;
      // background: pink;
      display: flex;
      justify-content: space-between;
      span {
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 22px;
        color: #333;
        &.title {
          font-size: 14px;
        }
      }
    }
    textarea {
      border: none;
      background: #f0f0ef;
      flex: 1;
      resize: none;
      margin: 4px 10px 0;
      font-size: 13px;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
      padding: 12px 0;
      letter-spacing: 2px;
      line-height: 15px;
    }
    .footer {
      height: 28px;
      width: 100%;
      line-height: 28px;
      float: right;
      font-size: 12px;
      color: #aaa;
      padding: 0 10px;
      box-sizing: border-box;
      &.red {
        color: red;
      }
    }
  }
}
</style>