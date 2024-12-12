<script setup lang="ts">

defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex items-center gap-4">
    <IconsAlert color="var(--red-100)" />
    <p class="text-sm">{{ message}}</p>
  </div>
</template>
