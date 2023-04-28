<template>
  <button @click="toggleFavorite">
    {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
  </button>
</template>

<script>
export default {
  name: 'ToggleFavorite',
  props: {
    isFavorite: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    toggleFavorite() {
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      if (!Array.isArray(favorites)) {
        favorites = []
      }
      const index = favorites.indexOf(this.id)
      if (index >= 0) {
        favorites.splice(index, 1)
      } else {
        favorites.push(this.id)
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
      this.$emit('favorite-changed')
    }
  }
}
</script>
