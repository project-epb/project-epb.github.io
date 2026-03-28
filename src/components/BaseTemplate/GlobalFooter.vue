<template lang="pug">
footer#global-footer.bg-base-200.text-base-content.border-t.border-base-300
  .max-w-5xl.mx-auto.px-6.py-8.space-y-6

    //- Navigation links
    nav.flex.flex-wrap.justify-center.gap-6.text-sm.opacity-70
      a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='/') 首页
      a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='https://blog.epb.wiki', target='_blank') 博客
      a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='https://universe.epb.wiki', target='_blank') 阅读
      a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='/rss.xml') RSS Feed
      a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='/sitemap-index.xml') Sitemap

    //- Bottom row: copyright left, social right
    .flex.flex-col.items-center.gap-4(class='md:flex-row md:justify-between')
      p.text-xs.opacity-60
        | &copy; {{ new Date().getFullYear() }}&ensp;
        a.link.link-hover(class='hover:text-primary', href='/') Project:EPB
        | &ensp;&times; 机智的小鱼君 | All rights reserved.

      .flex.gap-4.text-sm.opacity-60
        a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='https://github.com/dragon-fish', target='_blank') GitHub
        a.link.link-hover.transition-colors(class='hover:text-primary hover:opacity-100', href='https://twitter.com/XiaoYuJunDesu', target='_blank') X (Twitter)

  //- Decorative large text
  .footer-brand.text-center.overflow-hidden.select-none.pointer-events-none
    .text-8xl.font-black.opacity-10.leading-none.tracking-tight(class='md:text-9xl') 万界规划局
</template>

<script setup lang="ts">
</script>

<style scoped lang="sass">
.footer-brand
  margin-top: -1rem
  padding-bottom: 1rem
</style>
