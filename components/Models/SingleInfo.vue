<script setup lang="ts">
import type { TypeModel } from "@/types/models";

defineProps({
  model: {
    type: Object as PropType<TypeModel>,
    required: true,
  },
});
</script>

<template>
  <div :class="'p-4 flex flex-col gap-2 bg-surface-secondary text-white'">
    <p class="font-extrabold leading-normal text-2xl uppercase">
      {{ model.name }}
    </p>
    <div class="flex items-end gap-4">
      <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-tight">
        <span v-for="(detail, index) in model.features" :key="index">
          {{ detail }}
        </span>
      </div>
      <div class="flex flex-col gap-1">
        <CommonEventTag
          v-for="(event, index) in model.events"
          :key="index"
          :icon="event.icon"
        />
      </div>
    </div>
  </div>
</template>
