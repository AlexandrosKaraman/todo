<template lang="pug">
  h1.title
    slot
</template>

<script>
export default {
  name: "TodoTitle"
}
</script>

<style lang="sass" scoped>
.title
  padding: 35px 20px
  color: var(--white-color)
  // Adaptive: 768px
  @media screen and (max-width: 768px)
    font-size: 24px
</style>
