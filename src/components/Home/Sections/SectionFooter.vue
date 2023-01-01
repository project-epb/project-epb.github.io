<template lang="pug">
BaseSection
  BaseCard(title='尾声')
    template(#subtitle) 天下没有不散的筵席
    template(#description)
      p(
        style='font-style: italic; font-family: "Times New Roman", Times, serif'
      ) Good morning, and in case I don't see you, Good afternoon, Good evening, And good night.
      .cards-area.grid.grid-cols-2.gap-4.mt-8(
        class='max-md:grid-cols-1',
        @wheel.stop='',
        @touchstart.stop='',
        @mousedown.stop=''
      )
        .card.bg-base-200.shadow-xl
          .card-body
            .card-title InPageEdit
            pA plugin with muliple functionalities for advanced MediaWiki users based on jQuery.
            .card-actions.justify-end
              a.btn(href='https://www.ipe.wiki/', target='_blank') 看一看
        .card.bg-base-200.shadow-xl
          .card-body
            .card-title 广告位招租
            p 我也不知道这里要放什么比较好，总之空着很难看。
            .card-actions.justify-end
              a.btn 瞧一瞧
        .card.bg-base-200.shadow-xl
          .card-body
            .card-title 你瞅啥
            p 已经没有更多东西了！
            .card-actions.justify-end
              a.btn 再见
        .card.bg-base-200.shadow-xl
          .card-body
            .card-title 真的没了
            p 凑个数。看到这条的人记得多喝热水。
            .card-actions.justify-end
              a.btn 再也不见
      GlobalFooter
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'
import GlobalFooter from '@com/BaseTemplate/GlobalFooter.vue'
</script>

<style scoped lang="sass">
:deep(.desc)
  opacity: 1
:deep(footer)
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  z-index: 10

.home-section-card
  align-items: start
  padding-top: calc(64px + 10vh)

.cards-area
  max-height: 30vh
  overflow: auto

@media (max-width: 765px)
  .home-section-card
    padding-top: calc(64px + 2rem)
</style>
