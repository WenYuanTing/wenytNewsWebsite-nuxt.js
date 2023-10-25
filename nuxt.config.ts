export default {
  mode: "spa",
  build: {
    target: "static",
  },
  router: {
    mode: "history", // 或 'hash'
  },
  pages: {
    index: {
      entry: "pages/index",
      title: "Home Page",
    },
    about: {
      entry: "pages/about",
      title: "About Page",
    },
    search: {
      entry: "src/pages/search",
      title: "Search Page",
    },
  },
};
