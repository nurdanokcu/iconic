<script setup>
const header = ref(null);
let lastScrollY = 0;
definePageMeta({
  layout: false,
});
/* const handleScroll = () => {
  if (!header.value) return;
  console.log('scrolling');

  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    header.value.classList.add('scrolled');
  } else {
    header.value.classList.remove('scrolled');
  }

  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
}); */
</script>

<template>
  <div>
    <HomeHeader ref="header" class="header" />
    <main class="relative min-h-screen bg-slate-600">
      <!--  <section class="second-section">
        <h2 class="text-2xl">
          Scroll Down to See the Effect
        </h2>
      </section>
      <section class="second-section">
        <h2 class="text-2xl">
          Another Section
        </h2>
      </section> -->
    </main>
  </div>
</template>

<style scoped>
header {
    height: 100vh;
    max-width: 100%;
    padding: 0 0 60px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 5;
}
.second-section {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
  height: 1000px;
  z-index: 6;
}
</style>
