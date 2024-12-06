<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'


const props = defineProps<{
  class?: HTMLAttributes['class'],
  variant?: 'default' | 'destructive' | 'error' | 'success' | 'warning' | 'info'
}>()

const currentColor = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'stroke-icon-success'
    case 'error':
      return 'stroke-icon-error'
    default:
      return 'stroke-black'
  }
})
</script>

<template>
    <IconsArrowDown
      class="w-8 h-8"
      :stroke-class="currentColor"
    />
</template>
