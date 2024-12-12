<script setup lang="ts">
const route = useRoute();
const modelSlug = ref(route.params.slug as string | "");
definePageMeta({
  middleware: "single-model",
});
const { currentModel } = useSingleModel();
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
