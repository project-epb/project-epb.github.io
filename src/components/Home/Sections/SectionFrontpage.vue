<template lang="pug">
BaseSection
  .hero.min-h-screen(
    style='/* background-image: url(https://placeimg.com/1000/800/arch) */'
  )
    //- .hero-overlay.bg-opacity-60
    .hero-content.text-center.flex-col
      .hero-logo.rounded-3xl.shadow-2xl.bg-base-200.backdrop-blur.bg-opacity-80
        img(src='/wiki-wordmark.svg')
      .first-heading.max-w-screen-md.mt-4
        h1.mb-4.text-5xl.font-bold <b>E</b>verything <b>P</b>lanning <b>B</b>ureau
        .subtitle 「万界规划局」项目组
      .flex.gap-4
        a.btn.btn-primary.shadow-md(
          href='https://blog.epb.wiki/',
          target='_blank'
        ) 小鱼君博客
        a.btn.btn-secondary.shadow-md(
          href='https://epb-wiki.notion.site/',
          target='_blank'
        ) 官方设定集
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseSection from './BaseSection.vue'
</script>

<style scoped lang="sass">
.description
  max-width: 600px

.hero-logo
  max-width: 50vw
  width: 20rem

h1 b
  font-weight: 900
  font-size: 1.5em
</style>
