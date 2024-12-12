<script setup lang="ts">
import { cn } from "@/lib/utils";
import { menuLinks } from "~/config/paths";

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};
const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <div
    class="bg-surface-primary w-full border-b border-surface-secondary h-nav"
  >
    <nav
      class="max-content-centered-lg py-6 flex items-center justify-between w-full"
    >
      <NuxtLink to="/" class="flex items-center gap-8">
        <IconsLogoCombined color="var(--black)" class="h-auto" />
      </NuxtLink>
      <div class="hidden md:flex gap-4 items-center">
        <NuxtLink
          v-for="link in menuLinks"
          :key="link.text"
          :to="link.to"
          active-class="text-stroke-lg"
        >
          <Button :text="link.text" @click="close" variant="secondary" />
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
            }
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
            <Button :text="link.text" @click="close" variant="secondary" />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
