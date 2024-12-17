<script setup lang="ts">
import type { TypeProject } from '~/types/projects';

const { fetchFeaturedClient } = projectsApi();
const featuredProject = ref<TypeProject>();
const isLoading = ref(false);
const errorMessage = ref('');
onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await fetchFeaturedClient();
    if (response.data) {
      featuredProject.value = response.data;
    }
  } catch (error: any) {
    errorMessage.value = error?.data.message || 'An error occurred while fetching blogs.';
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <div
      v-if="isLoading"
      class="flex flex-col gap-4 md:flex-row w-full"
    >
      <div
        v-for="i in 2"
        :key="i"
        class="w-full animate-pulse h-96 bg-gray-200 opacity-50 rounded-md"
      />
    </div>
    <CommonFeaturedProject
      v-else-if="featuredProject"
      :project="featuredProject"
      :is-event-visible="true"
      title="Featured Project"
    />
  </div>
</template>
