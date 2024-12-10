<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['onClick']);
</script>

<template>
  <button
    class="text-gray-500 w-10 h-8 relative focus:outline-none bg-white"
    @click="$emit('onClick')"
  >
    <span class="sr-only">Open main menu</span>
    <span
      class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span
        aria-hidden="true"
        class="block absolute h-px w-5 bg-black transform transition duration-500 ease-in-out"
        :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
      ></span>
      <span
        aria-hidden="true"
        class="block absolute h-px w-5 bg-black transform transition duration-500 ease-in-out"
        :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
      ></span>
    </span>
  </button>
</template>
