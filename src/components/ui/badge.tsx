import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center gap-1.5 rounded-full font-semibold transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-primary-light text-primary border border-primary/20',
                primary: 'bg-primary-light text-primary border border-primary/20',
                secondary: 'bg-secondary-light text-secondary-foreground border border-secondary/20',
                accent: 'bg-accent-light text-accent border border-accent/20',
                rose: 'bg-rose-light text-rose border border-rose/20',
                violet: 'bg-violet-light text-violet border border-violet/20',
                sky: 'bg-sky-light text-sky border border-sky/20',
                muted: 'bg-muted text-muted-foreground border border-border',
                outline: 'border border-border text-foreground bg-transparent',
            },
            size: {
                sm: 'px-2.5 py-0.5 text-xs',
                md: 'px-3 py-1 text-xs',
                lg: 'px-4 py-1.5 text-sm',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
    )
}

export { Badge, badgeVariants }
