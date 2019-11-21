<template>
  <div class="hot-wrap">
    <div v-for="item in domList" :key="item.id" :class="item.classname">
      <span></span>
      <p>{{issues[item.id-1] && issues[item.id-1].title}}</p>
    </div>
    <div class="box more">
      <span></span>
      <p style="color:white;">. . .</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    issues: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      domList: [
        {'classname':'box rank1', id:1},
        {'classname':'box rank2', id:2},
        {'classname':'box rank3', id:3},
        {'classname':'box rank4', id:4}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes moveBG {
  0%{
    background-position: 0 0;
  }
  25%{
    background-position: -20px -30px;

  }
  50%{
    background-position: -30px -12px;
  }
  75%{
    background-position: -20px 0;
  }
  100%{
    background-position: 0 0;
  }
}

@keyframes cloud {
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}
.hot-wrap{
  width: 90%;
  margin: 5%;
  height: 260px;
  position: relative;
  cursor: pointer;
}
.box{
  position: absolute;
  p{
    position: absolute;
    font-weight: bold;
    color: rgb(85, 79, 96);
    font-size: 24px;
    line-height: 24px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 200;
  }
  span{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 100;
  }
  &.rank1{
    left: 0;
    top: 0;
    width: 60%;
    height: 145px;
    background: url(../../../../assets/pic2.jpg) no-repeat;
    background-size: 120% 170px;
    animation: moveBG 16s ease-in-out infinite;
  }
  &.rank3{
    right: 0;
    top: 0;
    width: 38%;
    height: 85px;
    background: url(../../../../assets/pic1.jpg) no-repeat;
    background-size: 100% 90px;
  }
  &.rank2{
    left: 0;
    bottom: 0;
    width: 60%;
    height: 105px;
    background: url(../../../../assets/pic3.jpg) no-repeat;
    background-size: 100% 120px;
  }
  &.rank4{
    right: 0;
    bottom: 80px;
    width: 38%;
    height: 85px;
    background: url(../../../../assets/pic4.jpg) no-repeat;
    background-size: 100% 85px;
  }
  &.more{
    right: 0;
    bottom: 0;
    width: 38%;
    height: 70px;
    background-color: rgba(34, 49, 67, 0.743);
    
    span{
      background: url(../../../../assets/cloud.png) no-repeat;
      background-size: 236px 80px;
      animation: cloud 12s linear infinite;
    }
  }
}
</style>