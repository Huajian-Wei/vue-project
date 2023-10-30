<template>
  <div class="login-container">
    <div class="login-form">
      <form>
        <h2 class="top">登录</h2>
        <div class="form-group">
          <label for="email">邮箱:</label>
          <input type="text" id="email" v-model="email" />
          <span class="error-message" v-if="isemailEmpty">请输入格式正确的邮箱</span>
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" />
          <span class="error-message" v-if="isPasswordEmpty">请输入密码</span>
        </div>
        <button class="login-button" @click="login">
          <span class="white-text">登录</span>
        </button>
        <button class="register-button" @click="register">
          <span class="white-text">注册</span>
        </button>
      </form>
      <div class="span">
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { userLogin } from "@/http/user";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "", // 添加错误提示信息
    };
  },
  computed: {
    isemailEmpty() {
      return this.email.trim() === "";
    },
    isPasswordEmpty() {
      return this.password === "";
    },
  },

  methods: {
    async login() {
      // 检查邮箱和密码是否为空
      if (this.isemailEmpty || this.isPasswordEmpty) {
        this.errorMessage = "邮箱和密码不能为空";
        return;
      }

      const userStore = useUserStore();

      try {
        // 进行登录验证
        const response = await userLogin({
          email: this.email,
          password: this.password,
        }).then(res => {
          // 登录成功
          console.log(res);
          userStore.setUser(res.userinfo);
        }).catch(err => {
          //console.log(err.response.data);
          console.log("登陆失败")
          console.log(err);
        });

        // 跳转到目标页面
        this.$router.push("/user/index");
      } catch (error) {
        // 登录失败
        this.errorMessage = "用户名或密码错误";
        console.log(error);
      }
    },
    register() {
      this.$router.push("/user/register");
      console.log("注册");
    },
  },
};
</script>

<style>
body {
  background-image: url('../images/OIP1.jpg');
  background-size: cover;
}

.top {
  font-weight: bold;
  margin: auto;
  text-align: center;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(141, 138, 138, 0.3);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 5px;
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

.white-text {
  color: #fff;
}

.span {
  display: flex;
  margin-left: 190px;
  font-size: 13px;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>
