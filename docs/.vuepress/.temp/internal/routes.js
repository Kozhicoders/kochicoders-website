export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/sanu/Workplace/L2/kozhikoders/kozhikoders-website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/Users/sanu/Workplace/L2/kozhikoders/kozhikoders-website/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About Us"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/sanu/Workplace/L2/kozhikoders/kozhikoders-website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
