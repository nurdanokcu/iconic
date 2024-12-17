<script setup lang="ts">
import type { TypeBlog } from '~/types/blogs';
import { pagePaths } from '~/config/paths';
import { seoData } from '~/data/seoData';

const { fetchSingleBlogSSR } = blogsApi();
const route = useRoute();
const router = useRouter();
const blogSlug = route.params.slug as string;

const currentBlog = ref<TypeBlog>();
if (!blogSlug) {
  router.push(pagePaths.blogs);
}
const getBlog = async () => {
  const { data, error } = await fetchSingleBlogSSR(blogSlug);
  if (error.value) {
    router.push(pagePaths.blogs);
    return;
  }
  if (data.value) {
    currentBlog.value = data.value.data;
  } else {
    router.push(pagePaths.blogs);
  }
};
await getBlog();

// SEO data
const title = currentBlog.value?.title ? `${currentBlog.value.title} | Iconic Modeling Agency` : seoData.projects.title; ;
const description = currentBlog.value?.excerpt.slice(0, 225) || seoData.projects.description;
useSeoHead(title, description);
</script>

<template>
  <div
    v-if="currentBlog"
    class="mt-nav overflow-x-hidden min-h-screen-height"
  >
    <BlogsSingleHeader :title="currentBlog.title" :event="currentBlog?.event" />
    <main class="max-content-centered-md">
      <div
        v-dompurify-html="currentBlog.content"
        class="prose prose-sm max-w-none"
      ></div>
      <Contact class="py-16" title-tag="h2" />
    </main>
  </div>
</template>
