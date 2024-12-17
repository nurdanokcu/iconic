<script setup lang="ts">
import { seoData } from '~/data/seoData';

useSeoHead(seoData.blogs.title, seoData.blogs.description);
</script>

<template>
  <div class="mt-nav">
    <BlogsList class="max-content-centered-lg" />
    <Contact class="py-16 max-content-centered-md" title-tag="h2" />
  </div>
</template>
