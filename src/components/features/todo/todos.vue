<template lang="pug">
  .wrapper
    // Item
    .todos(
      v-for="(item, id) in user"
      :key="id"
    )
      // Favorite button
      favorite-button(
        :todo="item"
        :favorite-list="favoriteList"
        :is-favorite="isFavorite(item.id)"
        @remove-from-favorite="removeFromFavorite"
        @add-to-favorite="addToFavorite"
      )
      // Title
      span {{ item.title }}
      // Checkbox
      ui-checkbox(:value="item.completed")
</template>

<script>
// UI
import UiCheckbox from '@/components/ui/checkbox/index.vue'
// Components
import FavoriteButton from '@/components/features/todo/favoriteButton.vue'

export default {
  name: 'MyTodos',
  components: {
    UiCheckbox,
    FavoriteButton
  },
  props: {
    user: {
      type: Array,
      required: true
    }
  },
  // Data
  data() {
    return {
      favoriteList: []
    }
  },
  created() {
    // Storage
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList'))

    if (favoriteList) {
      this.favoriteList = favoriteList
    }
  },
  // Methods
  methods: {
    // # toggle favorite
    toggleFavorite(id) {
      if (this.isFavorite(id)) {
        this.removeFromFavorite(id)
      } else {
        this.addToFavorite(id)
      }
    },
    // # add favorite
    addToFavorite(id) {
      if(!this.favoriteList.includes(id)) {
        this.favoriteList.push(id)
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
      }
    },
    // # remove favorite
    removeFromFavorite(id) {
      if(this.favoriteList.includes(id)) {
        const index = this.favoriteList.indexOf(id)
        this.favoriteList.splice(index, 1)
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
      }
    },
    // # favorite by id
    isFavorite(id) {
      return this.favoriteList.includes(id)
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  margin: 15px auto
  padding: 0 35px
  display: flex
  flex-direction: column
  gap: 10px
  justify-content: center
  .todos
    background-color: var(--white-color)
    color: var(--black-color-100)
    border-radius: 20px
    padding: 7px
    display: grid
    align-items: center
    grid-template-columns: 1fr 8fr 1fr
  // Adaptive: 768px
  @media screen and (max-width: 768px)
    padding: 0 8px
    .todos
      grid-template-columns: 2fr 7fr 1fr
</style>
