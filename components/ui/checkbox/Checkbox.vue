<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue';
import { computed, type HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn('peer h-4 w-4 shrink-0 rounded-xs border border-button-background bg-button-background shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-button-background data-[state=checked]:border-button-background relative',
         props.class,
      )"
  >
    <CheckboxIndicator class="absolute inset-0 flex h-full w-full items-center justify-center text-current">
      <slot>
        <IconsCheckMark class="w-4 h-4" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
