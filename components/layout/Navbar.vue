<script setup lang="ts">
import { cn } from '@/lib/utils';
import { menuLinks } from '~/config/paths';

const { isLockScreenVisible, disableScroll } = useLockScreen();
const { globalSettings } = useWebsiteSettings();

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
const close = () => {
  isOpen.value = false;
};
const handleClick = () => {
  close();
  window.scrollTo({ top: 0, behavior: 'auto' });
  isLockScreenVisible.value = true;
  disableScroll();
};
</script>

<template>
  <div
    class="bg-surface-primary w-full border-b border-surface-secondary h-nav"
  >
    <nav
      class="max-content-centered-lg py-6 flex items-center justify-between w-full"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-8"
        @click="handleClick"
      >
        <span class="sr-only">
          Go to the home page
        </span>
        <span class="w-[236px] h-[50px]">
          <NuxtImg
            :src="globalSettings.website_logo"
            alt="Logo"
            class="w-full h-full object-contain"
          />

        </span>

      </NuxtLink>
      <div class="hidden md:flex gap-4 items-center">
        <NuxtLink
          v-for="link in menuLinks"
          :key="link.text"
          :to="link.to"
          active-class="text-stroke-lg"
        >
          <Button
            :text="link.text"
            variant="secondary"
            @click="close"
          />
        </NuxtLink>
      </div>
      <LayoutMenuButton
        class="md:hidden"
        :is-open="isOpen"
        @on-click="toggle"
      />
      <div
        :class="
          cn(
            'md:hidden fixed top-nav right-0 translate-x-full h-full overflow-x-hidden duration-500 z-10 bg-white w-full',
            {
              'translate-x-0': isOpen,
            },
          )
        "
      >
        <div class="flex flex-col gap-4 p-4 py-6 items-center">
          <NuxtLink
            v-for="link in menuLinks"
            :key="link.text"
            :to="link.to"
            active-class="text-stroke-lg"
          >
            <Button
              :text="link.text"
              variant="secondary"
              @click="close"
            />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
