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
});
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-2 rounded-md',
        variant === 'outline'
          && 'px-2 py-1 border border-border-primary bg-surface-primary text-text-primary text-sm leading-tight',
        variant === 'solid'
          && 'px-4 py-2 bg-surface-secondary border border-border-primary text-white text-xl leading-normal font-foglihten uppercase font-medium tracking-[1px]',
      )
    "
  >
    <div
      v-if="icon"
      v-dompurify-html="icon"
      :class="
        cn('w-6 h-6', {
          'icon-white': variant === 'solid',
          'icon-primary': variant === 'outline',
        })
      "
    ></div>
    <span v-if="text" :class="cn(variant === 'solid' && 'pt-1')">
      {{ text }}
    </span>
  </div>
</template>

<style>
.icon-white path {
  stroke: white;
}

.icon-primary path {
  stroke: var(--color-text-primary);
}
</style>
