<template lang="pug">
  .ui-select
    .ui-select__wrapper
      .ui-select__selected(@click="toggleDropdown") {{ selectedOption.label }}
        span.ui-select__arrow(:class="{'ui-select__arrow--expanded': isDropdownOpen}") ▼
      ul.ui-select__options(v-if="isDropdownOpen")
        li.ui-select__option(
          v-for="option in filteredOptions"
          :key="option.value"
          :class="{'ui-select__option--selected': option.value === selectedOption.value}"
          @click="selectOption(option)"
        ) {{ option.label }}
</template>

<script>
export default {
  name: 'UiSelect',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: [String, Number, Object],
      default: null,
    },
    filterKey: {
      type: String,
      default: 'label',
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      searchText: '',
    }
  },
  computed: {
    selectedOption() {
      return this.items.find((option) => option.value === this.value) || this.items[0]
    },
    filteredOptions() {
      if (!this.searchText) {
        return this.items
      }
      const regex = new RegExp(this.searchText, 'i')
      return this.items.filter((option) => regex.test(option[this.filterKey]))
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectOption(option) {
      this.$emit('input', option.value)
      this.toggleDropdown()
    }
  }
}
</script>

<style lang="sass" scoped>
.ui-select
  position: relative
  width: 100%
  font-size: 16px

.ui-select__wrapper
  position: relative
  width: 100%
  border: 1px solid #ccc
  border-radius: 4px
  background-color: #fff

.ui-select__selected
  display: flex
  align-items: center
  justify-content: space-between
  padding: 8px
  cursor: pointer

.ui-select__arrow
  margin-left: 8px

.ui-select__arrow--expanded
  transform: rotate(180deg)

.ui-select__options
  position: absolute
  top: 100%
  left: 0
  z-index: 1
  width: 100%
  margin-top: 4px
  padding: 0
  border: 1px solid #ccc
  border-top: none
  border-radius: 0 0 4px 4px
  background-color: #fff
  list-style: none
  max-height: 200px
  overflow-y: auto

.ui-select__option
  padding: 8px
  cursor: pointer

.ui-select__option--selected
  background-color: #f5f5f5
</style>
