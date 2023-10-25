<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="new">
    <h2>標題 : {{ data.title }}</h2>

    <div class="Container">
      <img :src="data.urlToImage" alt="照片" class="newsPic" />
      <p>簡介 : {{ data.description }}</p>
    </div>
    <a target="_blank" :href="data.url"> 更多內容 </a>
  </div>
</template>

<style scoped>
.new {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0rem 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
}
.Container {
  display: flex;
  align-items: center;
}

.Container .newsPic {
  padding: 1rem;
  max-width: 200px; /* 最大宽度不超过容器宽度 */
  max-height: auto; /* 最大高度不超过容器高度 */
}
h2 {
  color: rgba(44, 149, 224, 0.995);
}
a {
  font-size: 20px;
  align-self: flex-end;
  text-decoration: none;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  color: rgb(3, 30, 211);
}
p {
  font-size: 20px;
}
</style>
