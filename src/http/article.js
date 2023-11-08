import axios from './axios';
import { useUserStore } from '@/stores/user';

const articleCatsData = {
  categories: [], // 用于存储文章分类数据

  fetchData() {
    const userStore = useUserStore();
    const token = userStore.user.token;
    return axios.get('/api/articleCat/all', {
      headers: {
        'Accept': '*/*',
        'token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (Array.isArray(response.articleCats)) { // 修改此行
        this.categories = response.articleCats; // 存储文章分类数据
      } else {
        console.error('响应数据格式不正确');
      } 
    })
    .catch(error => {
      console.error('请求失败', error);
    });
  },
};

export default articleCatsData;