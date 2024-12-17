<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import type { TypeProject } from '~/types/projects';
import { seoData } from '~/data/seoData';

const { fetchSingleProjectsSSR } = projectsApi();
const route = useRoute();
const router = useRouter();
const projectSlug = route.params.slug as string;

const currentProject = ref<TypeProject>();
if (!projectSlug) {
  router.push(pagePaths.projects);
}
const fetchProject = async () => {
  const { data, error } = await fetchSingleProjectsSSR(projectSlug);
  if (error.value) {
    router.push(pagePaths.projects);
    return;
  }
  if (data.value) {
    currentProject.value = data.value.data;
  } else {
    router.push(pagePaths.projects);
  }
};

await fetchProject();
const title = currentProject.value?.name ? `${currentProject.value.name} | Iconic Modeling Agency` : seoData.projects.title; ;
const description = currentProject.value?.featured_description.slice(0, 225) || seoData.projects.description;

useSeoHead(title, description);
</script>

<template>
  <div
    v-if="currentProject"
    class="mt-nav overflow-x-hidden"
  >
    <ProjectsSingleHeader :title="currentProject.name" />
    <main>
      <ProjectsSingleContent
        :project="currentProject"
        class="px-4 md:px-6 max-w-lg md:max-w-page-width-lg mx-auto"
      />
      <ProjectsSingleDetails
        v-if="currentProject.description || currentProject.pictures"
        :project="currentProject"
        class="py-16 md:max-w-page-width-lg mx-auto"
      />
      <div
        class="md:max-w-page-width-lg mx-auto px-4 md:px-6 flex justify-end border-b-2 pb-4"
      >
        <NuxtLink
          v-if="currentProject.next_project_slug"
          :to="`${pagePaths.projects}/${currentProject.next_project_slug}`"
          aria-label="See Next Project"
          title="See Next Project"
        >
          <Button
            as="span"
            :variant="'secondary'"
            text="See Next Project"
            class="flex-row-reverse"
          >
            <IconsArrowLeft
              class="transform rotate-180"
              color="var(--gold-400)"
            />
          </Button>
        </NuxtLink>
      </div>
      <Contact class="py-16 max-content-centered-md" title-tag="h2" />
    </main>
  </div>
</template>
