<template lang="pug">
#view-home.relative.min-h-screen.bg-base-100
  GlobalHeader.fixed.top-0.left-0.w-full.z-50.backdrop-blur-md.bg-base-100.bg-opacity-80

  main.relative
    //- 渲染所有 Section
    section.home-section.transition-all.duration-1000.ease-out(
      v-for='(item, index) in sections',
      :key='item.id',
      :id='`section-${item.id}`',
      ref='sectionRefs',
      :class='{ "min-h-screen flex flex-col justify-center": item.id === "frontpage", "py-16 md:py-24": item.id !== "frontpage" && item.id !== "footer", "opacity-0 translate-y-12": !visibleSections.has(index), "opacity-100 translate-y-0": visibleSections.has(index) }'
    )
      Component.w-full(
        :is='item.component',
        v-bind='item.props || {}',
        :section-id='item.id',
        :index='index',
        :is-reverse='index % 2 === 0',
        :data-is-last='index + 1 === sections.length || undefined'
      )

  GlobalFooter
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  ref,
  shallowRef,
  onMounted,
  onUnmounted,
  markRaw,
  type Component,
} from 'vue'
import GlobalHeader from '@com/BaseTemplate/GlobalHeader.vue'
import SectionFrontpage from './Sections/SectionFrontpage.vue'
import SectionCard from './Sections/SectionCard.vue'
import GlobalFooter from '../BaseTemplate/GlobalFooter.vue'

// 导入图片资源
import blogImage from './images/blog_site.png'
import notionImage from './images/notion_site.png'
import siliImage from './images/sili_desc.png'
import wikiImage from './images/legacy_wiki_site.png'
import imageHostingImage from './images/image_hosting_site.png'

// 定义卡片式 section 的数据
const cardSections: {
  id: string
  title: string
  subtitle: string
  imageSrc: string
  moreHref: string
  moreText: string
  description: string[]
}[] = [
  {
    id: 'kanban-girl',
    title: '沃利杰诺·梅因',
    subtitle: '看板娘',
    imageSrc: 'https://r2.epb.wiki/artworks/Original.Main/20231108.jpeg',
    moreHref:
      'https://zh.moegirl.org.cn/%E6%B2%83%E5%88%A9%E6%9D%B0%E8%AF%BA%C2%B7%E6%A2%85%E5%9B%A0',
    moreText: '可爱捏',
    description: ['她是小鱼君最可爱的女儿~', '可爱捏'],
  },
  {
    id: 'blog',
    title: '小鱼君の博客',
    subtitle: '《将来过去时》原作者の个人博客',
    imageSrc: blogImage.src,
    moreHref: 'https://blog.epb.wiki/',
    moreText: '真的吗，我不信',
    description: [
      '哟吼，欢迎光临「小鱼君的博客」',
      '——诶诶诶，别走嘛！',
      '这里说不定有什么好玩的东西等你发现呐~',
    ],
  },
  {
    id: 'notion',
    title: '万界大百科',
    subtitle: '将来过去时官方设定集',
    imageSrc: notionImage.src,
    moreHref: 'https://epb-wiki.notion.site/',
    moreText: '所以小说什么时候发布',
    description: [
      '《将来过去时》官方设定集！',
      '设定与舞台、人物与团体、人物与团体，都在这里了~',
      '好像……还有小鱼君自己绘制的一些插画？',
    ],
  },
  {
    id: 'sili',
    title: 'Chatbot SILI',
    subtitle: '万界规划局聊天机器人',
    imageSrc: siliImage.src,
    moreHref: 'https://github.com/project-epb/Chatbot-SILI',
    moreText: '我要做SILI的🐶',
    description: [
      '"您好，我是SILI"——『IM机械姬』SILI-t138-[Manura]-Invoke-II@LD(A)',
      '基于 Koishi.js v4 开发的聊天机器人~',
      '加群以调戏。',
    ],
  },
  {
    id: 'wiki',
    title: '小鱼君和他的朋友们',
    subtitle: '旧版 MediaWiki 站点',
    imageSrc: wikiImage.src,
    moreHref: 'https://wiki.epb.wiki/wiki/',
    moreText: '难道是传说中的黑历史',
    description: [
      '经典怀旧款《将来过去时》设定集 wiki 网站，也就是《小鱼君和他的朋友们》。虽然这个网站已经不再维护，但依旧保有大量的神秘知识。',
    ],
  },
  {
    id: 'inpageedit-next',
    title: 'InPageEdit NEXT',
    subtitle: 'MediaWiki plugin',
    imageSrc: 'https://r2.epb.wiki/icons/inpageedit/ipe-next-uwu.png',
    moreHref: 'https://www.ipe.wiki/',
    moreText: '✏️ 快速编辑',
    description: ['🚀 模块化、可扩展的 MediaWiki 超级增强插件'],
  },
  {
    id: 'flaredrive',
    title: 'FlareDrive REMASTERED',
    subtitle: '云原生这一块',
    imageSrc: 'https://r2.epb.wiki/icons/FlareDrive/flaredrive-logo-h.png',
    moreHref: 'https://github.com/project-epb/FlareDrive',
    moreText: '☁️ 立即试用',
    description: [
      '基于 Cloudflare Workers + D1 + KV 的云原生对象存储服务。',
      '一键部署到 Cloudflare 平台，管理任意 S3 兼容存储。',
    ],
  },
]

// 定义所有区块
const sections: {
  id: string
  component: Component
  props?: Record<string, any>
}[] = [
  {
    id: 'frontpage',
    component: SectionFrontpage,
    props: undefined,
  },
  {
    id: 'about',
    component: defineAsyncComponent(
      () => import('./Sections/SectionAbout.vue')
    ),
    props: undefined,
  },
  ...cardSections.map((data) => ({
    id: data.id,
    component: SectionCard,
    props: data,
  })),
  {
    id: 'footer',
    component: defineAsyncComponent(
      () => import('./Sections/SectionFooter.vue')
    ),
    props: undefined,
  },
]

// 滚动动画逻辑
const sectionRefs = ref<HTMLElement[]>([])
const visibleSections = ref(new Set<number>([0])) // 默认第一个section可见

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 获取元素在数组中的索引
          const index = sectionRefs.value.indexOf(entry.target as HTMLElement)
          if (index !== -1) {
            visibleSections.value.add(index)
            // 一旦显示就不再隐藏（取消观察）
            observer?.unobserve(entry.target)
          }
        }
      })
    },
    {
      threshold: 0.05, // 5% 可见时触发，让动画更早触发
      rootMargin: '0px 0px -100px 0px', // 提前触发动画
    }
  )

  sectionRefs.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped lang="sass">
.home-section
  scroll-margin-top: calc(64px + 1rem) // 考虑到固定头部的高度
</style>
