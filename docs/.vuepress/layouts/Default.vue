<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

// const articles = useBlogType('article')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div v-for="i in 100" :key="1">{{ i }}</div>
      </main>
    </template>
  </ParentLayout>
</template>
