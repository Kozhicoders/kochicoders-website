<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div v-for="i in 10" :key="1" class="px-12">{{ i }}</div>
        <div class="bg-red-500 p-12 font-bold">Hi</div>
      </main>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="stylus">
</style>
