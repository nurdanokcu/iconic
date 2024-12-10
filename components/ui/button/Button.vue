<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  text?: string;
  as?: "button" | "span";
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  text: "",
  href: "",
  target: "_self",
  rel: "",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <span
      v-if="variant === 'secondary'"
      class="absolute bottom-0 right-0 h-0.5 bg-surface-secondary w-0 group-hover:w-full transition-all duration-500 link-line"
    ></span>
    <slot />
    <span v-if="text" class="pt-1">{{ text }}</span>
  </Primitive>
</template>
