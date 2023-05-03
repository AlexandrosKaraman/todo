<template lang="pug">
.wrapper
  template(v-if="user")
    // Title
    user-title(:name="user.name" :username="user.username")
    // Details
    user-item(:item="user")
  template(v-else)
    h2 User data not exists
</template>

<script>
// Components
import UserTitle from '@/components/features/userDetails/title.vue'
import UserItem from '@/components/features/userDetails/item.vue'

export default {
  name: 'widgetsUserDetails',
  components: { UserItem, UserTitle },
  data () {
    return {
      user: null
    }
  },
  // Computed
  computed: {
    // # get user ID
    userId () {
      return this.$store.getters['getUserId']
    }
  },
  // Created
  async created () {
    // # fetch user ID
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ this.userId }`)

    this.user = await response.json()
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  background-color: var(--white-color)
  padding: 5px
  // Adaptive: 768px
  @media screen and (max-width: 768px)
    padding: 0 0 10px 0
</style>
