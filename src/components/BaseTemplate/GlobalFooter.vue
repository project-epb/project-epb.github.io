<template lang="pug">
footer#global-footer.p-10.bg-base-200.text-base-content.border-t.border-base-300
  .footer-container.flex.flex-col.items-center.gap-6.max-w-6xl.mx-auto
    .footer-navigation.flex.flex-row.flex-wrap.justify-center.gap-4(class='max-sm:flex-col max-sm:items-center')
      a.link.link-hover.transition-colors(class="hover:text-primary" href='/') Home
      a.link.link-hover.transition-colors(class="hover:text-primary" href='/markdown') Markdown
    
    .footer-social.flex.flex-row.flex-wrap.justify-center.gap-3
      a.btn.btn-circle.btn-ghost.text-primary.transition-all(class="hover:bg-primary hover:text-primary-content" href='https://twitter.com/XiaoYuJunDesu', target='_blank', aria-label='Twitter'): Icon: Twitter
      a.btn.btn-circle.btn-ghost.text-secondary.transition-all(class="hover:bg-secondary hover:text-secondary-content" href='https://github.com/dragon-fish', target='_blank', aria-label='GitHub'): Icon: Github
      a.btn.btn-circle.btn-ghost.text-accent.transition-all(class="hover:bg-accent hover:text-accent-content" href='https://steamcommunity.com/id/dragon-fish', target='_blank', aria-label='Steam'): Icon: Steam
      a.btn.btn-circle.btn-ghost.text-info.transition-all(class="hover:bg-info hover:text-info-content" href='mailto:dragon-fish@qq.com', target='_blank', aria-label='Email'): Icon: Envelope
    
    .footer-copyright.text-center.space-y-2.max-w-2xl
      p.font-bold.text-base Project:EPB and related works are belong to 机智的小鱼君 (Dragon-Fish)
      p.text-sm.opacity-70
        | &copy; Copyright 2022 - {{ new Date().getFullYear() }} All right reserved
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
