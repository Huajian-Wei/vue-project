<template>
  <div class="user-center">
    <div class="sidebar">
      <ul>
        <li>个人信息</li>
        <li @click="showArticleList = true">文章分类</li>
        <li>订单历史</li>
        <li>收货地址</li>
        <li>设置</li>
      </ul>
    </div>
    <div class="content">
      <h2>个人信息</h2>
      <div class="user-info">
        <div class="details">
          <p>用户名：weihuajian</p>
          <p>邮箱：whj@qq.com</p>
        </div>
      </div>

      <!-- 弹窗 -->
      <div v-if="showArticleList" class="popup">
        <whjArticles/>
      </div>
    </div>
  </div>
</template>

<script>
import whjArticles from "@/components/whjArticles.vue"; // 导入组件

export default {
  data() {
    return {
      showArticleList: false // 控制是否显示文章列表弹窗
    };
  },
  components: {
    whjArticles // 注册组件
  }
};
</script>

<style>
.user-center {
  display: flex;
  margin-top: 30px;
  height: 500px;
}

h2 {
  font-weight: bold;
  text-align: center;
}

.sidebar {
  flex: 0 0 100px;
  background-color: rgba(141, 138, 138, 0.3);
  padding: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 10px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: rgba(77, 68, 68, 0.3);
}

.user-info {
  display: flex;
  align-items: center;
}

.details {
  flex: 1;
  margin-bottom: 10px;
  padding: 10px;
}

.popup {
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #ccc;
  overflow-y: auto;
  max-width: 250px; /* 设置最大宽度 */
  max-height: 250px; /* 设置最大高度 */
  margin: 0 auto; /* 水平居中 */

  /* 添加媒体查询以适应移动端 */
  @media (max-width: 768px) {
    top: 265px; /* 设置在移动端的位置 */
    left: 131px;
    right: 10px;
    bottom: 10px;
  }

  @media (min-width: 769px) {
    top: 430px; /* 设置在大屏幕的位置 */
    left: -155px;
    right: 20px;
    bottom: 20px;
  }
}

</style>
