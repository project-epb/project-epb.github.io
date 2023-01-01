<template lang="pug">
header#global-header.fixed.top-0.navbar.bg-base-200.backdrop-blur.shadow-sm.bg-opacity-80.z-20
  .navbar-start
    .flex.gap-4
      a.btn.btn-ghost.btn-circle.avatar
        img(src='/wiki-wordmark.svg', alt='Logo')
      a.btn.btn-ghost.normal-case.text-xl(href='/') Project EPB
  .navbar-end
    a.cursor-pointer.select-none.theme-toggler.flex.justify-center.gap-1(
      title='单击切换主题，双击跟随系统',
      @click='theme = isChecked ? "dark" : "light"',
      @dblclick='theme = "auto"'
    )
      span(@click.stop='theme = "dark"') 🌙
      input.toggle.toggle-warning.pointer-events-none(
        type='checkbox',
        :checked='isChecked',
        :indeterminate='isIndeterminate'
      )
      span(@click.stop='theme = "light"') 🌞
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
const theme = ref<'auto' | 'light' | 'dark'>('auto')
const isChecked = ref(true)
const isIndeterminate = computed(() => theme.value === 'auto')
watch([theme], () => {
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
