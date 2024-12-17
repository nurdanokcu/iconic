<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { TypeEvent } from '~/types/general';

defineProps({
  headerImage: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  modelTags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  events: {
    type: Array as PropType<TypeEvent[]>,
    required: true,
  },
});

// Reactive class for the image
const imageClass = ref('absolute inset-0 w-full h-full object-cover grayscale -z-[1] animate-appear');

// Function to check the aspect ratio
const updateImageClass = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  if (aspectRatio > 2) { // Example condition for "short height and long width"
    imageClass.value = 'absolute inset-0 w-full h-full object-cover object-top grayscale -z-[1] animate-appear';
  } else {
    imageClass.value = 'absolute inset-0 w-full h-full object-cover grayscale -z-[1] animate-appear';
  }
};

// Listen for window resize
onMounted(() => {
  updateImageClass(); // Check on mount
  window.addEventListener('resize', updateImageClass); // Update on resize
});

onUnmounted(() => {
  window.removeEventListener('resize', updateImageClass); // Clean up listener
});
</script>

<template>
  <header
    class="w-full h-screen-height relative overflow-hidden"
  >
    <NuxtImg
      :src="headerImage"
      :alt="modelName"
      :class="imageClass"
    />
    <div class="w-full max-content-centered-lg p-4 md:px-6 flex items-end md:items-stretch lg:items-end h-full">
      <div class="flex flex-col justify-between items-end lg:flex-row lg:w-full lg:gap-8">
        <div class="flex flex-col p-4 gap-2 bg-surface-primary max-w-md h-fit">
          <h1 class="font-extrabold leading-tight text-2xl uppercase">
            {{ modelName }}
          </h1>
          <div class="flex flex-wrap justify-between gap-x-4">
            <p
              v-for="tag in modelTags"
              :key="tag"
              class="pr-4"
            >
              {{ tag }}
            </p>
          </div>
        </div>
        <ModelsSingleEventTypes class="hidden md:flex max-w-96" :events="events" />
      </div>
    </div>
    <IconsDecor03 class="absolute top-4 left-0 -translate-x-1/2" color="var(--white)" />
  </header>
</template>
