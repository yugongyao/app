<template>
  <div id="past">
    <app-scroll class="scroll border-top fontXing">
      <div class="past-main">
        <div class="item" v-for="(item,index) in list" :key="index" @click="goTopicDetail(item.id)">
          <div class="item-img">
            <img :src="item.img" alt />
          </div>
          <div class="item-inner">
            <p class="item-title more-overflow">{{item.pro}}</p>
            <p class="item-icon more-overflow">{{item.address}}</p>
          </div>
        </div>
      </div>
      <the-end></the-end>
    </app-scroll>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {img:'/assets/top.jpg',checked: true,desc:'寒雨连江夜入吴,平明送客楚山孤,洛阳亲友如相问,一片冰心在玉壶',pro: "分享一个好天气",address: "广东省深圳市福田区农轩路55号"}
      ],
    }
  },
  mounted(){
    var list=storage.get("soso");
    if (list) {
      this.list=list.reverse();
    }
  },
  methods: {
    goTopicDetail(index) {
      var id=index;
      this.$router.push(`/topic/topicDetail/${id}`);
    }
  },

};
</script>

<style lang="scss" scoped>
.scroll {
  background: url(/assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .past-main {
    padding: 10px;
    .item {
      width: 100%;
      height: 80px;
      padding: 10px 10px;
      box-sizing: border-box;
      background: #fefefe;
      box-shadow: 2px 2px 5px #999;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .item-img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .item-inner {
        flex: 1;
        padding-left: 10px;
        p:nth-of-type(1) {
          line-height: 20px;
          height: 40px;
          font-size: 18px;
          color: #333;
          font-weight: bolder;
        }
        p:nth-of-type(2) {
          line-height: 20px;
          height: 20px;
          font-size: 16px;
          color: #999;
          -webkit-line-clamp: 1;
        }
      }
    }
  }
}
</style>>
