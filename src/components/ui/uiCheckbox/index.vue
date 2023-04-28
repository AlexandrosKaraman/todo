<template lang="pug">
.wrapper
  input(
    type="checkbox"
    v-model="isChecked"
  )
</template>

<script>

export default {
  name: "UiCheckbox",
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
