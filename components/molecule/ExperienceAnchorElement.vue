<template>
  <div class="relative" ref="target" :id="name">
    <a
      :href="`#${name}`"
      :name="name"
      class="absolute top-0 left-0 w-full h-full"
      :id="name"
    ></a>
    <slot />
  </div>
</template>

<script>
export default defineComponent({
  name: "ExperienceAnchorElement",
});
</script>

<script setup>
import { useMainStore } from "/store/index.js";
import { useIntersectionObserver } from "/composables/useIntersectionObserver.js";

const mainStore = useMainStore();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

if (props.name === undefined) {
  throw new Error("ExperienceAnchorElement: name is required");
}

const { target, isVisible, setActive } = useIntersectionObserver();

const cActive = computed(() => mainStore.activeElement);

watch(isVisible, (isVisible) => {
  if (isVisible) {
    mainStore.setActive(props.name);
  }
});
</script>
