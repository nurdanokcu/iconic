<template>
  <div class="mt-nav">
    <div class="bg-text-secondary py-8 overflow-x-clip mb-8 relative">
      <ProjectsHeader class="max-content-centered-lg" />
      <ProjectsList class="" />
      <IconsDecor02
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-[1]"
      />
    </div>
    <NuxtLink
      aria-label="Scroll for more"
      title="Scroll for more"
      to="#clients"
      class="flex w-fit mx-auto"
    >
      <Button
        as="span"
        variant="tertiary"
        text="Scroll for more"
      >
        <IconsChevronDown />
      </Button>
    </NuxtLink>
    <div class="relative">
      <div id="clients" class="absolute -top-nav"></div>
      <ProjectsClients class="max-content-centered-lg py-8" />
    </div>
    <Contact
      class="px-4 py-16 mx-auto lg:max-w-page-width-md lg:px-20"
      title-tag="h3"
    />
  </div>
</template>
