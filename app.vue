<script setup>
const title = 'Iconic Modeling Agency';
const description = 'Iconic is a new modeling agency in Germany, but we are already making waves. We represent some of the most promising new models in the country, and we are committed to helping them achieve their modeling goals.';

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
});
useSeoMeta({
  ogImage: '/og-image.png',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/twitter-image.png',
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--gold-700)" :height="4" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
