import comp from "/Users/sanu/Workplace/L2/kozhikoders/kozhikoders-website/docs/.vuepress/.temp/pages/about/about1.html.vue"
const data = JSON.parse("{\"path\":\"/about/about1.html\",\"title\":\"About Us\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"about/about1.md\",\"excerpt\":\"\\n<p>doc1 test</p>\\n\"}")
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
