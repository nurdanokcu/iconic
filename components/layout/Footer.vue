<script setup>
import { footerLinks } from "@/utils/pagePaths";
</script>

<template>
  <div class="flex gap-4 justify-center bg-text-primary text-white">
    <LayoutFooterLink
      v-for="link in footerLinks"
      :key="link.to"
      :text="link.text"
      :to="link.to"
    />
  </div>
</template>
