<script setup>
definePageMeta({
  layout: false,
});


const scrolledPastLockScreen = ref(false);

function handleScroll() {
  if (window.scrollY > 200) {
    scrolledPastLockScreen.value = true;
  } else {
    scrolledPastLockScreen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Lock Screen Header Container -->
    <div class="relative h-screen">
      <!-- Sticky header that slides up -->
      <div
        class="sticky top-0 h-screen bg-cover bg-center transition-transform duration-500 ease-out"
        :class="scrolledPastLockScreen ? '-translate-y-full' : 'translate-y-0'"
      >
        <HomeHeader
          ref="header"
          class="w-full h-screen min-h-[720px] md:min-h-[820px] lg:min-h-[640px] max-w-page-width-xl mx-auto"
        />
      </div>
    </div>

    <!-- Main Content (no transforms, no extra margin) -->
    <main class="flex-1 bg-white transition-transform duration-500 ease-out"
    :class="scrolledPastLockScreen ? '-translate-y-[200px]' : 'translate-y-0'"
    >
      <LayoutNavbar />
      <HomeProject class="centered-container lg:px-20" />
      <div class="bg-surface-secondary my-16">
        <HomePromotionalModels class="centered-container lg:px-20" />
      </div>
      <HomeBlogPosts
        class="px-8 py-16 mx-auto lg:max-w-page-width-md lg:px-20"
      />
      <IconsDecor02 class="w-full object-contain max-w-lg mx-auto my-6" />
      <Contact class="px-4 py-16 mx-auto lg:max-w-page-width-md lg:px-20" />
      <LayoutFooter />
    </main>
  </div>
</template>
