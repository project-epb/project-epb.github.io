<template lang="pug">
.home-section-card.w-full.flex.justify-center.items-center.max-w-6xl.mx-auto.px-4(
  :class='isReverse ? "flex-row-reverse max-md:flex-col-reverse md:gap-16 max-md:gap-8" : "flex-row max-md:flex-col-reverse md:gap-16 max-md:gap-8"'
)
  .text-content.flex-1.space-y-4
    .badge.badge-soft.badge-lg.mb-2(v-if='subtitle') {{ subtitle }}
    h2.text-3xl.font-extrabold.mb-4.leading-tight.bg-gradient-to-r.from-primary.to-secondary.bg-clip-text.text-transparent(class="md:text-4xl lg:text-5xl")
      slot(name='title') {{ title }}
    .desc.text-base.text-base-content.opacity-80.leading-relaxed(class="md:text-lg")
      slot(name='description') {{ description }}
    .mt-6(v-if='moreHref')
      a.btn.btn-primary.btn-md.gap-2.shadow-lg.transform.transition-all(
        class="hover:shadow-xl hover:scale-105"
        :href='moreHref', 
        target='_blank',
        rel='noopener noreferrer'
      ) 
        | {{ moreText }}
        Icon
          ArrowRight
  
  .thumb.flex-1(v-if='imageSrc || iframeSrc')
    .card.bg-base-100.shadow-2xl.border.border-base-300.overflow-hidden.transform.transition-all(
      v-if='imageSrc'
      class='max-h-[50vh] hover:scale-105 hover:shadow-3xl'
    )
      img.w-full.h-full.object-cover(
        :src='imageSrc || "https://sdfsdf.dev/1200x800.jpg,252525,ffffff"',
        loading='lazy',
        :alt='title'
      )

    .card.bg-base-100.shadow-2xl.border.border-base-300.overflow-hidden.aspect-video(
      v-else-if='iframeSrc'
    )
      a.block.h-full(:href='iframeSrc', target='_blank' rel='noopener noreferrer')
        iframe.w-full.h-full.border-none.pointer-events-none(
          :src='iframeSrc',
          loading='lazy'
        )
</template>

<script setup lang="ts">
import {} from 'vue'
import { Icon } from '@vicons/utils'
import { ArrowRight } from '@vicons/fa'
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    description?: string
    imageSrc?: string
    iframeSrc?: string
    moreText?: string
    moreHref?: string
    isReverse?: boolean
  }>(),
  {
    title: '标题',
    moreText: '查看更多',
    isReverse: false,
  }
)
</script>

<style scoped lang="sass">
.badge-soft
  background-color: oklch(90% 0.05 240)
  color: oklch(40% 0.15 240)
  border: none

@media (max-width: 768px)
  .home-section-card
    padding: 0 1rem

:global(.dark) .badge-soft
  background-color: oklch(30% 0.08 240)
  color: oklch(80% 0.1 240)
</style>
