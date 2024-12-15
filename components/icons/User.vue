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
      d="M4 27.1667C7.11439 23.8634 11.3427 21.8333 16 21.8333C20.6573 21.8333 24.8856 23.8634 28 27.1667M22 10.5C22 13.8137 19.3137 16.5 16 16.5C12.6863 16.5 10 13.8137 10 10.5C10 7.18629 12.6863 4.5 16 4.5C19.3137 4.5 22 7.18629 22 10.5Z"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
