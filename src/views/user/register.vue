<template>
  <div class="registration-container">
    <div class="registration-form">
      <form>
        <h2 class="top">注册</h2>
        <div class="form-group">
          <label for="userName">用户名:</label>
          <input type="text" id="userName" v-model="userName" />
          <span class="error-message" v-if="isUserNameEmpty">请输入用户名</span>
        </div>
        <div class="form-group">
          <label for="email">邮箱:</label>
          <input type="email" id="email" v-model="email" />
          <span class="error-message" v-if="isemailEmpty">请输入格式正确的邮箱</span>
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" />
          <span class="error-message" v-if="isPasswordEmpty">请输入密码</span>
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" />
          <span class="error-message" v-if="isConfirmPasswordEmpty">请确认密码</span>
          <span class="error-message" v-if="isPasswordMismatch">密码不匹配</span>
        </div>


        <button class="register-button" @click="register">注册</button>
      </form>
      <div class="login-link">
        <router-link to="/user/login">已有账号？点击登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { userReg } from "@/http/user";
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: "", // 添加错误提示信息
    };
  },
  computed: {
    isUserNameEmpty() {
      return this.userName === '';
    },
    isemailEmpty() {
      return this.email.trim() === "";
    },
    isPasswordEmpty() {
      return this.password === '';
    },
    isConfirmPasswordEmpty() {
      return this.confirmPassword === '';
    },
    isPasswordMismatch() {
      return this.password !== this.confirmPassword;
    },
  },


  methods: {
    async register() {
      // 检查表单字段是否有效
      if (
        this.isUserNameEmpty ||
        this.isPasswordEmpty ||
        this.isConfirmPasswordEmpty ||
        this.isPasswordMismatch ||
        this.isInvalidEmail
      ) {
        this.errorMessage = "请填写有效的注册信息";
        return;
      }

      const userStore = useUserStore();

      try {
        // 注册信息
        const response = await userReg({
          userName: this.userName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }).then(res => {
          // 注册成功
          console.log(res);
          console.log("注册成功")
          userStore.setUser(res.userinfo);
        }).catch(err => {
          //console.log(err.response.data);
          console.log("注册失败1");
          console.log(err);
        });
        // 跳转到目标页面
        this.$router.push("/user/login");
      } catch (error) {
        console.log("注册失败2");
        console.log(err);
      }
    },
  },
};
</script>

  
<style>
.registration-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-form {
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(141, 138, 138, 0.3);
}

.top {
  font-weight: bold;
  margin: auto;
  text-align: center;
}

.form-group {
  margin-bottom: 5px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.register-button {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.login-link {
  text-align: center;
  margin-top: 10px;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>
  