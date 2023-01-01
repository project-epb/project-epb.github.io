<template lang="pug">
BaseSection
  BaseCard(
    title='小鱼君の博客',
    subtitle='《将来过去时》原作者の个人博客',
    :image-src='imageSrc',
    more-href='https://blog.wjghj.cn/',
    more-text='真的吗，我不信'
  )
    template(#description)
      p 哟吼，欢迎光临「小鱼君的博客」
      p ——诶诶诶，别走嘛！
      p 这里说不定有什么好玩的东西等你发现呐~
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/blog_site.png'
</script>

<style scoped lang="sass"></style>
