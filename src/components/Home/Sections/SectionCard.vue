<template lang="pug">
BaseSection(:show-jump-anchor='false')
  .card-section.w-full(ref='sectionRef')
    .container.mx-auto.px-4.max-w-5xl
      //- 卡片容器 - 响应式布局，限定最大宽度
      .card-wrapper.relative.flex.flex-col.gap-6.items-center(
        :class='{ "md:flex-row-reverse": isReverse, "md:flex-row": !isReverse }',
        class='md:gap-10'
      )
        //- 图片部分
        .card-image-container.relative.w-full(
          class='md:w-1/2 lg:w-2/5',
          ref='imageContainerRef'
        )
          //- 装饰性背景
          .image-bg.absolute.inset-0.rounded-3xl.blur-2xl.opacity-30(
            :style='bgGradientStyle'
          )

          //- 图片卡片 - 降低悬浮缩放
          .image-card.relative.rounded-2xl.overflow-hidden.shadow-xl.transform.transition-all.duration-500(
            class='hover:scale-102 hover:shadow-2xl max-h-[40vh]',
            @mouseenter='handleMouseEnter',
            @mouseleave='handleMouseLeave'
          )
            //- 边框发光效果
            .absolute.inset-0.rounded-2xl.opacity-0.transition-opacity.duration-500.pointer-events-none.hover-glow(
              :style='borderGlowStyle'
            )

            img.w-full.h-auto.object-cover.relative.z-10(
              :src='imageSrc',
              :alt='title',
              loading='lazy'
            )

            //- 图片蒙版效果
            .absolute.inset-0.bg-gradient-to-t.from-black_50.to-transparent.opacity-0.transition-opacity.duration-500(
              class='hover:opacity-100'
            )

          //- 装饰性几何图形 - 降低透明度
          .absolute.w-20.h-20.rounded-full.blur-xl.opacity-30(
            :style='{ background: decorColors[0], top: "-10px", right: "-10px" }'
          )
          .absolute.w-14.h-14.rounded-full.blur-lg.opacity-30(
            :style='{ background: decorColors[1], bottom: "-7px", left: "-7px" }'
          )

        //- 内容部分
        .card-content.w-full(class='md:w-1/2 lg:w-3/5', ref='contentRef')
          .card-content-title.flex.flex-col
            //- 副标题
            .subtitle
              .text-xs.font-semibold.mb-5.inline-block.px-3.py-1.rounded-full.opacity-90(
                class='md:text-sm',
                :style='subtitleStyle'
              )
                | {{ subtitle }}

            //- 主标题
            .main-title
              h2.text-2xl.font-black.mb-3.text-base-content(
                class='md:text-3xl lg:text-4xl'
              )
                span.inline-block.relative.pb-2
                  | {{ title }}
                  //- 标题下划线装饰 - 调整位置，不遮挡文字
                  .absolute.left-0.h-1.bg-gradient-to-r.rounded-full(
                    :style='titleUnderlineStyle',
                    style='width: 0%; bottom: -4px; transition: width 0.8s ease-out',
                    ref='titleUnderlineRef'
                  )

          //- 描述文字
          .description.space-y-3.mb-6.text-sm.text-base-content.opacity-80.leading-relaxed(
            class='md:text-base'
          )
            p.transform.transition-all.duration-300(
              v-for='(text, index) in description',
              :key='index',
              :ref='(el) => setDescriptionRef(el, index)',
              class='hover:translate-x-1 hover:opacity-100'
            )
              span.inline-block.mr-2 {{ getEmoji(index) }}
              | {{ text }}

          //- 操作按钮
          .card-actions
            a.btn.group.relative.overflow-hidden.shadow-lg.transition-all.duration-300.btn-md(
              :href='moreHref',
              target='_blank',
              rel='noopener noreferrer',
              :style='buttonStyle',
              class='hover:shadow-xl md:btn-lg'
            )
              //- 按钮悬浮效果 - 降低透明度变化
              .absolute.inset-0.opacity-0.transition-opacity.duration-300(
                :style='buttonHoverStyle',
                class='group-hover:opacity-100'
              )

              .relative.z-10.flex.items-center.gap-2
                span.font-semibold {{ moreText }}
                svg.w-4.h-4.transform.transition-transform(
                  xmlns='http://www.w3.org/2000/svg',
                  fill='none',
                  viewBox='0 0 24 24',
                  stroke='currentColor',
                  class='group-hover:translate-x-1 md:w-5 md:h-5'
                )
                  path(
                    stroke-linecap='round',
                    stroke-linejoin='round',
                    stroke-width='2',
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  )
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseSection from './BaseSection.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
  title: string
  subtitle: string
  imageSrc: string
  moreHref: string
  moreText: string
  description: string[]
  isReverse?: boolean
}>()

const sectionRef = ref<HTMLElement | null>(null)
const imageContainerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const titleUnderlineRef = ref<HTMLElement | null>(null)
const descriptionRefs = ref<(HTMLElement | null)[]>([])

// 根据索引生成不同的配色
const colorIndex = computed(() => {
  const hash = props.title
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return hash % colorSchemes.length
})

const colorSchemes = [
  {
    primary: '#8A6EFF',
    secondary: '#FF6BB5',
    gradient: 'linear-gradient(135deg, #8A6EFF, #FF6BB5)',
  },
  {
    primary: '#6BCBFF',
    secondary: '#90EE90',
    gradient: 'linear-gradient(135deg, #6BCBFF, #90EE90)',
  },
  {
    primary: '#FF6BB5',
    secondary: '#FFC86B',
    gradient: 'linear-gradient(135deg, #FF6BB5, #FFC86B)',
  },
  {
    primary: '#FFC86B',
    secondary: '#FF6BB5',
    gradient: 'linear-gradient(135deg, #FFC86B, #FF6BB5)',
  },
  {
    primary: '#90EE90',
    secondary: '#8A6EFF',
    gradient: 'linear-gradient(135deg, #90EE90, #8A6EFF)',
  },
]

const currentColorScheme = computed(() => colorSchemes[colorIndex.value])

const decorColors = computed(() => [
  currentColorScheme.value.primary,
  currentColorScheme.value.secondary,
])

const bgGradientStyle = computed(() => ({
  background: currentColorScheme.value.gradient,
}))

const borderGlowStyle = computed(() => ({
  boxShadow: `0 0 30px ${currentColorScheme.value.primary}, inset 0 0 30px ${currentColorScheme.value.secondary}`,
}))

const subtitleStyle = computed(() => ({
  background: currentColorScheme.value.gradient,
  color: 'white',
}))

const titleUnderlineStyle = computed(() => ({
  background: currentColorScheme.value.gradient,
}))

const buttonStyle = computed(() => ({
  background: currentColorScheme.value.gradient,
  color: 'white',
  border: 'none',
}))

const buttonHoverStyle = computed(() => ({
  background: `linear-gradient(135deg, ${currentColorScheme.value.secondary}, ${currentColorScheme.value.primary})`,
}))

function setDescriptionRef(el: any, index: number) {
  if (el) {
    descriptionRefs.value[index] = el as HTMLElement
  }
}

function getEmoji(index: number) {
  const emojis = ['✨', '🎨', '🚀', '💫', '🌟', '⭐', '🎯', '💡']
  return emojis[index % emojis.length]
}

function handleMouseEnter() {
  if (imageContainerRef.value) {
    gsap.to(imageContainerRef.value.querySelector('.image-card'), {
      rotationY: 3,
      rotationX: -3,
      duration: 0.4,
      ease: 'power2.out',
    })
  }
}

function handleMouseLeave() {
  if (imageContainerRef.value) {
    gsap.to(imageContainerRef.value.querySelector('.image-card'), {
      rotationY: 0,
      rotationX: 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  }
}

onMounted(() => {
  // ScrollTrigger 动画
  if (sectionRef.value) {
    // 图片入场动画
    if (imageContainerRef.value) {
      gsap.from(imageContainerRef.value, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        x: props.isReverse ? 100 : -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }

    // 内容入场动画
    if (contentRef.value) {
      gsap.from(contentRef.value, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        x: props.isReverse ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }

    // 标题下划线动画
    if (titleUnderlineRef.value) {
      gsap.to(titleUnderlineRef.value, {
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        width: '100%',
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    // 描述文字逐行入场
    descriptionRefs.value.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          x: -30,
          opacity: 0,
          duration: 0.6,
          delay: 0.2 + index * 0.1,
          ease: 'power2.out',
        })
      }
    })
  }
})
</script>

<style scoped lang="sass">
.card-section
  perspective: 1000px

.image-card
  transform-style: preserve-3d

  &:hover .hover-glow
    opacity: 1

.title
  position: relative
  display: inline-block

  &::before
    content: ''
    position: absolute
    top: -8px
    left: -8px
    right: -8px
    bottom: -8px
    background: linear-gradient(45deg, transparent, rgba(138, 110, 255, 0.1), transparent)
    border-radius: 8px
    opacity: 0
    transition: opacity 0.3s
    z-index: -1

  &:hover::before
    opacity: 1

.description p
  position: relative
  padding-left: 0.5rem

  &::before
    content: ''
    position: absolute
    left: 0
    top: 50%
    transform: translateY(-50%)
    width: 3px
    height: 0
    background: linear-gradient(to bottom, #8A6EFF, #FF6BB5)
    border-radius: 2px
    transition: height 0.3s ease-out

  &:hover::before
    height: 100%

.btn
  transform: translateY(0)

  &:hover
    transform: translateY(-2px)

// 响应式设计
@media (max-width: 768px)
  .card-wrapper
    gap: 1.5rem

  .title
    font-size: 1.5rem

  .description
    font-size: 0.875rem

@media (max-width: 640px)
  .image-card
    border-radius: 1rem

  .title
    font-size: 1.25rem

  .card-content
    padding: 0
</style>
