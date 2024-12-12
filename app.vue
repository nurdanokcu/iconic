<script setup>
const description = 'Iconic Modeling Agency';

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
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="var(--gold-700)" :height="4" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
