<template>
  <div class="page modal-page" id="collect">
    <app-header :title="title" :hasBack="hasBack" class="topColor border-bottom">
      <span slot="right-btn" class="right-btn" @click="show()">取消</span>
    </app-header>
    <app-scroll class="content bg">
      <div ref="show" class="show">
        <collList :delAll="delAll" :delChoice="delChoice"/>
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
import collList from "./children/coll-list";
import { Dialog ,Toast} from 'vant'
export default {
  components: {
    collList
  },
  data() {
    return {
      title: "我的收藏",
      hasBack: true,
      isShow: true,
      delAll:false,
      delChoice:false
    };
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
          this.delAll=true;
          Toast.success("删除成功");
        })
        .catch(() => {
          // on cancel
          this.delAll=false;
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
          this.delChoice=true;
          Toast.success("删除成功");
        })
        .catch(() => {
          // on cancel
          this.delChoice=false;
          Toast.fail("取消删除");
        });
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
</style>