<template lang="pug">
.home-section-card.w-full.h-full.flex.justify-center.items-center.max-w-screen-md(
  class='max-md:flex-col-reverse max-md:gap-4 md:gap-8'
)
  .text-content.flex-1(class='max-sm:padd')
    h2.text-4xl.font-bold.flex-1.mb-2: slot(name='title') {{ title }}
    .subtitle.text-xl.opacity-80.flex-1.mb-6: slot(name='subtitle') {{ subtitle }}
    .desc.opacity-80: slot(name='description') {{ description }}
    .mt-4(v-if='moreHref')
      a.btn.btn-outline.btn-sm.btn-secondary(:href='moreHref', target='_blank') {{ moreText }}
        Icon
          ArrowRight
  .thumb.image-thumb(class='md:flex-1', v-if='imageSrc')
    img.block.rounded-lg.shadow-md(
      :src='imageSrc || "https://sdfsdf.dev/1200x800.jpg,252525,ffffff"',
      loading='lazy'
    )
  .thumb.iframe-thumb(v-else-if='iframeSrc')
    a(:href='iframeSrc', target='_blank')
      iframe.block.border-none.rounded-lg.shadow-md.pointer-events-none(
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
  }>(),
  {
    title: '标题',
    moreText: '查看更多',
  }
)
</script>

<style scoped lang="sass">
.home-section-card
  margin: 0 auto

@media (max-width: 765px)
  .home-section-card
    padding-top: 64px
  .text-content
    margin: 0 2rem
</style>
