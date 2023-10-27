<template>
  <div
    class="bg-gradient-to-b from-slate-900/90 to-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative"
    @mousemove="handleCursorPosition"
  >
    <AtomCursorGradient />
    <JumbotronSection />
    <ExperienceSection />
  </div>
</template>
<script setup>
import JumbotronSection from "/sections/JumbotronSection.vue";
import ExperienceSection from "/sections/ExperienceSection.vue";

const handleCursorPosition = (e) => {
  const { pageX, pageY } = e;
  document.documentElement.style.setProperty("--cursor-x", `${pageX}px`);
  document.documentElement.style.setProperty("--cursor-y", `${pageY}px`);
};
</script>
<style>
:root {
  --main-bg-color: rgba(45, 212, 191, 0.15);
  --cursor-x: 500px;
  --cursor-y: 500px;
}
/**
 * Smooth scrolling on the whole document
 */
html {
  scroll-behavior: smooth;
}
</style>
