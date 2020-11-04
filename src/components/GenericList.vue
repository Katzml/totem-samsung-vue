<template>
  <ul :class="[isHorizontal?'horizontal':'vertical' ]" class="list">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "GenericList",
  props: {
    isHorizontal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  flex-direction: column;
}
.horizontal {
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  
}
.vertical {
    width: 25%;
  place-items: center;
}
</style>
