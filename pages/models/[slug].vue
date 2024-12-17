<script setup lang="ts">
import type { TypeModelDetailed } from '~/types/models';
import { pagePaths } from '~/config/paths';

const { fetchSingleModelSSR } = modelsApi();
const route = useRoute();
const router = useRouter();
const modelSlug = route.params.slug as string;

const currentModel = ref<TypeModelDetailed>();
if (!modelSlug) {
  router.push(pagePaths.models);
}
const fetchModel = async () => {
  const { data, error } = await fetchSingleModelSSR(modelSlug);
  if (error.value) {
    router.push(pagePaths.models);
    return;
  }
  if (data.value) {
    currentModel.value = data.value.data;
  } else {
    router.push(pagePaths.models);
  }
};
await fetchModel();
</script>

<template>
  <div
    v-if="currentModel"
    class="mt-nav"
  >
    <ModelsSingleHeader
      :header-image="currentModel.cover_photo"
      :model-name="currentModel.name"
      :model-tags="currentModel.characteristics"
      :events="currentModel.events"
    />
    <main class="py-12">
      <ModelsSingleEventTypes class="md:hidden" :events="currentModel.events" />
      <CommonFeaturedProject
        v-if="currentModel.featured_projects"
        :project="currentModel.featured_projects"
        :is-event-visible="false"
        title="Featured in project"
        class="centered-container"
      />
      <template v-if="currentModel.images.length > 0">
        <ModelsSingleImageGalleryOne
          v-if="currentModel.images.length === 1"
          :image="currentModel.images[0]"
        />
        <ModelsSingleImageGallery
          v-else
          class="image-gallery"
          :images="currentModel.images"
        />
      </template>
      <Contact class="py-16 max-content-centered-md" title-tag="h3" />
    </main>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1800px) {
  .image-gallery {
    padding: 0 24px;
  }
}
</style>
