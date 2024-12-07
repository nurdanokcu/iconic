<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    :aria-label="`Visit ${text}`"
    :title="`Visit ${text}`"
    class="py-2 px-2 hover:text-button-label transition-colors text-xs"
  >
    {{ text }}
  </NuxtLink>
</template>
