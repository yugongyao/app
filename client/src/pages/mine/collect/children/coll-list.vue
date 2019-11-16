<template>
  <div class="list">
    <div class="item" v-for="item in 6" :key="item">
      <div class="choice"><span class="iconfont icon-weibiaoti38" ref="choice" @click="hasChoice(item)"></span></div>
      <div class="item-img">
        <img src="../../../../assets/moban.jpg" alt />
      </div>
      <div class="item-inner">
        <p class="item-title more-overflow">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
        <p class="item-tag">#标签</p>
      </div>
    </div>
    <div class="end"><p class="fontXing">-The End-</p></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isChoice:true
    }
  },
  methods:{
    hasChoice(index){
      var choice=this.$refs.choice;
      if (this.isChoice) {
        choice[index-1].style.color="#333";
        this.isChoice=false;
      }else{
        choice[index-1].style.color="#3F8EF5";
        this.isChoice=true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  padding: 10px 10px;
  .end{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .item {
    padding: 10px;
    height: 120px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px #999;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
    .choice{
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      left: -34px;
      line-height: 120px;
      span{
        padding: 4px;
      }
    }
    .item-img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
      }
    }
    .item-inner {
      position: relative;
      flex: 1;
      padding: 10px;
      .item-title{
        color: #464646;
        font-weight: bolder;
        font-size: 14px;
      }
      .item-tag{
        position: absolute;
        left: 10px;
        bottom: 10px;
        color: #C9C9C9;
      }
    }
  }
}
</style>