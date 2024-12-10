<template>
  <header class="flex flex-col justify-between w-full relative h-full lg:grid lg:grid-cols-5 lg:grid-rows-12">
    <HomeHeaderImages class="px-8 pb-4 md:order-1 md:px-12 md:h-[44%] md:pb-6 lg:h-auto lg:col-span-3 lg:row-span-7 lg:order-0 lg:pl-6 lg:pr-2 xl:px-16" />
    <HomeHeaderMenu class="px-8 items-end mb-4 md:order-0 md:flex-1 md:px-12 md:h-[30%] lg:h-auto lg:col-span-2 lg:row-span-7 lg:order-1 lg:pl-2 lg:pr-6 xl:px-16" />
    <HomeHeaderBottom class="h-[270px] md:order-2 md:h-[26%] lg:h-auto lg:col-span-5 lg:row-span-5"/>
    <div
      class="bg-text-primary absolute bottom-0 right-0 left-12 h-9 -z-[1]"
    ></div>
    <IconsDecor03 class="absolute left-0 -translate-x-1/2 bottom-16 z-10 w-16 md:w-20" />
  </header>
</template>
