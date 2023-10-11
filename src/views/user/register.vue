<template>
    <div class="registration-container">
        <div class="registration-form">

            <form>
                <h2 class="top">注册</h2>
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <input type="text" id="username" v-model="username" />
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <input type="password" id="password" v-model="password" />
                </div>

                <div class="form-group">
                    <label for="password">确认密码:</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <div class="form-group">
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" v-model="email" />
                </div>


                <div class="form-group">
                    <label for="sign">个性签名:</label>
                    <textarea rows="5" cols="33"></textarea>
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
export default {
    data() {
        return {
            username: '',
            password: '',
            email: '',
            gender: [],
            interests: []
        };
    },
    methods: {
        register() {
            // 注册逻辑
            console.log('注册');
        }
    }
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
</style>
  