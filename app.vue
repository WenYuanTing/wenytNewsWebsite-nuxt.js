<script>
export default {
  data() {
    return {
      showNews: false,
      showNewsDisable: false,
      showNews2: false,
      showNews2Disable: false,
      countDown: 5,
      timer: null,
      wenYTWebSiteLink: "https://wenyt-profileweb.netlify.app/",
    };
  },
  methods: {
    handleClick() {
      this.showNews = !this.showNews;
      this.showNews2Disable = !this.showNews2Disable;
    },
    handleClick2() {
      this.showNews2 = !this.showNews2;
      this.showNewsDisable = !this.showNewsDisable;
    },
  },
  computed: {
    label() {
      return this.showNews ? "隱藏" : "顯示";
    },
    label2() {
      return this.showNews2
        ? "再" + this.countDown + "秒後隱藏新聞"
        : "顯示五秒新聞";
    },
  },
  watch: {
    showNews2(newVal, oldVal) {
      if (newVal) {
        this.countDown = 5;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown--;
          console.log("countDown : " + this.countDown);
          if (this.countDown == 0) {
            this.showNews2 = false;
            clearInterval(this.timer);
            this.timer = null;
            this.showNewsDisable = false;
          }
        }, 1000);
      }
    },
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
        <a href="/">首頁</a>
        <a href="/search">搜尋新聞</a>
        <a href="/about">關於此網站</a>
        <a target="_blank" :href="wenYTWebSiteLink">WenYT個人網站</a>
      </div>
    </div>
    <div class="mainInfo" v-show="showNews || showNews2">
      <NuxtPage />
    </div>
    <div
      class="buttonContainer"
      :style="{ 'min-height': showNews || showNews2 ? '20vh' : '78vh' }"
    >
      <button @click="handleClick" :disabled="showNewsDisable">
        {{ label }}新聞
      </button>
      <button @click="handleClick2" :disabled="showNews2Disable">
        {{ label2 }}
      </button>
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
  .rightSide {
    a {
      font-size: 1.5rem;
      text-decoration: none;
      padding-right: 2rem;
    }
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

.buttonContainer {
  display: flex;
  justify-content: center;
  min-height: 78vh;
}
button {
  max-height: 50px;
  background-color: aquamarine;
  font-size: 24px;
  margin: 2rem;
}
</style>
