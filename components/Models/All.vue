<script setup lang="ts">
import { models, moreModels } from "~/data/models";
import { events } from "~/data/events";
import type { TypeEvent } from "~/types/general";
import { cn } from "~/lib/utils";
import type { TypeModel } from "~/types/models";

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const allModels = ref([...models]);
const loadMoreLink = ref("initialLink");

const selectedEvent = ref<TypeEvent>({
  id: 0,
  name: "",
  icon: "",
  value: "",
});

const filteredModels = computed(() => {
  if (!selectedEvent.value.id) return allModels.value;
  return allModels.value.filter((model) => {
    const modelEvents = model.events.map((event) => event.id);
    return modelEvents.includes(selectedEvent.value.id);
  });
});
const isSelectedEvent = (eventId: number) => selectedEvent.value.id === eventId;
const handleSelect = (event: TypeEvent) => {
  if (selectedEvent.value.id === event.id) {
    selectedEvent.value = { id: 0, name: "", icon: "", value: "" };
    return router.push({ query: {} });
  }
  selectedEvent.value = event;
  router.push({ query: { event: event.value } });
};
const loadMore = () => {
  if (!loadMoreLink.value) return;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    allModels.value = [...allModels.value, ...moreModels];
    loadMoreLink.value = "";
  }, 1000);
};
const getLink = (model: TypeModel) => {
  return `/models/${model.id}-${model.name.toLowerCase().replace(/ /g, "-")}`;
};

if (route.query.event) {
  const event = events.find(
    (event) => event.value === String(route.query.event)
  );
  if (event) selectedEvent.value = event;
}
</script>

<template>
  <div class="max-content-centered py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between sm:px-10">
      <h1 class="text-stroke-md font-foglihten text-5xl">
        Models for
      </h1>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="event in events"
          :key="event.id"
          @click="handleSelect(event)"
        >
          <CommonEventTag
            :variant="isSelectedEvent(event.id) ? 'solid' : 'outline'"
            :text="event.name"
            :icon="event.icon"
          />
        </button>
      </div>
    </div>
    <div
      v-auto-animate
      class="grid sm:grid-cols-2 sm:max-w-[900px] md:grid-cols-3 xl:grid-cols-4 xl:max-w-[1280px] w-full max-w-96 mx-auto"
    >
      <NuxtLink
        v-for="model in filteredModels"
        :key="model.id"
        :title="`Learn more about ${model.name}`"
        :arial-label="`Learn more about ${model.name}`"
        :to="getLink(model)"
      >
        <ModelsSingleCard :model="model" />
      </NuxtLink>
    </div>
    <Button
      v-if="loadMoreLink"
      text="Load More"
      class="w-fit mx-auto"
      :disabled="isLoading"
      @click="loadMore"
    >
      <IconsSpinner :class="cn({ 'animate-spin': isLoading })" />
    </Button>
  </div>
</template>
