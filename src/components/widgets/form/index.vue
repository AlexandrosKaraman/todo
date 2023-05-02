<template lang="pug">
.wrapper
  // submit form
  form.login
    form-title.login_title(title="description")
    // Inputs form
    .login_input
      // name
      ui-input(label="description" placeholder="Username" v-model="userName" :disabled="loadStatus")
      // phone
      ui-input(placeholder="Phone Number" v-model="phone" :disabled="loadStatus" allow-numbers-and-symbols)
    // Button submit
    ui-button.login_button(:name="loadStatus ? 'In process...' : 'Sign Up'" :class="{ 'loading': loadStatus }" @click.native="login()" :disabled="loadStatus" type="submit")
    // if error
    form-error(v-if="loginError" error="Login error. Please try again.")
</template>

<script>
// features
import FormTitle from '@/components/features/form/formTitle.vue'
import FormError from '@/components/features/form/formError.vue'
// ui components
import UiInput from '@/components/ui/input/index.vue'
import UiButton from '@/components/ui/button/index.vue'

export default {
  name: 'widgetsLoginForm',
  components: { FormError, UiButton, UiInput, FormTitle },
  // Data
  data() {
    return {
      loadStatus: false,
      userName: '',
      phone: '',
      users: [],
      loginError: false
    }
  },
  // Computed
  computed: {
    // get users
    getUsers() {
      return this.$store.state.users
    },
    // filter: id, username, phone
    filterUsers() {
      this.getUsers.forEach(user => {
        this.users.push({'id' : user.id, 'username' : user.username, 'phone' : user.phone})
      })
      return this.users
    },
    // cleaner phone
    cleanedUsers() {
      return this.filterUsers.map(user => {
        return {
          id: user.id,
          username: user.username,
          phone: user.phone.replace(/\D/g, '')
        }
      })
    }
  },
  async created() {
    // Store
    await this.$store.dispatch('fetchUsers')
  },
  // Methods
  methods: {
    // login
    async login () {
      // Set load status
      this.loadStatus = true

      // Set login error flag
      this.loginError = false

      // Get user by username and phone
      const user = this.cleanedUsers.find(({ username, phone }) => {
        return username === this.userName && phone === this.phone
      })

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2500)
      })

      // Check if user exists
      if (user) {
        // Set user id
        this.$store.commit('SET_USER_ID', user.id)
        // Redirect to about page
        this.$router.push('/about')
      } else {
        // Set login error flag
        this.loginError = true
      }

      // Remove load status
      this.loadStatus = false
    }
  }
}
</script>

<style lang="sass" scoped>
.login
  max-width: 447px
  min-width: 447px
  background-color: #C3C3C3
  &_input
    display: grid
    row-gap: 20px
    padding: 15px 25px 25px 25px
  &_button
    margin: 0 25px 25px 25px
    &.loading
      cursor: not-allowed
      color: black
      background-color: yellow
      opacity: .5
</style>
