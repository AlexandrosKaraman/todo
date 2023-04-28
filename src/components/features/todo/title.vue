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
    toggle-favorite(
      :id="item.id"
      :is-favorite="isFavorite(item.id)"
      @favorite-changed="updateFavorites"
    )
</template>

<script>
// UI
import UiCheckbox from '@/components/ui/uiCheckbox/index.vue'
import ToggleFavorite from '@/components/features/todo/toggleFavorite.vue'

export default {
  name: "todoTitle",
  components: {
    UiCheckbox,
    ToggleFavorite
  },
  props: {
    user: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      favorites: []
    }
  },
  created() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []
    this.favorites = favorites
  },
  methods: {
    isFavorite(id) {
      return this.favorites.includes(id)
    },
    updateFavorites() {
      localStorage.setItem("favorites", JSON.stringify(this.favorites))
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
</style>
