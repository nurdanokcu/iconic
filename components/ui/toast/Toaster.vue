<script setup lang="ts">
import { isVNode } from 'vue'
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport,ToastArrow } from '.'
import { useToast } from './use-toast'

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="flex gap-2 justify-between items-center w-full">
        <ToastArrow :variant="toast.variant ?? 'default'" />
        <div class="grid gap-1">
          <ToastTitle v-if="toast.title">
            {{ toast.title }}
          </ToastTitle>
          <template v-if="toast.description">
            <ToastDescription v-if="isVNode(toast.description)">
              <component :is="toast.description" />
            </ToastDescription>
            <ToastDescription v-else>
              {{ toast.description }}
            </ToastDescription>
          </template>
        </div>
        <ToastClose :variant="toast.variant ?? 'default'"
        />
      </div>
      <component :is="toast.action" />
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
