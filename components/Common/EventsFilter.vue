<script setup lang="ts">
import { events } from '~/data/events';
import type { TypeEvent } from '~/types/general';

const route = useRoute();

const props = defineProps({
  loadingEvent: {
    type: String,
    required: true,
  },
  selectedEvent: {
    type: Object as PropType<TypeEvent>,
    required: true,
  },
});
const emits = defineEmits(['onSelect']);
if (route.query.event) {
  const event = events.find(
    event => event.value === String(route.query.event),
  );
  if (event) {
    emits('onSelect', event);
  }
}
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
          v-if="loadingEvent === event.value"
          class="animate-spin"
        />
      </CommonEventTag>
    </button>
  </div>
</template>
