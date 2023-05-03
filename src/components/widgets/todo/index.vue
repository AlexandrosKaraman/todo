<template lang="pug">
.page_wrapper
  .title_block
    // Title
    todo-title Get things done with ease: Todo
    // Logout
    todo-logout.logout
  // Select
  ui-select-list(
    v-model="selectedFilter"
    :options="filters"
    placeholder="Select todo list filter"
  )
  // Todos list
  my-todos(:user="filterTasks()")
</template>

<script>
// components
import MyTodos from "@/components/features/todo/todos.vue"
import TodoTitle from "@/components/features/todo/title.vue";
// UI
import UiSelectList from '@/components/ui/select/index.vue'
import TodoLogout from '@/components/features/todo/logout.vue'

export default {
  name: 'WidgetsTodo',
  components: {
    TodoLogout,
      TodoTitle,
      MyTodos,
    UiSelectList
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
      // options
      filters: [
        { id: 1, name: 'All'},
        { id: 2, name: 'Completed'},
        { id: 3, name: 'Uncompleted'},
        { id: 4, name: 'Favorites'},
      ],
      selectedFilter: { id: 1, name: 'All' },
      user: []
    }
  },
  beforeMount () {
    this.fetchUserTasks()
  },
  // Methods
  methods: {
    // # async fetch todos
    async fetchUserTasks() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const list = await response.json()
        this.user = list.filter((task) => task.userId === this.userId)
      } catch (error) {
        console.error(error)
      }
    },
    // # filter task
    filterTasks () {
      let tasks = this.user

      switch (this.selectedFilter.id) {
        // 2
        case 2:
          tasks = tasks.filter(({ completed }) => completed === true)
          break;
        // 3
        case 3:
          tasks = tasks.filter(({ completed }) => completed === false)
          break;
        // 4
        case 4:
          tasks = tasks.filter((task) => {
            const favorite = JSON.parse(localStorage.getItem('favoriteList'))
            let isFavorite = false

            // Cycle by favorite list
            for (let i = 0, l = favorite.length; i < l; i += 1) {
              if (favorite[i] === task.id) {
                isFavorite = true
              }
            }

            return isFavorite
          })
          break;
      }

      return tasks.length > 0 ? tasks : []
    },
  },
  watch: {
    selectedFilter: {
      handler() {
        this.filterTasks()
      },
      deep: true,
    },
  },

}
</script>

<style lang="sass" scoped>
.title_block
  display: flex
  justify-content: space-around
  .logout
    margin: 12px
</style>

