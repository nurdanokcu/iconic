<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full lg:max-w-page-width-md mx-auto py-6 px-4 md:px-6">
    <AspectRatio :ratio="2 / 1" class="">
        <img
          :src="image"
          class="w-full h-full object-cover grayscale absolute inset-0"
          alt="Model Image"
        />
    </AspectRatio>
  </div>
</template>
