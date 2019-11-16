<template>
<div class="juan-scroll" ref="scroll">
  <div class="scoll-wrap">
    <slot/>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'juan-scroll',
  props:{
    pullup:{
      type: Boolean,
      default: false
    },
  },
  mounted(){
    // 创建滚动视图
    this.scroll = new BScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType:1
    });
    // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
    this.scroll.on('beforeScrollStart', ()=>{
      this.scroll.refresh();
    });
    if(this.pullup){
      
      this.scroll.on('scroll',(pos)=>{
        const maxY = this.scroll.maxScrollY-70;
        if(pos.y < maxY){
          this.$emit('modifyTxt', '释放立即刷新');
        } else {
          this.$emit('modifyTxt', '上拉以刷新');
        }
      })
      this.scroll.on('touchEnd',async (pos)=>{
        const maxY = this.scroll.maxScrollY-70;
        if(pos.y < maxY){
          // 刷新吧
          this.$emit('setRefresh',true);
          await this.$emit('requestData');
          this.$emit('setRefresh',false);
          this.scroll.scrollTo(0,0,1200);
        }
      })
    }
  }
};
</script>

<style scoped>
.juan-scroll{
  overflow: hidden;
}
</style>