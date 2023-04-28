<template lang="pug">
button.base_button(
  v-if="href === null"
  :type="type"
  :disabled="disabled"
  v-on:click.prevent="event()"
) {{ name }}
</template>

<script>
export default {
  name: "uiButton",
  props: {
    // Params
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    name: {
      type: String,
      required: false,
      default: 'action-button'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    // Event
    event: {
      type: Function,
      required: false,
      default: () => {}
    },
    href: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.base_button
  width: 397px
  min-height: 41px
  background-color: #519945
  color: #FFFFFF
</style>
