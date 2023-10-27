<template>
  <div class="group flex gap-4 sticky bottom-5">
    <div
      class="flex flex-col items-center cursor-pointer group-hover:opacity-50 hover:!opacity-100 opacity-75 transition-all"
    >
      <Icon
        name="mdi:linkedin"
        color="white"
        class="h-8 w-8 inline-block mb-2 cursor-pointer"
      />
      <div class="text-xs">Linkedin</div>
    </div>
    <div
      class="flex flex-col items-center cursor-pointer group-hover:opacity-50 hover:!opacity-100 opacity-75 transition-all"
    >
      <Icon name="mdi:resume" color="white" class="h-8 w-8 inline-block mb-2" />
      <div class="text-xs">Resume</div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: "ExperienceExternalLinks",
});
</script>

<script setup></script>
