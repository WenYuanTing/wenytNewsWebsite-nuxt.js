<script>
export default {
  data() {
    return {
      newsData: [],
      showNews: false,
      showNewsDisable: false,
      showNews2: false,
      showNews2Disable: false,
      countDown: 5,
      pulsOrMinusNumber: 0,
      timer: null,
    };
  },
  created() {
    this.findNewsData();
  },
  methods: {
    async findNewsData() {
      const { data } = await useAsyncData("mountains", () =>
        $fetch(
          "https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=15&apiKey=dae872a7c5524b53821837ded0eb1608"
        )
      );
      this.newsData = data._rawValue.articles;
      console.log(newsData);
    },
    handleClick() {
      this.showNews = !this.showNews;
      this.showNews2Disable = !this.showNews2Disable;
    },
    handleClick2() {
      this.showNews2 = !this.showNews2;
      this.showNewsDisable = !this.showNewsDisable;
    },
    minus() {
      this.pulsOrMinusNumber--;
    },
    plus() {
      this.pulsOrMinusNumber++;
    },
  },
  computed: {
    label() {
      return this.showNews ? "隱藏" : "顯示";
    },
    label2() {
      return this.showNews2
        ? "再" + this.countDown + "秒後隱藏新聞"
        : "顯示" + (this.countDown + this.pulsOrMinusNumber) + "秒新聞";
    },
  },
  watch: {
    showNews2(newVal, oldVal) {
      if (newVal) {
        this.countDown = this.countDown + this.pulsOrMinusNumber;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown--;
          if (this.countDown == 0) {
            this.showNews2 = false;
            clearInterval(this.timer);
            this.timer = null;
            this.showNewsDisable = false;
            this.countDown = 5;
          }
        }, 1000);
      }
    },
  },
};
</script>

<template>
  <div class="allnews" v-show="showNews || showNews2">
    <News v-for="d in newsData" :key="d.id" :data="d" />
  </div>
  <div
    class="buttonContainer"
    :style="{ 'min-height': showNews || showNews2 ? '20vh' : '78vh' }"
  >
    <button @click="handleClick" :disabled="showNewsDisable">
      {{ label }}新聞
    </button>
    <button @click="minus">-</button>
    <button @click="handleClick2" :disabled="showNews2Disable">
      {{ label2 }}
    </button>
    <button @click="plus">+</button>
  </div>
</template>

<style scoped>
.allnews {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
