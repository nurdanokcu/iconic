<script setup lang="ts">
defineProps({
  strokeClass: {
    type: String,
    default: "stroke-button-label",
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    :class="strokeClass"
  >
    <path
      d="M0.5 7L6.40909 13L13.5 1"
      :stroke="strokeClass"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
