<template lang="pug">
BaseSection(:show-jump-anchor='false')
  .about-section.w-full.max-w-6xl.mx-auto.px-4
    .text-center.mb-12
      .badge.badge-primary.badge-lg.mb-4 关于 Project-EPB
      h2.text-4xl.font-extrabold.mb-6.bg-gradient-to-r.from-primary.via-secondary.to-accent.bg-clip-text.text-transparent(
        class='md:text-5xl'
      ) 简介

    .content.space-y-8
      .intro.text-center
        p.text-xl.font-semibold.mb-2(class='md:text-2xl') <strong>「万界规划局」项目组</strong> - <i>Project-EPB</i>
        p.text-base.text-base-content.opacity-70 曾用名 Wjghj Project

      .definitions.grid.grid-cols-1.gap-6(class='md:grid-cols-3')
        .definition-card.card.bg-base-100.shadow-xl.border-2.border-primary.border-opacity-20.transition-all(
          class='hover:shadow-2xl hover:border-opacity-50'
        )
          .card-body
            .card-title.text-primary.flex.items-center.gap-2
              svg.w-6.h-6(
                xmlns='http://www.w3.org/2000/svg',
                fill='none',
                viewBox='0 0 24 24',
                stroke='currentColor'
              )
                path(
                  stroke-linecap='round',
                  stroke-linejoin='round',
                  stroke-width='2',
                  d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
                )
              | EPB
            p.text-base.text-base-content.opacity-80 EPB是 <b>E</b>verything <b>P</b>lanning <b>B</b>ureau 的首字母缩写，中文名称"万界规划局"。

        .definition-card.card.bg-base-100.shadow-xl.border-2.border-secondary.border-opacity-20.transition-all(
          class='hover:shadow-2xl hover:border-opacity-50'
        )
          .card-body
            .card-title.text-secondary.flex.items-center.gap-2
              svg.w-6.h-6(
                xmlns='http://www.w3.org/2000/svg',
                fill='none',
                viewBox='0 0 24 24',
                stroke='currentColor'
              )
                path(
                  stroke-linecap='round',
                  stroke-linejoin='round',
                  stroke-width='2',
                  d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                )
              | 万界规划局
            p.text-base.text-base-content.opacity-80 这是《将来过去时》系列世界观中的一个重要组织，负责维持序列的稳定性和持续性。

        .definition-card.card.bg-base-100.shadow-xl.border-2.border-accent.border-opacity-20.transition-all(
          class='hover:shadow-2xl hover:border-opacity-50'
        )
          .card-body
            .card-title.text-accent.flex.items-center.gap-2
              svg.w-6.h-6(
                xmlns='http://www.w3.org/2000/svg',
                fill='none',
                viewBox='0 0 24 24',
                stroke='currentColor'
              )
                path(
                  stroke-linecap='round',
                  stroke-linejoin='round',
                  stroke-width='2',
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                )
              | 万界规划局-项目组
            p.text-base.text-base-content.opacity-80 我们将《将来过去时》及其衍生作品的所有权利统一赋予给了这个虚拟社团，我们使用作品中的一个核心设定为这个团队进行了命名。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
</script>

<style scoped lang="sass"></style>
