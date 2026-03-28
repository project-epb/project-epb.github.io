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
        a.social-btn.btn.btn-circle.btn-ghost.text-primary.transition-all(
          href='https://twitter.com/XiaoYuJunDesu',
          target='_blank',
          aria-label='Twitter',
          style='--btn-color: var(--color-primary); --btn-text: var(--color-primary-content)'
        ): IconWrapper: IconBrandX
        a.social-btn.btn.btn-circle.btn-ghost.text-secondary.transition-all(
          href='https://github.com/dragon-fish',
          target='_blank',
          aria-label='GitHub',
          style='--btn-color: var(--color-secondary); --btn-text: var(--color-secondary-content)'
        ): IconWrapper: IconBrandGithub
        a.social-btn.btn.btn-circle.btn-ghost.text-accent.transition-all(
          href='https://steamcommunity.com/id/dragon-fish',
          target='_blank',
          aria-label='Steam',
          style='--btn-color: var(--color-accent); --btn-text: var(--color-accent-content)'
        ): IconWrapper: IconBrandSteam
        a.social-btn.btn.btn-circle.btn-ghost.text-info.transition-all(
          href='mailto:dragon-fish@qq.com',
          target='_blank',
          aria-label='Email',
          style='--btn-color: var(--color-info); --btn-text: var(--color-info-content)'
        ): IconWrapper: IconMail
</template>

<script setup lang="ts">
import { IconBrandX, IconBrandGithub, IconBrandSteam, IconMail } from '@tabler/icons-vue'
import IconWrapper from '@com/BaseTemplate/IconWrapper.vue'
</script>

<style scoped lang="sass">
.footer-wrapper
  padding-top: 2rem
  padding-bottom: 2rem

.social-btn:hover
  background-color: var(--btn-color)
  color: var(--btn-text)
</style>
