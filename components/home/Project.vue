<script setup lang="ts">
import type { TypeProject } from '~/types/projects';

const { fetchFeaturedSSR } = projectsApi();
const featuredProject = ref<TypeProject>({
  id: 0,
  name: '',
  slug: '',
  description: '',
  date: '',
  featured_description: '',
  featured_models: [],
  featured_pictures: [],
  pictures: [],
  next_project_slug: '',
  events: {
    id: 0,
    name: '',
    slug: '',
    primary_icon: '',
    secondary_icon: '',
  },
});
const isLoading = ref(true);
const errorMessage = ref('');
const { data, error } = await fetchFeaturedSSR();
if (error.value) {
  isLoading.value = false;
  errorMessage.value = error.value?.message || 'An error occurred while fetching blogs.';
}
if (data.value) {
  featuredProject.value = data.value.data;
  isLoading.value = false;
}
</script>

<template>
  <div>
    <CommonNotification
      v-if="errorMessage"
      :message="errorMessage"
    />
    <CommonFeaturedProject
      v-if="featuredProject"
      :project="featuredProject"
      :is-event-visible="true"
      title="Featured Project"
    />
  </div>
</template>
