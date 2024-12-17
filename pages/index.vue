<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const { isLockScreenVisible, disableScroll, enableScroll } = useLockScreen();

const startY = ref(0); // To store the initial touch point
const deltaY = ref(0); // To track the touch movement
const threshold = 100; // Distance required to dismiss the lock screen

const dismissLockScreen = () => {
  isLockScreenVisible.value = false;
  setTimeout(enableScroll, 700);
};

const handleTouchStart = (event: TouchEvent) => {
  if (isLockScreenVisible.value) {
    startY.value = event.touches[0].clientY; // Record the initial touch point
    deltaY.value = 0; // Reset deltaY
  }
};

const handleTouchMove = (event: TouchEvent) => {
  if (isLockScreenVisible.value) {
    deltaY.value = event.touches[0].clientY - startY.value;
  }
};

const handleTouchEnd = () => {
  if (isLockScreenVisible.value && deltaY.value < -threshold) {
    dismissLockScreen();
  } else {
    deltaY.value = 0; // Reset deltaY if the threshold is not reached
  }
};

const handleWheel = () => {
  if (isLockScreenVisible.value) {
    dismissLockScreen();
  }
};

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' });
  disableScroll();

  window.addEventListener('wheel', handleWheel, { passive: true });
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchend', handleTouchEnd, { passive: true });
});

onBeforeUnmount(() => {
  enableScroll();

  window.removeEventListener('wheel', handleWheel);
  window.removeEventListener('touchstart', handleTouchStart);
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchend', handleTouchEnd);
});
</script>

<template>
  <div>
    <!-- Lock Screen -->
    <div
      class="fixed inset-0 top-0 h-[100svh] z-50 bg-white transition-transform duration-700 ease-in-out overflow-hidden"
      :class="isLockScreenVisible ? 'translate-y-0' : '-translate-y-full'"
    >
      <HomeHeader
        ref="header"
        class="max-w-page-width-xl mx-auto"
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
        class="py-16 md:px-8 mx-auto lg:max-w-page-width-md lg:px-20"
      />
      <IconsDecor02 class="w-full object-contain max-w-lg mx-auto my-6" />
      <Contact class="px-4 py-16 mx-auto lg:max-w-page-width-md lg:px-20" />
    </main>
  </div>
</template>
