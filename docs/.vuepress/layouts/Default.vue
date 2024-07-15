<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import { useBlogType } from '@vuepress/plugin-blog/client'
import { withBase } from 'vuepress/client'

const events = useBlogType('event')

const upcomingEvents = (events) => {
  return events.filter(event => new Date(event.info?.date) > new Date());
}

</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page max-w-3xl mx-auto mt-16  pt-12 px-6 min-h-screen">
        <div class="text-secondary font-bold text-xl mt-16 mb-3">
          <img :src="withBase('/images/favicon.png')" class="w-48 mx-auto h-48" />
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

        <div class="text-center mt-12 mb-4  mb-2">Upcoming vents</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div v-for="(event, index) in upcomingEvents(events.items)" :key="index"
            class="border rounded-lg mb-6 px-4 py-4 hover:scale-105 transition duration-300">
            <img :src="withBase(event.info?.imageUrl)" class="w-full mx-auto h-64 object-cover" />
            <div class="mb-2 font-semibold mt-4">{{ event.info?.title }}</div>
            <hr>
            <div class="my-2 text-sm">{{ new Date(event.info?.date).toLocaleDateString('en-US',
              { day: "numeric", month: "long", year: "numeric" }) }}</div>

            <div class="my-2 text-sm opacity-50 line-clamp-2">{{ event.info?.description }}</div>
            <a :href="event.info?.registrationLink" v-if="event.info?.registrationLink" class="flex justify-start">
              <div
                class="bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-2 mx-auto text-black mt-3 mb-2">
                Register
              </div>
            </a>

          </div>
        </div>
      </main>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="stylus">
</style>
