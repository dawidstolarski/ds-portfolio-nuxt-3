<template>
  <li :class="itemActiveClassList">
    <a
      :href="`/#${hash}`"
      class="inline-block flex items-center gap-4 font-bold"
    >
      <div
        class="min-w-[32px] h-[2px] transition-all"
        :class="barActiveClassList"
      ></div>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default defineComponent({
  name: "AnchorListItem",
});
</script>

<script setup>
import { useMainStore } from "/store/index.js";
const mainStore = useMainStore();

const props = defineProps({
  hash: {
    type: String,
    required: true,
  },
});

if (props.hash === undefined) {
  throw new Error("AnchorListItem: hash is required");
}

const activeHash = inject("hash");

const cActiveHash = computed(() => {
  return mainStore.activeElement || activeHash.value;
});

const isActive = computed(() => {
  return cActiveHash.value === props.hash;
});

const itemActiveClassList = computed(() => {
  return isActive.value ? "text-slate-300" : "text-slate-600";
});

const barActiveClassList = computed(() => {
  return isActive.value ? "bg-slate-300 min-w-[64px]" : "bg-slate-600";
});
</script>
