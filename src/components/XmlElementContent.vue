<template>
  <div>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: Text,
  },
  data() {
    return {
      content: this.node.textContent,
    };
  },
};
</script>

<style scoped>
.content {
  color: var(--xml-viewer-element-content-color);
}
</style>