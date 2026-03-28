<template lang="pug">
.home-section-wrapper.w-full.relative.flex.flex-col.items-center.justify-center(
  :class='{ "hero-wrapper": isHero }'
)
  slot
  a.jump-anchor.cursor-pointer.text-primary.transition-colors(
    class='hover:text-secondary',
    v-if='showJumpAnchor',
    @click='scrollNext'
  )
    IconWrapper: IconChevronDown
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'
import { IconChevronDown } from '@tabler/icons-vue'
import IconWrapper from '@com/BaseTemplate/IconWrapper.vue'

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
  display: block
  text-align: center
  font-size: 2.5rem
  animation: jump-btn 1.5s ease 0s infinite alternate
  z-index: 20
  opacity: 0.6
  padding: 1rem 0

.jump-anchor:hover
  opacity: 1

.home-section-wrapper[data-is-last] .jump-anchor
  display: none

:global([data-is-last] .jump-anchor)
  display: none

.hero-wrapper
  min-height: 0

@keyframes jump-btn
  from
    transform: translateY(0)
  to
    transform: translateY(-0.5rem)
</style>
