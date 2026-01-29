<template lang="pug">
.home-section-wrapper.w-full.relative.flex.flex-col.items-center.justify-center(
  :class='{ "min-h-screen": isHero }'
)
  slot
  a.jump-anchor.cursor-pointer.text-primary.transition-colors(
    class='hover:text-secondary',
    v-if='showJumpAnchor',
    @click='scrollNext'
  )
    Icon: ChevronDown
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import { Icon } from '@vicons/utils'
import { ChevronDown } from '@vicons/fa'

withDefaults(
  defineProps<{
    innerStyle?: StyleValue
    backdropStyle?: StyleValue
    isHero?: boolean
    showJumpAnchor?: boolean
  }>(),
  {
    isHero: false,
    showJumpAnchor: true,
  }
)

function scrollNext(e: MouseEvent) {
  const target = e.target as HTMLElement
  // Find the parent section wrapper defined in Home.vue
  const currentSection = target.closest('.home-section')
  if (currentSection && currentSection.nextElementSibling) {
    currentSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="sass">
.jump-anchor
  position: absolute
  bottom: 0rem
  left: 50%
  transform: translateX(-50%)
  font-size: 2.5rem
  animation: jump-btn 1.5s ease 0s infinite alternate
  z-index: 20
  opacity: 0.6

.jump-anchor:hover
  opacity: 1

.home-section-wrapper[data-is-last] .jump-anchor
  display: none

:global([data-is-last] .jump-anchor)
  display: none

@keyframes jump-btn
  from
    bottom: 0rem
    transform: translateX(-50%) translateY(0)
  to
    bottom: 1rem
    transform: translateX(-50%) translateY(-0.25rem)
</style>
