<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { pagePaths } from '~/config/paths';
import type { TypeBlog } from '~/types/blogs';

const { fetchBlogsClient } = blogsApi();
const blogs = ref<TypeBlog[]>([]);
const isLoading = ref(false);
const errorMessage = ref('');

const computedSettings = computed(() => ({
  slidesPerView: Math.min(blogs.value.length, 1.2),
  loop: blogs.value.length > 3,
  centeredSlides: blogs.value.length > 3,
  grabCursor: true,
  spaceBetween: 16,
  modules: [Navigation, Autoplay],
  initialSlide: 1,
  speed: 800,
  autoplay: blogs.value.length > 1
    ? { delay: 3000, pauseOnMouseEnter: true }
    : false,
  navigation: {
    nextEl: '#next-blog',
    prevEl: '#prev-blog',
  },
  breakpoints: {
    640: {
      slidesPerView: Math.min(blogs.value.length, 1.2),
    },
    768: {
      slidesPerView: Math.min(blogs.value.length, 2.2),
    },
    1024: {
      slidesPerView: Math.min(blogs.value.length, 3),
    },
  },
}));

onMounted(async () => {
  isLoading.value = true;
  try {
    const response = await fetchBlogsClient({
      limit: 5,
      offset: 0,
    });
    blogs.value = response.data;
    if (!blogs.value.length) {
      errorMessage.value = 'No blogs found.';
    }
    if (blogs.value.length > 3) {
      const featuredIndex = blogs.value.findIndex((blog: TypeBlog) => blog.is_featured);
      if (featuredIndex > -1) {
        const [featuredBlog] = blogs.value.splice(featuredIndex, 1);

        // Place the featured blog as the second item
        blogs.value.splice(1, 0, featuredBlog);
      }
    }
  } catch (error: any) {
    errorMessage.value = error?.data.message || 'An error occurred while fetching blogs.';
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <h4
      class="font-foglihten text-5xl text-surface-secondary font-medium leading-tight"
    >
      Blog
    </h4>
    <div
      v-if="isLoading"
      class="flex flex-col gap-4 md:flex-row w-full"
    >
      <div
        v-for="i in 2"
        :key="i"
        class="w-full animate-pulse h-80 bg-gray-200 opacity-50 rounded-md"
      />
    </div>
    <CommonNotification
      v-else-if="errorMessage"
      class="ml-auto"
      :message="errorMessage"
    />
    <div
      v-else-if="blogs.length"
      class="flex gap-2 items-center relative"
    >
      <Button
        id="prev-blog"
        class="w-8 h-full absolute -left-8"
        variant="tertiary"
        aria-label="Previous Blog"
        title="Previous Blog"
      >
        <IconsChevronLeft />
      </Button>
      <swiper
        v-bind="computedSettings"
        class="blogs-swiper pt-4 w-full"
      >
        <swiper-slide
          v-for="blog in blogs"
          :key="blog.id"
          class=""
        >
          <BlogsCardVertical
            :blog="blog"
            class="h-full"
            :variant="blog.is_featured ? 'featured' : 'default'"
          />
        </swiper-slide>
      </swiper>
      <Button
        id="next-blog"
        class="w-8 h-full absolute -right-8"
        variant="tertiary"
        aria-label="Next Blog"
        title="Next Blog"
      >
        <IconsChevronLeft class="transform rotate-180" />
      </Button>
    </div>
    <NuxtLink
      :to="pagePaths.blogs"
      aria-label="See All Blogs"
      title="See All Blogs"
      class="ml-auto w-fit flex mt-8"
    >
      <Button
        as="span"
        :variant="'default'"
        text="More Blogs"
      >
        <IconsAlignJustify
          class="transform rotate-180"
          color="var(--gold-400)"
        />
      </Button>
    </NuxtLink>
  </div>
</template>

<style>
.blogs-swiper {
  padding: 16px 0 !important;
}
.blogs-swiper .swiper-slide {
  height: auto;
  width: 100%;
  transition: transform 1s ease;
}

.blogs-swiper .swiper-slide-active {
  transform: translateY(-16px) !important;
  z-index: 1;
}
</style>
