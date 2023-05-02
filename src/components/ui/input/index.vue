<template lang="pug">
// wrapper
.input_wrapper
  p.label(v-if="label") {{ label }}
  // input
  input.field(
    maxlength="25"
    :type="type"
    :value="value"
    v-bind="$attrs"
    v-model="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  )
  .error(v-if="error") {{ error }}
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    // Values
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    // regex
    regex: {
      type: RegExp,
      default: null
    },
    allowNumbersAndSymbols: {
      type: Boolean,
      default: false
    },
    // Label
    label: {
      type: String,
      default: null
    },
  },
  data(){
    return {
      modelValue: this.value,
      error: ''
    }
  },
  // Methods
  methods: {
    updateValue(event) {
      let value = event.target.value

      if (this.regex && !this.regex.test(value)) {
        value = this.modelValue
      }

      if (!this.allowNumbersAndSymbols) {
        value = value.replace(/[^a-zA-Z]/g, '')
      }

      this.modelValue = value
      this.$emit('input', this.modelValue)
    }
  },
  watch: {
    value(newVal) {
      this.modelValue = newVal
    },
    modelValue(newVal) {
      if (this.regex && !this.regex.test(newVal)) {
        this.error = 'Invalid input'
      } else {
        this.error = ''
      }
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="sass" scoped>
.input_wrapper
  width: 100%
  display: flex
  flex-direction: column
  row-gap: 14px
  .label
    color: #5F5F5F
    font-size: 15px
  .field
    width: 100%
    min-height: 41px
    border-radius: 5px
    padding: 5px
    color: black
</style>
