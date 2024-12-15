<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import type { TypeProject } from '~/types/projects';

const { $viewport } = useNuxtApp();

const props = defineProps({
  project: {
    type: Object as PropType<TypeProject>,
    required: true,
  },
});
const finalPictures = computed(() => {
  if (props.project.featured_pictures.length < 3) {
    return [
      ...props.project.featured_pictures,
      ...props.project.featured_pictures,
    ];
  } else {
    return props.project.featured_pictures;
  }
});
</script>

<template>
  <div
    class="py-16 flex flex-col gap-4 md:gap-8 md:grid grid-cols-6 md:items-center"
  >
    <div class="flex flex-col gap-4 md:col-span-3 xl:col-span-4">
      <Swiper
        :slides-per-view="$viewport.isGreaterThan('tablet') ? 1.2 : 1"
        grab-cursor
        :initial-slide="project.featured_pictures.length - 1"
        :modules="[Pagination, Autoplay]"
        :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
        :keyboard="{ enabled: true }"
        :speed="1000"
        loop
        space-between="16"
        :pagination="{ clickable: true }"
        class="project-details w-full"
      >
        <swiper-slide
          v-for="(image, index) in finalPictures"
          :key="index"
          class="h-full w-full"
        >
          <AspectRatio :ratio="16 / 9" class="w-full">
            <img
              :src="image"
              alt="Project image"
              class="w-full h-full object-cover grayscale rounded-sm"
            />
          </AspectRatio>
        </swiper-slide>
      </Swiper>
    </div>
    <div
      v-dompurify-html="project.description"
      class="px-4 md:px-6 md:col-span-3 xl:col-span-2"
    ></div>
  </div>
</template>

<style>
.project-details {
  padding: 48px 0 !important;
  direction: rtl;
}
.project-details .swiper-pagination {
  text-align: right;
  padding-right: 16px;
}
.project-details .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: var(--gold-400);
  opacity: 1;
  transition: all 0.3s linear;
  padding: 4px;
  display: inline-flex;
}
.project-details .swiper-pagination-bullet-active {
  width: 14px;
  height: 14px;
  background: var(--gold-700);
}
.project-details .swiper-slide {
  height: auto;
  transform: scale(0.9);
  transition: transform 1s ease;
}

.project-details .swiper-slide-active {
  transform: scale(1);
  z-index: 1;
}
</style>
