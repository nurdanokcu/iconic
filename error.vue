<script setup lang="ts">
const error = useError();

const httpError = error.value as {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data?: any;
} | null;
const backButton = ref();
onMounted(async () => {
  await nextTick();
  if (backButton.value) {
    backButton.value.focus();
  }
});
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-hidden relative">
    <LayoutNavbar class="fixed top-0 z-40" />
    <div class="flex-1 mt-nav flex items-center justify-center">
      <main v-if="httpError?.statusCode === 404" class="flex items-center justify-center bg-background text-foreground">
        <div class="text-center px-4 max-content-centered-md">
          <h1 class="text-9xl font-bold text-primary">404</h1>
          <p class="mt-6 text-lg text-muted">
            Oops! The page you are looking for does not exist.
          </p>
          <div class="mt-8">
            <NuxtLink class="group" to="/">
              <Button v-auto-animate as="span" text="Back to home">
                <IconsArrowLeft color="var(--gold-400)" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </main>
      <div v-else class="text-center px-4 max-content-centered-md">
        Oops, something went wrong.
        <br>
        <br>
        {{ error }}
        <div class="mt-8">
          <NuxtLink class="group" to="/">
            <Button v-auto-animate as="span" text="Back to home">
              <IconsArrowLeft color="var(--gold-400)" />
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <LayoutFooter />
    <IconsDecor03
      class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-[1]"
    />
  </div>
</template>
