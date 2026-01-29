<template lang="pug">
header#global-header.fixed.top-0.navbar.bg-base-100.backdrop-blur-lg.shadow-lg.bg-opacity-90.z-50.border-b-2.transition-all.duration-300.border-base-300(
  ref='headerRef'
)
  //- 顶部装饰线
  .absolute.top-0.left-0.right-0.h-1.bg-gradient-to-r.from-primary.via-secondary.to-accent.opacity-70

  .navbar-start
    .flex.gap-2.items-center
      a.btn.btn-ghost.btn-circle.avatar.relative.group.transition-all.duration-300(
        class='hover:scale-110'
      )
        .absolute.inset-0.rounded-full.bg-gradient-to-r.from-primary.to-secondary.opacity-0.group-hover_opacity-20.blur-md.transition-opacity
        img.relative.z-10(src='/wiki-wordmark.svg', alt='Logo')

      a.btn.btn-ghost.normal-case.text-xl.font-bold.relative.group.transition-all.duration-300(
        href='/',
        class='hover:text-transparent'
      )
        span.relative.z-10.group-hover_bg-gradient-to-r.group-hover_from-primary.group-hover_to-secondary.group-hover_bg-clip-text Project EPB
        .absolute.bottom-0.left-0.w-0.bg-gradient-to-r.from-primary.to-secondary.group-hover_w-full.transition-all.duration-300(
          h='0.5'
        )

  .navbar-end
    a.cursor-pointer.select-none.theme-toggler.flex.justify-center.items-center.gap-2.px-4.py-2.rounded-full.relative.group.overflow-hidden.transition-all.duration-300(
      class='hover:bg-base-200',
      title='单击切换主题，双击跟随系统',
      @click='theme = isChecked ? "dark" : "light"',
      @dblclick='theme = "auto"'
    )
      //- 悬浮背景效果
      .absolute.inset-0.bg-gradient-to-r.from-purple-400.to-pink-400.opacity-0.group-hover_opacity-10.transition-opacity.duration-300

      span.text-2xl.relative.z-10.transform.transition-all.duration-300(
        class='hover:scale-125 hover:rotate-12',
        @click.stop='theme = "dark"'
      ) 🌙

      input.toggle.toggle-primary.toggle-sm.pointer-events-none.relative.z-10(
        type='checkbox',
        :checked='isChecked',
        :indeterminate='isIndeterminate'
      )

      span.text-2xl.relative.z-10.transform.transition-all.duration-300(
        class='hover:scale-125 hover:-rotate-12',
        @click.stop='theme = "light"'
      ) 🌞
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'

const theme = ref<'auto' | 'light' | 'dark'>('auto')
const isChecked = ref(true)
const isScrolled = ref(false)
const headerRef = ref<HTMLElement | null>(null)

const isIndeterminate = computed(() => theme.value === 'auto')

watch(theme, () => {
  if (typeof window === 'undefined') return
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
  isChecked.value = theme.value === 'light'
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as any) || 'auto'
  isChecked.value = localStorage.getItem('theme') === 'light'

  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="sass">
#global-header
  will-change: box-shadow, border-color

  &::before
    content: ''
    position: absolute
    inset: 0
    background: inherit
    z-index: -1

.avatar img
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)

.avatar:hover img
  transform: rotate(360deg) scale(1.1)

.theme-toggler
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)

  &:hover
    box-shadow: 0 4px 12px rgba(138, 110, 255, 0.2)
</style>
