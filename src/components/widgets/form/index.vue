<template lang="pug">
.wrapper
  // submit form
  form.login
    form-title.login_title(title="description")
    // Inputs form
    .login_input
      ui-input(label="description" placeholder="Username" v-model="userName")
      p(style="color: red;") {{ userName }}
      ui-input(placeholder="Phone Number" v-model="phone" allow-numbers-and-symbols)
      p(style="color: red;") {{ phone }}
    // Button submit
    ui-button.login_button(name="Register" @click.native="login()" type="submit")
    // if error
    form-error(v-if="loginError" error="Login error. Please try again.")
    textarea(cols="40" rows=20) {{ users }}
</template>

<script>
// features
import FormTitle from '@/components/features/form/formTitle.vue'
// ui components
import UiInput from '@/components/ui/uiInput/index.vue'
import UiButton from '@/components/ui/uiButton/index.vue'
import FormError from '@/components/features/form/formError.vue'

export default {
  name: "widgetsLoginForm",
  components: { FormError, UiButton, UiInput, FormTitle },
  data() {
    return {
      userName: '',
      phone: '',
      users: [],
      loginError: false
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          this.users.push({ 'id' : user.id, 'username' : user.username, 'phone' : user.phone})
        });
      })
      .catch(error => console.error(error))
  },
  computed: {
    cleanedUsers() {
      return this.users.map(user => {
        return {
          id: user.id,
          username: user.username,
          phone: user.phone.replace(/\D/g, '')
        }
      })
    }
  },
  methods: {
    // login
    login() {
      this.loginError = false
      const user = this.cleanedUsers.find(user => user.username === this.userName && user.phone === this.phone)
      console.log(user)

      if(user) {
        this.$store.commit('setUserId', user.id)
        this.$router.push('/about')
      } else {
        this.loginError = true
      }
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
</style>