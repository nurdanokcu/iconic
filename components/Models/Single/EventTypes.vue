<script setup lang="ts">
import type { TypeEvent } from '~/types/general';

defineProps({
  events: {
    type: Array as PropType<TypeEvent[]>,
    required: true,
  },
});
</script>

<template>
  <div class="p-6 flex flex-col gap-2 items-center md:items-end bg-surface-primary">
    <p
      class="font-foglihten uppercase font-medium text-stroke-lg tracking-[0.8px]"
    >
      Event Types:
    </p>
    <div class="flex flex-wrap gap-2 items-center justify-center md:justify-end">
      <CommonEventTag
        v-for="(event, index) in events"
        :key="index"
        :event="event"
      />
    </div>
  </div>
</template>
