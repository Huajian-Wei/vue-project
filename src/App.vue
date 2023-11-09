

<template>
  <div class="link">
    <RouterLink to="/"><span class="font">首页|</span></RouterLink>
    <RouterLink to="/about"><span class="font">关于|</span></RouterLink>
    <RouterLink to="/user/login"><span class="font">登录|</span></RouterLink>
    <RouterLink to="/user/register"><span class="font">注册|</span></RouterLink>
    <RouterLink to="/user/index"><span class="font">用户中心|</span></RouterLink>
    <span class="font" @click="logout">退出登录</span>
    <div>
      <!-- 页面组件的占位 iframe -->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script>
import { useUserStore } from '@/stores/user'
export default{
  methods: {
        logout() {
            const userStore = useUserStore();
            console.log('aaa')
            userStore.$reset();
            this.$router.push('/user/login');
        }
    }
}
</script>
<style>
.link{
  margin-right: 20px;
}
.font{
  font-size: 15px;
  color: #524a4a;
}
</style>