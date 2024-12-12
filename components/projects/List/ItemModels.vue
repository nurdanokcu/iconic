<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import type { TypeModelSummary } from "~/types/projects";
import type { Swiper as SwiperType } from "swiper/types";

const props = defineProps({
  models: {
    type: Object as PropType<TypeModelSummary[]>,
    required: true,
  },
  swiperId: {
    type: String,
    required: true,
  },
});

const activeIndex = ref(1);
const numberOfModels = computed(() => props.models.length);
const settings = computed(() => ({
  slidesPerView: 1,
  grabCursor: true,
  modules: [Navigation],
  loop: true,
  keyboard: { enabled: true },
  speed: 800,
  navigation: {
    nextEl: `#next-${props.swiperId}`,
    prevEl: `#prev-${props.swiperId}`,
  },
}));
const text = computed(() => `${activeIndex.value}/${numberOfModels.value}`);
const handleSlideChange = (event: SwiperType) => {
  activeIndex.value = event.activeIndex + 1;
};

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <p class="text-sm leading-tight text-text-secondary">Featured models:</p>
      <p class="text-stroke-sm">{{ text }}</p>
    </div>
    <div class="flex gap-2 items-center -mx-2">
      <Button
        :id="`prev-${swiperId}`"
        class="w-8 h-full"
        variant="tertiary"
        aria-label="Previous model"
        title="Previous model"
      >
        <IconsChevronLeft />
      </Button>
      <swiper
        v-bind="settings"
        @slide-change="handleSlideChange($event)"
        class="flex-1 project-card-swiper"
      >
        <swiper-slide v-for="model in models" :key="model.id">
          <NuxtLink :to="makeModelPath(model.slug)">
            <ProjectsModelCard
              :name="model.name"
              :image="model.featured_photo"
              :role="model.role"
            />
          </NuxtLink>
        </swiper-slide>
      </swiper>
      <Button
        :id="`next-${swiperId}`"
        class="w-8 h-full"
        variant="tertiary"
        aria-label="Next model"
        title="Next model"
      >
        <IconsChevronLeft class="transform rotate-180" />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.project-card-swiper .swiper-slide-active {
  transform: translate(0) !important;
}
</style>
