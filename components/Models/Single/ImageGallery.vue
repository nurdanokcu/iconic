<script setup lang="ts">
/* This Vue component takes an array of image URLs and arranges them into a layout grid following a specific pattern. If there are five or fewer images, they all go in one group. For more than five images, it automatically breaks them into rows of different sizes (like rows of 4, then 2, or 5 then 4, and so on) based on a set of rules. Each group is assigned classes to create a responsive, visually appealing layout using Tailwind CSS classes. The end result is a nicely arranged grid of images no matter how many images you provide. */

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const groupedImages = ref<string[][]>([]);
const parentClasses = ref<string[]>([]);
const imageClasses = ref<string[][]>([]);

function getGroupSizes(imagesLength: number): number[] {
  if (imagesLength <= 5) {
    return [imagesLength];
  }
  const fullGroupsCount = Math.floor((imagesLength - 6) / 4);
  const remainder = (imagesLength - 6) % 4;

  switch (remainder) {
    case 0:
      return [...Array(fullGroupsCount).fill(4), 4, 2];
    case 1:
      return [...Array(fullGroupsCount).fill(4), 4, 3];
    case 2:
      return [...Array(fullGroupsCount).fill(4), 4, 4];
    case 3:
      return [5, ...Array(fullGroupsCount + 1).fill(4)];
    default:
      return [];
  }
}

function getImageGrouping(images: string[]): string[][] {
  const imagesLength = images.length;
  const groupSizes = getGroupSizes(imagesLength);

  const result: string[][] = [];
  let start = 0;
  for (const size of groupSizes) {
    result.push(images.slice(start, start + size));
    start += size;
  }
  return result;
}

function getParentClassForLineSize(size: number): string {
  switch (size) {
    case 2:
      return 'flex flex-col md:grid md:grid-cols-2';
    case 3:
      return 'flex flex-col md:grid md:grid-cols-2';
    case 4:
      return 'flex flex-col md:grid md:grid-cols-3';
    case 5:
      return 'flex flex-col md:grid md:grid-cols-3';
    default:
      return 'flex flex-col';
  }
}

function getImageClassesForLineSize(size: number): string[] {
  switch (size) {
    case 2:
      return ['col-span-1', 'col-span-1'];
    case 3:
      return ['col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1'];
    case 4:
      return [
        'col-span-1 row-span-2',
        'col-span-2 row-span-1',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
      ];
    case 5:
      return [
        'col-span-1 row-span-2',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
      ];
    default:
      return Array(size).fill('col-span-1 row-span-1');
  }
}

function getLayoutForImages(images: string[]) {
  const grouped = getImageGrouping(images);
  const parent: string[] = [];
  const child: string[][] = [];

  for (const group of grouped) {
    const size = group.length;
    parent.push(getParentClassForLineSize(size));
    child.push(getImageClassesForLineSize(size));
  }

  return {
    grouped,
    parent,
    child,
  };
}

const { grouped, parent, child } = getLayoutForImages(props.images);
groupedImages.value = grouped;
parentClasses.value = parent;
imageClasses.value = child;
</script>

<template>
  <div class="flex flex-col max-w-page-width-lg mx-auto">
    <div
      v-for="(group, groupIndex) in groupedImages"
      :key="groupIndex"
      class="flex flex-col w-full md:aspect-[2/1]"
    >
      <div class="w-full h-full" :class="parentClasses[groupIndex]">
        <div
          v-for="(image, index) in group"
          :key="index"
          :class="imageClasses[groupIndex][index]"
          class="max-md:aspect-video w-full h-full relative"
        >
          <NuxtImg
            class="w-full h-full absolute inset-0 object-cover grayscale"
            :src="image"
            alt="Model Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
