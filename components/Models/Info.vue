<script setup lang="ts">
import type { TypeModel } from '@/types/models';

const props = defineProps({
  model: {
    type: Object as PropType<TypeModel>,
    required: true,
  },
});
const adjustedEvents = computed(() => {
  return props.model.events.map((event) => {
    return {
      id: event.id,
      slug: event.slug,
      primary_icon: event.primary_icon,
    };
  }).slice(0, 3);
});
</script>

<template>
  <span :class="'p-4 flex gap-4 items-end bg-surface-secondary text-white'">
    <span class="flex flex-col gap-4">
      <p class="font-extrabold leading-tight text-2xl uppercase">
        {{ model.name }}
      </p>
      <span class="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-tight">
        <span v-for="(detail, index) in model.characteristics" :key="index">
          {{ detail }}
        </span>
      </span>
    </span>
    <span class="flex flex-col gap-1">
      <CommonEventTag
        v-for="(event, index) in adjustedEvents"
        :key="index"
        :event="event"
      />
    </span>
  </span>
</template>
