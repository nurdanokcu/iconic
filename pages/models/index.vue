<script setup lang="ts">
import { seoData } from '~/data/seoData';

useSeoHead(seoData.models.title, seoData.models.description);
</script>

<template>
  <div class="mt-nav">
    <ModelsHeader />
    <main>
      <ModelsAll class="max-content-centered-lg" />
      <IconsDecor02 class="mx-auto w-full" />
      <Contact class="py-16 max-content-centered-md" title-tag="h2" />
    </main>
  </div>
</template>
