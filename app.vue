<script setup>
const title = 'Iconic Modeling Agency';
const description = 'Iconic Modeling Agency';

useSeoMeta({
  description: description,
  ogDescription: description,
  ogImage: '/og-image.png',
  ogSiteName: title,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/twitter-image.png',
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
