<template>
<div class="page modal-page fontXing" id="regiester">
  <div class="btn" @click="goBack()"><span class="iconfont icon-chahao"></span></div>
  <div class="content">
    <div class="form-group">
      <input class="form-contrl" type="text" placeholder="请输入用户名" v-model="user" />
    </div>
    <div class="form-group">
      <input class="form-contrl" type="email" placeholder="请输入邮箱号" v-model="tel"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="password" placeholder="请输入密码" v-model="psd"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="password" placeholder="请确认密码" v-model="rePsd"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="number" placeholder="请输入验证码" v-model="code"/>
      <span class="form-tip" @click="sendCode()">{{tip}}</span>
    </div>
    <div class="confirm-btn" @click="regiester()">
      注册
    </div>
    <p class="alert-info" @click="goLoginAction()">已有账号，立即登录<span class="iconfont icon-you"></span></p>
    

  </div>
  </div>
</template>

<script>
import API from '../../../utils/api'
import Http from '../../../utils/Http'

import {Field, CellGroup} from 'vant'
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      tip: '发送',
      user:'',
      tel: '',
      getCode: null,
      code: "",
      psd: "",
      rePsd: ""
    };
  },
  methods: {
    toast(status,tip){
      if (status == 0) {
        this.$Toast(tip[0]);
      } else if(status==-1) {
        this.$Toast(tip[1]);
      }else if(status==-2){
        this.$Toast(tip[2]);
      }else{
        this.$Toast("未知错误请重试");
      }
    },
    goLoginAction() {
      this.$router.push("/login");
    },
    goBack() {
      this.$router.back();
    },

    async sendCode(){
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let email = this.tel;
      if(!email){
        this.$Toast('输入不能为空！')
      }else if( !reg.test(email) ){
        this.$Toast('请输入正确的邮箱！')
      }
      else{
        let result = await Http.get(API.SEND_CODE_API, {email});
        if(result.data.status === 0){
          this.$Toast('发送成功')
        } else {
          this.$Toast('发送失败')
        }
      }
    },

    async regiester(){
      let username = this.user;
      let email = this.tel;
      let password = this.psd;
      let rePsd = this.rePsd;
      let code = this.code;
      if(password !== rePsd){
        this.$Toast('两次密码输入不一致')
      }
      else if(!username || !email || !password || !rePsd || !code){
        this.$Toast('输入不能为空！')
      }
      else {
        let result = await Http.post(API.REGIESTER_API, {username, email, password, code});
        await this.$Toast(result.data.message);
        if (result.data.status===0){
          this.$router.push('/login');
        }
      }
    }

  }
};
</script>

<style scoped lang="scss">
.btn {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px;
  span {
    font-size: 20px;
    color: #ccc;
  }
}
.content {
  margin-top: 50px;
  padding: 20px;
  box-sizing: border-box;
  .form-group {
    input {
      background: rgba($color: #000000, $alpha: 0);
      color: #ddd;
    }
    input::-webkit-input-placeholder {
      color: #ddd;
      font-family: STXingkai;
    }
  }
}
</style>