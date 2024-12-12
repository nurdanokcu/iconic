<script setup lang="ts">
import { models, moreModels } from "~/data/models";
import { events } from "~/data/events";
import type { TypeEvent } from "~/types/general";
import { cn } from "~/lib/utils";
import type { TypeModel } from "~/types/models";

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const loadingEvent = ref("");
const allModels = ref([...models]);
const loadMoreLink = ref("initialLink");
const errorMessage = ref("");
const filteredModels = ref<TypeModel[]>([...models]);

const selectedEvent = ref<TypeEvent>({
  id: 0,
  name: "",
  icon: "",
  value: "",
});

const filterModels = (event: TypeEvent) => {
  loadingEvent.value = event.value;
  setTimeout(() => {
    if (!event.id) {
      filteredModels.value = allModels.value;
      loadingEvent.value = "";
      return;
    }
    filteredModels.value = allModels.value.filter((model) => {
      const modelEvents = model.events.map((event) => event.id);
      return modelEvents.includes(event.id);
    });
    loadingEvent.value = "";
  }, 500);
};
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
  return `/models/${model.slug}`;
};

if (route.query.event) {
  const event = events.find(
    (event) => event.value === String(route.query.event)
  );
  if (event) selectedEvent.value = event;
}
watch(selectedEvent, () => {
  filterModels(selectedEvent.value);
});
</script>

<template>
  <div class="py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <h1 class="text-stroke-md font-foglihten text-5xl lg:min-w-72">
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
            :event="event"
          >
            <IconsSpinner
              v-if="loadingEvent === event.value"
              class="animate-spin"
            />
          </CommonEventTag>
        </button>
      </div>
    </div>
    <CommonNotification v-if="errorMessage" :message="errorMessage" />
    <div
      v-auto-animate
      class="grid max-w-96 sm:grid-cols-2 sm:max-w-page-width-sm md:grid-cols-3 xl:grid-cols-4 xl:max-content-centered-md w-full mx-auto"
    >
      <template v-if="filteredModels.length">
        <NuxtLink
          v-for="model in filteredModels"
          :key="model.id"
          :title="`Learn more about ${model.name}`"
          :arial-label="`Learn more about ${model.name}`"
          :to="getLink(model)"
          :class="cn({ 'blur-[2px] opacity-90': loadingEvent })"
        >
          <div></div>
          <ModelsCard :model="model" />
        </NuxtLink>
      </template>
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
