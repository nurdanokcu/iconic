<template>
  <div class="mt-nav">
    <main
      class="px-4 md:px-6 min-h-screen-height-sm mx-auto lg:max-w-page-width-md lg:px-20 flex flex-col justify-center items-center"
    >
      <Contact class="w-full py-16 overflow-hidden" title-tag="h1" />
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 py-8 w-full">
        <NuxtLink
          to="https://www.instagram.com/"
          class="w-full max-w-96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          title="Visit our Instagram"
        >
          <Button
            as="span"
            variant="secondary"
            text="Our Instagram"
            class="w-full justify-between"
          >
            <IconsInstagram />
          </Button>
        </NuxtLink>
        <NuxtLink
          to="https://www.facebook.com/"
          class="w-full max-w-96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook"
          title="Visit our Facebook"
        >
          <Button
            as="span"
            variant="secondary"
            text="Our Facebook"
            class="w-full justify-between"
          >
            <IconsFacebook />
          </Button>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
