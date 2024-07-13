<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import { useBlogType } from '@vuepress/plugin-blog/client'

</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page max-w-3xl mx-auto mt-16 lg:mt-32 pt-12 px-4">
        <div class="text-secondary font-bold text-xl mt-16 mb-6">About Us</div>
        <div class="mb-12">
          Kozhicoders is a thriving developer community based in Kozhikode, dedicated to fostering knowledge sharing,
          networking, and creating a developer-friendly ecosystem. Our mission is to bring together developers of all
          levels to collaborate, learn, and grow together. We host regular events, workshops, and meetups to facilitate
          continuous learning and professional development. Join us in building a vibrant and supportive environment for
          developers in Kozhikode.
        </div>

        <div class="flex items-center">
          <a href="https://chat.whatsapp.com/Bhgl1Uflv7F7fzqZiDGGDP"
            class="bg-gradient-to-r from-primary to-secondary font-bold rounded-full px-12 py-3 mx-auto mb-12 text-black">
            Join Us</a>
        </div>
      </main>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="stylus">
</style>
