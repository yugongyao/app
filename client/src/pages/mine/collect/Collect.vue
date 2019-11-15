<template>
  <div class="page modal-page" id="collect">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom">
      <span slot="right-btn" class="right-btn" @click="show()">取消</span>
    </app-header>
    <app-scroll class="content">
      <div ref="show" class="show">
        <collList />
      </div>
    </app-scroll>
  </div>
</template>

<script>
import collList from "./children/coll-list";

export default {
  components: {
    collList
  },
  data() {
    return {
      title: "收藏",
      hasBack: true,
      isShow:true
    };
  },
  methods: {
    show() {
      console.log('点击按钮');
      var show=this.$refs.show;
      console.log(show);
      if (this.isShow) {
        show.classList.add('showChoice');
        this.isShow=false;
      }else{
        show.classList.remove('showChoice');
        this.isShow=true;
      }
    }
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
#collect {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
}
.showChoice {
  transform: translateX(10%);
}
</style>