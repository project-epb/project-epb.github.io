<template lang="pug">
BaseSection
  BaseCard(
    title='万界规划局图库',
    subtitle='EPB Image Hosting',
    :image-src='imageSrc',
    more-href='https://img.wjghj.cn/',
    more-text='诶嘿嘿……不许色色'
  )
    template(#description)
      p 基于 Chevereto 的图床。不开放访客上传，大多数内容都是小鱼君的私人珍藏。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/image_hosting_site.png'
</script>

<style scoped lang="sass"></style>
