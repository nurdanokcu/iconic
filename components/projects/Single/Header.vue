<script setup>
import { pagePaths } from '~/config/paths';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="bg-text-secondary py-8 overflow-x-clip relative">
    <div
      class="text-surface-primary relative flex w-full max-content-centered-lg"
    >
      <NuxtLink
        :to="pagePaths.projects"
        aria-label="Back to projects"
        title="Back to projects"
        class="p-4 hover:scale-110 transform transition-transform duration-300 ease-in-out -ml-4"
      >
        <IconsArrowLeft class="w-6 h-6" />
      </NuxtLink>
      <h1
        class="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase z-10 pr-24 md:pr-44 lg:pr-96 flex items-start text-left"
      >
        {{ title }}
      </h1>
      <IconsDecor03Hor
        class="absolute top-1/2 -translate-y-1/2 -translate-x-24 left-full md:-translate-x-44 lg:-translate-x-2/3 lg:right-0 w-[617px]"
        color="var(--gold-300)"
      />
    </div>
  </header>
</template>
