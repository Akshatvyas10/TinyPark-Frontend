import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    placeholder?: string
    options: { value: string; label: string }[]
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
    ({ className, placeholder, options, value, ...props }, ref) => {
        const isEmpty = !value || value === ''
        return (
            <div className="relative">
                <select
                    ref={ref}
                    value={value}
                    className={cn(
                        'flex h-11 w-full appearance-none rounded-xl border border-input bg-white pl-4 pr-10 py-2 text-sm transition-all duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary',
                        'hover:border-primary/50',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        isEmpty ? 'text-muted-foreground' : 'text-foreground',
                        className
                    )}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled hidden>{placeholder}</option>
                    )}
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                    strokeWidth={2}
                />
            </div>
        )
    }
)
SelectField.displayName = 'SelectField'

export { SelectField }
