<script setup lang="ts">
import { pagePaths } from '~/config/paths';
import { blogs } from '~/data/blogs';
import type { TypeBlog } from '~/types/blogs';

const route = useRoute();
const router = useRouter();
const currentBlog = ref<TypeBlog>({
  id: 0,
  title: '',
  excerpt: '',
  content: '',
  featured_photo: '',
  is_featured: false,
  slug: '',
  author: {
    id: 0,
    name: '',
  },
  event: null,
  next_blog: {
    id: 2,
    title: '',
    slug: '',
    excerpt: '',
    author: {
      id: 2,
      name: '',
    },
    event: null,
  },
});
const slug = route.params.slug as string;
if (!slug) {
  router.push(pagePaths.blogs);
}

const findProject = (): Promise<TypeBlog | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundBlog = blogs.find(blog => blog.slug === slug);
      if (!foundBlog) {
        reject(new Error('Blog not found'));
      } else {
        resolve(foundBlog);
      }
    }, 1000);
  });
};
const fetchProject = async () => {
  try {
    const response = await findProject();
    if (!response) {
      router.push(pagePaths.blogs);
      return;
    }
    currentBlog.value = response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    router.push(pagePaths.blogs);
  }
};

await fetchProject();
</script>

<template>
  <div class="mt-nav overflow-x-hidden min-h-screen-height">
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
