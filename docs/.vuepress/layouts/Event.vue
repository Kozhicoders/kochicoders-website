<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { withBase } from 'vuepress/client'
const events = useBlogType('event')
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="page max-w-md md:max-w-3xl mx-auto mt-16  pt-12 px-6 min-h-screen">
                <div class="font-bold text-xl text-secondary mb-2">Events</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                    <div v-for="(event, index) in events.items" :key="index"
                        class="border rounded-lg mb-6 px-4 py-4 hover:scale-105 transition duration-300">
                        <img :src="withBase(event.info?.imageUrl)" class="w-full mx-auto h-64 object-cover" />
                        <div class="mb-2 font-semibold mt-4">{{ event.info?.title }}</div>
                        <hr>
                        <div class="my-2 text-sm">{{ new Date(event.info?.date).toLocaleDateString('en-US',
                            { day: "numeric", month: "long", year: "numeric" }) }}</div>

                        <div class="my-2 text-sm opacity-50 line-clamp-2">{{ event.info?.description }}</div>
                        <a :href="event.info?.registrationLink" v-if="event.info?.registrationLink"
                            class="flex justify-start">
                            <div
                                class="bg-gradient-to-r from-primary to-secondary rounded-full px-8 py-2 mx-auto text-black mt-3 mb-2">
                                Register
                            </div>
                        </a>

                    </div>
                </div>
            </main>
        </template>
    </ParentLayout>
</template>
