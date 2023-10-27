<template>
  <section class="min-h-screen pb-16" ref="target">
    <GenericContainer>
      <div class="grid grid-cols-2 grid-flow-col gap-2">
        <div>
          <div class="sticky min-h-screen top-0 flex flex-col justify-between">
            <OrganismExperienceBioDetails />
            <OrganismExperienceExternalLinks />
          </div>
        </div>
        <div class="flex flex-col gap-14">
          <MoleculeExperienceAnchorElement name="about">
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a
              student-led design studio, and a huge corporation. My main focus
              these days is building products and leading projects for our
              clients at Upstatement. In my free time I've also released an
              online video course that covers everything you need to know to
              build a web app with the Spotify API. When I’m not at the
              computer, I’m usually rock climbing, hanging out with my wife and
              two cats, or running around Hyrule searching for Korok seeds. .
            </p>
          </MoleculeExperienceAnchorElement>
          <MoleculeExperienceAnchorElement name="experience">
            <div class="group flex flex-col gap-8 opacity-100">
              <ul>
                <li>
                  <MoleculeExperienceCard />
                </li>
                <li>
                  <MoleculeExperienceCard />
                </li>
                <li>
                  <MoleculeExperienceCard />
                </li>
                <li>
                  <MoleculeExperienceCard />
                </li>
                <li>
                  <MoleculeExperienceCard />
                </li>
                <li>
                  <MoleculeExperienceCard />
                </li>
              </ul>
            </div>
          </MoleculeExperienceAnchorElement>
          <OrganismExperienceProjectsList />
          <OrganismFooter />
        </div>
      </div>
    </GenericContainer>
  </section>
</template>

<script>
export default defineComponent({
  name: "ExperienceSection",
});
/*
lg:group-hover/list:opacity-50
lg:group-hover:bg-slate-700/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg

 */
</script>
<script setup>
import { useIntersectionObserver } from "/composables/useIntersectionObserver.js";

const { active, isVisible, target } = useIntersectionObserver();

watch(isVisible, (isVisible) => {
  if (isVisible) {
    console.log("visible");
  }
});
</script>
