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
  <span class="flex gap-2 items-center group">
    <span class="w-16 h-16 rounded-sm overflow-hidden">
      <NuxtImg
        v-if="image"
        :src="image"
        alt="Model Image"
        class="object-cover w-full h-full rounded-sm grayscale transform transition-transform duration-500 group-hover:scale-110"
      />
      <span
        v-else
        class="w-full h-full bg-gray-200 flex"
      ></span>
    </span>
    <span class="flex flex-col gap-1">
      <span class="text-sm leading-tight capitalize">{{ name }}</span>
      <span class="text-xs text-text-secondary">{{ role }}</span>
    </span>
  </span>
</template>
