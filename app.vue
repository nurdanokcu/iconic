<script setup>
import { seoData } from '~/data/seoData';

useSeoHead(seoData.home.title, seoData.home.description);
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--gold-700)" :height="4" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
