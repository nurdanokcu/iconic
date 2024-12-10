import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'relative group inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-foglihten font-medium uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'bg-button-background hover:bg-button-background-hover border border-border-primary text-2xl leading-none tracking-[1.2px] text-stroke-sm text-stroke-button-label rounded-sm text-button-label',
        secondary:
          'border-b-2 border-surface-secondary text-text-primary text-xl tracking-[1px] text-stroke-sm text-stroke-black transition-all',
        tertiary:
          'bg-surface-primary text-text-primary hover:bg-gold-100 border-transparent text-[1.25rem] tracking-[1px] text-stroke-md text-stroke-black rounded-sm',
      },
      size: {
        default: 'h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
