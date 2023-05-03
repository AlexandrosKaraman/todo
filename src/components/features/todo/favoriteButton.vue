<template lang="pug">
.wrapper_button
  button.favorite-button(@click="toggleFavorite")
    icon-star.favorite-icon(:is-favorite="isFavorite" :class="{'favorite-icon-yellow': isFavorite}")
</template>

<script>
import IconStar from "@/assets/images/svg/star.vue";

export default {
  name: 'favoriteButton',
    components: {IconStar},
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
    // # Toggle favorite
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
.favorite-icon-yellow
  fill: #FAC608
.favorite-icon
  width: 30px
.favorite-button
  border: none
  background-color: transparent
  cursor: pointer
</style>
