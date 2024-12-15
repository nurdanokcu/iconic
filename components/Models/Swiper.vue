<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

defineProps({
  paginationAlign: {
    type: String,
    default: 'left',
  },
  heightClasses: {
    type: String,
    default: 'h-[500px] 2xl:h-[600px]',
  },
  images: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    :grab-cursor="true"
    :modules="[Pagination, Autoplay]"
    :autoplay="{ delay: 4000 }"
    :loop="true"
    :speed="1400"
    :pagination="{
      clickable: true,
    }"
    :class="['models-swiper w-full h-full', `pagination-${paginationAlign}`]"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <div :class="heightClasses" class="w-full">
        <img
          :src="image"
          alt="Image"
          class="grayscale object-cover w-full h-full slide-image object-center"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
.models-swiper .swiper-wrapper {
  will-change: transform;
}

.models-swiper .swiper-slide.swiper-slide-active .slide-image,
.models-swiper .swiper-slide.swiper-slide-duplicate-active .slide-image {
  transform: scale3d(1.1, 1.1, 1);
}

.models-swiper .slide-image {
  transform: scale3d(0.9, 0.9, 1);
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 1400ms ease;
}
.pagination-left .swiper-pagination {
  text-align: left;
  padding: 0 0 32px 32px;
}
.pagination-center .swiper-pagination {
  text-align: center;
  padding: 0 0 8px 0;
}

.models-swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: var(--gold-400);
  opacity: 1;
  transition: all 0.5s linear;
}
.models-swiper .swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
  background: var(--gold-700);
}
</style>
