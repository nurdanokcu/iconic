<script setup lang="ts">
import { singleProject } from "~/data/projects";
</script>

<template>
  <CommonFeaturedProject
    :project="singleProject"
    :isEventVisible="true"
    title="Featured Project"
  />
</template>
