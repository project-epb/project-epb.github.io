<template lang="pug">
header#global-header.fixed.top-0.navbar.bg-base-100.backdrop-blur-md.shadow-lg.bg-opacity-90.z-50.border-b.border-base-300
  .navbar-start
    .flex.gap-2.items-center
      a.btn.btn-ghost.btn-circle.avatar.transition-transform(class="hover:scale-110")
        img(src='/wiki-wordmark.svg', alt='Logo')
      a.btn.btn-ghost.normal-case.text-xl.font-bold.transition-colors(class="hover:text-primary" href='/') Project EPB
  .navbar-end
    a.cursor-pointer.select-none.theme-toggler.flex.justify-center.items-center.gap-2.px-3.py-2.rounded-lg.transition-colors(
      class="hover:bg-base-200"
      title='单击切换主题，双击跟随系统',
      @click='theme = isChecked ? "dark" : "light"',
      @dblclick='theme = "auto"'
    )
      span.text-2xl.transition-transform(class="hover:scale-125" @click.stop='theme = "dark"') 🌙
      input.toggle.toggle-primary.toggle-sm.pointer-events-none(
        type='checkbox',
        :checked='isChecked',
        :indeterminate='isIndeterminate'
      )
      span.text-2xl.transition-transform(class="hover:scale-125" @click.stop='theme = "light"') 🌞
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
const theme = ref<'auto' | 'light' | 'dark'>('auto')
const isChecked = ref(true)
const isIndeterminate = computed(() => theme.value === 'auto')
watch(theme, () => {
  if (typeof window === 'undefined') return
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
  isChecked.value = theme.value === 'light'
})

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as any) || 'auto'
  isChecked.value = localStorage.getItem('theme') === 'light'
})
</script>

<style scoped lang="sass"></style>
