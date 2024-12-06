<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Cross1Icon } from '@radix-icons/vue'
import { ToastClose, type ToastCloseProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class'],
  variant?: 'default' | 'destructive' | 'error' | 'success' | 'warning' | 'info'
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const toastVariantClasses = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'text-icon-success hover:text-green-400'
    case 'error':
      return 'text-icon-error hover:text-red-400'
    default:
      return ''
  }
})
</script>

<template>
  <ToastClose v-bind="delegatedProps" :class="cn('rounded-md p-1 text-foreground/50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', props.class)">
    <Cross1Icon :class="cn('w-6 h-6 transition-colors', toastVariantClasses)" />
  </ToastClose>
</template>
