<script setup lang="ts">
import type { TypeModel } from '@/types/models';

defineProps({
  model: {
    type: Object as PropType<TypeModel>,
    required: true,
  },
});
</script>

<template>
  <div class="relative group overflow-hidden min-w-60">
    <AspectRatio :ratio="7 / 10" class="relative">
      <img
        :src="model.featuredPhoto"
        alt="Image"
        class="object-cover w-full h-full grayscale"
      >
    </AspectRatio>

    <ModelsSingleInfo
      :model="model"
      class="absolute bottom-0 w-full transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
    />
  </div>
</template>

<style scoped>
/* Ensures overflow doesn't break outside the container */
.overflow-hidden {
  overflow: hidden;
}
</style>
