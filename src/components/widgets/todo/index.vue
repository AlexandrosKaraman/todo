<template lang="pug">
.page_wrapper
  todo-title(:user="user")
  textarea(cols=20 rows=20) {{ user }}
</template>

<script>
// components
import TodoTitle from '@/components/features/todo/title.vue'
// UI
import UiCheckbox from '@/components/ui/uiCheckbox/index.vue'

export default {
  name: "widgetsTodo",
  components: {
    UiCheckbox,
    TodoTitle
  },
  props: {
    userId: {
      type: Number,
      required: true,
      default: null
    }
  },
  data(){
    return{
      list: null,
      user: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(list => {
        for(let i = 0; i <= list.length; i += 1) {
          if(list[i].userId === this.userId) {
            this.user.push(list[i])
          }
        }
      })
      .catch(error => console.error(error))
  }
}
</script>

<style lang="sass" scoped>

</style>
