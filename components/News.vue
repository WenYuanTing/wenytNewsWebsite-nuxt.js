<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="new">
    <div class="picContainer">
      <img :src="data.urlToImage" alt="照片" class="newPic" />
    </div>
    <div class="newInfo">
      <p>標題 : {{ data.title }}</p>

      <p>
        簡介 : {{ data.description }}
        <a target="_blank" :href="data.url"> 更多內容 </a>
      </p>
    </div>
  </div>
</template>

<style>
.new {
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  border: 1px solid gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 400px;
  .picContainer {
    .newPic {
      width: 100%; /* 图片宽度占满容器宽度 */
      height: auto; /* 高度自适应，以保持图片比例 */
      max-width: 100%; /* 最大宽度不超过容器宽度 */
      max-height: 100%; /* 最大高度不超过容器高度 */
    }
  }

  .newInfo {
    padding: 1rem;
  }

  p,
  a {
    font-size: 16px;
  }
}
</style>
