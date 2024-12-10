<script setup lang="ts">
import {
  slider01,
  slider02,
  slider03,
  slider04,
  slider05,
} from "~/assets/images";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const images = [slider01, slider02, slider03, slider04, slider05];

defineProps({
  paginationAlign: {
    type: String,
    default: "left",
  },
  heightClasses: {
    type: String,
    default: "h-[500px] 2xl:h-[600px]",
  },
});
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="30"
    :auto-height="true"
    :grab-cursor="true"
    :modules="[Pagination, Autoplay]"
    :autoplay="{ delay: 4000 }"
    :loop="true"
    :speed="1400"
    :pagination="{
      clickable: true,
    }"
    :class="['models-swiper', `pagination-${paginationAlign}`]"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <div :class="heightClasses">
        <img
          :src="image"
          alt="Image"
          class="grayscale object-cover w-full h-full slide-image"
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
