<template lang="pug">
.home-section-wrapper.w-full.relative.flex.flex-col.justify-start.mb-24
  .footer-wrapper.w-full.max-w-5xl.mx-auto.px-4.py-10.flex-1.flex.flex-col.justify-center
    .text-center.space-y-6
      h2.text-4xl.font-extrabold.mb-2.bg-gradient-to-r.from-primary.to-accent.bg-clip-text.text-transparent(
        class='md:text-5xl'
      ) 尾声
      p.text-xl.text-base-content.opacity-70 天下没有不散的筵席
      p.text-lg.italic.text-base-content.opacity-60(
        style='font-family: "Times New Roman", Times, serif'
      ) Good morning, and in case I don't see you, Good afternoon, Good evening, And good night.

      //- Social links
      .flex.flex-row.flex-wrap.justify-center.gap-3.pt-4
        a.btn.btn-circle.btn-ghost.text-primary.transition-all(
          class='hover:bg-primary hover:text-primary-content',
          href='https://twitter.com/XiaoYuJunDesu',
          target='_blank',
          aria-label='Twitter'
        ): Icon: Twitter
        a.btn.btn-circle.btn-ghost.text-secondary.transition-all(
          class='hover:bg-secondary hover:text-secondary-content',
          href='https://github.com/dragon-fish',
          target='_blank',
          aria-label='GitHub'
        ): Icon: Github
        a.btn.btn-circle.btn-ghost.text-accent.transition-all(
          class='hover:bg-accent hover:text-accent-content',
          href='https://steamcommunity.com/id/dragon-fish',
          target='_blank',
          aria-label='Steam'
        ): Icon: Steam
        a.btn.btn-circle.btn-ghost.text-info.transition-all(
          class='hover:bg-info hover:text-info-content',
          href='mailto:dragon-fish@qq.com',
          target='_blank',
          aria-label='Email'
        ): Icon: Envelope
</template>

<script setup lang="ts">
import { Icon } from '@vicons/utils'
import { Twitter, Github, Steam, Envelope } from '@vicons/fa'
</script>

<style scoped lang="sass">
.footer-wrapper
  padding-top: 2rem
  padding-bottom: 2rem
</style>
