<template>
  <div class="relative transition-all lg:hover:!opacity-100">
    <div
      class="absolute left-0 right-0 inset-y-0 z-40 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
    ></div>
    <slot />
  </div>
</template>

<script>
export default defineComponent({
  name: "Card",
});
</script>

<script setup></script>
