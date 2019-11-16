<template>
  <div class="page modal-page" id="help">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom"></app-header>
    <app-scroll class="content">
      <div class="help-inner">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item
            v-for="(item,index) in list"
            :key="index"
            :title="item.title"
            :name="index"
          >{{item.content}}</van-collapse-item>
        </van-collapse>
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
      title: "帮助中心",
      hasBack: true,
      activeName: "1",
      list: [
        { title: "问题1", content: "内容1" },
        { title: "问题2", content: "内容2" },
        { title: "问题3", content: "内容3" },
        { title: "问题4", content: "内容4" },
        { title: "问题5", content: "内容5" },
        { title: "问题6", content: "内容6" },
        { title: "问题7", content: "内容7" },
        { title: "问题8", content: "内容8" },
        { title: "问题9", content: "内容9" }
      ]
    };
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
.end {
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 100%;
  p {
    text-align: center;
  }
}
#help {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
}
</style>