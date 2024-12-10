<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea v-model="modelValue" :class="cn('flex min-h-24 w-full border-b-2 border-surface-secondary bg-button-label p-2 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:opacity-40 focus-visible:outline-none focus-visible:bg-border-primary-dark focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50 text-stroke-md', props.class)" />
</template>
