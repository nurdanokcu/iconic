<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { TypeEvent } from '~/types/general';

defineProps({
  variant: {
    type: String as PropType<'default' | 'featured'>,
    default: 'default',
  },
  authorName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  event: {
    type: Object as PropType<TypeEvent | null>,
    required: true,
  },
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
});
</script>

<template>
  <div
    :class="
      cn('flex flex-col gap-6', {
        'py-4': layout === 'horizontal',
      })
    "
  >
    <p class="flex flex-col">
      <span
        :class="
          cn('text-sm', {
            'text-text-primary': variant === 'featured',
            'text-text-secondary': variant === 'default',
          })
        "
      >
        Author
      </span>
      <span class="text-stroke-sm">
        {{ authorName }}
      </span>
    </p>

    <p class="text-2xl leading-tight font-extrabold">
      {{ title }}
    </p>
    <CommonEventTag
      v-if="event && layout === 'horizontal'"
      class="w-fit"
      variant="outline"
      :event="event"
    />
  </div>
</template>
