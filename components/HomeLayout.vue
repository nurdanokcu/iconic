<script setup>
const header = ref(null);
let lastScrollY = 0;

const handleScroll = () => {
  if (!header.value) return;

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
});
</script>

<template>
  <div>
    <!-- Full-Height Header -->
    <header
      ref="header"
      class="header"
    >
    </header>
    <main class="relative">
      <section class="second-section">
        <h2 class="text-2xl">
          Scroll Down to See the Effect
        </h2>
      </section>
      <section class="second-section">
        <h2 class="text-2xl">
          Another Section
        </h2>
      </section>
    </main>
  </div>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    height: 100vh;
    max-width: 100%;
    padding: 0 0 60px;
    position: sticky;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: 5;
}
.second-section {
  align-content: center;
    align-items: center;
    background-color: var(--token-fce4eafe-4d9a-48aa-995e-0a636bf287fb, #ebebf0);
    display: flex
;
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
