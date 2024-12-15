<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { blogs, featuredBlog } from '~/data/blogs';
import { pagePaths } from '~/config/paths';

const settings = {
  slidesPerView: 1.2,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.4,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  grabCursor: true,
  centeredSlides: true,
  modules: [Navigation, Autoplay],
  loop: true,
  keyboard: { enabled: true },
  speed: 800,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 16,
  initialSlide: 1,
  navigation: {
    nextEl: '#next-blog',
    prevEl: '#prev-blog',
  },
};

const computedBlogs = computed(() => {
  return [blogs[0], featuredBlog, ...blogs.slice(1)];
});
</script>

<template>
  <div>
    <h4
      class="font-foglihten text-5xl text-surface-secondary font-medium leading-tight"
    >
      Blog
    </h4>
    <div class="flex gap-2 items-center relative">
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
        v-bind="settings"
        class="blogs-swiper pt-4"
      >
        <swiper-slide
          v-for="blog in computedBlogs"
          :key="blog.id"
          class=""
        >
          <BlogsCard
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
  transform: translateY(-16px);
  z-index: 1;
}
</style>
