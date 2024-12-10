<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps({
  variant: {
    type: String as PropType<'outline' | 'solid'>,
    default: 'outline',
  },
  text: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md',
  },
});
</script>

<template>
  <span
    :class="
      cn(
        'inline-flex items-center gap-2 rounded-md w-fit px-2 py-1 leading-normal transition-all',
        variant === 'outline'
          && 'border border-border-primary bg-surface-primary text-text-primary',
        variant === 'solid'
          && 'bg-surface-secondary border border-border-primary text-white ',
        size === 'md' && 'text-sm leading-tight',
        size === 'lg' && 'text-xl uppercase font-foglihten px-4 py-2 tracking-[1px] font-medium',
      )
    "
  >
    <span
      v-if="icon"
      v-dompurify-html="icon"
      :class="
        cn('w-6 h-6', {
          'icon-white': variant === 'solid',
          'icon-primary': variant === 'outline',
        })
      "
    ></span>
    <span v-if="text" :class="cn(size === 'lg' && 'pt-1')">
      {{ text }}
    </span>
  </span>
</template>

<style>
.icon-white path {
  stroke: white;
}

.icon-primary path {
  stroke: var(--gold-700);
}
</style>
