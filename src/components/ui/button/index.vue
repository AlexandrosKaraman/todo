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
  name: 'UiButton',
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
  max-width: 397px
  min-width: 397px
  min-height: 41px
  background-color: #519945
  color: #FFFFFF
  // Adaptive 768px
  @media screen and (max-width: 768px)
    max-width: 297px
    min-width: 297px
</style>
