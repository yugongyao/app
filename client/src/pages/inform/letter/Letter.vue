<template>
  <div id="letter">
    <app-scroll class="scroll border-top fontXing">
      <ul>
        <li @click="chatAction" class="item border-bottom">
          <div class="headImg">
            <img src="../../../assets/login.jpg" alt />
          </div>
          <div class="letterContent">
            <p class="name">{{username}}</p>
            <p class="time">
              <span class="left">{{time}}</span>
              <span class="right iconfont icon-you"></span>
            </p>
            <p class="letterText text-overflow" ref="nowWords">{{wrap}}</p>
          </div>
        </li>
        <div class="footerEnd">
          <p>-The end-</p>
        </div>
      </ul>
    </app-scroll>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:"",
      wrap:"",
      time:""
    }
  },
  methods: {
    chatAction() {
      this.$router.push("/inform/chat/1");
    },
    timeAction(t){
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
  },
  mounted(){
    let self = this;
    let d = JSON.parse(window.localStorage.getItem("chatData"));
     console.log(d);
    this.wrap = d[d.length-1].data||'~~';
    
    d.map(item=>{
      
       if(!item.right){

         if(item.username){
           self.username = item.username;
         }
       }
     });
      var time = d[d.length-1].time;
      this.time = this.timeAction(time);
  }
};
</script>

<style lang="scss" scoped>
#letter {
  .scroll {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background: url(../../../assets/t4.jpg) no-repeat center center;
    background-size: cover;
    ul {
      list-style: none;
      li {
        background: rgba(0, 0, 0, 0.06);

        width: 100%;
        padding: 10px 16px 10px 10px;
        box-sizing: border-box;
        display: flex;
        .headImg {
          width: 40px;
          height: 40px;
          overflow: hidden;
          img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
        }
        .letterContent {
          overflow: hidden;
          flex: 1;
          margin-left: 10px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          p {
            width: 100%;
            line-height: 22px;
            font-size: 14px;
          }
          .name {
            font-size: 15px;
            color: #222;
            font-weight: bold;
          }

          .left {
            float: left;
            color: #666;
          }
          .right {
            float: right;
            &.iconfont {
              font-size: 12px;
              color: #666;
            }
          }
          .letterText {
            color: #444;
          }
        }
      }
    }
  }
}
</style>