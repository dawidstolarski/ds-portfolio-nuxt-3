<template>
  <div class="target bg-red-400" ref="target">tes222t</div>
</template>

<script>
export default {
  name: "ElementVisibility",
};
</script>
<script setup>
const target = ref(null);
const targetIsVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-delay");
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  if (target) {
    observer.observe(target);
  }
});
</script>
<style scoped></style>
