import axios from 'axios';
import { useUserStore } from '@/stores/user';

export default {
  fetchArticleDetail(context, articleId) {
    const userStore = useUserStore(); // 你需要确保 useUserStore() 函数已经正确引入
    const token = userStore.user.token;

    axios.get(`http://api.jqrjq.cn/api/article/one?id=${articleId}`, {
      headers: {
        'Accept': '*/*',
        'token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log('文章详情响应数据:', response.data); // 打印响应数据以便查看
        context.article = response.data.data.article; // 存储文章详情数据
      })
      .catch(error => {
        console.error('请求文章详情失败', error);
      });
  }
};
