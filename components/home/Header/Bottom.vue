<script setup lang="ts">
defineEmits(['onScrollButton']);
const { globalSettings } = useWebsiteSettings();
</script>

<template>
  <div class="flex flex-col justify-end relative pb-4 md:pb-6">
    <ModelsSwiper
      height-classes="h-full"
      pagination-align="center"
      :images="globalSettings.homepage_slider_images"
    />
    <Button
      variant="tertiary"
      text="Scroll for more"
      class="md:absolute md:left-2 md:bottom-2 md:m-0 z-10"
      @click="$emit('onScrollButton')"
    >
      <IconsChevronDown />
    </Button>
    <div
      class="bg-text-primary absolute bottom-0 right-0 left-12 h-9 -z-[1] md:left-1/2 lg:left-2/3"
    ></div>
  </div>
</template>
