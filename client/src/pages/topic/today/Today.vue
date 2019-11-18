<template>
  <div id="today">
    <app-scroll class="scroll border-top fontXing">
      <div class="today-main">
        <h1>今日话题</h1>
        <div class="card">
          <img src="../../../assets/top.jpg" alt="">
        </div>
        <div class="topic-mess">
          <p class="top-title">{{title}}</p>
          <div class="top-inner">
            <p>风里笑着风里唱</p>
            <p>感激天意碰见你</p>
            <p>纵使苦涩都变得美</p> 
            <p>天也老任海也老</p> 
            <p>唯望此爱爱未老</p> 
            <p>愿意今生约定他生再拥抱~</p>
          </div>
        </div>
        <div class="btn" @click="goTopicDetail">
          <van-button square type="info" size="large" color="linear-gradient(to right, #ddd, #999)"><span>立即参与</span></van-button>
        </div>
        <the-end></the-end>
      </div>
    </app-scroll>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'打动过你的经典老歌'
    }
  },
  methods:{
    goTopicDetail(){
      this.$router.push('/topic/topicDetail/1')
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .today-main {
    padding: 10px;
    h1{
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      text-shadow: 2px 2px #999;
    }
    .card {
      width: 100%;
      height: 180px;
      background:#fefefe;
      box-shadow: 2px 2px 5px #999;
      border-radius: 5px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .topic-mess{
      margin-top: 20px;
      width: 100%;
      min-height: 100px;
      padding: 10px;
      box-sizing: border-box;
      background:#fefefe;
      box-shadow: 2px 2px 5px #999;
      border-radius: 5px;
      .top-title{
        height:30px;
        line-height: 30px;
        font-size: 20px;
        text-shadow: 2px 2px #ddd;
        font-weight: bolder;
      }
      .top-inner{
        padding: 20px 0;
      }
    }
    .btn{
      margin-top: 20px;
      box-shadow: 2px 2px 5px #666;
      span{
        color: #333;
        font-size: 20px;
      }
    }
  }
}
</style>>
