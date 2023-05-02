<template lang="pug">
.field_wrapper.custom_select(v-click-outside="viewOption ? closeList : () => {}")
  // Label
  span.label(
    v-if="label"
    @click.prevent="toggleList()"
    ) {{ label }}

  // Wrapper: Select
  .select_wrapper

    // Wrapper: Header
    .field(
      :class="{ active: viewOption, disabled: disabled, 'with-error': messageIsError }"
      @click.prevent="disabled ? () => {} : toggleList()"
      )

      // Current value
      span.current_value {{ propValue ? propValue.name : (placeholder || 'Select list') }}

      // Symbol: Arrow
      span.icon(:class="{ active: viewOption }") ▼

    // Wrapper: Options (pos: absolute)
    .options_wrapper(
      v-if="viewOption"
      )

      // Search
      input.search_field(
        v-if="withSearch"
        v-model="searchValue"
        placeholder="Search"
        )

      // Option
      span.option(
        v-for="(opt, key) in options.filter((o) => (o.name.toLowerCase()).includes(searchValue.toLowerCase()))"
        :key="key"
        :class="{ active: propValue === opt || value === opt, disabled: opt.disabled || false }"
        @click.prevent="updateValue(opt)"
        ) {{ opt.name }}

  // Message
  p.message(
    v-if="messageText"
    :class="{error: messageIsError}"
  ) {{ messageText }}
</template>

<script>
export default {
  name: 'UiSelectList',
  props: {
    // Params
    id: {
      type: String,
      required: false,
      default: 'base_select'
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    // Label
    label: {
      type: String,
      required: false,
      default: null
    },
    // Search
    withSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    // Values
    value: {
      type: [String, Number, Boolean, Object, Array],
      required: false,
      default: null
    },
    // Options
    options: {
      type: Array,
      required: false,
      default: () => ([])
    },
    // Messages
    messageIsError: {
      type: Boolean,
      required: false,
      default: false
    },
    messageText: {
      type: String,
      required: false,
      default: null
    },
    // Render condition
    updateByLangSwitch: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    'input'
  ],
  // Data
  data () {
    return {
      // Search
      searchValue: '',
      // Statuses
      viewOption: false
    }
  },
  // Computed
  computed: {
    propValue () {
      return this.value
    },
    propDisabled () {
      return this.disabled
    }
  },
  // Methods
  methods: {
    // # Toggle options list viewing status
    toggleList (val) {
      if (this.propDisabled === false) this.viewOption = val || !this.viewOption
    },
    // # Close list
    closeList () {
      this.viewOption = false
    },
    // # Select value (in options list)
    updateValue (val) {
      if (this.propDisabled === false) {
        // Updating v-model...
        this.$emit('input', val)
        // List closing...
        this.toggleList(false)
      }
    }
  }
}
</script>

<style lang="sass">

// Inputs
// - Default
.field_wrapper
  position: relative
  width: auto
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  // Label
  .label
    width: 100%
    margin-bottom: 4px
    color: black
    cursor: pointer
  // Wrapper input
  .wrapper_input
    width: 100%
    min-height: 60px
    max-height: 60px
    gap: 8px
    padding: 0 16px
    border: 1px solid black
    background-color: white !important
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    overflow: hidden
    position: relative
    // Prefix & Suffix
    .prefix,
    .suffix
      padding-top: 2px
      cursor: pointer
    // Input & Select
    .field
      width: 100%
      min-height: 60px
      max-height: 60px
      padding: 4px 0 2px
      color: black
      background: transparent !important
      border: none
      outline: none
      box-shadow: inset 20px 120px 0 20px wheat
      // ! Disabled
      &[disabled],
      &.disabled
        cursor: not-allowed
        box-shadow: none
    // .field_loading
    .field_loading
      position: absolute
      top: 50%
      right: 10px
      width: 20px
      height: 20px
      transform: translateY(-50%)
      &::after
        content: ' '
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        animation: rotate 1s linear infinite
    // ! Disabled
    &.disabled
      background-color: grey !important
      .field
        box-shadow: none
    // ! Error
    &.with-error
      color: red
      border-color: red
      .field::placeholder
        color: red
  // Custom Select
  &.custom_select
    // Wrapper: Select
    .select_wrapper
      width: 100%
      display: flex
      flex-direction: column
      position: relative
      // Field
      .field
        width: 100%
        min-height: 60px
        max-height: 60px
        gap: 16px
        padding: 18px 16px 14px 16px
        border: 1px solid black
        background-color: wheat !important
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        cursor: pointer
        position: relative
        // Value
        .current_value
          max-width: 100%
          width: 100%
          white-space: nowrap
          text-overflow: ellipsis
          overflow: hidden
        // Icon
        .icon
          min-width: 14px
          max-width: 14px
          min-height: 14px
          max-height: 14px
          padding: 2px
          margin-left: 8px
          fill: black
        // ! Disabled
        &.disabled
          background-color: grey !important
          cursor: not-allowed
        // ! Active
        &.active .icon
          transform: rotate(180deg)
      // Wrapper: Options
      .options_wrapper
        width: 100%
        max-height: 290px
        padding: 12px 0
        background-color: green
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15)
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
        overflow-y: auto
        position: absolute
        top: 100%
        left: 0
        z-index: 1
        // Wrapper: Search
        .search_field
          max-width: calc(100% - 20px)
          width: 100%
          margin: 0 10px
          padding: 5px 0
          border: none
          border-bottom: 1px solid black
          background-color: transparent !important
          display: flex
          flex-direction: row
          justify-content: flex-start
          align-items: center
          outline: none
          z-index: 1
        // Option
        .option
          width: 100%
          min-height: max-content
          padding: 10px
          display: flex
          flex-direction: row
          justify-content: flex-start
          align-items: center
          z-index: 1
          // ! Hover
          &.disabled:hover
            background-color: wheat
            cursor: pointer
          // ! Hover
          &:not(.disabled):hover
            background-color: wheat
            cursor: pointer
          // ! Active
          &.active
            font-weight: 700
  // Wrapper: Input
  .input_wrapper
    width: 100%
    min-height: 60px
    max-height: 60px
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    position: relative
  // Button: Icon
  .field_btn
    min-height: 22px
    max-height: 22px
    min-width: 22px
    max-width: 22px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    //position: absolute
    //top: calc(50% - 11px)
    //right: 16px
    //z-index: 1
    .icon
      fill: grey
      transition: fill .5s ease
    // ! Hover
    &:hover .icon
      fill: black
</style>
