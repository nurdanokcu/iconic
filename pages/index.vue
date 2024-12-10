<script setup>
definePageMeta({
  layout: false,
});
import { decor } from "~/assets/images";
</script>

<template>
  <div>
    <HomeHeader ref="header" class="header w-full h-screen min-h-[720px] md:min-h-[820px] lg:min-h-[640px] max-w-max-content-lg mx-auto sticky top-0" />
    <main class="relative bg-white z-50">
      <LayoutNavbar class="sticky top-0 z-[100]" />
      <HomeFeaturedProject
        class="px-4 py-16 max-w-lg mx-auto lg:max-w-max-content-sm lg:px-20"
      />
      <div class="bg-surface-secondary my-16">
        <HomePromotionalModels
          class="px-4 py-16 max-w-lg mx-auto lg:max-w-max-content-sm lg:px-20"
        />
      </div>
      <HomeBlogPosts
        class="px-4 py-16 max-w-lg mx-auto lg:max-w-max-content-sm lg:px-20"
      />
      <img
        class="w-full object-contain max-w-lg mx-auto my-6"
        :src="decor"
        alt="Decor"
      />
      <Contact
        class="px-4 py-16 mx-auto lg:max-w-max-content-sm lg:px-20"
      />
      <LayoutFooter />
    </main>
  </div>
</template>
