<template lang="pug">
span.icon-wrapper
  slot
</template>

<style scoped lang="sass">
.icon-wrapper
  display: inline-flex
  align-items: center
  justify-content: center
  width: 1em
  height: 1em
  font-size: inherit

  :deep(svg)
    width: 1em
    height: 1em
</style>
