<script setup lang="ts">
import { singleProject } from "~/data/projects";
import { pagePaths } from "~/utils/pagePaths";

const isIconVisible = ref(true);
const urlPath = computed(() => {
  return `${pagePaths.projects}/${singleProject.slug}`;
});
const models = computed(() => singleProject.featuredModels.slice(0, 2));
const formModelUrl = (modelUrl: string) => `${pagePaths.models}/${modelUrl}`;
</script>

<template>
  <div
    class="flex flex-col gap-16 items-center w-full lg:grid lg:grid-cols-2 lg:gap-16"
  >
    <CommonSwiperCards :data="singleProject.pictures" />
    <div class="flex flex-col gap-4 w-full">
      <div class="flex gap-4">
        <h2
          class="font-foglihten text-4xl text-surface-secondary font-medium sm:text-5xl"
        >
          Featured Project
        </h2>
        <CommonEventTag
          class="h-fit"
          :text="singleProject.event.name"
          :icon="singleProject.event.icon"
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
          :text="singleProject.name"
          variant="secondary"
          class="w-full flex-row-reverse"
        >
          <IconsChevronRight v-if="isIconVisible" />
        </Button>
      </NuxtLink>
      <p class="text-sm leading-tight line-clamp-4">
        {{ singleProject.description }}
      </p>
      <div class="flex flex-col gap-4">
        <NuxtLink
          :to="formModelUrl(model.slug)"
          v-for="model in models"
          :key="model.id"
        >
          <ProjectsModelCard
            :name="model.name"
            :image="model.featuredPhoto"
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
