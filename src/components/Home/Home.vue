<template lang="pug">
#view-home
  main
    article
      Swiper.h-screen.w-screen.overflow-hidden(
        :modules='[Mousewheel, EffectCreative, Pagination]',
        direction='vertical',
        mousewheel,
        effect='creative',
        :creative-effect='{ prev: { translate: [0, "-2rem", -1], opacity: 0 }, next: { translate: [0, "2rem", 0], opacity: 0 } }',
        :pagination='{ clickable: true, el: ".pagination" }',
        @progress='onProgress',
        @touch-start='isControl = true',
        @touch-end='isControl = false'
      )
        SwiperSlide.overflow-hidden.relative.section(
          v-for='(i, index) in sections',
          :id='`home-section-${i.id}`'
        )
          Component.z-10(
            :is='i.component',
            :section-id='i.id',
            :index='index',
            :data-is-last='index + 1 === sections.length || undefined'
          )
        .pagination
      .home-section-backdrop(:style='`background-image: url(${bgUrl})`')

  GlobalHeader
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import {
  Swiper as SwType,
  Mousewheel,
  EffectCreative,
  Pagination,
  Navigation,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'
import 'swiper/css/effect-creative'
import GlobalHeader from '@com/BaseTemplate/GlobalHeader.vue'
import bgUrl from './images/home_bg.svg'
import { Icon } from '@vicons/utils'
// import { up } from '@vicons/fa'

import SectionFrontpage from './Sections/SectionFrontpage.vue'
import GlobalFooter from '../BaseTemplate/GlobalFooter.vue'

const sections = shallowRef([
  {
    id: 'frontpage',
    component: SectionFrontpage,
  },
  {
    id: 'about',
    component: defineAsyncComponent(
      () => import('./Sections/SectionAbout.vue')
    ),
  },
  {
    id: 'blog',
    component: defineAsyncComponent(() => import('./Sections/SectionBlog.vue')),
  },
  {
    id: 'notion',
    component: defineAsyncComponent(
      () => import('./Sections/SectionNotion.vue')
    ),
  },
  {
    id: 'sili',
    component: defineAsyncComponent(
      () => import('./Sections/SectionSILI.vue')
    ),
  },
  {
    id: 'wiki',
    component: defineAsyncComponent(() => import('./Sections/SectionWiki.vue')),
  },
  {
    id: 'image',
    component: defineAsyncComponent(
      () => import('./Sections/SectionImage.vue')
    ),
  },
  {
    id: 'footer',
    component: defineAsyncComponent(
      () => import('./Sections/SectionFooter.vue')
    ),
  },
])

const isControl = ref(false)
function onProgress(sw: SwType, progress: number) {
  /*
  const slides = sw.slides
  const total = slides.length
  const per = 1 / (total - 1)

  slides.forEach((item, index) => {
    const el: HTMLElement = item as HTMLElement

    const start = index * per
    const end = start + per

    const clipTop = toPercentStr((start - progress) * total)
    const clipBottom = toPercentStr((end - progress) * total)
    el.style.clipPath = `polygon(0 ${clipTop}, 100% ${clipTop}, 100% ${clipBottom}, 0 ${clipBottom})`
  })
  */
}
function toPercentStr(n: number) {
  return `${n * 100}%`
}
</script>

<style scoped lang="sass">
.home-section-backdrop
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 0
  pointer-events: none

.section
  // position: fixed
  // transition:
  transition: clip-path var(--transition-duration) ease
  // &.smooth

.pagination
  position: absolute
  top: 50%
  transform: translateY(-50%)
  right: 1rem
  z-index: 10
  --swiper-pagination-color: hsl(var(--s))
  :deep(.swiper-pagination-bullet)
    border-radius: 100vw
    transition: all 0.24s ease
  :deep(.swiper-pagination-bullet-active)
    height: 3rem

:deep(.swiper-slide:not(.swiper-slide-active))
  pointer-events: none
</style>
