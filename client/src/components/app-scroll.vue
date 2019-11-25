<template>
  <div class="app-scroll" ref="scroll" >
    <div class="scoll-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "app-scroll",
  mounted() {
    // 创建滚动视图
    this.scroll = new BScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType:1
    });
    // this.scroll.on("scroll", pos => {
    //   // console.log(pos.y);
    //   // this.$emit('sendY',true);
    // });
  }
};
</script>

<style scoped>
.app-scroll {
  overflow: hidden;
}
</style>