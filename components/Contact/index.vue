<script setup lang="ts">
defineProps({
  titleTag: {
    type: String,
    required: false,
    default: 'h5',
  },
});
</script>

<template>
  <div class="flex flex-col gap-16 md:grid grid-cols-2 md:gap-16">
    <ContactForm :title-tag="titleTag" />
    <ContactLinks />
  </div>
</template>
