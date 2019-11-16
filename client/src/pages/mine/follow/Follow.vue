<template>
  <div class="page modal-page" id="follow">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom">
    </app-header>
    <app-scroll class="content">
      <follList/>
    </app-scroll>
  </div>
</template>

<script>
import follList from "./children/foll-list"

export default {
  components: {
    follList
  },
  data() {
    return {
      title: "我的关注",
      hasBack: true,
      isShow:true
    };
  },
};
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
  .page {
    background: #fff !important;
  }
}
#follow {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
}
</style>