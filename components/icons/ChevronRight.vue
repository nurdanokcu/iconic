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
      d="M8 23.5788L14.6667 16.9121L8 10.2455M17.3333 23.5788L24 16.9121L17.3333 10.2455"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
