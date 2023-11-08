<template>
    <div class="article-list-container">
      <p class="article-list-title">当前文章分类：{{ categoryName }}</p>
      
      <div v-if="articles.length === 0" class="empty-message">
        <p>该分类空空如也~</p>
        <router-link to="/user/home" class="back-link">点击返回首页</router-link>
      </div>
      
      <div class="article-list">
        <div v-for="article in articles" :key="article.id" class="article-item" @click="showArticleDetails(article.id)">
          <p class="article-info">用户UID: {{ article.articleCatId }}</p>
          <p class="article-title">{{ article.title }}</p>
          <p class="article-time">{{ article.createTime }}</p>
          <p class="article-info">用户UID: {{ article.userinfoId }}</p>
          <hr class="article-divider">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ArticleList from '@/stores/article';
  
  export default {
    data() {
      return {
        articles: [],
        categoryName: ''
      };
    },
    created() {
      ArticleList.fetchArticleList(this);
    },
    methods: {
      showArticleDetails(articleId) {
        this.$router.push({ name: 'Detail', params: { id: articleId } });
      }
    }
  };
  </script>
  
  <style scoped>
  .article-list-container {
    text-align: center;
  }
  
  .article-list-title {
    font-size: 17px;
  }
  
  .empty-message {
    font-size: 16px;
  }
  
  .back-link {
    text-decoration: underline;
    color: #007bff;
  }
  
  .article-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .article-item {
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .article-item:hover {
    background-color: #e0e0e0;
  }
  
  .article-info {
    font-size: 14px;
  }
  
  .article-title {
    font-size: 16px;
    font-weight: bold;
  }
  
  .article-time {
    font-size: 14px;
  }
  
  .article-divider {
    width: 96%;
    border: 1px solid #ccc;
    margin: 10px 0;
  }
  </style>
  