<template>
<div class="page modal-page fontXing" id="regiester">
  <div class="btn" @click="goBack()"><span class="iconfont icon-chahao"></span></div>
  <div class="content">
    <div class="form-group">
      <input class="form-contrl" type="email" placeholder="请输入邮箱号" v-model="tel"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="password" placeholder="请设置密码" v-model="psd"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="password" placeholder="请确认密码" v-model="rePsd"/>
    </div>
    <div class="form-group">
      <input class="form-contrl" type="number" placeholder="请输入验证码" v-model="code"/>
      <span class="form-tip">{{tip}}</span>
    </div>
    <div class="confirm-btn">
      注册
    </div>
    <p class="alert-info" @click="goLoginAction()">已有账号，立即登录<span class="iconfont icon-you"></span></p>
    

  </div>
</div>
</template>

<script>
import {Field, CellGroup} from 'vant'
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  data(){
    return {
      tip: '发送',
      tel: '',
      getCode: null,
      code: '',
      psd: '',
      rePsd: ''
    }
  },
  methods:{
    goLoginAction(){
      this.$router.push('/login');
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
      color:#ddd;
    }
    input::-webkit-input-placeholder{
      color: #ddd;
      font-family: STXingkai;
    }
  }
}
</style>