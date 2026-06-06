import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { STATS } from '@/data/school'

// High-contrast, joyful park color profiles to make each stat pop as a unique discovery
const playgroundThemes = [
    {
        bg: 'bg-sky-100 hover:bg-sky-200',
        border: 'border-sky-400',
        text: 'text-sky-700',
        shadowColor: '#38bdf8',
        rotateDir: -3
    },
    {
        bg: 'bg-amber-100 hover:bg-amber-200',
        border: 'border-amber-400',
        text: 'text-amber-700',
        shadowColor: '#fbbf24',
        rotateDir: 4
    },
    {
        bg: 'bg-emerald-100 hover:bg-emerald-200',
        border: 'border-emerald-400',
        text: 'text-emerald-700',
        shadowColor: '#34d399',
        rotateDir: -2
    },
    {
        bg: 'bg-rose-100 hover:bg-rose-200',
        border: 'border-rose-400',
        text: 'text-rose-700',
        shadowColor: '#f43f5e',
        rotateDir: 3
    }
]

export default function StatsBar() {
    return (
        <div className="relative py-8 px-2 select-none">
            {/* Winding Trail Background Accent to unify the badges */}
            <div className="absolute inset-x-0 top-1/2 h-2 border-t-4 border-dashed border-slate-300 pointer-events-none -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
                {STATS.map((stat, i) => {
                    // Clean loop modifier ensuring every card gets its specific organic geometry rules
                    const theme = playgroundThemes[i % playgroundThemes.length]

                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.3, y: 40, rotate: theme.rotateDir * 2 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: theme.rotateDir }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 12, // High elasticity for a crisp, toy-like pop
                                delay: i * 0.08
                            }}
                            whileHover={{
                                scale: 1.08,
                                rotate: theme.rotateDir * -1.5,
                                y: -6,
                                transition: { type: "spring", stiffness: 300, damping: 10 }
                            }}
                            className="w-full h-full"
                        >
                            <Card className={`${theme.bg} border-4 ${theme.border} rounded-[2rem] p-5 sm:p-6 text-center shadow-[0_6px_0_0_#0f172a] hover:shadow-[0_8px_0_0_#0f172a] active:translate-y-1 active:shadow-[0_2px_0_0_#0f172a] transition-all duration-100 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer`}>

                                {/* Background subtle decorative pattern */}
                                <div className="absolute inset-0 bg-grid-slate-900/[0.02] pointer-events-none rounded-[2rem]" />

                                {/* Sparkle icon for top performers */}
                                {i % 2 === 0 && (
                                    <Sparkles className="absolute top-3 right-3 w-4 h-4 text-slate-400 opacity-40 group-hover:animate-spin pointer-events-none" />
                                )}

                                {/* --- 1. EMOJI ICON: The Badge Insignia --- */}
                                <div className="text-4xl sm:text-5xl mb-3 filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 select-none">
                                    {stat.emoji}
                                </div>

                                {/* --- 2. VALUE: Thick Display Typography --- */}
                                <p className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight leading-none">
                                    {stat.value}
                                </p>

                                {/* --- 3. LABEL: Contextual Explorable metadata --- */}
                                <p className={`text-xs sm:text-sm font-black uppercase tracking-wider ${theme.text} mt-2 max-w-[150px] leading-tight`}>
                                    {stat.label}
                                </p>

                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}