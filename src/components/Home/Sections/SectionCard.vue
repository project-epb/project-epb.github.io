<template lang="pug">
BaseSection(:show-jump-anchor='false')
  BaseCard(
    :title='title',
    :subtitle='subtitle',
    :image-src='imageSrc',
    :is-reverse='isReverse',
    :more-href='moreHref',
    :more-text='moreText'
  )
    template(#description)
      p(v-for='(text, index) in description', :key='index') {{ text }}
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseCard from './BaseCard.vue'
import BaseSection from './BaseSection.vue'

defineProps<{
  title: string
  subtitle: string
  imageSrc: string
  moreHref: string
  moreText: string
  description: string[]
  isReverse?: boolean
}>()
</script>

<style scoped lang="sass">
p:not(:last-child)
  margin-bottom: 0.5rem
</style>
