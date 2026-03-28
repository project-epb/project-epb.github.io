<template lang="pug">
BaseSection(:is-hero='true')
  .hero.relative.flex.items-center.justify-center
    .hero-content.relative.z-10.px-6.w-full.max-w-5xl.mx-auto(
      :class="{ 'preload-anim': preloadAnim }"
    )
      //- PC: left-right layout; Mobile: mascot top, text middle, buttons bottom
      .hero-layout.flex.flex-col.items-center(class='md:flex-row md:items-center md:gap-8 lg:gap-12')

        //- Left side (PC) / Middle (Mobile): text content
        .hero-left.flex.flex-col.items-center.text-center.w-full.order-2(class='md:items-start md:text-left md:w-1/2 md:order-1')

          //- Title
          .first-heading.mb-2(ref='headingRef', class='md:mb-4')
            h1.mb-3.text-3xl.font-black.tracking-tight.flex.flex-wrap.justify-center.gap-x-2.break-words(
              class='md:text-4xl lg:text-5xl md:gap-x-3 md:mb-0 md:justify-start'
            )
              span.title-word.relative.inline-block(
                v-for='(word, index) in titleWords',
                :key='index',
                :ref='(el) => setTitleWordRef(el, index)',
                :style='{ color: word.color }',
                data-anim='title-word'
              )
                span.relative.z-10 {{ word.text }}
                .absolute.inset-0.blur-md.opacity-20(
                  :style='{ background: word.color }'
                )

          //- Decorative divider (below title on PC, below logo on mobile)
          .flex.justify-center.items-center.gap-3.mb-4(
            class='md:justify-start md:gap-4 md:mb-5'
          )
            .h-px.w-12.bg-gradient-to-r.from-transparent.via-primary.to-transparent.opacity-70(
              ref='decorLine1',
              data-anim='decor-line'
            )
            .rounded-full.bg-primary.opacity-80(ref='decorDot1', data-anim='decor-dot', class='w-1.5 h-1.5')
            .rounded-full.bg-secondary.opacity-80(ref='decorDot2', data-anim='decor-dot', class='w-1.5 h-1.5')
            .rounded-full.bg-accent.opacity-80(ref='decorDot3', data-anim='decor-dot', class='w-1.5 h-1.5')
            .h-px.w-12.bg-gradient-to-r.from-transparent.via-accent.to-transparent.opacity-70(
              ref='decorLine2',
              data-anim='decor-line'
            )

          //- Subtitle
          .subtitle-wrapper.space-y-2.mb-4(ref='subtitleRef', data-anim='subtitle', class='md:space-y-3 md:mb-6')
            p.subtitle.text-lg.text-base-content.opacity-90.font-bold.tracking-wide(
              class='md:text-xl lg:text-2xl'
            )
              span.inline-block 「万界规划局」项目组

            p.text-sm.text-base-content.opacity-80.leading-relaxed(
              class='md:text-base lg:text-lg'
            )
              | ✨ 探索《将来过去时》的无限可能 ✨

            p.text-xs.text-base-content.opacity-70(class='md:text-sm')
              | 一个专注于创作与分享的虚拟社团

          //- Buttons: 立即阅读 first (most important), then others
          .hero-buttons.flex.flex-col.gap-3.w-full(
            ref='buttonsRef',
            data-anim='buttons',
            class='md:gap-4 md:max-w-sm'
          )
            a.btn.btn-secondary.btn-lg.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
              class='hover:shadow-secondary/50',
              href='https://universe.epb.wiki/',
              target='_blank',
              rel='noopener noreferrer'
            )
              .absolute.inset-0.bg-gradient-to-r.from-secondary.via-accent.to-secondary.opacity-0.group-hover_opacity-100.transition-opacity(
                style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
              )
              .relative.z-10.flex.items-center
                svg.w-5.h-5.mr-2.group-hover_animate-bounce(
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
                span.font-bold 立即阅读

            .hero-buttons-row.flex.gap-3.justify-center(class='md:justify-start md:gap-4')
              a.btn.btn-primary.flex-1.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
                class='hover:shadow-primary/50',
                href='https://epb-wiki.notion.site/',
                target='_blank',
                rel='noopener noreferrer'
              )
                .absolute.inset-0.bg-gradient-to-r.from-primary.via-secondary.to-primary.opacity-0.group-hover_opacity-100.transition-opacity(
                  style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
                )
                .relative.z-10.flex.items-center
                  svg.w-5.h-5.mr-2.group-hover_animate-bounce(
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

              a.btn.btn-accent.flex-1.shadow-2xl.group.relative.overflow-hidden.transition-all.duration-300(
                class='hover:shadow-accent/50',
                href='https://blog.epb.wiki/?utm_source=epb_home&utm_medium=home_hero',
                target='_blank',
                rel='noopener noreferrer'
              )
                .absolute.inset-0.bg-gradient-to-r.from-accent.via-primary.to-accent.opacity-0.group-hover_opacity-100.transition-opacity(
                  style='background-size: 200% 100%; animation: shimmer 2s infinite linear'
                )
                .relative.z-10.flex.items-center
                  svg.w-5.h-5.mr-2.group-hover_animate-bounce(
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

        //- Right side (PC) / Top (Mobile): mascot illustration
        .hero-right.flex.items-center.justify-center.relative.order-1(
          ref='heroImageRef',
          data-anim='hero-image',
          class='w-full md:w-1/2 md:order-2'
        )
          .mascot-wrapper.relative
            img.mascot-image.relative.z-10.drop-shadow-2xl(
              :src='heroImage.src',
              alt='EPB Mascot'
            )
            //- Glow behind mascot
            .absolute.inset-0.blur-3xl.opacity-15.rounded-full.scale-75(
              style='background: radial-gradient(circle, rgba(138, 110, 255, 0.5), rgba(255, 107, 181, 0.3), transparent 70%)'
            )
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import BaseSection from './BaseSection.vue'
import heroImage from '@/assets/epb-hero.png'

// 彩色标题文字
const titleWords = [
  { text: 'Everything', color: 'var(--color-primary)' },
  { text: 'Planning', color: 'var(--color-secondary)' },
  { text: 'Bureau', color: 'var(--color-accent)' },
]

// SSR-safe: default false, set in onMounted
const preloadAnim = ref(false)

const titleWordRefs = ref<(HTMLElement | null)[]>([])
// Logo removed from layout
const headingRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const scrollIndicatorRef = ref<HTMLElement | null>(null)
const heroImageRef = ref<HTMLElement | null>(null)
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
  const prefersReducedMotion =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  if (prefersReducedMotion) {
    return
  }

  // Enable preload animation hiding (will be cleared when timeline completes)
  preloadAnim.value = true

  // 创建主时间轴
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

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

  // 看板娘入场动画
  if (heroImageRef.value) {
    gsap.set(heroImageRef.value, { opacity: 0, x: 80, scale: 0.9 })
    tl.to(
      heroImageRef.value,
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      '<0.3'
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

  // 看板娘轻微浮动
  if (heroImageRef.value) {
    gsap.to(heroImageRef.value, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
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

.hero-content
  display: flex
  align-items: center
  justify-content: center
  padding-top: 100px
  padding-bottom: 2rem

  @media (min-width: 769px)
    padding-top: 120px
    padding-left: 2rem
    padding-right: 2rem
    padding-bottom: 2rem

.hero-layout
  width: 100%

.mascot-wrapper
  @media (min-width: 769px)
    max-height: 70vh

  @media (max-width: 768px)
    max-width: 260px
    margin: 0 auto 1rem

.mascot-image
  width: auto
  object-fit: contain

  @media (min-width: 769px)
    max-height: 70vh

  @media (max-width: 768px)
    width: 100%

.hero-content.preload-anim
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

  [data-anim='hero-image']
    opacity: 0
    transform: translate3d(0, 40px, 0) scale(0.9)
    will-change: transform, opacity

    @media (min-width: 769px)
      transform: translate3d(80px, 0, 0) scale(0.9)

.title-word
  display: inline-block
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

// iPhone SE
@media (max-width: 375px) and (max-height: 667px)
  h1
    font-size: 1.5rem !important

  .subtitle-wrapper p
    font-size: 0.85rem !important
</style>
