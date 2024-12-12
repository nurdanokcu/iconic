<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const groupedImages = ref<string[][]>([]);
const parentClasses = ref<string[]>([]);
const imageClasses = ref<string[][]>([]);
const ratio = ref(3 / 1);

if (props.images.length === 2) {
  groupedImages.value = [props.images];
  parentClasses.value = ["flex flex-col md:grid md:grid-cols-2"];
  imageClasses.value = [["col-span-1", "col-span-1"]];
}
if (props.images.length === 3) {
  groupedImages.value = [props.images];
  parentClasses.value = ["flex flex-col md:grid md:grid-cols-2"];
  imageClasses.value = [
    ["col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  ];
}
if (props.images.length === 4) {
  groupedImages.value = [props.images];
  parentClasses.value = ["flex flex-col md:grid md:grid-cols-3"];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
  ];
}
if (props.images.length === 5) {
  groupedImages.value = [props.images];
  parentClasses.value = ["flex flex-col md:grid md:grid-cols-3"];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
  ];
}
if (props.images.length === 6) {
  groupedImages.value = [props.images.slice(0, 4), props.images.slice(-2)];
  parentClasses.value = [
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-2",
  ];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    ["col-span-1", "col-span-1"],
  ];
}
if (props.images.length === 7) {
  groupedImages.value = [props.images.slice(0, 4), props.images.slice(-3)];
  parentClasses.value = [
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-2",
  ];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    ["col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  ];
}
if (props.images.length === 8) {
  groupedImages.value = [props.images.slice(0, 4), props.images.slice(-4)];
  parentClasses.value = [
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-3",
  ];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
  ];
}
if (props.images.length === 9) {
  groupedImages.value = [props.images.slice(0, 5), props.images.slice(-4)];
  parentClasses.value = [
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-3",
  ];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
  ];
}
if (props.images.length === 10) {
  groupedImages.value = [props.images.slice(0, 4), props.images.slice(5,9), props.images.slice(-2)];
  parentClasses.value = [
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-3",
    "flex flex-col md:grid md:grid-cols-2",
  ];
  imageClasses.value = [
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    [
      "col-span-1 row-span-2",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
    [
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ],
  ];
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Loop through each group -->
    <div
      v-for="(group, groupIndex) in groupedImages"
      :key="groupIndex"
      class="flex flex-col w-full md:aspect-[2/1] max-w-page-width-lg mx-auto"
    >
      <div class="w-full h-full" :class="parentClasses[groupIndex]">
        <div
          v-for="(image, index) in group"
          :key="index"
          :class="imageClasses[groupIndex][index]"
          class="max-md:aspect-video w-full h-full relative"
        >
          <img
            class="w-full h-full absolute inset-0 object-cover grayscale"
            :src="image"
            alt="Model Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
