import type { ToastRootProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

import { cva, type VariantProps } from 'class-variance-authority';

export { default as Toast } from './Toast.vue';
export { default as ToastAction } from './ToastAction.vue';
export { default as ToastClose } from './ToastClose.vue';
export { default as ToastDescription } from './ToastDescription.vue';
export { default as Toaster } from './Toaster.vue';
export { default as ToastProvider } from './ToastProvider.vue';
export { default as ToastTitle } from './ToastTitle.vue';
export { default as ToastViewport } from './ToastViewport.vue';
export { default as ToastArrow } from './ToastArrow.vue';
export { toast, useToast } from './use-toast';

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border py-4 px-2 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground',
        success:
          'border-border-success bg-surface-success text-error-label-primary',
        error:
          'border-border-error bg-surface-error text-error-label-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastVariants = VariantProps<typeof toastVariants>;

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class'];
  variant?: ToastVariants['variant'];
  onOpenChange?: ((value: boolean) => void) | undefined;
}