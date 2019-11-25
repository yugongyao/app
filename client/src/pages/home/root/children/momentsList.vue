<template>
  <div class="moments-list">
      <div class="moment-wrap" v-for="data in moments" :key="data.id" @click="goDynamic()">
          <div class="user">
              <img :src="data.icon" alt="用户头像">
              <span class="nickname">{{data.username}}</span>
              <span class="time">{{data.time}}</span>
          </div>
          <p>{{data.text}}</p>
          <ul class="pics">
              <li v-for="(url, index) in data.picArr" :key="index">
                  <img :src="url" alt="动态的图片">
              </li>
          </ul>
          <div class="messages">
              <span>
                  <van-icon class="m-icon" name="comment-o" size="20px"/>  {{data.comments}}
              </span>
              <span>
                  <van-icon class="m-icon" name="like-o" size="20px"/>  {{data.likes}}
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        moments: {
            type: Array,
            required: true
        }
    },
    methods: {
        goDynamic(){
            this.$router.push(`/inform/detail/1`);
        }
    }
}
</script>

<style scoped lang="scss">
.moments-list{
    width: 100%;
    padding-bottom: 10px;
}
.moment-wrap{
    width: 94%;
    margin:5px 3%;
    padding: 10px 0;
    background-color: rgba(233, 231, 239, 0.945);
    border-radius: 2px;
    .user{
        height: 50px;
        position: relative;
        overflow: hidden;
        img{
            display: inline-block;
            width: 40px;
            border-radius: 50%;
            margin:0 15px;
        }
        span{
            position: absolute;
        }
        span.nickname{
            left: 70px;
            top: 5px;
        }
        span.time{
            left: 70px;
            bottom: 5px;
            font-size: 13px;
            color: #666;
        }
    }
    p{
        margin-top: 8px;
        text-indent: 2em;
        font-size: 14px;
        color: #444;
    }
    ul.pics{
        overflow: hidden;
        width: 96%;
        padding: 0 2%;
        margin:10px 0;
        li{
            float: left;
            width: 50%;
            margin: 4px 0; 
            img{
                margin: 0 auto;
                width: 90%;
            }
        }
    }
    .messages{
        width: 100%;
        text-align: center;
        span{
            display: inline-block;
            // border: 1px solid #666;
            text-align: center;
            border-radius: 3px;
            width: 100px;
            height: 24px;
            margin: 0 15px;
            font-size: 14px;
            line-height: 24px;
            cursor: pointer;
            .m-icon{
                font-size: 14px;
                vertical-align: text-bottom;
            }
        }
    }
}
</style>