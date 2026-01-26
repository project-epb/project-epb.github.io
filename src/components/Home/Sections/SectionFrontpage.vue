<template lang="pug">
BaseSection(:is-hero='true')
  .hero.min-h-screen.relative.overflow-hidden
    //- 装饰性背景元素
    .absolute.inset-0.overflow-hidden.pointer-events-none
      .absolute.w-96.h-96.rounded-full.bg-primary.opacity-10.blur-3xl(
        style='top: 10%; left: -10%; animation: float 20s ease-in-out infinite'
      )
      .absolute.w-80.h-80.rounded-full.bg-secondary.opacity-10.blur-3xl(
        style='bottom: 15%; right: -5%; animation: float 15s ease-in-out infinite reverse'
      )
      .absolute.w-72.h-72.rounded-full.bg-accent.opacity-10.blur-3xl(
        style='top: 50%; left: 50%; transform: translate(-50%, -50%); animation: float 18s ease-in-out infinite'
      )

    .hero-content.text-center.flex-col.relative.z-10.px-4
      //- Logo区域
      .hero-logo.mb-8.transform.transition-all.duration-500
        img(src='/wiki-wordmark.svg', alt='EPB Logo' class='w-[300px] max-w-[80vw]')

      //- 标题区域
      .first-heading.max-w-screen-md
        h1.mb-6.text-3xl.font-extrabold.tracking-tight.flex.flex-wrap.justify-center.gap-x-2.break-words(class='md:text-4xl lg:text-5xl')
          span.text-primary <b>E</b>verything
          span.text-secondary <b>P</b>lanning
          span.text-accent <b>B</b>ureau
        p.subtitle.mb-2.text-base-content.opacity-80.font-medium(
          class='md:text-xl'
        ) 「万界规划局」项目组
        p.text-base.max-w-2xl.mx-auto.mb-10.text-base-content.opacity-70.leading-relaxed(
          class='md:text-md'
        )
          | 探索《将来过去时》的无限可能，
          | 一个专注于创作与分享的虚拟社团

      //- 按钮组
      .flex.flex-wrap.gap-4.justify-center
        a.btn.btn-primary.btn-lg.shadow-lg.transform.transition-all(
          class='hover:shadow-xl hover:scale-105',
          href='https://blog.epb.wiki/?utm_source=epb_home&utm_medium=home_hero',
          target='_blank',
          rel='noopener noreferrer'
        )
          svg.w-5.h-5.mr-2(
            xmlns='http://www.w3.org/2000/svg',
            fill='none',
            viewBox='0 0 24 24',
            stroke='currentColor'
          )
            path(
              stroke-linecap='round',
              stroke-linejoin='round',
              stroke-width='2',
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            )
          | 小鱼君博客

        a.btn.btn-secondary.btn-lg.shadow-lg.transform.transition-all(
          class='hover:shadow-xl hover:scale-105',
          href='https://epb-wiki.notion.site/',
          target='_blank',
          rel='noopener noreferrer'
        )
          svg.w-5.h-5.mr-2(
            xmlns='http://www.w3.org/2000/svg',
            fill='none',
            viewBox='0 0 24 24',
            stroke='currentColor'
          )
            path(
              stroke-linecap='round',
              stroke-linejoin='round',
              stroke-width='2',
              d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
            )
          | 官方设定集
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseSection from './BaseSection.vue'
</script>

<style scoped lang="sass">
h1 b
  font-weight: 900
  font-size: 1.25em

@keyframes float
  0%, 100%
    transform: translateY(0) scale(1)
  50%
    transform: translateY(-20px) scale(1.05)
</style>
