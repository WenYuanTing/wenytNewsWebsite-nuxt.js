<script setup>
const { data } = await useAsyncData("mountains", () =>
  $fetch(
    "https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=15&apiKey=d73e4c2b476b4b1b86c7854645d7f4f6"
  )
);
const newsData = data._rawValue.articles;
</script>

<template>
  <div class="allnews">
    <News v-for="d in newsData" :key="d.id" :data="d" />
  </div>
</template>

<style scoped>
.allnews {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
