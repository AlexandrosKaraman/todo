<template lang="pug">
  .title
    strong.title_item {{ name }}
    strong.title_item {{ username }}
</template>

<script>
export default {
  name: 'userTitle',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    username: {
      type: String,
      required: false,
      default: ''
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
