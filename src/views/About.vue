<template lang="pug">
.about
  // user details
  widgetsUserDetails(:user-id="userId")
  // todo
  widgets-todo(:user-id="userId")
</template>
<script>
// Widgets
import widgetsUserDetails from '@/components/widgets/userDetails/index.vue'
import WidgetsTodo from '@/components/widgets/todo/index.vue'

export default {
  name: 'about',
  components: {
    WidgetsTodo,
    widgetsUserDetails
  },
  // Computed
  computed: {
    userId() {
      return this.$store.state.userId
    }
  }
}
</script>
