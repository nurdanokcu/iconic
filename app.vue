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
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
