<script setup lang="ts">
import { models } from "~/data/models";
import type { TypeModel } from "~/types/models";
import { pagePaths } from "~/config/paths";

const route = useRoute();
const router = useRouter();
const modelSlug = route.params.slug as string;
const currentModel = ref<TypeModel>({
  id: 0,
    name: "",
    slug: "",
    characteristics: [],
    events: [],
    featured_photo: "",
    featured_project: null,
    images: [],
    is_promotional: false,
    role: "",
    cover_photo: "",
});
  if (!modelSlug) {
    router.push(pagePaths.models);
  }

  const findModel = (
    models: TypeModel[],
    slug: string
  ): Promise<TypeModel | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const model = models.find((model) => model.slug === slug);
        if (!model) {
          reject(new Error("Model not found"));
        } else {
          resolve(model);
        }
      }, 1000);
    });
  };

  const fetchModel = async () => {
    try {
      const model = await findModel(models, modelSlug);
      if (!model) {
        router.push(pagePaths.models);
        return;
      }
      currentModel.value = model;
    } catch (error) {
      router.push(pagePaths.models);
    }
  };
 await fetchModel();
</script>

<template>
  <div class="mt-nav">
    <ModelsSingleHeader
      :headerImage="currentModel.cover_photo"
      :modelName="currentModel.name"
      :modelTags="currentModel.characteristics"
      :events="currentModel.events"
    />
    <main class="">
      <ModelsSingleEventTypes class="md:hidden" :events="currentModel.events" />
      <CommonFeaturedProject
        v-if="currentModel.featured_project"
        :project="currentModel.featured_project"
        :isEventVisible="false"
        title="Featured in project"
        class="centered-container"
      />
      <template v-if="currentModel.images.length > 0">
        <ModelsSingleImageGalleryOne
          v-if="currentModel.images.length === 1"
          :image="currentModel.images[0]"
        />
        <ModelsSingleImageGallery class="image-gallery" v-else :images="currentModel.images" />
      </template>
      <Contact class="py-16 max-content-centered-md" />
    </main>
  </div>
</template>

<style scoped>
@media screen and (min-width:1800px) {
  .image-gallery {
    padding: 0 24px
  }
}
</style>
