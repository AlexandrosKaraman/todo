<template lang="pug">
.wrapper_button
  button.favorite-button(@click="toggleFavorite") click {{ isFavorite ? '(is favorite)' : '' }}
</template>

<script>
export default {
  name: 'favoriteButton',
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
    },
    isFavorite: {
      type: Boolean,
      required: true
    }
  },
  // Methods
  methods: {
    toggleFavorite() {
      if(this.isFavorite) {
        this.$emit('remove-from-favorite', this.todo.id)
      } else {
        this.$emit('add-to-favorite', this.todo.id)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.favorite-button
  border: none
  background-color: transparent
  cursor: pointer
</style>
