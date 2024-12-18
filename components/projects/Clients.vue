<script setup lang="ts">
const { globalSettings } = useWebsiteSettings();
</script>

<template>
  <div class="border-b-2">
    <h2 class="font-foglihten text-4xl font-medium leading-normal sm:text-5xl">
      Our Clients
    </h2>

    <div class="flex flex-wrap gap-4 justify-center">
      <img
        v-for="(client, index) in globalSettings.client_logos"
        :key="index"
        :src="client"
        alt="Client Logo"
        class="h-28 grayscale object-contain"
      />
    </div>
  </div>
</template>
