<template>
  <div id="today">
    <app-scroll class="scroll border-top fontXing">
      <div class="today-main">
        <h1>今日话题</h1>
        <div class="card">
          <img :src="imgPic" alt />
        </div>
        <div class="topic-mess">
          <p class="top-title">{{title}}</p>
          <div class="top-inner">
            <p v-for="(desc,index) in article" :key="index">{{desc}}</p>
          </div>
        </div>
        <div class="btn" @click="goTopicDetail(id)">
          <van-button square type="info" size="large" color="linear-gradient(to right, #ddd, #999)">
            <span>立即参与</span>
          </van-button>
        </div>
        <the-end></the-end>
      </div>
    </app-scroll>
  </div>
</template>

<script>
export default {
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
      id:1
    };
  },
  mounted() {
    var list = storage.get("soso");
    if (list) {
      var listLength = list.length;
      this.id=listLength;
      
      var list = list[listLength - 1];
      // 标题
      this.title = list.pro;
      // 图片
      this.imgPic = list.img;
      // 文章
      var desc = list.desc;
      var str = desc.split(",");
      this.article = str;
    }
  },
  methods: {
    goTopicDetail(id) {
      this.$router.push(`/topic/topicDetail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  background: url(../../../assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .today-main {
    padding: 10px;
    h1 {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      text-shadow: 2px 2px #999;
    }
    .card {
      width: 100%;
      height: 180px;
      background: #fefefe;
      box-shadow: 2px 2px 5px #999;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .topic-mess {
      margin-top: 20px;
      width: 100%;
      min-height: 100px;
      padding: 10px;
      box-sizing: border-box;
      background: #fefefe;
      box-shadow: 2px 2px 5px #999;
      border-radius: 5px;
      .top-title {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        text-shadow: 2px 2px #ddd;
        font-weight: bolder;
      }
      .top-inner {
        padding: 20px 0;
      }
    }
    .btn {
      margin-top: 20px;
      box-shadow: 2px 2px 5px #666;
      span {
        color: #333;
        font-size: 20px;
      }
    }
  }
}
</style>>
