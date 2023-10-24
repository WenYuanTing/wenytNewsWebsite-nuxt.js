// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // 配置页面
  pages: {
    // 根页面（首页）
    index: {
      entry: "pages/index", // 页面入口文件
      title: "Home Page", // 页面标题
    },
    // 其他页面
    about: {
      entry: "pages/about",
      title: "About Page",
    },
    contact: {
      entry: "src/pages/contact",
      title: "Contact Page",
    },
  },

  // 配置路由
};
