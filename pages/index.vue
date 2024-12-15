<script setup lang="ts">
const { isLockScreenVisible, disableScroll, enableScroll } = useLockScreen();

const dismissLockScreen = () => {
  isLockScreenVisible.value = false;
  setTimeout(enableScroll, 700);
};

const handleUserInteraction = () => {
  if (isLockScreenVisible.value) {
    dismissLockScreen();
  }
};

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' });
  disableScroll();
  window.addEventListener('wheel', handleUserInteraction, { passive: true });
  window.addEventListener('touchstart', handleUserInteraction, {
    passive: true,
  });
});

onBeforeUnmount(() => {
  enableScroll();
  window.removeEventListener('wheel', handleUserInteraction);
  window.removeEventListener('touchstart', handleUserInteraction);
});
</script>

<template>
  <div>
    <!-- Lock Screen -->
    <div
      class="fixed inset-0 top-0 h-screen z-50 bg-white transition-transform duration-700 ease-in-out"
      :class="isLockScreenVisible ? 'translate-y-0' : '-translate-y-full'"
    >
      <HomeHeader
        ref="header"
        class="w-full h-screen min-h-[720px] md:min-h-[820px] lg:min-h-[640px] max-w-page-width-xl mx-auto"
        @on-scroll-button="dismissLockScreen"
      />
    </div>

    <!-- Main Content -->
    <main class="bg-white mt-nav">
      <HomeProject class="centered-container lg:px-20" />
      <div class="bg-surface-secondary my-16">
        <HomePromotionalModels class="centered-container lg:px-20" />
      </div>
      <HomeBlogPosts
        class="px-8 py-16 mx-auto lg:max-w-page-width-md lg:px-20"
      />
      <IconsDecor02 class="w-full object-contain max-w-lg mx-auto my-6" />
      <Contact class="px-4 py-16 mx-auto lg:max-w-page-width-md lg:px-20" />
    </main>
  </div>
</template>
