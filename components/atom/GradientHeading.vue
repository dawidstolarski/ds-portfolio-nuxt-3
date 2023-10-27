<template>
  <GenericHeading
    v-bind="props"
    class="gradient-heading bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-teal-600 background-animate inline-block"
  >
    <slot />
  </GenericHeading>
</template>

<script>
import { useHeadingProps } from "/composables/props/useHeadingProps.js";

const { defineHeadingProps } = useHeadingProps();

export default defineComponent({
  name: "GradientHeading",
  props: {
    ...defineHeadingProps(),
  },
});
</script>

<script setup>
import { useHeadingProps } from "/composables/props/useHeadingProps.js";

const props = defineProps();
</script>

<style scoped>
.gradient-heading {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
