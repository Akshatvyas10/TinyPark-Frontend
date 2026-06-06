import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Sparkles, Sun } from 'lucide-react'

interface SectionHeaderProps {
    badge?: string
    badgeIcon?: React.ReactNode
    badgeVariant?: 'primary' | 'secondary' | 'accent' | 'rose' | 'violet' | 'outline'
    title: React.ReactNode
    subtitle?: string
    centered?: boolean
    className?: string
}

// Thick-bordered, child-friendly high-contrast color tokens
const badgeColors = {
    primary: 'bg-sky-400 text-slate-950 border-slate-900 shadow-[3px_3px_0_0_#0f172a]',
    secondary: 'bg-amber-400 text-slate-950 border-slate-900 shadow-[3px_3px_0_0_#0f172a]',
    accent: 'bg-emerald-400 text-slate-950 border-slate-900 shadow-[3px_3px_0_0_#0f172a]',
    rose: 'bg-rose-400 text-white border-slate-900 shadow-[3px_3px_0_0_#0f172a]',
    violet: 'bg-purple-400 text-white border-slate-900 shadow-[3px_3px_0_0_#0f172a]',
    outline: 'bg-white text-slate-900 border-slate-900 border-3 shadow-[3px_3px_0_0_#0f172a]',
}

export default function SectionHeader({
    badge,
    badgeIcon,
    badgeVariant = 'primary',
    title,
    subtitle,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40, rotate: centered ? -2 : 0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
                type: "spring",
                stiffness: 160,
                damping: 14, // Extra bounce for a cartoonish pop effect
                duration: 0.6
            }}
            className={cn(
                centered ? 'text-center flex flex-col items-center' : 'text-left items-start',
                'mb-16 relative w-full select-none group',
                className
            )}
        >
            {/* Whimsical Park Signpost Accents (Visible when centered) */}
            {centered && (
                <div className="absolute -top-12 inset-x-0 hidden sm:flex justify-between max-w-3xl mx-auto pointer-events-none opacity-40">
                    {/* Animated Sunbeam Prop */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="text-amber-300 transform -translate-x-12"
                    >
                        <Sun className="w-12 h-12 stroke-[1.5]" />
                    </motion.div>
                    {/* Floating Magical Cloud Prop */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="text-sky-300 transform translate-x-12"
                    >
                        <Sparkles className="w-10 h-10 fill-current" />
                    </motion.div>
                </div>
            )}

            {/* --- 1. BADGE: The Playground Sticker --- */}
            {badge && (
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className={cn(
                        'inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black tracking-wider border-4 uppercase mb-5 transition-transform duration-150 cursor-pointer',
                        badgeColors[badgeVariant]
                    )}
                >
                    {badgeIcon && (
                        <span className="w-4 h-4 flex items-center justify-center filter drop-shadow-sm transform group-hover:animate-bounce">
                            {badgeIcon}
                        </span>
                    )}
                    <span className="font-display">{badge}</span>
                </motion.div>
            )}

            {/* --- 2. TITLE: Display Typography --- */}
            <h2 className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 mb-5 leading-[1.05] tracking-tight",
                centered ? "max-w-4xl" : "max-w-2xl"
            )}>
                {title}
            </h2>

            {/* --- 3. SUBTITLE: Readable Parent Companion text --- */}
            {subtitle && (
                <p className={cn(
                    'text-base sm:text-xl font-medium text-slate-600 leading-relaxed border-slate-900/10',
                    centered ? 'max-w-2xl mx-auto' : 'max-w-2xl',
                    // Adds a playful dashed border underline just below left-aligned headers
                    !centered && 'pb-4 border-b-4 border-dashed'
                )}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}