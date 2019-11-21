<template>
  <div id="app">
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <div v-if="haveMessage" class="message" @click="goLookAction">你有一条新的消息</div>
    </transition>
    <keep-alive>
      <router-view v-if="!other"></router-view>
    </keep-alive>
    <router-view name="inform"></router-view>
    <router-view name="home"></router-view>
    <router-view name="topic"></router-view>
    <transition enter-active-class="slideInUp" leave-active-class="slideOutDown">
      <router-view v-if="other"></router-view>
    </transition>
    <tab-bar v-if="hasBar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tab-bar";
import Http from './utils/Http'
export default {
  components: {
    [TabBar.name]: TabBar
  },
  data() {
    return {
      hasBar: true,
      other: false,
      haveMessage:false,
    };
  },
  // watch: {
  //   $route: "getPath"
  // },
  // methods: {
  //   getPath() {
  //     console.log(this.$route.path);
  //   }
  methods:{
    goLookAction(){
      this.$router.push("/inform/chat/1");
    },
    tolk(){
      if(!this.$store.state.isLogin){
        return;
      }
      this.haveMessage = true;
      setTimeout(() => {
        this.haveMessage = false;
      }, 3000);
    },
    async checkLogin(){
      let result = await Http.get('/api/user/check_login');
      if(result.data.status==0){
        this.$store.commit("setLogin",true);
        this.$store.dispatch('requestUserInfo');
      }else{
        this.$store.commit("setLogin",false);
      }
    }

  },
  watch: {
    $route(to, from) {
      if (this.$route.path.startsWith("/issue")) {
        this.hasBar = false;
        this.other = true;
      } else {
        this.hasBar = true;
        this.other = false;
      }
    }
  },
  beforeCreate() {
    this.$ws.onopen = () => {
      console.log("上线了");
    };

    this.$ws.onerror = () => {
      console.log("断线了");
    };

    this.$ws.onclose = () => {
      console.log("下线了");
    };

    this.$ws.onmessage = ev => {
      if (!window.localStorage.getItem("chatData")) {
        window.localStorage.setItem("chatData", "[]");
      }
      var dataArr = JSON.parse(window.localStorage.getItem("chatData"));
      var data = JSON.parse(ev.data);
      dataArr.push(data);
      this.$center.$emit("onemessage",dataArr);
      this.tolk();
      // this.wordData = dataArr;
      window.localStorage.setItem("chatData", JSON.stringify(dataArr));
    };
  },
  created(){
    this.checkLogin()
    
  }
};
</script>
<style lang="scss">
.message{
  width: 100%;
  height: 44px;
  position: absolute;
  top: 0;
  z-index: 666;
  text-align: center;
  line-height: 44px;
  color: #fff;
  background: rgba(2, 2, 2, 0.63);
}
</style>
