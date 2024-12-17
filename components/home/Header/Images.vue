<script setup lang="ts">
import { image01, image02, carIcon } from '~/assets/images';

const singleModal = {
  id: 1,
  name: 'AISHWARYA gupta',
  featured_photo: image01,
  images: [],
  cover_photo: image02,
  characteristics: [
    '5\'10"',
    'shoe 9',
    'size 2',
    'h34',
    'w24',
    'b32',
    'hair brown',
    'eyes brown',
  ],
  slug: 'aishwarya-gupta',
  role: 'Lead Model',
  is_promotional: false,
  events: [{
    id: 1,
    name: 'Car Shows',
    primary_icon: carIcon,
    secondary_icon: carIcon,
    slug: 'fashion',
  }],
};
</script>

<template>
  <div class="flex items-center w-full">
    <div
      class="flex items-center gap-2 w-full justify-left md:gap-8 md:items-end max-w-[780px] relative"
    >
      <div class="w-3/6 max-w-72 md:max-w-96 md:w-full">
        <AspectRatio :ratio="1 / 1">
          <img
            :src="singleModal.featured_photo"
            alt="Image"
            class="object-cover grayscale w-full h-full"
          />
        </AspectRatio>
      </div>
      <div class="w-2/6 flex flex-col gap-6 relative md:w-full">
        <ModelsInfo
          class="hidden md:flex max-w-64 xl:max-w-80"
          :model="singleModal"
        />
        <div class="w-full max-w-44">
          <AspectRatio :ratio="1 / 1">
            <img
              :src="singleModal.cover_photo"
              alt="Image"
              class="object-cover w-full h-full grayscale"
            />
          </AspectRatio>
        </div>
      </div>
      <div
        class="absolute bg-text-primary -left-4 right-0 top-0 bottom-1/4 -z-[1] md:-left-16 md:right-1/4 md:top-[20%] md:-bottom-6 lg:-top-4 lg:right-[20%] lg:bottom-1/4"
      ></div>
    </div>
    <IconsDecor01 class="absolute top-0 right-0 md:hidden" />
  </div>
</template>
