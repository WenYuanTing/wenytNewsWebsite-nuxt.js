<script setup>
const { data } = await useAsyncData("mountains", () =>
  $fetch(
    "https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=15&apiKey=dae872a7c5524b53821837ded0eb1608"
  )
);
const newsData = data._rawValue.articles;
</script>

<template>
  <div class="allnews">
    <News v-for="d in newsData" :key="d.id" :data="d" />
  </div>
</template>

<style>
.allnews {
  display: flex;
  flex-wrap: wrap;
}
</style>
