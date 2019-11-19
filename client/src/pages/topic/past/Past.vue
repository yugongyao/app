<template>
  <div id="past">
    <app-scroll class="scroll border-top fontXing">
      <div class="past-main">
        <div class="item" v-for="item in 10" :key="item" @click="goTopicDetail">
          <div class="item-img">
            <img src="../../../assets/top.jpg" alt />
          </div>
          <div class="item-inner">
            <p class="item-title more-overflow">打动过你的经典老歌</p>
            <p class="item-icon more-overflow">哈哈红哈哈</p>
          </div>
        </div>
      </div>
      <the-end></the-end>
    </app-scroll>
  </div>
</template>

<script>
export default {
  methods: {
    goTopicDetail() {
      this.$router.push("/topic/topicDetail/1");
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  background: url(../../../assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .past-main {
    padding: 10px;
    .item {
      width: 100%;
      height: 80px;
      padding: 10px 10px;
      box-sizing: border-box;
      background: #fefefe;
      box-shadow: 2px 2px 5px #999;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .item-img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .item-inner {
        flex: 1;
        padding-left: 10px;
        p:nth-of-type(1) {
          line-height: 20px;
          height: 40px;
          font-size: 18px;
          color: #333;
          font-weight: bolder;
        }
        p:nth-of-type(2) {
          line-height: 20px;
          height: 20px;
          font-size: 16px;
          color: #999;
          -webkit-line-clamp: 1;
        }
      }
    }
  }
}
</style>>
