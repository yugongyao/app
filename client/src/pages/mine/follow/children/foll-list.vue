<template>
  <div class="list">
    <div class="item" v-for="(item,index) in 10" :key="index">
      <div class="item-logo">
        <img src="/assets/star.jpg" alt />
      </div>
      <div class="item-mess">
        <p class="user-name more-overflow">用户名user</p>
        <p class="user-in more-overflow">用户简介</p>
      </div>
      <div class="item-handle">
        <p class="atte" @click="attention(index)"><i ref="atte">已关注</i><span class="iconfont icon-jia" ref="jia"></span></p>
      </div>
    </div>
    <div class="end"><p class="fontXing">-The End-</p></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isAtte:true
    }
  },
  methods:{
    attention(index){
      var atte=this.$refs.atte;
      var jia=this.$refs.jia;
      
      if (this.isAtte) {
        atte[index].innerHTML='关注';
        atte[index].style.color='#333';
        jia[index].style.display='block';
        jia[index].style.color='#333';
        this.isAtte=false;
      }else{
        atte[index].innerHTML='已关注';
        atte[index].style.color='#999';
        jia[index].style.display='none';
        this.isAtte=true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.list{
  padding: 10px;
  .end{
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
  }
  .item{
    padding: 10px;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px #999;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
    .item-logo{
      width: 40px;
      height: 100%;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .item-mess{
      padding: 0 10px;
      flex: 1;
      .more-overflow{
        -webkit-line-clamp: 1 !important;
      }
      .user-name{
        height: 20px;
        line-height: 20px;
        color: #333;
      }
      .user-in{
        height: 20px;
        line-height: 20px;
        color: #999;
        font-size: 12px;
      }
    }
    .item-handle{
      width: 50px;
      height: 40px;
      
      .atte{
        font-size: 12px;
        transform: scale(0.8);
        padding: 5px;
        border: solid 1px #C6C6C6;
        background: #fff;
        border-radius: 5px;
        margin-top: 10px; 
        text-align: center;
        color: #999;
        span{
          display: none;
          color: #999;
          font-size: 12px;
          float: right;
        }
      }
    }
  }
}
</style>