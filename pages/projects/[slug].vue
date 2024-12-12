<script setup lang="ts">
import { pagePaths } from "~/config/paths";
import { projects } from "~/data/projects";
import type { TypeProject } from "~/types/projects";
const route = useRoute();
const router = useRouter();
const currentProject = ref<TypeProject>({
  id: 0,
  name: "",
  slug: "",
  date: "",
  featured_description: "",
  featured_models: [],
  featured_pictures: [],
  next_project_slug: "",
  pictures: [],
  description: "",
});
const slug = route.params.slug as string;
if (!slug) {
  router.push(pagePaths.projects);
}
const findProject = (): Promise<TypeProject | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundProject = projects.find((project) => project.slug === slug);
      if (!foundProject) {
        reject(new Error("Project not found"));
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
      <ProjectsSingleContent :project="currentProject" class="px-4 md:px-6 max-w-lg md:max-w-page-width-lg mx-auto"/>
      <ProjectsSingleDetails :project="currentProject" class="py-16 md:max-w-page-width-lg overflow-visible mx-auto" />
      <Contact class="py-16 max-content-centered-md" />
    </main>
  </div>
</template>
