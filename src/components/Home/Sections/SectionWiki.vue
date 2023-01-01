<template lang="pug">
BaseSection
  BaseCard(
    title='小鱼君和他的朋友们',
    subtitle='基于MediaWiki开发',
    :image-src='imageSrc',
    more-href='https://www.wjghj.cn/wiki/',
    more-text='难道是传说中的黑历史'
  )
    template(#description)
      p 经典怀旧款《将来过去时》设定集 wiki 网站，也就是《小鱼君和他的朋友们》。虽然这个网站已经不再维护，但依旧保有大量的神秘知识。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/legacy_wiki_site.png'
</script>

<style scoped lang="sass"></style>
