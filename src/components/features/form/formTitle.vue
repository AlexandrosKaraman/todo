<template lang="pug">
p.title {{ title }}
</template>

<script>
export default {
  name: "formTitle",
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  text-align: center
  color: #5F5F5F
  background-color: #A5A5A5
  padding: 15px 0
</style>
