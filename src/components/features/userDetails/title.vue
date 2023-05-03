<template lang="pug">
  .title
    // Image avatar
    .title_block
      img.title_img(src="@/assets/images/user.png")
      // Name + slogan
      .title_name
        strong Do-it
        strong.title_item {{ username }}
    // HR
    .hr
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
  display: block
  margin: 20px 10px
  &_block
    display: flex
    align-items: center
    gap: 20px
  &_img
    width: calc(100% - 80%)
  &_name
    display: flex
    flex-direction: column
    gap: 10px
  &_item
    color: var(--violet-color)
  .hr
    margin: 35px 30px
    border-bottom: 3px solid var(--violet-color)
</style>
