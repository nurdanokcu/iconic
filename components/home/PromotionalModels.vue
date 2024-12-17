<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import type { TypeModel } from '~/types/models';

const promotionalModels = ref<TypeModel[]>([]);
const errorMessage = ref('');
const isLoading = ref(false);
const { fetchPromotionalModelsClient } = modelsApi();
const modelsLayout = computed(() => {
  const count = promotionalModels.value.length;
  const classes = [];
  switch (count) {
    case 1:
      classes.push('grid-cols-1 mx-auto md:ml-auto');
      break;
    case 2:
      classes.push('grid-cols-2');
      break;
    case 3:
      classes.push('grid-col-1 sm:grid-cols-3');
      break;
    default:
      classes.push('grid-col-1 sm:grid-cols-3 lg:grid-cols-4');
      break;
  }
  return classes;
});

onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await fetchPromotionalModelsClient();
    promotionalModels.value = response.data;
    if (!response.data.length) {
      errorMessage.value = 'No promotional models found.';
    }
  } catch (error: any) {
    errorMessage.value = error?.data.message || 'An error occurred while fetching promotional models.';
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div
    class="relative flex flex-col gap-16 items-center w-full text-white md:grid md:grid-cols-2 md:gap-16"
  >
    <div class="flex flex-col gap-2">
      <h3 class="font-foglihten text-5xl leading-snug">
        Promotional Models:
      </h3>
      <p class="text-2xl font-extrabold">
        The Face of Your Brand
      </p>
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
      <NuxtLink :to="pagePaths.models" class="mx-auto md:ml-auto md:mr-0">
        <Button
          as="span"
          text="Browse By Event"
          class="w-full"
        >
          <IconsSearch />
        </Button>
      </NuxtLink>
      <CommonNotification
        v-if="errorMessage"
        class="mx-auto md:ml-auto"
        :message="errorMessage"
      />
      <div
        v-else-if="isLoading"
        :class="['grid  gap-4 w-full', modelsLayout]"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="w-full animate-pulse h-36 bg-gray-200 opacity-50 rounded-md"
        />
      </div>
      <div
        v-else-if="promotionalModels.length"
        :class="['grid  gap-4 w-full', modelsLayout]"
      >
        <NuxtLink
          v-for="model in promotionalModels"
          :key="model.id"
          :to="makeModelPath(model.slug)"
          class="flex flex-col w-full gap-2 group max-w-80 mx-auto md:ml-auto"
        >
          <AspectRatio :ratio="1 / 1" class="relative overflow-hidden">
            <NuxtImg
              :src="model.featured_photo"
              alt="Model"
              class="object-cover w-full h-full object-top grayscale transform transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
          <p class="uppercase text-sm leading-tight">{{ model.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <IconsDecor02 class="w-full absolute top-0 -translate-y-1/2 max-w-xl left-1/2 -translate-x-1/2" />
    <IconsDecor02 class="w-full absolute bottom-0 translate-y-1/2 max-w-xl left-1/2 -translate-x-1/2" />
  </div>
</template>
