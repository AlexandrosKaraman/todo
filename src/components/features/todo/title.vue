<template lang="pug">
  .wrapper
    // Item
    .item(
      v-for="(item, id) in user"
      :key="id"
    )
      // Title
      span {{ item.title }}
      // Checkbox
      ui-checkbox.checkbox(:value="item.completed")
      // Favorite button
      favorite-button(
        :todo="item.id"
        :is-favorite="isFavorite(item.id)"
        @click="toggleFavorite(item.id)"
      )
</template>

<script>
// UI
import UiCheckbox from '@/components/ui/uiCheckbox/index.vue'
// Components
import FavoriteButton from '@/components/features/todo/favoriteButton.vue'

export default {
  name: "todoTitle",
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
  methods: {
    toggleFavorite(id) {
      if (this.isFavorite(id)) {
        this.removeFromFavorite(id)
      } else {
        this.addToFavorite(id)
      }
    },
    addToFavorite(id) {
      if(!this.favoriteList.includes(id)) {
        this.favoriteList.push(id)
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
      }
    },
    removeFromFavorite(id) {
      if(this.favoriteList.includes(id)) {
        const index = this.favoriteList.indexOf(id)
        this.favoriteList.splice(index, 1)
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList))
      }
    },
    isFavorite(id) {
      return this.favoriteList.includes(id)
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: column
  gap: 10px
  .item
    border: 1px solid #000000
    padding: 5px
    display: flex
    justify-content: space-between
    gap: 8px
    .checkbox
      justify-self: right
</style>
