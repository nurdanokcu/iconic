<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { TypeEvent } from '~/types/general';

defineProps({
  variant: {
    type: String as PropType<'outline' | 'solid'>,
    default: 'outline',
  },
  event: {
    type: Object as PropType<TypeEvent>,
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
        size === 'lg'
          && 'text-xl uppercase font-foglihten px-4 py-2 tracking-[1px] font-medium',
      )
    "
  >
    <span
      v-if="event.primary_icon && variant === 'outline'"
      class="w-6 h-6"
    >
      <img
        :src="event.primary_icon"
        :alt="event.name + ' icon'"
        class="w-full h-full object-contain"
      />
    </span>
    <span
      v-if="event.secondary_icon && variant === 'solid'"
      class="w-6 h-6"
    >
      <img
        :src="event.secondary_icon"
        :alt="event.name + ' icon'"
        class="w-full h-full object-contain"
      />
    </span>
    <span v-if="event.name" :class="cn(size === 'lg' && 'pt-1')">
      {{ event.name }}
    </span>
    <slot></slot>
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
