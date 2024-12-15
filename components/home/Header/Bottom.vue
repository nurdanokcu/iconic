<script setup lang="ts">
import {
  slider01,
  slider02,
  slider03,
  slider04,
  slider05,
} from '~/assets/images';

defineEmits(['onScrollButton']);
const images = [slider01, slider02, slider03, slider04, slider05];
</script>

<template>
  <div class="flex flex-col justify-end md:relative">
    <ModelsSwiper
      height-classes="h-full"
      pagination-align="center"
      :images="images"
    />
    <Button
      variant="tertiary"
      text="Scroll for more"
      class="mb-2 md:absolute md:left-2 md:bottom-2 md:m-0 z-10"
      @click="$emit('onScrollButton')"
    >
      <IconsChevronDown />
    </Button>
  </div>
</template>
