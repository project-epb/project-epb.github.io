<template lang="pug">
footer#global-footer.footer.footer-center.p-10.bg-base-200.text-base-content.rounded
  .footer-navigation.grid.grid-flow-col.gap-4
    a.link.link-hover(href='/') Home
    a.link.link-hover(href='/markdown') markdown
  .footer-social.grid.grid-flow-col.gap-4
    a(href='https://twitter.com/XiaoYuJunDesu', target='_blank'): Icon: Twitter
    a(href='https://github.com/dragon-fish', target='_blank'): Icon: Github
    a(href='https://steamcommunity.com/id/dragon-fish', target='_blank'): Icon: Steam
    a(href='mailto:dragon-fish@qq.com', target='_blank'): Icon: Envelope
  .footer-copyright
    .font-bold Project:EPB and related works are belong to 机智的小鱼君 (Dragon-Fish)
    p
      | Copyright 2022 - {{ new Date().getFullYear() }} &copy; All right reserved
      | •
      |
      a(
        href='http://beian.miit.gov.cn',
        target='_blank',
        rel='noopener noreferrer'
      ) 鄂ICP备18025860号
</template>

<script setup lang="ts">
import {} from 'vue'
import { Icon } from '@vicons/utils'
import { Twitter, Github, Steam, Envelope } from '@vicons/fa'
</script>

<style scoped lang="sass">
.footer-social
  font-size: 1.5rem
</style>
