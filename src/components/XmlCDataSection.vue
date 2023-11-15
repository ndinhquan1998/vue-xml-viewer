<template>
  <div>
    <div class="content">
      <span>&lt;![CDATA[</span>
      <pre class="inline no-margin-padding">{{ content }}</pre><span>]]&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cdataSection: Text,
  },
  data() {
    return {
      content: this.cdataSection.textContent,
    };
  },
};
</script>

<style scoped>
.content {
  color: var(--xml-viewer-cdata-content-color);
}

.inline {
  display: inline;
}

.no-margin-padding {
  margin: 0;
  padding: 0;
}
</style>