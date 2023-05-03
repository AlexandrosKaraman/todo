<template lang="pug">
.about
  // user details
  widgets-user-details
  // todo
  widgets-todo(:user-id="userId")
</template>

<script>
// Widgets
import widgetsUserDetails from '@/components/widgets/userDetails/index.vue'
import widgetsTodo from '@/components/widgets/todo/index.vue'

export default {
  name: 'AboutPage',
  components: {
    widgetsTodo,
    widgetsUserDetails
  },
  // Computed
  computed: {
    userId () {
      return this.$store.state.userId
    }
  }
}
</script>

<style lang="sass" scoped>
.about
  margin: 10px 0
  border: 8px solid var(--white-color)
  border-radius: 20px
  display: grid
  grid-template-columns: 3fr 7fr
  // Adaptive: 768px
  @media screen and (max-width: 768px)
    grid-template-columns: 100%
</style>
