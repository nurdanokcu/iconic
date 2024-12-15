<script setup lang="ts">
import { singleProject } from '~/data/projects';
</script>

<template>
  <CommonFeaturedProject
    :project="singleProject"
    :is-event-visible="true"
    title="Featured Project"
  />
</template>
