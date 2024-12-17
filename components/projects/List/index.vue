<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import type { TypeProject } from '~/types/projects';

const { fetchProjectsSSR } = projectsApi();
const finalProjects = ref<TypeProject[]>([]);
const errorMessage = ref('');
const { data, error } = await fetchProjectsSSR();
if (error.value) {
  errorMessage.value = error.value.message || 'An error occurred while fetching projects.';
}
if (data.value) {
  const projects = data.value.data;
  const projectsCount = projects.length;
  switch (projectsCount) {
    case 0:
      errorMessage.value = 'No projects found.';
      break;
    case 1:
      finalProjects.value = [...projects, ...projects, ...projects, ...projects];
      break;
    case 2:
      finalProjects.value = [...projects, ...projects];
      break;
    case 3:
      finalProjects.value = [...projects, projects[0]];
      break;
    default:
      finalProjects.value = projects;
      break;
  }
}
</script>

<template>
  <div class="py-8 max-lg:px-4">
    <CommonNotification
      v-if="errorMessage"
      class="px-4 md:px-6"
      :message="errorMessage"
    />
    <div v-else-if="finalProjects.length" class="w-full">
      <Swiper
        slides-per-view="auto"
        centered-slides
        grab-cursor
        :modules="[Pagination, Autoplay]"
        loop
        :initial-slide="1"
        :keyboard="{ enabled: true }"
        :autoplay="{ delay: 2500, pauseOnMouseEnter: true }"
        :speed="1000"
        space-between="32"
        :pagination="{ clickable: true }"
        class="projects-swiper w-full"
      >
        <swiper-slide
          v-for="project in finalProjects"
          :key="project.id"
          class="h-full w-full"
        >
          <ProjectsListItem class="max-w-4xl w-full" :project="project" />
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.projects-swiper {
  padding: 32px 0 !important;
}
.projects-swiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: var(--gold-400);
  opacity: 1;
  transition: all 0.3s linear;
  padding: 4px;
  display: inline-flex;
}
.projects-swiper .swiper-pagination-bullet-active {
  width: 14px;
  height: 14px;
  background: var(--white);
}
.projects-swiper .swiper-slide {
  height: auto;
  width: 100%;
  transition: transform 1s ease;
}

.projects-swiper .swiper-slide-active {
  transform: translateY(-32px);
  z-index: 1;
}
@media screen and (min-width: 900px) {
  .projects-swiper .swiper-slide {
    width: auto;
  }
}
</style>
