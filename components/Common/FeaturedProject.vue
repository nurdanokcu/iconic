<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import type { TypeProject } from '~/types/projects';

const props = defineProps({
  project: {
    type: Object as PropType<TypeProject>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isEventVisible: {
    type: Boolean,
    default: true,
  },
});

const isIconVisible = ref(true);
const urlPath = computed(() => makeProjectPath(props.project.slug));
const models = computed(() => props.project.featured_models.slice(0, 2));
</script>

<template>
  <div
    class="flex flex-col gap-16 w-full md:grid md:grid-cols-2 md:gap-16"
  >
    <div class="relative w-full px-4">
      <CommonSwiperCards :data="project.featured_pictures" />
      <IconsLongArrow class="h-full absolute top-0 bottom-0 left-0 -translate-x-1/2" />
    </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-col gap-4 w-full flex-1 justify-center">
        <div class="flex gap-4 justify-between">
          <h2
            class="font-foglihten text-4xl text-surface-secondary font-medium sm:text-5xl"
          >
            {{ title }}
          </h2>
          <CommonEventTag
            v-if="isEventVisible && project.events"
            class="h-fit"
            :event="project.events"
          />
        </div>
        <NuxtLink
          class="group"
          :to="urlPath"
          @mouseover="isIconVisible = false"
          @mouseleave="isIconVisible = true"
        >
          <Button
            v-auto-animate
            as="span"
            :text="project.name"
            variant="secondary"
            class="w-full flex-row-reverse"
          >
            <IconsChevronRight v-if="isIconVisible" />
          </Button>
        </NuxtLink>
        <p class="text-sm leading-tight line-clamp-4">
          {{ project.featured_description }}
        </p>
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="model in models"
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
      </div>
      <NuxtLink :to="pagePaths.projects" class="w-fit ml-auto">
        <Button
          as="span"
          text="More Projects"
          class="w-full"
        >
          <IconsAnnouncement />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
