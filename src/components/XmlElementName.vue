<template>
  <span>
    <span v-if="closing" class="bracket">/</span>
    <span @click="onClick" class="element-name">{{ name }}</span>
  </span>
</template>

<script>
export default {
  props: {
    name: String,
    closing: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.bracket {
  color: var(--xml-viewer-bracket-color);
}

.element-name {
  color: var(--xml-viewer-element-name-color);
}
</style>