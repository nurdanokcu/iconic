<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'var(--black)',
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M15.5 18.6073L9.5 12.6073L15.5 6.6073"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
