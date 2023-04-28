<template lang="pug">
  .title
    h2.title_item {{ title.name }}
    h3.title_item {{ title.username }}
</template>

<script>
export default {
  name: "userTitle",
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  color: red
  display: flex
  flex-direction: column
  gap: 10px
  margin: 20px 0
</style>
