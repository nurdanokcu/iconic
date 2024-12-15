<script setup lang="ts">
import { models, moreModels } from '~/data/models';
import type { TypeModel } from '~/types/models';
import { pagePaths } from '~/config/paths';

const route = useRoute();
const router = useRouter();
const modelSlug = route.params.slug as string;
const allModels = [...models, ...moreModels];

const currentModel = ref<TypeModel>({
  id: 0,
  name: '',
  slug: '',
  characteristics: [],
  events: [],
  featured_photo: '',
  featured_project: null,
  images: [],
  is_promotional: false,
  role: '',
  cover_photo: '',
});
if (!modelSlug) {
  router.push(pagePaths.models);
}

const findModel = (
  models: TypeModel[],
  slug: string,
): Promise<TypeModel | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const model = models.find(model => model.slug === slug);
      if (!model) {
        reject(new Error('Model not found'));
      } else {
        resolve(model);
      }
    }, 1000);
  });
};

const fetchModel = async () => {
  try {
    const model = await findModel(allModels, modelSlug);
    if (!model) {
      router.push(pagePaths.models);
      return;
    }
    currentModel.value = model;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    router.push(pagePaths.models);
  }
};
await fetchModel();
</script>

<template>
  <div class="mt-nav">
    <ModelsSingleHeader
      :header-image="currentModel.cover_photo"
      :model-name="currentModel.name"
      :model-tags="currentModel.characteristics"
      :events="currentModel.events"
    />
    <main class="">
      <ModelsSingleEventTypes class="md:hidden" :events="currentModel.events" />
      <CommonFeaturedProject
        v-if="currentModel.featured_project"
        :project="currentModel.featured_project"
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
