<script setup lang="ts">
import { blogs } from "~/data/blogs";
const slicedBlogs = blogs.slice(0, 3);
</script>

<template>
  <div>
    <h4
      class="font-foglihten text-5xl text-surface-secondary font-medium leading-tight"
    >
      Blog
    </h4>
    <div class="grid grid-cols-3 gap-4">
      <BlogsCard
        v-for="blog in slicedBlogs"
        :key="blog.id"
        :blog="blog"
        :variant="blog.isFeatured ? 'featured' : 'default'"
        :class="blog.isFeatured ? '-translate-y-4' : ''"
      />
    </div>
  </div>
</template>
