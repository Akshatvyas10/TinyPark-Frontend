import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold font-display transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-1 active:shadow-none dynamic-bounce hover:scale-105',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:bg-primary/90',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:bg-secondary/90',
                accent:
                    'bg-accent text-accent-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:bg-accent/90',
                outline:
                    'border-4 border-primary text-primary bg-transparent hover:bg-primary/10 shadow-[0_4px_0_0_rgba(0,0,0,0.05)]',
                ghost:
                    'text-foreground hover:bg-muted hover:text-primary',
                link:
                    'text-primary underline-offset-4 hover:underline p-0 h-auto',
                white:
                    'bg-white text-primary shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:bg-white/90',
                'outline-white':
                    'border-4 border-white text-white bg-transparent hover:bg-white/10 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]',
            },
            size: {
                sm: 'h-10 px-5 text-sm',
                md: 'h-12 px-8 text-base',
                lg: 'h-14 px-10 text-lg',
                xl: 'h-16 px-12 text-xl',
                icon: 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
