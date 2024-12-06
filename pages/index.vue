<template>
  <div>
    <!-- Full-Height Header -->
    <header
      ref="header"
      class="header "
    >
      <Button>
        Look Out
      </Button>
      <Button variant="secondary">
        Button Variant Two
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M24.237 10.6667C31.0316 10.6667 31.0316 21.3333 24.237 21.3333C17.4436 21.3333 14.7263 10.6667 7.25163 10.6667C1.13829 10.6667 1.13829 21.3333 7.25163 21.3333C14.7263 21.3333 17.4436 10.6667 24.2383 10.6667H24.237Z"
            stroke="#DCC7A7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <Button variant="tertiary">
        Button Variant Three
      </Button>
      <div>
        Section With a Full-Height Header
      </div>
      <div>
        Another Text
      </div>
      <h1 class="text-4xl font-bold">
        ICONIC Modeling Agency
      </h1>
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

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const header = ref(null);
let lastScrollY = 0;

const handleScroll = () => {
  if (!header.value) return;

  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    header.value.classList.add('scrolled');
  }
  else {
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

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: center;
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
.header.scrolled {
  background: #000;
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
