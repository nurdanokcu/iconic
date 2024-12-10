<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "var(--gold-400)",
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M28 13.3333H4M28 24H4M28 8H4M28 18.6667H4"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
