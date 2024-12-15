<script setup lang="ts">
import { blogs, moreBlogs } from '~/data/blogs';
import type { TypeEvent } from '~/types/general';
import { cn } from '~/lib/utils';
import type { TypeBlog } from '~/types/blogs';

const router = useRouter();
const isLoading = ref(false);
const loadingEvent = ref('');
const allBlogs = ref([...blogs]);
const loadMoreLink = ref('initialLink');
const errorMessage = ref('');
const filteredBlogs = ref<TypeBlog[]>([...blogs]);

const selectedEvent = ref<TypeEvent>({
  id: 0,
  name: '',
  icon: '',
  value: '',
});

const filterModels = (event: TypeEvent) => {
  loadingEvent.value = event.value;
  setTimeout(() => {
    if (!event.id) {
      filteredBlogs.value = allBlogs.value;
      loadingEvent.value = '';
      return;
    }
    filteredBlogs.value = allBlogs.value.filter((blog) => {
      return blog.event.id === event.id;
    });
    loadingEvent.value = '';
  }, 500);
};

const handleSelect = (event: TypeEvent) => {
  if (selectedEvent.value.id === event.id) {
    selectedEvent.value = { id: 0, name: '', icon: '', value: '' };
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
    allBlogs.value = [...allBlogs.value, ...moreBlogs];
    loadMoreLink.value = '';
    filterModels(selectedEvent.value);
  }, 1000);
};

watch(selectedEvent, () => {
  filterModels(selectedEvent.value);
});
</script>

<template>
  <div class="py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <h1 class="text-surface-secondary font-foglihten text-5xl lg:min-w-72">
        Blog
      </h1>
      <CommonEventsFilter
        :loading-event="loadingEvent"
        :selected-event="selectedEvent"
        @on-select="handleSelect"
      />
    </div>
    <CommonNotification v-if="errorMessage" :message="errorMessage" />
    <div
      v-auto-animate
      class="flex flex-col gap-4 sm:max-w-2xl lg:max-content-centered-md w-full mx-auto"
    >
      <template v-if="filteredBlogs.length">
        <BlogsCardHorizontal
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :blog="blog"
          :variant="blog.is_featured ? 'featured' : 'default'"
          :class="
            cn({
              'blur-[2px] opacity-90': loadingEvent,
              'transform -mx-6': blog.is_featured,
            })
          "
        />
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
