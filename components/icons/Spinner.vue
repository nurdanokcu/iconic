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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2v4.167M12 17.833V22M22 12h-4.166M6.167 12H2M19.209 4.792l-2.917 2.917M7.708 16.292l-2.917 2.916M19.209 19.208l-2.917-2.916M7.708 7.709 4.791 4.792"
      :stroke="color"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
</template>
