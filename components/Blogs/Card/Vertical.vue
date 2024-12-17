<script setup lang="ts">
import type { TypeBlog } from '~/types/blogs';
import { cn } from '@/lib/utils';

const props = defineProps({
  blog: {
    type: Object as PropType<TypeBlog>,
    required: true,
  },
  variant: {
    type: String as PropType<'default' | 'featured'>,
    default: 'default',
  },
});

const classes = computed(() =>
  cn(
    'rounded-s w-full relative overflow-hidden flex flex-col border border-surface-secondary p-5 gap-6',
    {
      'bg-surface-secondary text-white': props.variant === 'featured',
      'bg-surface-primary text-text-primary': props.variant === 'default',
    },
  ),
);
</script>

<template>
  <article :class="classes">
    <BlogsCardTitle
      :author-name="blog.author.name"
      :title="blog.title"
      :variant="variant"
      layout="vertical"
      :event="blog.event"
    />
    <div class="flex flex-col justify-between gap-6 flex-1 h-full">
      <div v-dompurify-html="blog.excerpt" class="text-sm line-clamp-[12]" />
      <NuxtLink class="w-fit ml-auto" :to="makeBlogPath(blog.slug)">
        <Button
          as="span"
          :aria-label="`Read more about ${blog.title}`"
          :title="`Read more about ${blog.title}`"
          text="Read More"
          class="h-10"
          :variant="variant === 'featured' ? 'default' : 'secondary'"
        >
          <p class="sr-only">{{ `Read more about ${blog.title}` }}</p>
          <IconsAlignJustify />
        </Button>
      </NuxtLink>
    </div>
    <IconsLogo
      class="absolute top-20 -right-1/3"
      :color="variant === 'featured' ? 'white' : 'var(--gold-700)'"
      :opacity="0.1"
    />
  </article>
</template>
