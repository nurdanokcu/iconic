<script setup lang="ts">
import type { TypeEvent } from '~/types/general';
import { cn } from '~/lib/utils';
import type { TypeModelQuery } from '~/types/models';
import type { TypeBlog } from '~/types/blogs';

const emptyEvent = {
  id: 0,
  name: '',
  primary_icon: '',
  secondary_icon: '',
  slug: '',
};
const { fetchBlogsSSR, fetchBlogsClient } = blogsApi();
const { fetchEvents } = eventsApi();

// Variables
const router = useRouter();
const isLoading = ref(false);
const loadingEventId = ref(0);
const route = useRoute();
const allBlogs = ref<TypeBlog[]>([]);
const errorMessage = ref('');
const selectedEvent = ref<TypeEvent>({ ...emptyEvent });
const events = ref<TypeEvent[]>([]);
const limit = ref(6);
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
const handleData = (append: boolean, data: TypeBlog[]) => {
  if (append) {
    allBlogs.value = [...allBlogs.value, ...data];
  } else {
    allBlogs.value = data;
  }
  if (data.length < limit.value) {
    hasMore.value = false;
  } else {
    offset.value += limit.value;
  }
};
/**
 * Fetch blogs from the server
 * @param append - Append blogs to the existing list
 */
const getBlogsInitial = async (append = false) => {
  const { data, error } = await fetchBlogsSSR(queryParams.value);
  if (error.value) {
    errorMessage.value = error.value.message;
  }
  if (data.value) {
    const blogs = data.value.data;
    handleData(append, blogs);
  }
};
/**
 * Fetch blogs from the client
 * @param append - Append blogs to the existing list
 */
const getBlogsClient = async (append = false) => {
  errorMessage.value = '';
  loadingEventId.value = selectedEvent.value.id;
  isLoading.value = true;
  try {
    const response = await fetchBlogsClient(queryParams.value);
    const blogs = response.data;
    handleData(append, blogs);
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
const getAllEvents = async () => {
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
    await getBlogsClient();
  } else {
    selectedEvent.value = event;
    router.push({ query: { event: event.slug } });
    await getBlogsClient();
  }
};
const loadMore = async () => {
  if (!hasMore.value) return;
  await getBlogsClient(true);
};

/* Before loading the component fetch the events and then the blogs */
await getAllEvents();
await getBlogsInitial();
</script>

<template>
  <div class="py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <h1 class="text-surface-secondary font-foglihten text-5xl lg:min-w-72">
        Blog
      </h1>
      <CommonEventsFilter
        :loading-event-id="loadingEventId"
        :selected-event="selectedEvent"
        :events="events"
        @on-select="handleSelect"
      />
    </div>
    <CommonNotification v-if="errorMessage" :message="errorMessage" />
    <CommonNotification v-else-if="!allBlogs.length && !isLoading" message="No blogs found. Please try adjusting the filters." />
    <div
      v-else-if="allBlogs.length"
      v-auto-animate
      class="flex flex-col gap-4 sm:max-w-2xl lg:max-content-centered-md w-full mx-auto"
    >
      <BlogsCardHorizontal
        v-for="blog in allBlogs"
        :key="blog.id"
        :blog="blog"
        :variant="blog.is_featured ? 'featured' : 'default'"
        :class="
          cn({
            'blur-[2px] opacity-90': loadingEventId,
            'transform md:-mx-6': blog.is_featured,
          })
        "
      />
    </div>
    <Button
      v-if="hasMore && allBlogs.length"
      text="Load More"
      class="w-fit mx-auto"
      :disabled="isLoading"
      @click="loadMore"
    >
      <IconsSpinner :class="cn({ 'animate-spin': isLoading })" />
    </Button>
  </div>
</template>
