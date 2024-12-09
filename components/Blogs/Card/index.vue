<script setup lang="ts">
import type { TypeBlog } from "~/types/blogs";
import { cn } from "@/lib/utils";
import {pagePaths } from "~/utils/pagePaths";
const props = defineProps({
  blog: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
  variant: {
    type: String as PropType<"default" | "featured">,
    default: "default",
  },
  layout: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "vertical",
  },
});

const classes = computed(() =>
  cn(
    "rounded-s relative overflow-hidden",
    // Variant-specific classes
    {
      "bg-surface-secondary text-white": props.variant === "featured",
      "bg-surface-primary text-text-primary": props.variant === "default",
    },
    // Layout-specific classes
    props.layout === "horizontal"
      ? "grid grid-cols-3 grid-rows-1 gap-4 max-h-96"
      : "flex flex-col border border-surface-secondary p-5 gap-6"
  )
);
const blogPath = (slug: string) => `${pagePaths.blogs}/${slug}`;
</script>

<template>
  <article :class="classes">
    <div
      v-if="layout === 'horizontal'"
      class="rounded-sm overflow-hidden relative z-10 shrink-0"
    >
      <img
        class="w-full h-full object-cover grayscale"
        :src="blog.featuredPhoto"
        :alt="blog.title"
      />
    </div>

    <BlogsCardTitle
      :author-name="blog.author.name"
      :title="blog.title"
      :variant="variant"
      :layout="layout"
      :event="blog.event"
    />
    <div
      :class="
        cn('flex flex-col justify-between gap-6 flex-1 h-full', {
          'p-4': layout === 'horizontal',
        })
      "
    >
      <div v-dompurify-html="blog.content" class="text-sm line-clamp-[12]" />
      <NuxtLink
        class="w-fit ml-auto"
        :to="blogPath(blog.slug)"
      >
        <Button
          as="span"
          text="Read More"
          class="h-10"
          :variant="variant === 'featured' ? 'default' : 'secondary'"
        >
          <IconsAlignJustify />
        </Button>
      </NuxtLink>
    </div>
    <IconsLogo
      :class="
        cn('absolute top-20 -right-1/3', {
          'w-96 h-80 top-1/2 -translate-y-1/2 left-1/3 right-auto':
            layout === 'horizontal',
        })
      "
      :color="variant === 'featured' ? 'white' : 'var(--gold-700)'"
      :opacity="0.1"
    />
  </article>
</template>
