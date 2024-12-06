<script setup lang="ts">
import { cn } from "@/lib/utils";
defineProps<{
  variant?: "outline" | "solid";
  text: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-2 rounded-md',
        variant === 'outline' &&
          'px-2 py-1 border border-border-primary bg-surface-primary text-text-primary text-sm leading-tight',
        variant === 'solid' &&
          'px-4 py-2 bg-surface-secondary border border-border-primary text-white text-xl leading-normal font-foglihten uppercase font-medium tracking-[1px]'
      )
    "
  >
    <slot />
    <span :class="cn(variant === 'solid' && 'pt-1')">
      {{ text }}
    </span>
  </div>
</template>
