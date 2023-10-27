<template>
  <div
    class="cursor-gradient pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute min-h-screen"
    @mousemove="handleCursorPosition"
  ></div>
</template>

<script>
export default defineComponent({
  name: "CursorGradient",
});
</script>

<script setup>
const handleCursorPosition = (e) => {
  const { clientX, clientY } = e;
};

const x = `178px`;
const y = `1171px`;
</script>

<style scoped>
.cursor-gradient {
  background: radial-gradient(
    600px at var(--cursor-x) var(--cursor-y),
    var(--main-bg-color) 5%,
    rgba(45, 212, 191, 0.05) 40%,
    transparent 80%
  );
}
</style>
