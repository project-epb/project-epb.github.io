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
            p.text-base.text-base-content.opacity-80 <u>E</u>verything <u>P</u>lanning <u>B</u>ureau 的首字母缩写，中文名称“万界规划局”。《将来过去时》系列世界观中的一个重要组织，负责维持序列的稳定性和持续性。

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
              | 将来过去时
            p.text-base.text-base-content.opacity-80 机智的小鱼君笔下的小说故事集，分为现在、过去、将来三个主要部分，另外有“现在”的前传故事《成为游戏管理员》以及“将来”的番外故事《我可能是开启了人机模式》两个官方外传。

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
              | 万界规划局（项目组）
            p.text-base.text-base-content.opacity-80 一个虚拟的网络社团，目前成员有且仅有机智的小鱼君一人。《将来过去时》及其衍生作品的所有权利被统一归化给了这个虚拟社团，以便用于外宣等场景。
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
</script>

<style scoped lang="sass"></style>
