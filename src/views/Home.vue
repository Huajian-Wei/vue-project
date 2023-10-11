<template>
    <div class="container">
      
      <div class="item">
        <ul class="list">
          <li><a href="https://www.ppzuowen.com/book/zhongguozuimeisanwen/170463.html">沈从文《生命》</a></li>
          
          <div class="image"><img :src="src"></div>
          <div class="count">点赞数：{{ count }}</div>
          <button @click="doFavor">点赞</button>
          
          <li><a href="https://www.ppzuowen.com/book/zhongguozuimeisanwen/170439.html">史铁生《秋天的怀念》</a></li>
          <div class="image"><img :src="src1"></div>
          <div class="count">点赞数：{{ i }}</div>
          <button @click="doFavor1">点赞</button>
        </ul>
      </div>
    </div>
  </template>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .item {
    margin-bottom: 20px;
  }
  
  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image {
    margin-top: 10px;
  }
  
  .count {
    margin-top: 10px;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        rawHtml: '沈从文：生命',
        src: 'https://th.bing.com/th/id/OIP.vV156i0jd8KsSRyFCslirwHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        src1: 'https://th.bing.com/th/id/OIP.dIFgv5Jaess7oclRS7xg2wHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        count: 0,
        i: 0
      };
    },
    methods: {
      doFavor() {
        this.count++;
      },
      doFavor1() {
        this.i++;
      }
    }
  };
  </script>
  