import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Globe2, HeartHandshake, Sparkles, Sun, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HERO_SLIDES } from '@/data/school'

const trustBadges = [
    { icon: Globe2, label: 'Global Standards', border: 'border-sky-400 text-sky-700 bg-sky-50/50', shadow: 'shadow-[4px_4px_0_0_#38bdf8]' },
    { icon: HeartHandshake, label: 'Indian Values', border: 'border-rose-400 text-rose-700 bg-rose-50/50', shadow: 'shadow-[4px_4px_0_0_#f43f5e]' },
    { icon: ShieldCheck, label: 'Safe & Secure', border: 'border-emerald-400 text-emerald-700 bg-emerald-50/50', shadow: 'shadow-[4px_4px_0_0_#34d399]' },
    { icon: Sparkles, label: 'Affordable Fees', border: 'border-amber-400 text-amber-700 bg-amber-50/50', shadow: 'shadow-[4px_4px_0_0_#fbbf24]' },
]

const slideVariants: any = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.98
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: { type: 'spring', stiffness: 100, damping: 20 },
            opacity: { duration: 0.3 }
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        scale: 0.98,
        transition: {
            x: { type: 'spring', stiffness: 100, damping: 20 },
            opacity: { duration: 0.2 }
        }
    })
}

const textVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 18 }
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.15 } }
}

export default function HeroSlider() {
    const [[page, direction], setPage] = useState([0, 0])
    const [paused, setPaused] = useState(false)
    const autoPlayTimer = useRef<any | null>(null)
    const thumbnailContainerRef = useRef<HTMLDivElement>(null)

    const current = Math.abs(page % HERO_SLIDES.length)

    const go = useCallback((idx: number) => {
        const activeIdx = Math.abs(page % HERO_SLIDES.length)
        if (idx === activeIdx) return
        setPage([idx, idx > activeIdx ? 1 : -1])
    }, [page])

    const next = useCallback(() => {
        setPage([page + 1, 1])
    }, [page])

    const prev = useCallback(() => {
        setPage([page - 1, -1])
    }, [page])

    // Center active thumbnail within the scrolling sidebar panel container
    useEffect(() => {
        if (thumbnailContainerRef.current) {
            const activeEl = thumbnailContainerRef.current.children[current] as HTMLElement
            if (activeEl) {
                thumbnailContainerRef.current.scrollTo({
                    top: activeEl.offsetTop - thumbnailContainerRef.current.clientHeight / 2 + activeEl.clientHeight / 2,
                    behavior: 'smooth'
                })
            }
        }
    }, [current])

    useEffect(() => {
        if (paused) {
            if (autoPlayTimer.current) clearInterval(autoPlayTimer.current)
            return
        }
        autoPlayTimer.current = setInterval(next, 6000)
        return () => {
            if (autoPlayTimer.current) clearInterval(autoPlayTimer.current)
        }
    }, [next, paused])

    const slide = HERO_SLIDES[current]

    return (
        <section
            className="relative w-full overflow-hidden bg-[#FAF9F5] py-8 lg:py-0 flex flex-col justify-center"
            style={{ minHeight: 'max(100svh, 780px)' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Soft Gradients */}
                <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[45%] bg-sky-200/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-5%] right-[5%] w-[45%] h-[45%] bg-amber-200/40 rounded-full blur-[120px]" />

                {/* Sun & Moon Celestial Pair */}
                <div className="absolute top-12 left-1/3 opacity-20 hidden xl:block">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                    >
                        <Sun className="w-24 h-24 text-amber-500" />
                    </motion.div>
                </div>
                <div className="absolute bottom-20 right-1/4 opacity-10 hidden xl:block">
                    {/* Using a circle or Moon icon if available; Lucide doesn't have a direct moon, so we use a styled div */}
                    <div className="w-20 h-20 rounded-full bg-slate-300 blur-[2px] shadow-[0_0_20px_rgba(203,213,225,0.5)]" />
                </div>

                {/* Decorative Floating Clouds */}
                <motion.div
                    animate={{ x: [0, 50, 0] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute top-[20%] left-[10%] opacity-30"
                >
                    <Cloud className="w-24 h-24 text-white" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, -40, 0] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute top-[10%] right-[15%] opacity-20"
                >
                    <Cloud className="w-32 h-32 text-white" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="absolute bottom-[20%] left-[20%] opacity-25"
                >
                    <Cloud className="w-20 h-20 text-white" />
                </motion.div>
            </div>

            {/* ── ALIGNED CORE CONTENT GRID ── */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column Text Block */}
                    <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={current}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex flex-col gap-5 items-center lg:items-start"
                            >
                                <Badge className="w-fit bg-gradient-to-r from-amber-400 to-orange-400 text-white font-black text-xs px-4 py-2 rounded-full border-2 border-white shadow-[0_4px_0_0_#d97706] tracking-wider uppercase select-none transform -rotate-1">
                                    <Sparkles className="w-3.5 h-3.5 mr-1.5 inline text-white animate-pulse" /> {slide.tag}
                                </Badge>

                                <div className="space-y-3">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-slate-800 leading-[1.12] tracking-tight">
                                        {slide.headline}
                                    </h1>
                                    <div className="pt-1">
                                        <span className="inline-block text-xl sm:text-3xl md:text-4xl font-black px-5 py-2.5 bg-white text-emerald-500 rounded-2xl border-4 border-solid border-emerald-400 shadow-[4px_4px_0_0_#34d399] transform rotate-1">
                                            {slide.highlight}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-slate-600 font-bold leading-relaxed max-w-xl">
                                    {slide.sub}
                                </p>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
                                    <Button
                                        asChild
                                        className="bg-slate-900 text-white font-black text-sm sm:text-base rounded-full px-6 sm:px-8 py-5 sm:py-6 border-b-4 border-slate-950 shadow-md hover:bg-slate-800 active:translate-y-0.5 transition-all group"
                                    >
                                        <Link to="/admissions" className="flex items-center gap-2">
                                            Enquire Now
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        className="bg-white border-4 border-solid border-sky-400 text-sky-500 hover:bg-sky-50/50 font-black text-sm sm:text-base rounded-full px-6 sm:px-8 py-5 sm:py-6 shadow-[4px_4px_0_0_#38bdf8] active:translate-y-0.5 transition-all"
                                    >
                                        <Link to="/montessori">Explore Programs 🧭</Link>
                                    </Button>
                                </div>

                                {/* Grid UI Trust Badges */}
                                <div className="grid grid-cols-2 gap-3 pt-4 w-full max-w-xl">
                                    {trustBadges.map(({ icon: Icon, label, border, shadow }) => (
                                        <div
                                            key={label}
                                            className={`flex items-center gap-2 border-2 border-solid bg-white ${border} ${shadow} rounded-xl p-2.5 select-none transition-all`}
                                        >
                                            <Icon className="w-4 h-4 stroke-[2.5] shrink-0 text-slate-700" />
                                            <span className="text-xs font-black tracking-wide text-slate-700 truncate">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column Frame Layout Container (Anti-Crop Design) */}
                    <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center order-1 lg:order-2">

                        {/* Aspect Container Framework preserving complete asset parameters */}
                        <div className="col-span-10 w-full aspect-[4/3] sm:aspect-[1.4/1] relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 border-slate-900 bg-white shadow-[8px_8px_0_0_rgba(15,23,42,0.06)] flex items-center justify-center">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={page}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full p-2 bg-slate-50"
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.headline}
                                        // object-contain ensures images never crop; native canvas background fills matching whitespace layout edges cleanly
                                        className="w-full h-full object-contain bg-white rounded-2xl select-none"
                                        draggable={false}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating Cloud Tag */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute top-4 left-4 z-30 pointer-events-none hidden sm:block"
                            >
                                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-slate-200">
                                    <Cloud className="w-3.5 h-3.5 text-sky-400 fill-sky-100" />
                                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-wider">Learning Hub</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Smart Scrollable Sidebar Preview Carousel Block */}
                        <div className="col-span-2 relative h-full flex flex-col justify-center">
                            <div
                                ref={thumbnailContainerRef}
                                className="max-h-[280px] sm:max-h-[380px] overflow-y-auto no-scrollbar flex flex-col gap-2.5 pr-1 py-1 scroll-smooth"
                                style={{ scrollbarWidth: 'none' }}
                            >
                                {HERO_SLIDES.map((item, idx) => {
                                    const isSelected = idx === current
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => go(idx)}
                                            className={`relative w-full aspect-square rounded-xl overflow-hidden border-2 bg-white shrink-0 transition-all duration-200 ${isSelected
                                                ? 'border-amber-400 scale-105 shadow-md ring-2 ring-amber-400/20'
                                                : 'border-slate-200 opacity-60 hover:opacity-100'
                                                }`}
                                            aria-label={`Show slide ${idx + 1}`}
                                        >
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                            {isSelected && <div className="absolute inset-0 bg-amber-400/10" />}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── CONTROL MATRIX HUB ANCHOR ── */}
            <div className="relative z-40 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6 lg:mt-8 flex flex-row items-center justify-between lg:justify-start gap-4">
                <div className="flex items-center gap-2.5">
                    <button
                        onClick={prev}
                        className="w-11 h-11 rounded-xl bg-white text-slate-800 flex items-center justify-center transition-all border-2 border-slate-200 shadow-[2px_2px_0_0_#e2e8f0] hover:bg-slate-50 active:translate-y-0.5 active:shadow-none"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    <button
                        onClick={next}
                        className="w-11 h-11 rounded-xl bg-white text-slate-800 flex items-center justify-center transition-all border-2 border-slate-200 shadow-[2px_2px_0_0_#e2e8f0] hover:bg-slate-50 active:translate-y-0.5 active:shadow-none"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                </div>

                <div className="bg-slate-900 text-white font-black text-xs px-3.5 py-2 rounded-xl select-none tracking-widest border border-slate-950 min-w-[65px] text-center shadow-sm">
                    {current + 1}/{HERO_SLIDES.length}
                </div>
            </div>

            {/* Slide Timing Track Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/60 z-40">
                <motion.div
                    key={page}
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? undefined : '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400"
                />
            </div>
        </section>
    )
}