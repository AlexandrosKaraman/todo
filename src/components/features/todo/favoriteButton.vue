<template lang="pug">
.wrapper_button
  button.favorite-button(@click="toggleFavorite" :class="{ favorite: isFavorite }")
    i.material-icons {{ isFavorite ? 'star' : 'star_border' }}
</template>

<script>
export default {
  name: "favoriteButton",
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({})
    },
    favoriteList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    toggleFavorite() {
      if(this.isFavorite) {
        this.$emit('remove-from-favorite', this.todo.id)
      } else {
        this.$emit('add-to-favorite', this.todo.id)
      }
    }
  },
  computed: {
    isFavorite() {
      return this.favoriteList.includes(this.todo.id)
    }
  }
}
</script>

<style lang="sass" scoped>
.favorite-button
  border: none
  background-color: transparent
  cursor: pointer
  i.material-icons
    font-size: 20px
  &.favorite
    i.material-icons
      color: gold
</style>
