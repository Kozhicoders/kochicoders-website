<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page max-w-3xl mx-auto mt-16  pt-12 px-6 min-h-screen">
        <div class="text-secondary font-bold text-xl mt-16 mb-3">
          <img src="/images/favicon.png" class="w-48 mx-auto h-48" />
        </div>

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

        <!-- <div class="text-secondary text-lg mt-12 mb-3">Our Supporters</div> -->
        <!-- <div class="mb-32 text-sm lg-text-base">
          Kozhicoders is a thriving developer community based in Kozhikode, dedicated to fostering knowledge sharing,
          networking, and creating a developer-friendly ecosystem. Our mission is to bring together developers of all
          levels to collaborate, learn, and grow together. We host regular events, workshops, and meetups to facilitate
          continuous learning and professional development. Join us in building a vibrant and supportive environment for
          developers in Kozhikode.
        </div> -->
      </main>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="stylus">
</style>
