<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";

const props = defineProps({
  data: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

// Swap the first and second images
const reorderedData = computed(() => {
  if (props.data.length > 1) {
    const reordered = [...props.data];
    [reordered[0], reordered[1]] = [reordered[1], reordered[0]];
    return reordered;
  }
  return props.data;
});
</script>

<template>
  <div class="flex w-full px-2 cards-wrapper">
    <Swiper
      effect="cards"
      :grab-cursor="true"
      :modules="[EffectCards, Autoplay]"
      :slide-to-clicked-slide="true"
      :loop="true"
      :initial-slide="1"
      :cards-effect="{
        perSlideOffset: 10,
        slideShadows: false,
        perSlideRotate: 0,
      }"
      class="w-full"
    >
      <SwiperSlide v-for="(item, index) in reorderedData" :key="index">
        <AspectRatio :ratio=" 1/1">
          <div class="w-full h-full relative">
            <img
              class="w-full h-full object-cover grayscale"
              :src="item"
              alt="room"
            />
          </div>
        </AspectRatio>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.cards-wrapper .swiper-3d {
  z-index: 0 !important;
}
.cards-wrapper .swiper-wrapper {
  transform: translate(0px, 0px) !important;
}
</style>
