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
