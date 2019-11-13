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
    <div class="form-group">
      <input class="form-contrl" type="number" placeholder="请输入验证码" v-model="code"/>
      <span class="form-tip">{{btnTip}}</span>
    </div>
    <div class="confirm-btn">
      登录
    </div>
    <p class="alert-info" @click="goRegAction()">没有账号，立即注册<span class="iconfont icon-you"></span></p>
  </div>
</div>
</template>

<script>

export default {
  data(){
    return {
      tel: '',
      psd: '',
      code: '',
      getCode: '',
      btnTip: '发送',
      tip:'登录'
    }
  },
  methods:{
    goRegAction(){
      this.$router.push('/regiester');
    },
    goBack(){
      this.$router.back();
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
