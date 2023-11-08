<template>
  <div class="article-detail-container">
    <h1 class="article-detail-title">文章详情页</h1>
    <div v-if="article" class="article-content">
      <h2>{{ article.title }}</h2>
      <p class="article-info">发布时间: {{ article.createTime }}</p>
      <p class="article-info">用户UID: {{ article.userinfoId }}</p>
      <div class="article-body" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import Detail from '@/stores/Detail.js';

export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    Detail.fetchArticleDetail(this, this.$route.params.id);
  }
};
</script>

<style scoped>
.article-detail-container {
  text-align: center;
  margin: 20px;
}

.article-detail-title {
  font-size: 24px;
}

.article-content {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
}

.article-info {
  font-size: 14px;
  margin: 5px 0;
}

.article-body {
  font-size: 16px;
  line-height: 1.6;
}
</style>
