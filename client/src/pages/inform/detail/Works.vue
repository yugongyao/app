<template>
  <div id="works">
    <int-list :isIntDetail="false">
      <div class="work-content">
        <div class="header border-bottom">
          <div class="headImg">
            <img
              src="https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portraith/item/tb.1.96ccdaa.fqaF4falPQP-O9L_bOl3eQ?t=1436072912"
              alt
            />
          </div>
          <div class="name-time">
            <p class="name">change</p>
            <span>14:33</span>
          </div>
          <span class="follow">+关注</span>
        </div>
        <h2 class="title">{{title}}</h2>
        <p class="word-content fontXing" v-for="(item,index) in article" :key="index">{{item}}</p>
        <div class="picture-content">
          <img :src="imgPic" alt />
        </div>
      </div>
    </int-list>
  </div>
</template>

<script>
import IntList from "./children/int-list";
export default {
  components: {
    [IntList.name]: IntList
  },
  data() {
    return {
      title: "打动过你的经典老歌",
      imgPic: "/assets/top.jpg",
      article: [
        "秋兰兮麋芜",
        "罗生兮堂下",
        "绿叶兮素华",
        "芳菲菲兮袭予",
        "夫人自有兮美子",
        "荪何㠯兮愁苦",
        "秋兰兮青青",
        "绿叶兮紫茎"
      ],
      id: 1
    };
  },
  mounted() {
    var id = this.$route.params.workid;
    this.id = id;
    var list = storage.get("soso");
    list = list[this.id];
    //话题
    this.title = list.pro;
    //文章
    var desc = list.desc;
    var str = desc.split(",");
    this.article = str;
    //图片
    this.imgPic = list.img;
  }
};
</script>

<style lang="scss" scoped>
#works {
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: #454545;
  width: 100%;
  z-index: 200;
  .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #eee;
    padding: 0 10px;
    font-size: 20px;
    font-weight: bolder;
  }
  .work-content {
    width: 100%;
    font-size: 18px;
    .header {
      height: 40px;
      padding: 10px 16px 10px 10px;
      img {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .name-time {
        float: left;
        // text-align: center;
        margin-left: 10px;

        .name {
          color: #fff;
          line-height: 24px;
          font-size: 16px;
        }
        span {
          color: #aaaaaa;
          line-height: 16px;
          font-size: 13px;
        }
      }
      .follow {
        float: right;
        width: 44px;
        height: 25px;
        padding: 5px;
        box-sizing: border-box;
        font-size: 12px;
        color: #eee;
        text-align: center;
        // border-radius: 5px;
        border-bottom: 1px dashed red;
        margin-top: 13px;
      }
    }
    .word-content {
      padding: 10px 10px 0px;
      text-indent: 28px;
      font-size: 14px;
      line-height: 20px;
      color: #eeeeee;
      letter-spacing: 3px;
    }
    .picture-content {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      margin-top: 10px;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>