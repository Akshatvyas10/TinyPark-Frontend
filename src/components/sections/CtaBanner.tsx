import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Compass, Sun, Cloud, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SCHOOL } from '@/data/school'

interface CtaBannerProps {
    title?: string
    subtitle?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryHref?: string
    className?: string
}

export default function CtaBanner({
    title = 'Admissions Open for 2026–27', // Updated timeline context cleanly
    subtitle = 'Limited base camps available! Grab your field compass, map your child\'s brightest expedition, and schedule a fun school tour today.',
    primaryLabel = 'Secure My Passport',
    primaryTo = '/admissions',
    secondaryLabel = 'Ring the Park Ranger',
    secondaryHref,
    className,
}: CtaBannerProps) {
    return (
        <section className={`py-16 md:py-24 bg-[#FAFAF4] select-none ${className || ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                    className="relative rounded-[2.5rem] border-4 border-slate-900 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 p-8 sm:p-12 lg:p-16 text-slate-900 shadow-[8px_8px_0_0_#0f172a] overflow-hidden"
                >
                    {/* Immersive Playground Overlay Patterns */}
                    <div className="absolute inset-0 bg-grid-slate-900/[0.04] pointer-events-none" />

                    {/* Floating Background Motifs: The Park Horizon */}
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute -top-10 -right-6 text-white/40 pointer-events-none w-36 h-36 hidden md:block"
                    >
                        <Cloud className="w-full h-full fill-current" />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="absolute -bottom-10 right-1/4 text-yellow-200/30 pointer-events-none w-44 h-44 hidden lg:block"
                    >
                        <Sun className="w-full h-full stroke-[2]" />
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-6 left-12 text-slate-900/10 pointer-events-none w-10 h-10 hidden sm:block"
                    >
                        <Sparkles className="w-full h-full fill-current" />
                    </motion.div>

                    {/* Content Layout Inner Section */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* Text Content Block */}
                        <div className="text-center lg:text-left max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-slate-900 text-amber-300 border-2 border-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]">
                                <Compass className="w-4 h-4 animate-spin-slow" />
                                Adventure Gate Notice
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight leading-none mb-4">
                                {title}
                            </h2>
                            <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        {/* Interactive Bubbly Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:w-auto flex-shrink-0">

                            {/* Primary Link Button - Modified shadcn custom adaptation */}
                            <Button
                                asChild
                                size="xl"
                                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-base px-8 py-7 rounded-2xl border-4 border-slate-900 shadow-[0_5px_0_0_#1e293b] hover:shadow-[0_5px_0_0_#1e293b] active:translate-y-1 active:shadow-none transition-all duration-700 group"
                            >
                                <Link to={primaryTo}>
                                    {primaryLabel}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform stroke-[3]" />
                                </Link>
                            </Button>

                            {/* Secondary Communication Button - Modified outline adaptation */}
                            <Button
                                asChild
                                size="xl"
                                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 font-black text-base px-8 py-7 rounded-2xl border-4 border-slate-900 shadow-[0_5px_0_0_#0f172a] hover:shadow-[0_5px_0_0_#0f172a] active:translate-y-1 active:shadow-none transition-all duration-700 group"
                            >
                                <a href={secondaryHref ?? `tel:${SCHOOL.phone}`}>
                                    <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce stroke-[3]" />
                                    {secondaryLabel}
                                </a>
                            </Button>

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}