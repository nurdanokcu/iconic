<script setup lang="ts">
import type { TypeProject } from '~/types/projects';

const { $viewport } = useNuxtApp();

defineProps({
  project: {
    type: Object as PropType<TypeProject>,
    required: true,
  },
});
</script>

<template>
  <div class="py-16 flex flex-col gap-4 md:gap-16 md:grid grid-cols-6 md:items-center">
    <div class="flex flex-col gap-4 md:col-span-3 xl:col-span-2">
      <ProjectsListItemDetails
        :event="project.event"
        :date="project.date"
        :name="project.name"
        :description="project.featured_description"
        event-class="mr-auto"
      />
      <NuxtLink
        v-for="model in project.featured_models"
        :key="model.id"
        :to="makeModelPath(model.slug)"
        :aria-label="`Learn more about ${model.name}`"
        :title="`Learn more about ${model.name}`"
      >
        <ProjectsModelCard
          :name="model.name"
          :image="model.featured_photo"
          :role="model.role"
        />
      </NuxtLink>
    </div>
    <div class="md:col-span-3 xl:col-span-4 xl:px-12">
      <CommonSwiperCards
        :ratio="$viewport.isGreaterThan('desktop') ? 16 / 9 : 1"
        class="w-full"
        :data="project.featured_pictures"
      />
    </div>
  </div>
</template>
