<script setup lang="ts">
import type { TypeEvent } from '~/types/general';

const props = defineProps({
  loadingEventId: {
    type: Number,
    required: true,
  },
  selectedEvent: {
    type: Object as PropType<TypeEvent>,
    required: true,
  },
  events: {
    type: Array as PropType<TypeEvent[]>,
    required: true,
  },
});
defineEmits(['onSelect']);
const isSelectedEvent = (eventId: number) => props.selectedEvent.id === eventId;
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="event in events"
      :key="event.id"
      @click="$emit('onSelect', event)"
    >
      <CommonEventTag
        :variant="isSelectedEvent(event.id) ? 'solid' : 'outline'"
        :event="event"
      >
        <IconsSpinner
          v-if="loadingEventId === event.id"
          class="animate-spin"
        />
      </CommonEventTag>
    </button>
  </div>
</template>
