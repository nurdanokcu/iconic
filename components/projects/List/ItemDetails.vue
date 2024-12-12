<script setup lang="ts">
import type { TypeEvent } from "~/types/general";
type TypeEventProp = TypeEvent | null | undefined;

defineProps({
  event: {
    type: Object as PropType<TypeEventProp>,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventClass: {
    type: String,
    default: "ml-auto",
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <CommonEventTag v-if="event" :class="['h-fit', eventClass]" :event="event" />
    <div class="flex justify-between gap-4 items-center">
      <p class="text-sm text-text-secondary leading-tight">Date:</p>
      <p class="text-stroke-sm">{{ date }}</p>
    </div>
    <p class="text-2xl font-extrabold leading-none">{{ name }}</p>
    <p class="text-sm leading-tight line-clamp-8 md:line-clamp-6">
      {{ description }}
    </p>
  </div>
</template>
