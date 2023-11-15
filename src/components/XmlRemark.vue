<template>
  <div>
    <div class="content">
      &lt;!--
      <pre class="inline no-margin-padding">{{ content }}</pre> --&gt;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    remark: Comment,
  },
  data() {
    return {
      content: this.remark.textContent,
    };
  },
};
</script>

<style scoped>
.content {
  color: var(--xml-viewer-remark-content-color);
}

.inline {
  display: inline;
}

.no-margin-padding {
  margin: 0;
  padding: 0;
}
</style>