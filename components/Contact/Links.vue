<script setup lang="ts">
import { pagePaths } from '~/config/paths';

const userIcon = resolveComponent('IconsUser');
const announcement = resolveComponent('IconsAnnouncement');
const alignJustify = resolveComponent('IconsAlignJustify');

const contactFormLinks = [
  { text: 'Browse models', to: pagePaths.models, icon: userIcon },
  { text: 'Browse projects', to: pagePaths.projects, icon: announcement },
  { text: 'Read blogs', to: pagePaths.blogs, icon: alignJustify },
];
const hoveredLink = ref('');
</script>

<template>
  <div
    class="flex flex-col gap-8 justify-between rounded-sm border-2 border-surface-secondary p-6"
  >
    <p
      class="font-foglihten text-4xl uppercase text-text-secondary text-stroke-lg"
    >
      While you wait for our answer, you can:
    </p>
    <div class="flex flex-col gap-2">
      <NuxtLink
        v-for="link in contactFormLinks"
        :key="link.text"
        :to="link.to"
        class="group"
        @mouseover="hoveredLink = link.text"
        @mouseleave="hoveredLink = ''"
      >
        <Button
          v-auto-animate
          variant="secondary"
          class="w-full justify-between group-hover:text-stroke-md"
          animate-direction="right"
        >
          <component :is="link.icon" />
          <span>{{ link.text }}</span>
          <component
            :is="link.icon"
            v-if="hoveredLink === link.text"
            color="var(--black)"
          />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>
