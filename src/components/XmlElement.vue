<template>
  <div class="xml-element">
    <div>
      <template v-if="!selfClosing">
        <CaretDown v-if="!collapsed" class="caret" @click="toggleCollapsed"/>
        <CaretRight v-else class="caret" @click="toggleCollapsed"/>
      </template>
      <span class="bracket">&lt;</span>
      <XmlElementName class="clickable" :name="name" @click="toggleCollapsed"/>
      <XmlAttributeLine v-if="!collapsed" :attributes="attributes"/>
      <span v-if="selfClosing && !collapsed" class="bracket"> /</span>
      <span v-if="selfClosing && collapsed" class="dots"> ...</span>
      <span class="bracket">&gt;</span>
    </div>
    <div v-if="!collapsed" class="child-elements">
      <div>
        <XmlElement v-for="(childElement, index) in childElements" :key="`e${index}`" :node="childElement"/>
        <XmlElementContent v-for="(childContent, index) in childContents" :key="`t${index}`" :node="childContent"/>
        <XmlCDataSection v-for="(cdataSection, index) in cdataSections" :key="`c${index}`"
                         :cdataSection="cdataSection"/>
        <XmlRemark v-for="(remark, index) in remarks" :key="`r${index}`" :remark="remark"/>
      </div>
    </div>
    <div v-if="!selfClosing && !collapsed">
      <span class="bracket">&lt;</span>
      <XmlElementName :name="name" :closing="true"/>
      <span class="bracket">&gt;</span>
    </div>
  </div>
</template>

<script>
import XmlElementName from './XmlElementName';
import XmlElementContent from './XmlElementContent';
import XmlAttributeLine from './XmlAttributeLine';
import XmlCDataSection from './XmlCDataSection';
import XmlRemark from './XmlRemark';
import CaretDown from './CaretDown.vue';
import CaretRight from './CaretRight.vue';

export default {
  name: 'XmlElement',
  components: {
    XmlElementName,
    XmlElementContent,
    XmlAttributeLine,
    XmlCDataSection,
    XmlRemark,
    CaretDown,
    CaretRight,
  },
  props: {
    node: Object,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    name() {
      return this.node.nodeName;
    },
    childNodes() {
      return Array.from(this.node.childNodes);
    },
    childElements() {
      return this.childNodes.filter((x) => x.nodeType === 1);
    },
    childContents() {
      return this.childNodes.filter((x) => x.nodeType === 3);
    },
    cdataSections() {
      return this.childNodes.filter((x) => x.nodeType === 4);
    },
    remarks() {
      return this.childNodes.filter((x) => x.nodeType === 8);
    },
    attributes() {
      return Array.from(this.node.attributes);
    },
    selfClosing() {
      return (
          !this.childElements.length &&
          !this.childContents.length &&
          !this.cdataSections.length &&
          !this.remarks.length
      );
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.xml-element {
  white-space: nowrap;
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;
}

.bracket,
.dots {
  color: var(--xml-viewer-bracket-color);
}

.caret {
  color: var(--xml-viewer-bracket-color);
  fill: var(--xml-viewer-bracket-color);
}

.child-elements > div {
  margin-left: 20px;
}

.clickable {
  cursor: pointer;
}
</style>