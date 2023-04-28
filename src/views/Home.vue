<template lang="pug">
.page_wrapper
  widgets-login-form
</template>

<script>

import widgetsLoginForm from '@/components/widgets/form/index.vue'

export default {
  name: 'Home',
  components: { widgetsLoginForm }
}
</script>
