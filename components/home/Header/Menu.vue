<script setup lang="ts">
import { menuLinks } from "~/config/paths";
</script>
<template>
  <div class="flex flex-col gap-6 justify-center relative">
    <h1 class="flex flex-col gap-2 md:items-end lg:items-start">
      <span class="sr-only">Iconic Modeling Agency</span>
      <IconsLogoWord class="max-w-60 sm:max-w-80" />
      <IconsLogoText class="max-w-60 sm:max-w-80" />
    </h1>
    <div class="flex flex-col gap-4 md:flex-row lg:flex-col">
      <NuxtLink
        v-for="link in menuLinks"
        :key="link.text"
        :to="link.to"
        active-class="text-stroke-lg"
      >
        <Button
          :text="link.text"
          variant="secondary"
          size="md"
          class="w-full"
        />
      </NuxtLink>
    </div>
    <IconsLogo
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-[2] lg:left-0 lg:w-[120%] lg:top-8"
      color="var(--gold-700)"
      :opacity="0.1"
    />
  </div>
</template>
