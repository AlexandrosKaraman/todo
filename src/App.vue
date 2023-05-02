<template lang="pug">
.__container
  router-view
</template>

<script>
export default {
  name: 'AppRoot',
  mounted () {
    // get user id from local storage
    const userId = localStorage.getItem('userId')

    // if user id is not set
    if (!userId) {
      // redirect to home page
      this.$router.push('/')
    } else {
      // set user id in store
      this.$store.commit('SET_USER_ID', userId)
      // redirect to about page
      this.$router.push('/about')
    }
  }
}
</script>
