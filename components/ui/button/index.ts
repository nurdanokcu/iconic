import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-foglihten font-medium uppercase transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-button-background text-button-label hover:bg-button-background-hover border border-border-primary text-2xl leading-none tracking-[1.2px] [-webkit-text-stroke-width:0.1px] [-webkit-text-stroke-color:var(--button-label)] rounded-sm',
        secondary:
          'border-b-2 border-surface-secondary text-text-primary text-xl tracking-[1px] [-webkit-text-stroke-width:0.1px] [-webkit-text-stroke-color:var(--text-primary)] hover:border-b-4 transition-all',
        tertiary:
          'bg-surface-primary text-text-primary hover:bg-gold-100 border-transparent text-[1.25rem] tracking-[1px] [-webkit-text-stroke-width:0.3px] [-webkit-text-stroke-color:var(--text-primary)] rounded-sm',

        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12',
        xs: 'h-7 rounded px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
