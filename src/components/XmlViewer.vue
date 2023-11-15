<template>
  <div class="body-xml">
    <button @click="toggle">Toggle Theme</button>
    <div style="padding-left: 20px; padding-top: 20px;" :class="theme">
      <XmlElement :node="rootNode"/>
    </div>
  </div>
</template>

<script>
import XmlElement from './XmlElement';
import testXml from '../assets/test.xml'

export default {
  components: {
    XmlElement
  },
  // props: {
  //   xml: String,
  // },
  data() {
    return {
      parser: new DOMParser(),
      rootNode: null,
      theme: 'light',
      xml:testXml
    };
  },
  watch: {
    xml: 'parseDocument',
  },
  methods: {
    toggle() {
      const body = document.querySelector('body');
      if (this.theme === 'light') {
        body.style.backgroundColor = '#111';
        this.theme = 'dark';
      } else {
        body.style.backgroundColor = '#fdfdfd';
        this.theme = 'light';
      }
    },
    parseDocument(xml) {
      const xmlDoc = this.parser.parseFromString(xml, 'text/xml');
      this.rootNode = xmlDoc.childNodes[0];
    },
  },
  created() {
    this.parseDocument(this.xml);
  },
};
</script>
<style scoped>
.body-xml {
  padding: 0;
  margin: 0;
}

.light {
  --xml-viewer-bracket-color: #111111;
  --xml-viewer-assignment-color: #986801;
  --xml-viewer-quote-color: #50a14f;
  --xml-viewer-attribute-name-color: #986801;
  --xml-viewer-attribute-value-color: #50a14f;
  --xml-viewer-cdata-content-color: #50a14f;
  --xml-viewer-element-content-color: #383a42;
  --xml-viewer-element-name-color: #e45649;
  --xml-viewer-remark-content-color: #a0a1a7;
}

.dark {
  --xml-viewer-bracket-color: #e1e4e8;
  --xml-viewer-assignment-color: #b392f0;
  --xml-viewer-quote-color: #9ecbff;
  --xml-viewer-attribute-name-color: #b392f0;
  --xml-viewer-attribute-value-color: #9ecbff;
  --xml-viewer-cdata-content-color: #9ecbff;
  --xml-viewer-element-content-color: #e1e4e8;
  --xml-viewer-element-name-color: #85e89d;
  --xml-viewer-remark-content-color: #6a737d;
}
</style>