<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import type { TypeEvent } from '~/types/general';

defineProps({
  title: {
    type: String,
    required: true,
  },
  event: {
    type: Object as PropType<TypeEvent | null>,
    default: null,
  },
});
</script>

<template>
  <header
    class="py-8 overflow-x-clip flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between max-content-centered-lg"
  >
    <div class="flex flex-col gap-4 md:flex-row md:items-center">
      <NuxtLink
        :to="pagePaths.blogs"
        aria-label="Back to projects"
        title="Back to projects"
        class="p-4 hover:scale-110 transform transition-transform duration-300 ease-in-out -ml-4 w-fit"
      >
        <IconsArrowLeft class="w-6 h-6" color="var(--black)" />
      </NuxtLink>
      <h1
        class="font-foglihten text-3xl sm:text-4xl leading-tight uppercase text-surface-secondary"
      >
        {{ title }}
      </h1>
    </div>
    <CommonEventTag
      v-if="event"
      :event="event"
      class="h-fit"
    />
  </header>
</template>
