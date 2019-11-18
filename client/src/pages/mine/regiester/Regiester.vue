<template>
  <div class="page modal-page fontXing" id="regiester">
    <div class="btn" @click="goBack()">
      <span class="iconfont icon-chahao"></span>
    </div>
    <div class="content">
      <div class="form-group">
        <input class="form-contrl" type="text" placeholder="请输入用户名" v-model="user" />
      </div>
      <div class="form-group">
        <input class="form-contrl" type="email" placeholder="请输入邮箱号" v-model="tel" />
      </div>
      <div class="form-group">
        <input class="form-contrl" type="password" placeholder="请设置密码" v-model="psd" />
      </div>
      <div class="form-group">
        <input class="form-contrl" type="password" placeholder="请确认密码" v-model="rePsd" />
      </div>
      <div class="form-group">
        <input class="form-contrl" type="number" placeholder="请输入验证码" v-model="code" />
        <span @click="sendCodeAction" class="form-tip">{{tip}}</span>
      </div>
      <div class="confirm-btn" @click="registerAction">注册</div>
      <p class="alert-info" @click="goLoginAction()">
        已有账号，立即登录
        <span class="iconfont icon-you"></span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Field, CellGroup } from "vant";
export default {
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      tip: "发送",
      user:"",
      tel: "",
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
     async sendCodeAction() {
       let result = await this.$Http.get(
        this.$Api.HOST + this.$Api.SEND_CODE_API,
        {
          email: this.tel
        }
      );
      this.toast(result.data.status,['验证码发送成功','验证码发送失败','邮箱为空']);
    },
    async registerAction() {
      let result = await this.$Http.post(
        this.$Api.HOST + this.$Api.REGIESTER_API,
        {
          username:this.user,
          email:this.tel,
          password:this.psd,
          code:this.code
        }
      );
      this.toast(result.data.status,['注册成功','验证码错误','注册失败']);
      
     
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