<script setup lang="ts">
import {
  image01Zoomed,
  slider01,
  slider02,
  slider03,
  slider04,
  slider05,
} from '~/assets/images';

defineProps({
  paginationAlign: {
    type: String,
    default: 'left',
  },
  heightClasses: {
    type: String,
    default: 'h-[500px] 2xl:h-[600px]',
  },
});

const images = [slider04, slider02, slider03, slider01, slider05];
</script>

<template>
  <header class="flex flex-col relative max-w-page-width-xl mx-auto">
    <div
      class="ml-auto max-w-56 w-full -mb-8 z-10 sm:absolute sm:right-0 sm:m-0 md:max-w-96 overflow-hidden"
    >
      <AspectRatio :ratio="1 / 1" class="animate-appear">
        <img
          :src="image01Zoomed"
          alt="Image"
          class="object-cover grayscale w-full h-full"
        />
      </AspectRatio>
    </div>
    <div class="sm:pt-16 sm:pr-16">
      <ModelsSwiper
        :pagination-align="paginationAlign"
        :height-classes="heightClasses"
        :images="images"
      />
    </div>
    <IconsDecor02
      class="w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
    />
  </header>
</template>
