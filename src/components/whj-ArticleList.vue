<template>
  <div>
    <ul class="list">
      <li v-for="article in articles" :key="article.id" class="list-item" @click="showArticleDetail(article.id)">
        <whjArticle :title="article.title"></whjArticle>
        23
      </li>
    </ul>
  </div>
</template>

<script>
import whjArticle from "@/components/whj-Article.vue";

export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  components: {
    whjArticle,
  },
  methods: {
    showArticleDetail(articleId) {
      // 在这里执行获取文章详情页的操作，可以使用路由导航或其他方式跳转到文章详情页
      console.log("文章ID为：" + articleId);
    },
  },
};
</script>

<style>
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-item {
  list-style: none;
}
</style>