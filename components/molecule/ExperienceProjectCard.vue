<template>
  <GenericCard
    class="grid gap-4 grid-cols-8 group-hover:opacity-50 hover:cursor-pointer"
  >
    <div class="project-photo col-span-2">
      <img src="https://picsum.photos/300/150" alt="" />
    </div>
    <div class="project-desc col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">Project Title</h3>
      <p class="mt-2 text-sm leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quaerat quidem quasi, quibusdam quod quaerat quidem quasi, quibusdam
        quod quasi, quibusdam quod quasi, quibusdam quod quasi, quibusdam
      </p>
    </div>
  </GenericCard>
</template>

<script>
export default defineComponent({
  name: "ExperienceProjectCard",
});
</script>

<script setup></script>
