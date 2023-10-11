<template>
  <div class="login-container">
    <div class="login-form">
      <form>
        <h2 class="top">登录</h2>
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button class="login-button" @click="login"><router-link to="/user/index"><span class="white-text">登录</span></router-link></button>
        <button class="register-button" @click="register"><router-link to="/user/register"><span class="white-text">注册</span></router-link></button>
      </form>
      <div class="span">
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('登录');
    },
    register() {
      console.log('注册');
    }
  }
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
}</style>
  