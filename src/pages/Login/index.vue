<template>
  <div class="login-page">
    <video class="v1" autoplay muted loop >
      <source  src="@/assets/vedio/bg_video.mp4">
  </video>
  <div class="loginContainer">
    <h1 class="h1">心若相依管理系统</h1>
      <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="password"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="" @click="submitForm('loginForm')">提 交</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      /**
       * @param {object}    就是一个表单验证对象
       * @param {String}   输入值
       * @param {Function}  校验通过不传参  不通过传参
       */
      var validateUsername = (rule, value, callback) => {
        // var uPattern  = /^[a-zA-Z0-9_-]{4,16}/;
        // if(!uPattern.test(value)){
        //   callback("4到16位(字母、数字、下划线、减号)")
        // } 
        if(!value){
          callback("4到16位(字母、数字、下划线、减号)")
        }else{
          callback()
        }
      };
      var validatePassword = (rule, value, callback) => {
       if(!value){
          callback("请输入密码")
        }else{
          callback()
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scped>
/* 表单样式 */
    .el-form{
      width: 400px;
    }
  /* 登录背景 */
 .v1{
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: -999;
  left: 0;
  top:0;
}
login-page{
  position: relative;
}
/* 登录内容 */
.loginContainer{
  text-align: center;
  width: 400px;
  height: 487px;
  position: absolute;
  top:15%;
  left: 60%;
  z-index: 10;
  background: rgba(0,0,0,.2);
  border-radius: 7%;
}
.h1{
  margin: 80px auto;
  color: brown;
}

</style>
