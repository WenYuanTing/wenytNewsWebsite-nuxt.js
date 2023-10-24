<template>
  <div>
    <h1>關於</h1>
    <p>此網站透過Nuxt3+Vue3讀取外部新聞API製作而成。</p>
    <p>利用app.vue渲染整個頁面，包含header跟footer，</p>
    <br />
    <p>
      index.vue用useAsyncData()抓取到API資料後，將資料用v-for送到components資料夾中的New.vue將新聞製作出來。
    </p>
    <br />
    <P
      >搜尋頁面使用v-model將input跟searchTerm綁定，一但有輸入文字就會觸發@input，透過handleInput()中的API去抓取搜尋相關的資料。
    </P>
    <p>再將抓取到的資料送給this.searchNewsData，就會透過v-for迴圈顯示出來</p>
    <p>當input資料清空後，會延遲一下將this.searchNewsData清空</p>
  </div>
</template>

<style scoped>
div {
  min-width: 375px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 28px;
  margin: 2rem;
  p {
    padding-left: 1rem;
    font-size: 20px;
  }
}
</style>
