<script setup lang="ts">
import { events } from "~/data/events";

const selectedEvents = ref<string[]>([]);
</script>

<template>
  <div class="max-content-centered-lg py-8 flex flex-col gap-8">
    <ToggleGroup v-model="selectedEvents" type="multiple">
      <ToggleGroupItem
        v-for="event in events"
        :key="event.id"
        :value="event.id"
      >
        <CommonEventTag
          :variant="'outline'"
          :event="event"
        />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
</template>
