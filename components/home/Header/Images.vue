<script setup lang="ts">
const { globalSettings } = useWebsiteSettings();
</script>

<template>
  <div class="flex items-center w-full">
    <div
      class="flex items-center gap-2 w-full justify-left md:gap-8 md:items-end max-w-[780px] relative"
    >
      <div class="w-3/6 max-w-72 md:max-w-96 md:w-full">
        <AspectRatio :ratio="1 / 1">
          <img
            :src="globalSettings.homepage_primary_image"
            alt="Image"
            class="object-cover grayscale w-full h-full"
          />
        </AspectRatio>
      </div>
      <div class="w-2/6 flex flex-col gap-6 relative md:w-full">
        <ModelsInfo
          class="hidden md:flex max-w-64 xl:max-w-80"
          :model="globalSettings.homepage_featured_model"
        />
        <div class="w-full max-w-44">
          <AspectRatio :ratio="1 / 1">
            <img
              :src="globalSettings.homepage_secondary_image"
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
