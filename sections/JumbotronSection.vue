<template>
  <header class="min-h-[100vh] min-h-screen tracking-tight" ref="target">
    <GenericContainer class="min-h-screen flex items-center">
      <div>
        <h4 class="text-teal-300 leading-loose font-mono text-xl">
          Hello, my name is
        </h4>
        <GenericHeading class="text-slate-200" size="3xl"
          >Dawid Stolarski</GenericHeading
        >
        <div class="flex items-end mb-8 leading-tight gap-4">
          <GenericHeading class="text-slate-400" size="3xl"
            >I build </GenericHeading
          ><AtomGradientHeading size="4xl">Things</AtomGradientHeading>
          <GenericHeading class="text-slate-400" size="3xl"
            >for the
          </GenericHeading>
          <AtomGradientHeading size="4xl">{{
            cActiveProject
          }}</AtomGradientHeading>
        </div>
        <div class="grid grid-cols-2 grid-flow-col gap-2 mb-8">
          <p class="text-slate-400">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <GenericButton>Check out more</GenericButton>
      </div>
    </GenericContainer>
  </header>
</template>

<script>
export default defineComponent({
  name: "JumbotronSection",
});
</script>

<script setup>
import { useMainStore } from "/store/index.js";
import { useIntersectionObserver } from "/composables/useIntersectionObserver.js";

const router = useRouter();
const mainStore = useMainStore();
const { target, isVisible, setActive } = useIntersectionObserver();

const projectList = ["eCom", "Web", "Mobile", "CRM", "CMS"];
const currentIndex = ref(0);

const cActiveProject = computed(() => projectList[currentIndex.value]);

const intervalProject = setInterval(() => {
  if (currentIndex.value === projectList.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
}, 1000);

const resetWindowHash = () => {
  try {
    router.replace({ hash: "" });
  } catch (error) {
    console.log(error);
  }
};

watch(isVisible, (isVisible) => {
  if (isVisible) {
    mainStore.setActive(null);
    resetWindowHash();
  }
});
</script>
