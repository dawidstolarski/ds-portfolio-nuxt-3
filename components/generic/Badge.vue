<template>
  <div class="inline-block items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
    <slot />
  </div>
</template>

<script>
export default defineComponent({
  name: 'Badge'
})
</script>

<script setup></script>
