<template lang="pug">
BaseSection
  BaseCard(title='简介', subtitle='关于 Project-EPB')
    template(#description)
      p <strong>「万界规划局」项目组</strong> - <i>Project-EPB</i>
      p 曾用名 Wjghj Project
      dl
        dt EPB
        dd EPB是 <b>E</b>verything <b>P</b>lanning <b>B</b>ureau 的首字母缩写，中文名称“万界规划局”。
        dt 万界规划局
        dd 这是《将来过去时》系列世界观中的一个重要组织，负责维持序列的稳定性和持续性。
        dt 万界规划局-项目组
        dd 我们将《将来过去时》及其衍生作品的所有权利统一赋予给了这个虚拟社团，我们使用作品中的一个核心设定为这个团队进行了命名。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
</script>

<style scoped lang="sass">
p:not(:last-of-type)
  margin-bottom: 0.5rem

dl
  margin: 1rem 0
dt
  font-weight: 700
  font-size: 1.125rem
  margin-top: 0.5rem
dd
  margin-left: 1em

@media (max-width: 765px)
  .home-section-card
    padding-top: calc(64px + 2rem)
</style>
