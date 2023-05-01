<template lang="pug">
.page_wrapper
  .select_wrapper
    ui-select(:items="filters" v-model="selectedFilter")
  todo-title(:user="user")
  textarea(cols=20 rows=20) {{ user }}
</template>

<script>
// components
import TodoTitle from '@/components/features/todo/title.vue'
// UI
import UiSelect from '@/components/ui/uiSelect/index.vue'

export default {
  name: "widgetsTodo",
  components: {
    UiSelect,
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
  created() {
    this.fetchUserTasks()
    // fetch todoList
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(list => {
    //       for(let i = 0; i <= list.length; i += 1) {
    //         if(list[i].userId === this.userId) {
    //           this.user.push(list[i])
    //         }
    //       }
    //     })
    //     .catch(error => console.error(error))
  },
  methods: {
    async fetchUserTasks() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const list = await response.json()
        this.user = list.filter((task) => task.userId === this.userId)
      } catch (error) {
        console.error(error)
      }
    },
    filterTasks() {
      switch (this.selectedFilter.id) {
        case 2:
          this.user = this.user.filter((task) => task.completed)
          break;
        case 3:
          this.user = this.user.filter((task) => !task.completed)
          break;
        case 4:
          this.user = this.user.filter((task) => task.favorite)
          break;
        default:
          this.fetchUserTasks()
      }
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

</style>
