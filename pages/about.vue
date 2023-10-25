<template>
  <div>
    <h1>關於</h1>
    <p>此網站透過Nuxt3+Vue3讀取外部新聞API製作而成。</p>
    <p>利用app.vue渲染整個頁面，包含header跟footer，</p>
    <p>且用nuxt-link做到SPA</p>
    <h2>首頁</h2>

    <p>
      用methods裡面的async function
      useAsyncData()抓取到API資料後，將資料用v-for送到components資料夾中的New.vue將新聞製作出來。
    </p>
    <p>
      且新增了兩個按鈕，透過v-show來決定是否要顯示新聞、顯示多久，再透過watch來顯示設定秒數的新聞
    </p>

    <h2>搜尋頁面</h2>
    <p>為了避免對API的請求過快，在生命週期created的時候有先觸發debounce函式</p>
    <p>
      搜尋頁面使用v-model將input跟searchTerm綁定，輸入文字後的0.25秒就會觸發@input，透過debouncedHandleInput去抓取搜尋相關的資料。
    </p>
    <p>再將資料用v-for送到components資料夾中顯示出來</p>
    <p>當input資料清空後，會延遲0.5秒將this.searchNewsData清空</p>
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
