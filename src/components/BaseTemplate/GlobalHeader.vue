<template lang="pug">
header#global-header.fixed.z-50.transition-all.duration-300(
  ref='headerRef',
  :class='{ scrolled: isScrolled }'
)
  nav.header-inner.flex.items-center.justify-between.px-5.py-2.rounded-2xl.transition-all.duration-300(
    class='backdrop-blur-xl'
  )
    //- Left: Logo + site name
    a.flex.items-center.gap-2.transition-all.duration-300(
      href='/',
      class='hover:opacity-80'
    )
      img.w-8.h-8(src='/wiki-wordmark.svg', alt='Logo')
      span.font-bold.text-lg.text-base-content Project EPB

    //- Right: theme dropdown
    .relative(ref='dropdownRef')
      button.theme-btn.flex.items-center.justify-center.w-9.h-9.rounded-full.transition-all.duration-300.cursor-pointer(
        class='hover:bg-base-content/10',
        @click='dropdownOpen = !dropdownOpen',
        :title='themeLabel'
      )
        span.text-lg.transition-transform.duration-300 {{ themeIcon }}

      //- Dropdown menu
      Transition(name='dropdown')
        .theme-dropdown.absolute.right-0.mt-2.py-1.rounded-xl.min-w-36(
          v-if='dropdownOpen'
        )
          button.dropdown-item.flex.items-center.gap-3.w-full.px-4.py-2.text-sm.transition-colors.duration-200.cursor-pointer(
            class='hover:bg-base-content/8',
            :class='{ active: theme === "light" }',
            @click='selectTheme("light")'
          )
            span 🌞
            span 拥抱光明
            span.ml-auto.text-xs.opacity-50(v-if='theme === "light"') ✓

          button.dropdown-item.flex.items-center.gap-3.w-full.px-4.py-2.text-sm.transition-colors.duration-200.cursor-pointer(
            class='hover:bg-base-content/8',
            :class='{ active: theme === "dark" }',
            @click='selectTheme("dark")'
          )
            span 🌚
            span 堕入黑暗
            span.ml-auto.text-xs.opacity-50(v-if='theme === "dark"') ✓

          button.dropdown-item.flex.items-center.gap-3.w-full.px-4.py-2.text-sm.transition-colors.duration-200.cursor-pointer(
            class='hover:bg-base-content/8',
            :class='{ active: theme === "auto" }',
            @click='selectTheme("auto")'
          )
            span 🌈
            span 随波逐流
            span.ml-auto.text-xs.opacity-50(v-if='theme === "auto"') ✓
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'

const theme = ref<'auto' | 'light' | 'dark'>('auto')
const isScrolled = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const dropdownOpen = ref(false)

const themeIcon = computed(() => {
  if (theme.value === 'light') return '🌞'
  if (theme.value === 'dark') return '🌚'
  return '🌈'
})

const themeLabel = computed(() => {
  if (theme.value === 'light') return '浅色模式'
  if (theme.value === 'dark') return '深色模式'
  return '跟随系统'
})

function selectTheme(t: 'auto' | 'light' | 'dark') {
  theme.value = t
  dropdownOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    dropdownOpen.value = false
  }
}

watch(theme, () => {
  if (typeof window === 'undefined') return
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as any) || 'auto'

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="sass">
#global-header
  top: 0.75rem
  left: 50%
  transform: translateX(-50%)
  width: calc(100% - 2rem)
  max-width: 64rem

.header-inner
  background: color-mix(in oklch, var(--color-base-100) 60%, transparent)
  border: 1px solid color-mix(in oklch, var(--color-base-content) 8%, transparent)
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1)

#global-header.scrolled .header-inner
  background: color-mix(in oklch, var(--color-base-100) 85%, transparent)
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15)

.theme-dropdown
  background: color-mix(in oklch, var(--color-base-100) 90%, transparent)
  backdrop-filter: blur(20px)
  border: 1px solid color-mix(in oklch, var(--color-base-content) 10%, transparent)
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2)
  z-index: 100

.dropdown-item
  color: var(--color-base-content)
  border: none
  background: none
  text-align: left

  &.active
    color: var(--color-primary)
    font-weight: 600

// Transition
.dropdown-enter-active,
.dropdown-leave-active
  transition: all 0.2s ease

.dropdown-enter-from,
.dropdown-leave-to
  opacity: 0
  transform: translateY(-8px) scale(0.95)
</style>
