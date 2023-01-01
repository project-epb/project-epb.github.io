<template lang="pug">
section.home-section-wrapper.h-screen.w-screen.overflow-hidden.relative
  slot
  a.jump-anchor.cursor-pointer(@click='swiper.slideNext()')
    Icon: ChevronDown
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import { useSwiper } from 'swiper/vue'
import { Icon } from '@vicons/utils'
import { ChevronDown } from '@vicons/fa'

defineProps<{
  innerStyle?: StyleValue
  backdropStyle?: StyleValue
}>()

const swiper = useSwiper()
</script>

<style scoped lang="sass">
.jump-anchor
  position: absolute
  bottom: 64px
  left: 50%
  transform: translateX(-50%)
  font-size: 2rem
  animation: jump-btn .85s ease 0s infinite alternate

:global([data-is-last] .jump-anchor)
  display: none

@keyframes jump-btn
  from
    opacity: 0.4
    bottom: 64px
  to
    opacity: 1
    bottom: calc(64px + 1rem)
</style>
