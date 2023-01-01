<template lang="pug">
BaseSection
  BaseCard(title='简介', subtitle='关于 Project-EPB')
    template(#description)
      p <strong>「万界规划局」项目组</strong> - <i>Project-EPB</i>
      p EPB是 <b>E</b>verything <b>P</b>lanning <b>B</b>ureau 的首字母缩写，中文名称“万界规划局”。
      p 万界规划局是 <b>机智的小鱼君</b> (AKA: Dragon Fish) 建立的，以小说《将来过去时》以及 web 前后端为核心的（目前）只有一名成员的项目组。
      p 项目组的重点项目有 小说《将来过去时》 及其衍生作品、网站“小鱼君和他的朋友们” 以及 GitHub/Wjghj-Project 的开源工具。
      p 曾用名 Wjghj Project
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/blog_site.png'
</script>

<style scoped lang="sass">
p:not(:last-of-type)
  margin-bottom: 0.5rem

@media (max-width: 765px)
  .home-section-card
    padding-top: calc(64px + 2rem)
</style>
