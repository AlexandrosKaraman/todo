<template lang="pug">
.wrapper
  .item
    strong username:
    span.item {{ item.username }}
  .item
    strong email:
    span.item {{ item.email }}
  .item
    strong phone:
    span.item {{ item.phone }}
  .item
    strong street:
    span.item {{ item.address.street }}
  .item
    strong suite:
    span.item {{ item.address.suite }}
  .item
    strong city:
    span.item {{ item.address.city }}
  .item
    strong zipcode:
    span.item {{ item.address.zipcode }}
  .item
    strong company:
    span.item {{ item.company.name }}
  .item
    strong catch phrase:
    span.item {{ item.company.catchPhrase }}
  .item
    strong bs:
    span.item {{ item.company.bs }}

</template>

<script>
export default {
  name: "userItem",
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  display: grid
  gap: 8px
  .item
    display: flex
    column-gap: 6px
</style>
