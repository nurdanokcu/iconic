<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'var(--gold-400)',
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
  >
    <path
      d="M28 28.9121L22.2 23.1121M25.3333 15.5788C25.3333 21.4698 20.5577 26.2454 14.6667 26.2454C8.77563 26.2454 4 21.4698 4 15.5788C4 9.68774 8.77563 4.91211 14.6667 4.91211C20.5577 4.91211 25.3333 9.68774 25.3333 15.5788Z"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
