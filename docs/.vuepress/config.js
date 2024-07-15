import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/kochicoders-website/'

  title: '',
  description: 'Technology from the shores of Malabar',

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/dist/index.css' }],

    // Import the corresponding link
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        rel: "stylesheet",
      },
    ]
  ],

  theme: defaultTheme({
    logo: '/images/kozhicoders-logo-light.png',
    logoDark: '/images/kozhicoders-logo-dark.png',

    logoAlt: 'Kozhicoders',

    navbar: [
      '/',
      {
        text: 'All Events',
        link: '/event/',
      },
      {
        text: 'Join Us',
        link: 'https://chat.whatsapp.com/Bhgl1Uflv7F7fzqZiDGGDP',
      }
    ],
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('events/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        imageUrl: frontmatter.imageUrl || null,
        description: frontmatter.description || null,
        registrationLink: frontmatter.registrationLink || null,
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'event',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Event',
          frontmatter: () => ({
            title: 'Events',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
