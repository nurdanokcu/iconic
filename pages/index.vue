<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <HomeHeader
      ref="header"
      class="header w-full h-screen min-h-[720px] md:min-h-[820px] lg:min-h-[640px] max-w-page-width-xl mx-auto sticky top-0"
    />
    <main class="relative bg-white z-50">
      <LayoutNavbar class="sticky top-0 z-[100]" />
      <HomeProject
        class="centered-container lg:px-20"
      />
      <div class="bg-surface-secondary my-16">
        <HomePromotionalModels
          class="centered-container lg:px-20"
        />
      </div>
      <HomeBlogPosts
        class="centered-container lg:px-20"
      />
      <IconsDecor02  class="w-full object-contain max-w-lg mx-auto my-6"/>
      <Contact class="px-4 py-16 mx-auto lg:max-w-page-width-md lg:px-20" />
      <LayoutFooter />
    </main>
  </div>
</template>
