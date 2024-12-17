<script setup lang="ts">
import type { TypeEvent } from '~/types/general';
import { cn } from '~/lib/utils';
import type { TypeModel, TypeModelQuery } from '~/types/models';

const emptyEvent = {
  id: 0,
  name: '',
  primary_icon: '',
  secondary_icon: '',
  slug: '',
};
const { fetchModelsSSR, fetchModelsClient } = modelsApi();
const { fetchEvents } = eventsApi();

// Variables
const router = useRouter();
const isLoading = ref(false);
const loadingEventId = ref(0);
const route = useRoute();
const allModels = ref<TypeModel[]>([]);
const errorMessage = ref('');
const selectedEvent = ref<TypeEvent>({ ...emptyEvent });
const events = ref<TypeEvent[]>([]);
const limit = ref(8);
const offset = ref(0);
const hasMore = ref(true);

// Computed
const queryParams = computed(() => {
  const params: TypeModelQuery = {
    limit: String(limit.value),
    offset: String(offset.value),
  };
  if (selectedEvent.value.id) {
    params.event_type_id = String(selectedEvent.value.id);
  }
  return params;
});

// Methods
const handleData = (append: boolean, data: TypeModel[]) => {
  if (append) {
    allModels.value = [...allModels.value, ...data];
  } else {
    allModels.value = data;
  }
  if (data.length < limit.value) {
    hasMore.value = false;
  } else {
    offset.value += limit.value;
  }
};
/**
 * Fetch models from the server
 * @param append - Append models to the existing list
 */
const fetchModels = async (append = false) => {
  const { data, error } = await fetchModelsSSR(queryParams.value);
  if (error.value) {
    errorMessage.value = error.value.message;
  }
  if (data.value) {
    const models = data.value.data;
    handleData(append, models);
  }
};
/**
 * Fetch models from the client
 * @param append - Append models to the existing list
 */
const getModelsClient = async (append = false) => {
  errorMessage.value = '';
  loadingEventId.value = selectedEvent.value.id;
  isLoading.value = true;
  try {
    const response = await fetchModelsClient(queryParams.value);
    const models = response.data;
    handleData(append, models);
  } catch (error: any) {
    errorMessage.value = error.message;
  } finally {
    loadingEventId.value = 0;
    isLoading.value = false;
  }
};
/**
 * Fetch all events
 */
const fetchAllEvents = async () => {
  const { data, error } = await fetchEvents();
  if (error.value) {
    errorMessage.value = error.value.message;
  }
  if (data.value) {
    events.value = data.value.data;
    if (route.query.event) {
      const event = events.value.find(
        event => event.slug === String(route.query.event),
      );
      if (event) {
        selectedEvent.value = event;
      }
    }
  }
};

const handleSelect = async (event: TypeEvent) => {
  offset.value = 0;
  hasMore.value = true;
  if (selectedEvent.value.id === event.id) {
    selectedEvent.value = { ...emptyEvent };
    router.push({ query: {} });
    await getModelsClient();
  } else {
    selectedEvent.value = event;
    router.push({ query: { event: event.slug } });
    await getModelsClient();
  }
};
const loadMore = async () => {
  if (!hasMore.value) return;
  await getModelsClient(true);
};

/* Before loading the component fetch the events and then the models */
await fetchAllEvents();
await fetchModels();
</script>

<template>
  <div class="py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <h1 class="text-stroke-md font-foglihten text-5xl lg:min-w-72">
        Models for
      </h1>
      <CommonEventsFilter
        :loading-event-id="loadingEventId"
        :selected-event="selectedEvent"
        :events="events"
        @on-select="handleSelect"
      />
    </div>
    <CommonNotification v-if="errorMessage" :message="errorMessage" />
    <CommonNotification v-else-if="!allModels.length && !isLoading" message="No models found. Please try adjusting the filters." />
    <div
      v-else-if="allModels.length"
      v-auto-animate
      class="grid max-w-96 sm:grid-cols-2 sm:max-w-page-width-sm md:grid-cols-3 xl:grid-cols-4 xl:max-content-centered-md w-full mx-auto"
    >
      <NuxtLink
        v-for="model in allModels"
        :key="model.id"
        :title="`Learn more about ${model.name}`"
        :aria-label="`Learn more about ${model.name}`"
        role="link"
        :to="makeModelPath(model.slug)"
        :class="cn({ 'blur-[2px] opacity-90': loadingEventId })"
      >
        <ModelsCard :model="model" />
      </NuxtLink>
    </div>
    <Button
      v-if="hasMore && allModels.length"
      text="Load More"
      class="w-fit mx-auto"
      :disabled="isLoading"
      @click="loadMore"
    >
      <IconsSpinner :class="cn({ 'animate-spin': isLoading })" />
    </Button>
  </div>
</template>
