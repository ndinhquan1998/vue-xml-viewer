<template>
  <span>
    <span class="attribute-value">{{ value }}</span>
  </span>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style scoped>
.attribute-value {
  color: var(--xml-viewer-attribute-value-color);
  padding: 0;
  margin: 0;
}
</style>