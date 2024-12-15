<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import { type ButtonVariants, buttonVariants } from '.';
import { cn } from '@/lib/utils';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  text?: string;
  animateDirection?: 'left' | 'right';
  as?: 'button' | 'span';
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  text: '',
  href: '',
  target: '_self',
  rel: '',
  animateDirection: 'left',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <span
      v-if="variant === 'secondary'"
      :class="cn('absolute bottom-0 h-0.5 bg-surface-secondary w-0 group-hover:w-full transition-all duration-500', {
        'left-0': animateDirection === 'left',
        'right-0': animateDirection === 'right',
      })"
    ></span>
    <slot />
    <span v-if="text" class="pt-1">{{ text }}</span>
  </Primitive>
</template>
