<script setup lang="ts">
import { pagePaths } from "~/config/paths";
import type { TypeProject } from "~/types/projects";

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
    class="flex flex-col gap-16 items-center w-full lg:grid lg:grid-cols-2 lg:gap-16"
  >
  <div class="relative w-full px-4">
    <CommonSwiperCards :data="project.featured_pictures" />
    <IconsLongArrow class="h-full absolute top-0 bottom-0 left-4 -translate-x-1/2" />
  </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="flex gap-4 justify-between">
        <h2
          class="font-foglihten text-4xl text-surface-secondary font-medium sm:text-5xl"
        >
          {{ title }}
        </h2>
        <CommonEventTag
          v-if="isEventVisible && project.event"
          class="h-fit"
          :event="project.event"
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
          :to="makeModelPath(model.slug)"
          :key="model.id"
        >
          <ProjectsModelCard
            :name="model.name"
            :image="model.featured_photo"
            :role="model.role"
          />
        </NuxtLink>
      </div>
      <NuxtLink :to="pagePaths.projects" class="w-fit ml-auto">
        <Button as="span" text="More Projects" class="w-full">
          <IconsAnnouncement />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
