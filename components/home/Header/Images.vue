<script setup lang="ts">
import { image01, image02, decor02 } from "~/assets/images";
</script>
<template>
  <div class="flex items-center gap-2 pl-8 pr-12 w-full justify-left relative">
    <div class="w-3/6 min-w-36">
      <AspectRatio :ratio="1 / 1">
        <img
          :src="image01"
          alt="Image"
          class="object-cover grayscale w-full h-full"
        />
      </AspectRatio>
    </div>
    <div class="w-2/6 min-w-20 shrink-0">
      <AspectRatio :ratio="1 / 1">
        <img
          :src="image02"
          alt="Image"
          class="object-cover grayscale w-full h-full"
        />
      </AspectRatio>
    </div>
    <div
      class="absolute bg-text-primary left-4 right-8 top-0 bottom-24 -z-[1]"
    ></div>
    <img
      class="absolute top-0 right-0"
      width="190"
      height="165"
      :src="decor02"
      alt="decor"
    />
  </div>
</template>
