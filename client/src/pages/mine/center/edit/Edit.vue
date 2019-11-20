<template>
  <div class="page modal-page" id="edit">
    <app-header :title="title" :hasBack="hasBack" class="topColor">
      <span slot="right-btn" class="right-btn" @click="save">保存</span>
    </app-header>
    <div class="edit-inner">
      <div class="edit-bg">
        <img src="../../../../assets/centerbg.jpg" alt />
        <p class="edit-logo">
          <img src="../../../../assets/star.jpg" alt />
        </p>
      </div>
      <div class="edit-main fontXing">
        <van-cell-group>
          <!-- 姓名 -->
          <div class="username border-bottom">
            <van-field v-model="username" label="姓名" />
          </div>
          <!-- 性别 -->
          <div class="sex border-bottom">
            <van-field label="性别" v-model="sex" placeholder="选择性别" @click="showPicker = true" />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onSexConfirm"
              />
            </van-popup>
          </div>
          <!-- 生日 -->
          <div class="date border-bottom">
            <van-field
              label="生日"
              v-model="timeValue"
              placeholder="选择的日期结果"
              readonly
              @click="showPopFn()"
            />
            <van-popup v-model="show" position="bottom">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @change="changeFn()"
                @confirm="confirmFn()"
                @cancel="cancelFn()"
              />
            </van-popup>
          </div>
          <!-- 简介 -->
          <div class="intro border-bottom">
            <van-field
              v-model="message"
              rows="2"
              autosize
              label="简介"
              type="textarea"
              placeholder="请输入个人简介"
              maxlength="50"
              show-word-limit
            />
          </div>
        </van-cell-group>
      </div>
    </div>
    <div class="end">
      <p class="fontXing">-The End-</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import api from '../../../../utils/api';
import Http from '../../../../utils/Http';
export default {
   computed:{
    ...mapState({
      userInfo: state=>state.userInfo
    })
  },
  data() {
    return {
      title: "编辑个人资料",
      hasBack: true,
      username: "",
      //性别选择
      showPicker: false,
      columns: ["男", "女"],
      sex: "男",
      //生日
      showDatePicker: false,
      msg: "",
      minDate: new Date(1980, 10, 1),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      changeDate: new Date(),
      show: false, // 用来显示弹出层
      timeValue: "",
      // 简介
      message:''
    };
  },
  methods: {
    async save() {
      console.log("保存成功");
      var arr=[this.username,this.sex,this.timeValue,this.message]
      console.log(arr);
      let result = await Http.post(api.EDIT_INFO,{
        _id: this.userInfo._id,
        username: this.username,
        sexID: this.sex,
        birthday: this.timeValue,
        desc: this.message
      });
      if (result.data.status === 0){
        this.$store.dispatch('requestUserInfo');
        this.$Toast('更新成功');
      } else {
        this.$Toast('更新失败');
        console.log(result.data.msg);
      }
    },
    onSexConfirm(value) {
      this.sex = value;
      this.showPicker = false;
    },
    showPopFn() {
      this.show = true;
    },
    showPopup() {
      this.show = true;
    },
    changeFn() {
      // 值变化是触发
      this.changeDate = this.currentDate; // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
    },
    confirmFn() {
      // 确定按钮
      this.timeValue = this.timeFormat(this.currentDate);
      this.show = false;
    },
    cancelFn() {
      this.show = true;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "年" + month + "月" + day + "日";
    }
  },
  beforeRouteEnter: (to, from, next)=>{
    next((component)=>{
      component.$store.dispatch('requestUserInfo');
    });
  },
  mounted() {
    this.timeFormat(new Date());
    this.username = this.userInfo.username;
    this.sex = this.userInfo.sexID;
    this.timeValue = this.userInfo.birthday;
    this.message = this.userInfo.desc;
  }
};
</script>

<style scoped lang="scss">
#edit {
  background: #fff;
  z-index: 999;
  .end{
    height: 30px;
    line-height: 30px;
    p{
      text-align: center;
    }
  }
  .topColor {
    color: #333;
    background: #fafafa;
    box-shadow: 2px 2px 5px #999;
  }
  .edit-inner {
    margin-top: 44px;
    .edit-bg {
      width: 100%;
      height: 120px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .edit-logo {
        width: 50px;
        height: 50px;
        position: absolute;
        left: 10px;
        bottom: -10px;
        background: #ddd;
        border-radius: 50%;
        padding: 2px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .edit-main {
      padding: 20px 20px;
    }
  }
}
</style>