import comp from "/Users/sanu/Workplace/L2/kozhikoders/kozhikoders-website/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About Us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Us\",\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\",\"layout\":\"Default\",\"sidebar\":false},\"headers\":[],\"git\":{\"updatedTime\":1720856553000,\"contributors\":[{\"name\":\"Sanu\",\"email\":\"sanukrishnansb@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"about.md\",\"excerpt\":\"\\n<p>doc1 test</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
