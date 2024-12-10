<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="flex gap-1 items-center">
    <span class="w-16 h-16 rounded-sm overflow-hidden">
      <img
        :src="image"
        alt="Model Image"
        class="object-cover w-full h-full rounded-sm overflow-visible grayscale"
      />
    </span>
    <span class="flex flex-col gap-1">
      <span class="text-sm leading-tight">{{ name }}</span>
      <span class="text-xs text-text-secondary">{{ role }}</span>
    </span>
  </span>
</template>
