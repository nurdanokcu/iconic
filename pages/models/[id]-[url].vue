<template>
   <main class="mt-nav">
    <h1>Model: {{ route.params.id }} - {{ route.params.url }}</h1>
   </main>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>

</style>