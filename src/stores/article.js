import axios from 'axios';
import { useUserStore } from '@/stores/user';

export default {
  fetchArticleList(context) {
    const userStore = useUserStore(); // 你需要确保 useUserStore() 函数已经正确引入
    const token = userStore.user.token;
    axios.get('http://api.jqrjq.cn/api/article/all', {
      headers: {
        'Accept': '*/*',
        'token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log('响应数据:', response.data); // 打印响应数据以便查看
        context.articles = response.data.data.articles; // 存储文章列表数据
      })
      .catch(error => {
        console.error('请求失败', error);
      });
  }
};
