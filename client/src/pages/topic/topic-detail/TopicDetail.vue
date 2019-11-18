<template>
  <div class="page" id="topicDetail">
    <app-header :title="title" :hasBack="hasBack" class="topColor"></app-header>
    <app-scroll class="content">
      <div class="top-bg">
        <img src="../../../assets/top.jpg" alt />
        <div class="bg-txt">
          <p class="title">打动过你的经典老歌</p>
          <p class="icon">
            相关主题:
            <span>
              #
              <i>生活</i>
            </span>
          </p>
        </div>
      </div>
      <div class="topic-inner">
        <p>风里笑着风里唱</p>
        <p>感激天意碰见你</p>
        <p>纵使苦涩都变得美</p>
        <p>天也老任海也老</p>
        <p>唯望此爱爱未老</p>
        <p>愿意今生约定他生再拥抱~</p>
      </div>
      <commentList/>
    </app-scroll>
  </div>
</template>

<script>
import commentList from "./children/comment-list";
export default {
  components: {
    commentList
  },
  data() {
    return {
      title: "话题",
      hasBack: true
    };
  },
};
</script>

<style lang="scss" scoped>
#topicDetail {
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: #fff;
  width: 100%;
  z-index: 200;
  .content {
    top: 0 !important;
    background: #d5d5d5;
  }
  .topColor {
    color: #333;
    z-index: 200;
  }
  .top-bg {
    width: 100%;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .bg-txt {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.5);
      .title {
        position: absolute;
        left: 15px;
        top: 40%;
        color: #fff;
        font-weight: bolder;
      }
      .icon {
        position: absolute;
        height: 30px;
        line-height: 30px;
        left: 15px;
        top: 60%;
        color: #fff;
        font-weight: bolder;
        font-size: 14px;
        span {
          padding: 2px 5px;
          border: solid 1px #ddd;
          i {
            padding-left: 3px;
          }
        }
      }
    }
  }
  .topic-inner {
    padding: 15px;
    background: #fff;
    width: 100%;
    min-height: 100px;
    box-shadow: 2px 2px 5px #999;
    margin-bottom: 10px;
    p{
      line-height: 30px;
      color: #727272;
    }
  }
}
</style>>
