<script setup lang="ts">
import type { TypeProject } from '~/types/projects';

const props = defineProps({
  project: {
    type: Object as PropType<TypeProject>,
    required: true,
  },
});
const urlPath = computed(() => makeProjectPath(props.project.slug));
const models = computed(() => props.project.featured_models.slice(0, 2));
const featuredPictures = computed(() => props.project.featured_pictures || []);
</script>

<template>
  <div
    :class="['flex flex-col gap-8 items-center w-full bg-surface-primary p-8 rounded-sm h-full', {
      'md:grid md:grid-cols-2 md:gap-8': featuredPictures.length,
    }]"
  >
    <div
      v-if="featuredPictures.length"
      class="relative w-full px-4"
    >
      <CommonSwiperCards
        class="h-full z-30"
        :data="featuredPictures"
      />
      <IconsLongArrow
        class="h-full absolute top-0 bottom-0 left-0 -translate-x-1/2"
      />
    </div>
    <div class="flex flex-col gap-4 justify-between w-full flex-1">
      <div class="flex flex-col gap-4">
        <ProjectsListItemDetails
          :event="project.events"
          :date="project.date"
          :name="project.name"
          :description="project.featured_description"
        />
        <ProjectsListItemModels
          v-if="models.length"
          :models="models"
          :swiper-id="String(project.id)"
        />
      </div>
      <NuxtLink class="w-fit ml-auto" :to="urlPath">
        <Button
          v-auto-animate
          as="span"
          text="Read more"
          :aria-label="`Read more about ${project.name}`"
          :title="`Read more about ${project.name}`"
          variant="secondary"
          class="w-full"
        >
          <IconsAlignJustify />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
