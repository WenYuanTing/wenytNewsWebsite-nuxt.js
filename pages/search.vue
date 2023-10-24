<script>
export default {
  data() {
    return {
      searchTerm: "",
      searchNewsData: [],
    };
  },
  methods: {
    async handleInput() {
      try {
        if (this.searchTerm != "") {
          const { data } = await useAsyncData("mountains", () =>
            $fetch(
              `https://newsapi.org/v2/everything?q=${this.searchTerm}&page=1&pageSize=15&apiKey=d73e4c2b476b4b1b86c7854645d7f4f6`
            )
          );
          this.searchNewsData = data._rawValue.articles;
          console.log(this.searchNewsData);
        } else if (this.searchTerm == "") {
          setTimeout(() => {
            this.searchNewsData = [];
          }, 500);
        }
      } catch (error) {
        console.error("發生錯誤:", error);
      }
    },
  },
};
</script>

<template>
  <div id="searchNews">
    <h1>搜尋列表</h1>
    <input
      type="text"
      placeholder="請輸入要查找的關鍵字"
      class="search"
      v-model="searchTerm"
      @input="handleInput"
    />
    <ul>
      <li>
        <searchNews v-for="d in searchNewsData" :key="d.id" :data="d" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
#searchNews {
  min-width: 375px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 28px;
  margin: 2rem;
}

#searchNews h1 {
  font-size: 32px;
  color: black;
  font-weight: 500;
}

.search {
  width: 100%;
  background: #ebe4e4;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  outline: none;
}

#searchNews ul {
  color: #2153a3;
  list-style: none;
}

#searchNews ul li {
  margin-bottom: 12px;
}
</style>
