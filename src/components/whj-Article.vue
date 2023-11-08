<!-- ArticleDetail.vue -->
<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import articleCatsData from '@/http/article';
import whjArticle from "@/components/whj-Article.vue";
import axios from 'axios';

export default {
  data() {
    return {
      article: {} // 存储文章内容的数据
    };
  },
  created() {
    axios.get('https://api.jqrjq.cn/api/articleCat/all')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error('获取数据失败:', error);
      });
  }
};
</script>
