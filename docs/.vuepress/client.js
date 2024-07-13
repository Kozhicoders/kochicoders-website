import { defineClientConfig } from 'vuepress/client'
import Default from './layouts/Default.vue'
import Event from './layouts/Event.vue'


export default defineClientConfig({
  layouts: {
    Default,
    Event
  },
})
