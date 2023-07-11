<template lang="pug">
BaseSection
  BaseCard(
    title='Chatbot SILI',
    subtitle='万界规划局聊天机器人',
    :image-src='imageSrc',
    more-href='https://github.com/project-epb/Chatbot-SILI',
    more-text='我要做SILI的🐶'
  )
    template(#description)
      p “您好，我是SILI”——『IM机械姬』SILI-t138-[Manura]-Invoke-II@LD(A)
      p 基于 Koishi.js v4 开发的聊天机器人~
      p 加群以调戏。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import imageSrc from '../images/sili_desc.png'
</script>

<style scoped lang="sass"></style>
