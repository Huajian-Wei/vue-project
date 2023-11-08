<template>
  <div class="container">

    <div class="item">
      <ul class="list">
        <li></li>

        <div class="image"><img :src="src"></div>
        <div class="count">点赞数：{{ count }}</div>
        <button @click="doFavor">点赞</button>


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