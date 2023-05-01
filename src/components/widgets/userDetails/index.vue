<template lang="pug">
.wrapper
  // Title
  user-title(:name="user.name" :username="user.username")
  // Details
  user-item(:item="user")
</template>

<script>
// Components
import UserTitle from '@/components/features/userDetails/title.vue'
import UserItem from '@/components/features/userDetails/item.vue'

export default {
  name: "widgetsUserDetails",
  components: { UserItem, UserTitle },
  props: {
    // Id
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: null
    }
  },
  async created() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
    this.user = await response.json()
  }
}
</script>

<style lang="sass" scoped>

</style>
