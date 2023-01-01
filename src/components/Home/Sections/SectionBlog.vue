<template lang="pug">
BaseSection
  BaseCard(
    title='小鱼君の博客',
    subtitle='《将来过去时》原作者の个人博客',
    :image-src='imageSrc',
    more-href='https://blog.wjghj.cn/',
    more-text='没啥特别的，但可以瞅一眼'
  )
    template(#description)
      p 《将来过去时》是机智的小鱼君笔下的系列小说，分为现在、过去、将来三个主要篇章，另外有“现在”的前传故事《成为游戏管理员》以及“将来”的番外故事《我可能是开启了人机模式》两个官方外传。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/blog_site.png'
</script>

<style scoped lang="sass"></style>
