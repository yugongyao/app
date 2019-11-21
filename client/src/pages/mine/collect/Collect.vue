<template>
  <div class="page modal-page" id="collect">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom">
      <span slot="right-btn" class="right-btn" @click="show()">取消</span>
    </app-header>
    <app-scroll class="content bg">
      <div ref="show" class="show">
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
        </div>
      </div>
    </app-scroll>
    <div class="footer" ref="footer">
      <span class="deleteAll" @click="deleteAll">清空收藏视频</span>
      <span class="deleteChoice" @click="deleteChoice">删除</span>
    </div>
    <div class="end"></div>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      title: "我的收藏",
      hasBack: true,
      isShow: true,
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
  methods: {
    show() {
      var show = this.$refs.show;
      var footer = this.$refs.footer;
      if (this.isShow) {
        show.classList.add("showChoice");
        footer.style.display = "block";
        this.isShow = false;
      } else {
        show.classList.remove("showChoice");
        footer.style.display = "none";
        this.isShow = true;
      }
    },
    deleteAll() {
      Dialog.confirm({
        title: "删除提示",
        message: "确定要删除所有收藏吗?"
      })
        .then(() => {
          // on confirm
          // this.delAll = true;
          this.list = "";
          storage.remove("collect");
          Toast.success("删除成功");
        })
        .catch(() => {
          // on cancel
          this.delAll = false;
          Toast.fail("取消删除");
        });
    },
    deleteChoice() {
      Dialog.confirm({
        title: "删除提示",
        message: "确定要删除选中的收藏吗?"
      })
        .then(() => {
          // on confirm
          var choArr = this.isChoice;
          var collId = [];
          choArr.forEach(item => {
            collId.push(item.collId);
          });
          var colArr = storage.get("collect");
          var index1 = [];
          colArr.forEach((item, index) => {
            if (collId.indexOf(item.id) + 1) {
              index1.push(index);
            }
          });
          index1.reverse();
          for (var i = 0; i < index1.length; i++) {
            colArr.splice(index1[i], 1);
          }
          storage.set("collect", colArr);
          this.list = colArr;
          this.isChoice = [];
          this.topArr=[];
          var choice = this.$refs.choice;
          choice.forEach(item=>{
            item.style.color = "#333";
          })
          Toast.success("删除成功");
        })
        .catch(() => {
          // on cancel
          this.delChoice = false;
          Toast.fail("取消删除");
        });
    },
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
          this.isChoice.forEach((item, value) => {
            if (item.paiIndex == index) {
              num = value;
            }
          });
          this.isChoice.splice(num, 1);
          choice[index].style.color = "#333";
        }
      }
      // console.log(this.isChoice);
    }
  }
};
</script>

<style scoped lang="scss">
.page-wrap {
  z-index: 999;
  .page {
    background: #fff !important;
  }
}
#collect {
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
}
.showChoice {
  transform: translateX(10%);
}
.bg {
  background: url(../../../assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
}
.footer {
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 30px;
  width: 100%;
  line-height: 30px;
  display: none;
  span {
    position: absolute;
    font-size: 14px;
  }
  span:nth-of-type(1) {
    left: 12px;
    color: #3f8ef5;
  }
  span:nth-of-type(2) {
    right: 12px;
    color: #999;
  }
}
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