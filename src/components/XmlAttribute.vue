<template>
	<span>
		<xml-attribute-name :name="name" class="margin-left-sm"></xml-attribute-name>
		<span class="no-margin-padding assignment">=</span>
		<span class="no-margin-padding quote">"</span>
		<xml-attribute-value :value="value" class="no-margin-padding"></xml-attribute-value>
		<span class="no-margin-padding quote">"</span>
	</span>
</template>

<script>
import XmlAttributeName from "./XmlAttributeName.vue"; // Adjust the import path as needed
import XmlAttributeValue from "./XmlAttributeValue.vue"; // Adjust the import path as needed

export default {
  name: "XmlElement",
  components: {
    XmlAttributeName,
    XmlAttributeValue,
  },
  props: {
    attribute: Object, // You can use Object here since Attr is not available in Vue 2.6
  },
  data() {
    return {
      name: this.attribute.name,
      value: this.attribute.value,
    };
  },
};
</script>

<style scoped>
.no-margin-padding {
  margin: 0;
  padding: 0;
}

.margin-left-sm {
  margin-left: 8px;
}

.assignment {
  color: var(--xml-viewer-assignment-color);
}

.quote {
  color: var(--xml-viewer-quote-color);
}
</style>