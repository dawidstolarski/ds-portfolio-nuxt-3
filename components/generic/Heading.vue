<template>
  <component :is="cTag" :class="[cSize, cSizeMobile, cWeight]">
    <slot />
  </component>
</template>

<script>
import { useHeadingProps } from "/composables/props/useHeadingProps.js";

const { defineHeadingProps } = useHeadingProps();

export default defineComponent({
  name: "Heading",
  props: {
    ...defineHeadingProps(),
  },
});
</script>

<script setup>
import { useHeadingProps } from "/composables/props/useHeadingProps.js";
const {
  createCTag,
  createCSizeDesktop,
  createCSizeMobile,
  createCWeight,
  createComputed,
} = useHeadingProps();

const props = defineProps();
const cTag = createCTag(props);
const cSize = createCSizeDesktop(props);
const cSizeMobile = createCSizeMobile(props);
const cWeight = createCWeight(props);
</script>
