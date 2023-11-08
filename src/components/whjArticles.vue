<template>
  <div class="article-list-container">
    <h2>文章分类列表</h2>
    <ul v-if="categories.length > 0" class="category-list">
      <li v-for="category in categories" :key="category.id" @click="showArticle(category.id)" class="category-item">
        {{ category.catName }}
      </li>
    </ul>
    
    <div v-else>
      <p>加载中...</p>
    </div>
    
    <whj-Article v-if="selectedCategoryId" class="article-detail"/>
  </div>
</template>

<script>
import articleCatsData from '@/http/article';
import whjArticle from "@/components/whj-Article.vue";
import axios from 'axios';

export default {
  data() {
    return {
      categories: [], // 用于存储文章分类数据
      selectedCategoryId: null // 存储选中的文章分类的ID
    };
  },
  methods: {
    showArticle(categoryId) {
      this.$router.push({ name: 'article', params: { id: categoryId} });
    }
  },
  created() {
    articleCatsData.fetchData().then(() => {
      this.categories = articleCatsData.categories;
    });
  },
  components: {
    whjArticle
  }
};
</script>

<style scoped>
.article-list-container {
  text-align: center;
  margin: 20px;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-item {
  cursor: pointer;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  transition: background-color 0.3s;
}

.category-item:hover {
  background-color: #e0e0e0;
}

.article-detail {
  margin-top: 20px;
}
</style>
