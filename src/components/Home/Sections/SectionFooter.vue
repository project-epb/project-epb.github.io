<template lang="pug">
.home-section-wrapper.w-full.relative.flex.flex-col.justify-start.mb-24
  .footer-wrapper.w-full.max-w-6xl.mx-auto.px-4.py-16.flex-1.flex.flex-col.justify-center
    .text-center.mb-12
      h2.text-4xl.font-extrabold.mb-4.bg-gradient-to-r.from-primary.to-accent.bg-clip-text.text-transparent(
        class='md:text-5xl'
      ) 尾声
      p.text-xl.text-base-content.opacity-70.mb-6 天下没有不散的筵席
      p.text-lg.italic.text-base-content.opacity-60(
        style='font-family: "Times New Roman", Times, serif'
      ) Good morning, and in case I don't see you, Good afternoon, Good evening, And good night.

    .cards-area.grid.gap-4.mb-16.grid-cols-1(
      class='md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'
    )
      .card.bg-base-200.border-2.border-base-300.shadow-lg.transform.transition-all(
        class='hover:shadow-xl hover:border-secondary hover:scale-105'
      )
        .card-body
          h3.card-title.text-xl.font-bold.text-base-content 这叫占位符
          p.text-base-content.opacity-80.text-sm 我也不知道这里要放什么比较好，总之空着很难看。
          .card-actions.justify-end.mt-4
            button.btn.btn-ghost.btn-sm.cursor-default 看一看

      .card.bg-base-200.border-2.border-base-300.shadow-lg.transform.transition-all(
        class='hover:shadow-xl hover:border-secondary hover:scale-105'
      )
        .card-body
          h3.card-title.text-xl.font-bold.text-base-content 广告位招租
          p.text-base-content.opacity-80.text-sm 特价：仅需 $114,514 即可承包 1,919,810 纳秒。
          .card-actions.justify-end.mt-4
            button.btn.btn-ghost.btn-sm.cursor-default 瞧一瞧

      .card.bg-base-200.border-2.border-base-300.shadow-lg.transform.transition-all(
        class='hover:shadow-xl hover:border-accent hover:scale-105'
      )
        .card-body
          h3.card-title.text-xl.font-bold.text-base-content 你瞅啥
          p.text-base-content.opacity-80.text-sm 已经没有更多东西了！
          .card-actions.justify-end.mt-4
            button.btn.btn-ghost.btn-sm.cursor-default 再见

      .card.bg-base-200.border-2.border-base-300.shadow-lg.transform.transition-all(
        class='hover:shadow-xl hover:border-info hover:scale-105'
      )
        .card-body
          h3.card-title.text-xl.font-bold.text-base-content 真的没了
          p.text-base-content.opacity-80.text-sm 凑个数。看到这条的人记得多喝热水。
          .card-actions.justify-end.mt-4
            button.btn.btn-ghost.btn-sm.cursor-default 再也不见
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.footer-wrapper
  padding-top: 2rem
  padding-bottom: 2rem

:deep(footer)
  margin-top: 3rem
</style>
