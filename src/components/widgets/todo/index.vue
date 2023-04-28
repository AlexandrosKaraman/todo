<template lang="pug">
.page_wrapper
  todo-title(:user="user")
  textarea(cols=20 rows=20) {{ user }}
</template>

<script>
// components
import TodoTitle from '@/components/features/todo/title.vue'

export default {
  name: "widgetsTodo",
  components: {
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
    return {
      user: []
    }
  },
  created() {
    // fetch todoList
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
