<template>
  <ul class="flex flex-col gap-4">
    <AtomAnchorListItem hash="about">About</AtomAnchorListItem>
    <AtomAnchorListItem hash="experience">Experience</AtomAnchorListItem>
    <AtomAnchorListItem hash="projects">Projects</AtomAnchorListItem>
  </ul>
</template>

<script>
export default defineComponent({
  name: "AnchorList",
});
</script>

<script setup>
const route = useRoute();

const hash = computed(() => {
  try {
    return route.hash.split("#")[1];
  } catch (error) {
    return "";
  }
});

provide("hash", hash);
</script>
