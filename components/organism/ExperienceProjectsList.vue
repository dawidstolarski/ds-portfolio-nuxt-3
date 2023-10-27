<template>
  <MoleculeExperienceAnchorElement
    name="projects"
    class="group opacity-100 group-hover:op75 flex flex-col gap-14"
  >
    <MoleculeExperienceProjectCard />
    <MoleculeExperienceProjectCard />
    <MoleculeExperienceProjectCard />
    <MoleculeExperienceProjectCard />
  </MoleculeExperienceAnchorElement>
</template>

<script>
export default defineComponent({
  name: "ExperienceProjectsList",
});
</script>

<script setup></script>
