<template lang="pug">
  button.button-logout(@click="logout") Logout
</template>

<script>

export default {
  name: "TodoLogout",
  methods: {
    logout() {
      // Remove user id from localStorage
      localStorage.removeItem('userId')
      // Redirect to home page
      this.$router.push('/')
    }
  }
}

</script>
<style scoped lang="sass">
.button-logout
  color: var(--red-color)
  &:hover
    color: var(--white-color)
</style>
