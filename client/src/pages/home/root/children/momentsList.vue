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
    width: 90%;
    margin:10px 5%;
    padding: 10px 0;
    background-color: rgba(239, 231, 231, 0.7);
    border-radius: 10px;
    .user{
        height: 50px;
        position: relative;
        overflow: hidden;
        img{
            display: inline-block;
            width: 45px;
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
            font-size: 14px;
        }
    }
    p{
        margin-top: 8px;
        text-indent: 2em;
        font-size: 16px;
    }
    ul.pics{
        overflow: hidden;
        width: 90%;
        padding: 0 5%;
        li{
            float: left;
            width: 50%;
            margin: 10px 0; 
            img{
                margin: 0 auto;
                width: 80%;
            }
        }
    }
    .messages{
        width: 100%;
        text-align: center;
        span{
            display: inline-block;
            border: 1px solid #666;
            text-align: center;
            border-radius: 10px;
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