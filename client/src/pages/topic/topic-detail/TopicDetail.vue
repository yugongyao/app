<template>
  <div class="page" id="topicDetail">
    <app-header :title="title" :hasBack="hasBack" class="topColor"></app-header>
    <app-scroll class="content">
      <div class="top-bg">
        <img :src="imgPic" alt />
        <div class="bg-txt">
          <p class="title">{{topTitle}}</p>
          <p class="icon">
            相关主题:
            <span>
              #
              <i>生活</i>
            </span>
          </p>
          <div class="collect"><i>收藏主题:</i>
            <span class="iconfont icon-shoucang" ref="coll" @click="topCollect"></span>
          </div>
        </div>
      </div>
      <div class="topic-inner">
        <p v-for="(item,index) in article" :key="index">{{item}}</p>
      </div>
      <commentList />
    </app-scroll>
  </div>
</template>

<script>
import store from '../../../store'
import commentList from "./children/comment-list";
export default {
  components: {
    commentList
  },
   beforeRouteEnter(to, from, next) {
    if(store.state.isLogin){
      next();
    } else{
      next('/login');
    }
  },
  data() {
    return {
      id:1,
      title: "话题",
      hasBack: true,
      topTitle:'打动过你的经典老歌',
      imgPic:'/assets/top.jpg',
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
      isCollect:false
    };
  },
  mounted(){
    var id=this.$route.params.topicid;
    this.id=id;
    // console.log(this.id);
    
    var list = storage.get("soso");
    if (list) {
      list=list[id-1];
      // 图片
      this.imgPic=list.img;
      // 话题名
      this.topTitle=list.pro;
      //文章
      var desc = list.desc;
      var str = desc.split(",");
      this.article = str;
    }
  },
  methods:{
    topCollect(){
      var coll=this.$refs.coll
      if (!this.isCollect) {
        coll.style.color='red';
        var topic=storage.get('soso');
        topic=topic[this.id-1];
        console.log(topic);
        if (!storage.get('collect')) {
          storage.set('collect',[]);
        }
        var collects=storage.get('collect');
        collects.push(topic)
        storage.set('collect',collects)
        
        this.isCollect=true;
      }else{
        coll.style.color='#fff';
        this.isCollect=false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#topicDetail {
  background: url(../../../assets/t4.jpg) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 200;
  .content {
    top: 0 !important;
    background: url(../../../assets/t4.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .topColor {
    color: #333;
    z-index: 200;
  }
  .top-bg {
    width: 100%;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .bg-txt {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      bottom: 0;
      background: rgba($color: #000000, $alpha: 0.5);
      .title {
        position: absolute;
        left: 15px;
        top: 40%;
        color: #fff;
        font-weight: bolder;
      }
      .icon {
        position: absolute;
        height: 30px;
        line-height: 30px;
        left: 15px;
        top: 60%;
        color: #fff;
        font-weight: bolder;
        font-size: 14px;
        span {
          padding: 2px 5px;
          border: solid 1px #ddd;
          i {
            padding-left: 3px;
          }
        }
      }
      .collect{
        position: absolute;
        left: 15px;
        bottom: 6%;
        color: #fff;
        font-weight: bolder;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        span{
          color: #fff;
          font-size: 16px;
          padding: 5px;
        }
      }
    }
  }
  .topic-inner {
    padding: 15px;
    background: #fff;
    width: 100%;
    min-height: 100px;
    box-shadow: 2px 2px 5px #999;
    margin-bottom: 10px;
    p {
      line-height: 30px;
      color: #727272;
    }
  }
}
</style>>
