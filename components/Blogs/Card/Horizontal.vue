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
    'rounded-s relative overflow-hidden',
    {
      'bg-surface-secondary text-white': props.variant === 'featured',
      'bg-surface-primary text-text-primary': props.variant === 'default',
    },
  ),
);
</script>

<template>
  <article
    :class="classes"
    class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 lg:max-h-96 border border-surface-secondary"
  >
    <div
      :class="
        cn({
          'sm:grid sm:grid-cols-2 lg:col-span-2': blog.featured_photo,
        })
      "
    >
      <div
        v-if="blog.featured_photo"
        class="rounded-sm overflow-hidden relative z-10 shrink-0"
      >
        <img
          class="w-full h-full object-cover grayscale"
          :src="blog.featured_photo"
          :alt="blog.title"
        />
      </div>
      <BlogsCardTitle
        :author-name="blog.author.name"
        :title="blog.title"
        :variant="variant"
        layout="horizontal"
        :event="blog.event"
        class="px-4"
      />
    </div>
    <div
      class="flex flex-col justify-between gap-6 flex-1 h-full p-4"
      :class="
        cn({
          'lg:col-span-2': !blog.featured_photo,
        })
      "
    >
      <div v-dompurify-html="blog.content" class="text-sm line-clamp-[12]" />
      <NuxtLink class="w-fit ml-auto" :to="makeBlogPath(blog.slug)">
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
      class="absolute w-96 h-80 top-1/2 -translate-y-1/2 left-1/3 right-auto"
      :color="variant === 'featured' ? 'white' : 'var(--gold-700)'"
      :opacity="0.1"
    />
  </article>
</template>
