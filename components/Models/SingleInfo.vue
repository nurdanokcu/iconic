<script setup lang="ts">
import type { TypeModel } from '@/types/models';

defineProps({
  model: {
    type: Object as PropType<TypeModel>,
    required: true,
  },
});
</script>

<template>
  <span :class="'p-4 flex gap-4 items-end bg-surface-secondary text-white'">
    <span class="flex flex-col gap-4">
      <p class="font-extrabold leading-normal text-2xl uppercase">
        {{ model.name }}
      </p>
      <span class="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-tight">
        <span v-for="(detail, index) in model.features" :key="index">
          {{ detail }}
        </span>
      </span>
    </span>
    <span class="flex flex-col gap-1">
      <CommonEventTag
        v-for="(event, index) in model.events"
        :key="index"
        :icon="event.icon"
      />
    </span>
  </span>
</template>
