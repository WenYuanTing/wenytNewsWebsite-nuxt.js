<script>
export default {
  data() {
    return {
      wenYTWebSiteLink: "https://wenyt-profileweb.netlify.app/",
    };
  },
  beforeCreate() {
    console.log("創建之前");
  },
  created() {
    console.log("創建之後");
  },
  beforeMount() {
    window.alert("渲染前");
  },
  mounted() {
    window.alert("渲染後");
  },
};
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="leftSide">
        <img src="./public/logo.png" alt="" class="logo" />
        <h1>WenYT2023-新聞網-Nuxt3</h1>
      </div>
      <div class="rightSide">
        <nuxt-link to="/">首頁</nuxt-link>
        <nuxt-link to="/search">搜尋新聞</nuxt-link>
        <nuxt-link to="/about">關於此網站</nuxt-link>
        <!-- <a href="/search">搜尋新聞</a>
        <a href="/about">關於此網站</a> -->
        <a target="_blank" :href="wenYTWebSiteLink">WenYT個人網站</a>
      </div>
    </div>
    <div class="mainInfo">
      <NuxtPage />
    </div>

    <div class="footer">YuanTing-Wen 2023©</div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #affbdb;
  justify-content: space-between;

  .leftSide {
    display: flex;
  }
  .rightSide a {
    font-size: 1.5rem;
    text-decoration: none;
    padding-right: 2rem;
  }
  .logo {
    max-height: 8vh;
    margin: 1rem;
    padding-right: 1rem;
  }
}

.mainInfo {
  min-height: 72vh;
}

.footer {
  display: flex;
  background-color: #affbdb;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  min-height: 10vh;
}
</style>
