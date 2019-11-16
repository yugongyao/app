<template>
  <div>
    <div class="chat-box" v-for="(item,index) in wordData" :key="index">
      <p class="time">{{time(item.time)}}</p>
      <div :class="['chat-content',{right:item.right}]">
        <div class="headImg">
          <img :src="item.img" alt />
        </div>
        <div class="data">
          <span :class="{right:item.right}">{{item.data}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "one-word",
  props: ["wordData"],
  data() {
    return {};
  },
  methods: {
    time(t) {
      let now = (new Date()).getTime();
      let day = (new Date(t)).getDate();
      let nowDay = (new Date()).getDate();
      // console.log(nowDay);
      
      let timeDiff = now - t;
      if (timeDiff > 24 * 60 * 60 *1000) {
        let theDate = new Date(t);
        return theDate.format("yyyy年MM月dd日 hh:mm");
      }else if(nowDay-day){
        let theDate = new Date(t);
        return "昨天 "+theDate.format("hh:mm");
      }else{
        let theDate = new Date(t);
        return theDate.format("hh:mm");
      }
    }
  }
};
</script>

<style>
</style>