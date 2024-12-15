<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import { projects } from '~/data/projects';
import type { TypeProject } from '~/types/projects';

const route = useRoute();
const router = useRouter();
const currentProject = ref<TypeProject>({
  id: 0,
  name: '',
  slug: '',
  date: '',
  featured_description: '',
  featured_models: [],
  featured_pictures: [],
  next_project_slug: '',
  pictures: [],
  description: '',
});
const slug = route.params.slug as string;
if (!slug) {
  router.push(pagePaths.projects);
}

const findProject = (): Promise<TypeProject | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundProject = projects.find(project => project.slug === slug);
      if (!foundProject) {
        reject(new Error('Project not found'));
      } else {
        resolve(foundProject);
      }
    }, 1000);
  });
};
const fetchProject = async () => {
  try {
    const response = await findProject();
    if (!response) {
      router.push(pagePaths.projects);
      return;
    }
    currentProject.value = response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    router.push(pagePaths.projects);
  }
};

await fetchProject();
</script>

<template>
  <div class="mt-nav overflow-x-hidden">
    <ProjectsSingleHeader :title="currentProject.name" />
    <main>
      <ProjectsSingleContent
        :project="currentProject"
        class="px-4 md:px-6 max-w-lg md:max-w-page-width-lg mx-auto"
      />
      <ProjectsSingleDetails
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
