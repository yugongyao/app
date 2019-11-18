<template>
<div class="page modal-page fontXing" id="login">
  <div class="btn" @click="goBack()"><span class="iconfont icon-chahao"></span></div>
  <div class="content">
    <div class="form-group">
      <input class="form-contrl" type="email" placeholder="请输入邮箱号" v-model="tel"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="password" placeholder="请输入密码" v-model="psd"/>
    </div>
    <div class="confirm-btn" @click="loginAction()">
      登录
    </div>
    <p class="alert-info" @click="goRegAction()">没有账号，立即注册<span class="iconfont icon-you"></span></p>
  </div>
</div>
</template>

<script>
import API from '../../../utils/api'
import Http from '../../../utils/Http'
export default {
  data(){
    return {
      tel: '',
      psd: '',
      tip:'登录'
    }
  },
  methods:{
    goRegAction(){
      this.$router.push('/regiester');
    },
    goBack(){
      this.$router.back();
    },

    async loginAction(){
      let email = this.tel;
      let password = this.psd;
      if (!email || !password){
        this.$Toast('输入不能为空！');
      }
      let result = await Http.post(API.LOGIN_API, {email,password});
      await this.$Toast(result.data.msg);
      if (result.data.status === 0){
        // 设置登录状态为true
        this.$store.commit('setLogin', true);
        setTimeout(() => {
          this.$router.push('/home');
        }, 500);
      }
    }

  }
}
</script>
<style scoped lang="scss">
.btn{
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px;
  span{
    font-size: 20px;
    color: #ccc;
  }
}
.content{
  margin-top: 50px;
  padding: 20px;
  box-sizing: border-box;
  .form-group{
    input{
      background:rgba($color: #000000, $alpha: 0);
      color:#fff;
    }
    input::-webkit-input-placeholder{
      color: #ddd;
      font-family: STXingkai;
    }
  }
}
</style>
