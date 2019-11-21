<template>
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="choice">
        <span class="iconfont icon-yuangou" ref="choice" @click="hasChoice(index,item.id)"></span>
      </div>
      <div class="item-img">
        <img :src="item.img" alt />
      </div>
      <div class="item-inner">
        <p class="item-title more-overflow" @click="goTopicDetail(item.id)">{{item.desc}}</p>
        <p class="item-tag">#{{item.pro}}</p>
      </div>
    </div>
    <div class="end">
      <p class="fontXing">-The End-</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['delAll','delChoice'],
  data() {
    return {
      isChoice: [],
      list: [],
      // 存被选中话题的id
      topArr: []
    };
  },
  mounted() {
    if (storage.get("collect")) {
      this.list = storage.get("collect");
    }
  },
  watch:{
    'delAll'(){
      if(this.delAll==true){
        this.list = "";
        storage.remove('collect');
      }
    },
    'delChoice'(){
      if(this.delChoice==true){
        var choArr=this.isChoice;
        var collId=[];
        choArr.forEach(item=>{
          collId.push(item.collId);
        })
        var colArr=storage.get('collect');
        var index1=[];
        colArr.forEach((item,index)=>{
          
          if (collId.indexOf(item.id)+1) {
            index1.push(index);
          }
        })
        index1.reverse();
        for(var i=0;i<index1.length;i++){
          colArr.splice(index1[i],1)
        }
        storage.set('collect',colArr)
        this.list=colArr;
        this.topArr=[];
      }
    },
  },

    // console.log(this.delChoice);
  methods: {
    goTopicDetail(index) {
      var id = index;
      this.$router.push(`/topic/topicDetail/${id}`);
    },
    hasChoice(index, id) {
      var choice = this.$refs.choice;
      if (!this.isChoice.length) {
        choice[index].style.color = "red";
        var obj = {
          collId: id,
          paiIndex: index,
          choice: true
        };
        this.isChoice.push(obj);
      } else {
        var isChoice = this.isChoice;
        var arr = [];
        isChoice.forEach(item => {
          arr.push(item.paiIndex);
        });
        var resultNum = arr.indexOf(index) + 1;
        // 看看是否被选中
        if (!resultNum) {
          //没有选中
          choice[index].style.color = "red";
          var obj1 = {
            collId: id,
            paiIndex: index,
            choice: true
          };
          this.isChoice.push(obj1);
        } else {
          //选中
          var num;
          this.isChoice.forEach((item,value)=>{
            if (item.paiIndex==index) {
              num=value;
            }
          })
          this.isChoice.splice(num,1)
          choice[index].style.color = "#333";
        }
      }
      // console.log(this.isChoice);
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  padding: 10px 10px;
  .end {
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
    .choice {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      left: -34px;
      line-height: 120px;
      span {
        padding: 4px;
        font-size: 20px;
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
      .item-title {
        color: #464646;
        font-weight: bolder;
        font-size: 14px;
      }
      .item-tag {
        position: absolute;
        left: 10px;
        bottom: 10px;
        color: #333;
      }
    }
  }
}
</style>