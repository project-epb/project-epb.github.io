<template lang="pug">
BaseSection
  BaseCard(
    title='Wiki (怀旧版)',
    subtitle='万界规划局 wiki',
    :image-src='imageSrc',
    more-href='https://www.wjghj.cn/wiki/',
    more-text='让我访问'
  )
    template(#description)
      p 经典款《将来过去时》设定集 wiki 网站，虽然已经不再维护，但依旧保有大量的神秘知识。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/legacy_wiki_site.png'
</script>

<style scoped lang="sass"></style>
