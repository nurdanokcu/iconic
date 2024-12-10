<script setup lang="ts">
import { decor } from "~/assets/images";
import { pagePaths } from "~/utils/pagePaths";
import { models, moreModels } from "~/data/models";
const allModels = [...models, ...moreModels];
const randomEightModels = allModels.sort(() => 0.5 - Math.random()).slice(0, 8);
const formPath = (modelUrl: string) => `${pagePaths.models}/${modelUrl}`;
</script>

<template>
  <div
    class="relative flex flex-col gap-16 items-center w-full text-white lg:grid lg:grid-cols-2 lg:gap-16"
  >
    <div class="flex flex-col gap-2">
      <h3 class="font-foglihten text-5xl leading-snug">Promotional Models:</h3>
      <p class="text-2xl font-extrabold">The Face of Your Brand</p>
      <p class="text-sm leading-tight">
        Iconic is a new modeling agency in Germany, but we are already making
        waves. We represent some of the most promising new models in the
        country, and we are committed to helping them achieve their modeling
        goals.
      </p>
      <p class="text-sm leading-tight">
        We specialize in a wide range of modeling services, including fashion,
        commercial, and runway modeling. We also offer a variety of training and
        development programs to help our models reach their full potential.
      </p>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <NuxtLink :to="pagePaths.models" class="ml-auto">
        <Button as="span" text="Browse By Event" class="w-full">
          <IconsSearch />
        </Button>
      </NuxtLink>
      <div class="grid grid-cols-2 gap-4 w-full sm:grid-cols-3 md:grid-cols-4">
        <NuxtLink
          v-for="model in randomEightModels"
          :key="model.id"
          :to="`${pagePaths.models}/${model.slug}`"
          class="flex flex-col gap-2 group"
        >
          <AspectRatio :ratio="1 / 1" class="relative overflow-hidden">
            <img
              :src="model.featuredPhoto"
              alt="Model"
              class="object-cover w-full h-full object-top grayscale transform transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
          <p class="uppercase text-sm leading-tight">{{ model.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <img
      class="w-full object-contain absolute top-0 -translate-y-1/2 max-w-xl left-1/2 -translate-x-1/2"
      :src="decor"
      alt="Decor"
    />
    <img
      class="w-full object-contain absolute bottom-0 translate-y-1/2 max-w-xl left-1/2 -translate-x-1/2"
      :src="decor"
      alt="Decor"
    />
  </div>
</template>
