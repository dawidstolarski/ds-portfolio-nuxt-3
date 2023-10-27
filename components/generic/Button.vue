<template>
  <component :is="tag" class="text-teal-300 border rounded-lg py-4 px-8 border-teal-300 hover:-translate-y-1 hover:-translate-x-1 transition-all hover:shadow-[4px_4px_0_0_rgb(94,234,212)]">
    <slot></slot>
  </component>
</template>

<script>
export default defineComponent({
  name: 'ButtonComponent'
})
</script>

<script setup>
  const props = defineProps({
    to: {
      type: String,
      default: () => ''
    }
  })

  const tag =  props.to ? 'nuxt-link' : 'button';
</script>
