<template lang="pug">
BaseSection(:is-hero='true')
  .hero.h-screen.relative.overflow-hidden.flex.items-center.justify-center
    .hero-content.text-center.flex-col.relative.z-10.px-4.w-full.max-w-6xl.py-20(
      :class="{ 'preload-anim': preloadAnim }"
    )
      //- Logo区域 - 带入场动画
      .hero-logo.mb-6(ref='logoRef', data-anim='logo', class='md:mb-8')
        .logo-wrapper.relative.inline-block
          //- 发光效果 - 降低强度
          .absolute.inset-0.blur-xl.opacity-20.rounded-full(
            style='background: linear-gradient(135deg, rgba(138, 110, 255, 0.4), rgba(255, 107, 181, 0.4))'
          )
          img.relative.z-10.drop-shadow-lg(
            src='/wiki-wordmark.svg',
            alt='EPB Logo',
            class='w-[280px] max-w-[70vw] md:w-[320px]'
          )

        //- Logo下方的装饰线 - 简化
        .flex.justify-center.items-center.gap-3.mt-4(class='md:gap-4 md:mt-5')
          .h-px.w-12.bg-gradient-to-r.from-transparent.via-primary.to-transparent.opacity-70(
          ref='decorLine1',
          data-anim='decor-line'
          )
          .flex(class='gap-1.5')
          .rounded-full.bg-primary.opacity-80(ref='decorDot1', data-anim='decor-dot', class='w-1.5 h-1.5')
          .rounded-full.bg-secondary.opacity-80(ref='decorDot2', data-anim='decor-dot', class='w-1.5 h-1.5')
          .rounded-full.bg-accent.opacity-80(ref='decorDot3', data-anim='decor-dot', class='w-1.5 h-1.5')
          .h-px.w-12.bg-gradient-to-r.from-transparent.via-accent.to-transparent.opacity-70(
          ref='decorLine2',
          data-anim='decor-line'
          )

      //- 标题区域
      .first-heading.max-w-screen-lg.mb-4(ref='headingRef', class='md:mb-8')
        //- 主标题 - 降低光效
        h1.mb-5.text-3xl.font-black.tracking-tight.flex.flex-wrap.justify-center.gap-x-2.break-words(
          class='md:text-4xl lg:text-5xl md:gap-x-3 md:mb-6'
        )
          span.title-word.relative.inline-block(
            v-for='(word, index) in titleWords',
            :key='index',
            :ref='(el) => setTitleWordRef(el, index)',
            :style='{ color: word.color }',
            data-anim='title-word'
          )
            span.relative.z-10 {{ word.text }}
            //- 减弱发光效果
            .absolute.inset-0.blur-md.opacity-20(
              :style='{ background: word.color }'
            )

        //- 副标题
        .subtitle-wrapper.space-y-3(ref='subtitleRef', data-anim='subtitle', class='md:space-y-4')
          p.subtitle.text-lg.text-base-content.opacity-90.font-bold.tracking-wide(
            class='md:text-xl lg:text-2xl'
          )
            span.inline-block.px-3(class='py-1.5 md:px-4 md:py-2')
              | 「万界规划局」项目组

          p.text-sm.max-w-2xl.mx-auto.text-base-content.opacity-80.leading-relaxed(
            class='md:text-base lg:text-lg'
          )
            | ✨ 探索《将来过去时》的无限可能 ✨

          p.text-xs.max-w-xl.mx-auto.text-base-content.opacity-70(class='md:text-sm')
            | 一个专注于创作与分享的虚拟社团

      //- 按钮组 - 带动画
      .flex.flex-wrap.gap-4.justify-center(
        ref='buttonsRef',
        data-anim='buttons',
        class='md:gap-5'
      )
        a.btn.btn-primary.btn-lg.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
          class='hover:shadow-primary/50',
          href='https://blog.epb.wiki/?utm_source=epb_home&utm_medium=home_hero',
          target='_blank',
          rel='noopener noreferrer'
        )
          //- 按钮背景动画效果
          .absolute.inset-0.bg-gradient-to-r.from-primary.via-secondary.to-primary.opacity-0.group-hover_opacity-100.transition-opacity(
            style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
          )

          .relative.z-10.flex.items-center
            svg.w-6.h-6.mr-2.group-hover_animate-bounce(
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
            span.font-bold 小鱼君博客

        a.btn.btn-secondary.btn-lg.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
          class='hover:shadow-secondary/50',
          href='https://epb-wiki.notion.site/',
          target='_blank',
          rel='noopener noreferrer'
        )
          .absolute.inset-0.bg-gradient-to-r.from-secondary.via-accent.to-secondary.opacity-0.group-hover_opacity-100.transition-opacity(
            style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
          )

          .relative.z-10.flex.items-center
            svg.w-6.h-6.mr-2.group-hover_animate-bounce(
              xmlns='http://www.w3.org/2000/svg',
              fill='none',
              viewBox='0 0 24 24',
              stroke='currentColor'
            )
              path(
                stroke-linecap='round',
                stroke-linejoin='round',
                stroke-width='2',
                d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              )
            span.font-bold 官方设定集

        a.btn.btn-accent.btn-lg.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
          class='hover:shadow-accent/50',
          href='https://github.com/project-epb',
          target='_blank',
          rel='noopener noreferrer'
        )
          .absolute.inset-0.bg-gradient-to-r.from-accent.via-primary.to-accent.opacity-0.group-hover_opacity-100.transition-opacity(
            style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
          )

          .relative.z-10.flex.items-center
            svg.w-6.h-6.mr-2.group-hover_animate-spin(
              xmlns='http://www.w3.org/2000/svg',
              fill='none',
              viewBox='0 0 24 24',
              stroke='currentColor'
            )
              path(
                stroke-linecap='round',
                stroke-linejoin='round',
                stroke-width='2',
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              )
            span.font-bold GitHub 主页
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import BaseSection from './BaseSection.vue'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 彩色标题文字
const titleWords = [
  { text: 'Everything', color: 'var(--color-primary)' },
  { text: 'Planning', color: 'var(--color-secondary)' },
  { text: 'Bureau', color: 'var(--color-accent)' },
]

// Prevent initial paint "flash" before GSAP runs.
const preloadAnim = ref(!prefersReducedMotion)

const titleWordRefs = ref<(HTMLElement | null)[]>([])
const logoRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const scrollIndicatorRef = ref<HTMLElement | null>(null)
const decorLine1 = ref<HTMLElement | null>(null)
const decorLine2 = ref<HTMLElement | null>(null)
const decorDot1 = ref<HTMLElement | null>(null)
const decorDot2 = ref<HTMLElement | null>(null)
const decorDot3 = ref<HTMLElement | null>(null)

function setTitleWordRef(el: any, index: number) {
  if (el) {
    titleWordRefs.value[index] = el as HTMLElement
  }
}

function scrollToNext() {
  const nextSection = document.querySelector('#section-about')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (prefersReducedMotion) {
    preloadAnim.value = false
    return
  }

  // 创建主时间轴
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Logo入场动画
  if (logoRef.value) {
    gsap.set(logoRef.value, { opacity: 0, scale: 0.5, y: -50 })
    tl.to(logoRef.value, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.9,
      ease: 'back.out(1.6)',
    })
  }

  // 装饰线和点的动画
  if (decorLine1.value && decorLine2.value) {
    gsap.set([decorLine1.value, decorLine2.value], { scaleX: 0 })
    tl.to(
      [decorLine1.value, decorLine2.value],
      {
        scaleX: 1,
        duration: 0.55,
        stagger: 0.1,
      },
      '<0.25'
    )
  }

  if (decorDot1.value && decorDot2.value && decorDot3.value) {
    gsap.set([decorDot1.value, decorDot2.value, decorDot3.value], {
      scale: 0,
      opacity: 0,
    })
    tl.to(
      [decorDot1.value, decorDot2.value, decorDot3.value],
      {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        stagger: 0.08,
        ease: 'back.out(2)',
      },
      '<0.15'
    )
  }

  // 标题文字逐个弹出
  titleWordRefs.value.forEach((wordRef, index) => {
    if (wordRef) {
      gsap.set(wordRef, { opacity: 0, y: 50, rotationX: -90 })
      tl.to(
        wordRef,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.55,
          ease: 'back.out(1.5)',
        },
        index === 0 ? '<0.2' : '<0.12'
      )
    }
  })

  // 副标题淡入
  if (subtitleRef.value) {
    gsap.set(subtitleRef.value, { opacity: 0, y: 30 })
    tl.to(
      subtitleRef.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
      },
      '<0.15'
    )
  }

  // 按钮组弹入
  if (buttonsRef.value) {
    const buttons = buttonsRef.value.querySelectorAll('.btn')
    gsap.set(buttons, { opacity: 0, scale: 0.8, y: 30 })
    tl.to(
      buttons,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.12,
        ease: 'back.out(1.5)',
      },
      '<0.15'
    )
  }

  // 滚动指示器
  if (scrollIndicatorRef.value) {
    gsap.set(scrollIndicatorRef.value, { opacity: 0, y: -20 })
    tl.to(
      scrollIndicatorRef.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
      },
      '<0.2'
    )
  }

  // 移除标题文字的持续微动画，避免过度动画

  // Logo 持续的呼吸效果 - 降低幅度
  if (logoRef.value) {
    gsap.to(logoRef.value, {
      scale: 1.02,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2,
    })
  }

  tl.eventCallback('onComplete', () => {
    preloadAnim.value = false
  })
})
</script>

<style scoped lang="sass">
.hero
  perspective: 1000px
  // 确保精确占满全屏
  height: 100vh
  max-height: 100vh
  min-height: 100vh

  // 考虑移动端地址栏
  @supports (height: 100dvh)
    height: 100dvh
    max-height: 100dvh
    min-height: 100dvh

.hero-content
  max-height: 100vh
  overflow-y: auto
  // 为头部导航留出空间
  padding-top: 80px

  @media (max-width: 768px)
    padding-top: 70px

.hero-content.preload-anim
  // Hide animated elements before GSAP runs to avoid initial paint flash.
  [data-anim='logo']
    opacity: 0
    transform: translate3d(0, -50px, 0) scale(0.5)
    will-change: transform, opacity

  [data-anim='decor-line']
    transform: scaleX(0)
    transform-origin: center
    will-change: transform

  [data-anim='decor-dot']
    opacity: 0
    transform: scale(0)
    will-change: transform, opacity

  [data-anim='title-word']
    opacity: 0
    transform: translate3d(0, 50px, 0) rotateX(-90deg)
    transform-style: preserve-3d
    will-change: transform, opacity

  [data-anim='subtitle']
    opacity: 0
    transform: translate3d(0, 30px, 0)
    will-change: transform, opacity

  [data-anim='buttons'] .btn
    opacity: 0
    transform: translate3d(0, 30px, 0) scale(0.8)
    will-change: transform, opacity

.title-word
  display: inline-block
  // 降低文字阴影强度
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.15)
  font-weight: 900
  letter-spacing: 0.02em

  b
    font-weight: 900
    font-size: 1.25em

@keyframes shimmer
  0%
    background-position: -200% 0
  100%
    background-position: 200% 0

// 响应式调整
@media (max-width: 768px)
  .hero-logo
    margin-bottom: 1.5rem

  .first-heading
    margin-bottom: 1.5rem

  .title-word
    font-size: 0.9em

  .hero-content
    padding-top: 60px
    padding-bottom: 60px

// 针对极小屏幕（如 iPhone SE）
@media (max-width: 375px) and (max-height: 667px)
  .hero-logo
    margin-bottom: 1rem

  .first-heading
    margin-bottom: 1rem

  .hero-logo img
    max-width: 250px !important

  h1
    font-size: 1.75rem !important

  .subtitle-wrapper p
    font-size: 0.9rem !important

// 针对横屏模式
@media (max-height: 500px) and (orientation: landscape)
  .hero-content
    padding-top: 20px
    padding-bottom: 20px

  .hero-logo
    margin-bottom: 0.5rem

  .first-heading
    margin-bottom: 0.5rem

  .scroll-indicator
    display: none
</style>
