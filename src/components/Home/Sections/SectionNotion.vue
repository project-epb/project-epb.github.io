<template lang="pug">
BaseSection
  BaseCard(
    title='万界大百科',
    subtitle='将来过去时官方设定集',
    :image-src='imageSrc',
    more-href='https://epbureau.notion.site/',
    more-text='所以小说什么时候发布'
  )
    template(#description)
      p 《将来过去时》官方设定集！
      p 设定与舞台、人物与团体、人物与团体，都在这里了~
      p 好像……还有小鱼君自己绘制的一些插画？
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/notion_site.png'
</script>

<style scoped lang="sass"></style>
