import { motion } from 'framer-motion'
import { Star, Quote, Tent, Trees, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeader from './SectionHeader'
import { TESTIMONIALS } from '@/data/school'

// Custom kid-centric visual variants for natural park asymmetry
const cardStyleVariants = [
    { bg: 'bg-emerald-50/90', border: 'border-emerald-500', shadow: 'shadow-[6px_6px_0_0_#10b981]', tagBg: 'bg-emerald-500 text-white' },
    { bg: 'bg-sky-50/90', border: 'border-sky-500', shadow: 'shadow-[6px_6px_0_0_#0ea5e9]', tagBg: 'bg-sky-500 text-white' },
    { bg: 'bg-amber-50/90', border: 'border-amber-500', shadow: 'shadow-[6px_6px_0_0_#f59e0b]', tagBg: 'bg-amber-500 text-slate-900' },
    { bg: 'bg-purple-50/90', border: 'border-purple-500', shadow: 'shadow-[6px_6px_0_0_#a855f7]', tagBg: 'bg-purple-500 text-white' },
    { bg: 'bg-rose-50/90', border: 'border-rose-500', shadow: 'shadow-[6px_6px_0_0_#f43f5e]', tagBg: 'bg-rose-500 text-white' },
    { bg: 'bg-orange-50/90', border: 'border-orange-500', shadow: 'shadow-[6px_6px_0_0_#f97316]', tagBg: 'bg-orange-500 text-slate-900' }
]

function StarRow({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.15, ease: "easeInOut" }}
                >
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500 drop-shadow-[1px_1px_0_rgba(0,0,0,0.1)]" />
                </motion.div>
            ))}
        </div>
    )
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-[#FAF9F5] border-t-8 border-slate-900 relative overflow-hidden select-none">
            {/* Whimsical Forest Environmental Ornaments */}
            <div className="absolute top-12 left-6 w-24 h-24 text-emerald-300 opacity-30 pointer-events-none transform -rotate-12">
                <Trees className="w-full h-full stroke-[1.5]" />
            </div>
            <div className="absolute bottom-16 right-6 w-28 h-28 text-amber-300 opacity-30 pointer-events-none transform rotate-12">
                <Tent className="w-full h-full stroke-[1.5]" />
            </div>

            {/* Organic Ambient Glowing Blobs */}
            <div className="absolute top-1/3 right-[-10%] w-96 h-96 bg-sky-200/40 rounded-full filter blur-3xl opacity-70 pointer-events-none" />
            <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-amber-100/50 rounded-full filter blur-3xl opacity-70 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- 1. SECTION HEADER: The Park Bulletin Board --- */}
                <div className="text-center mb-16">
                    <SectionHeader
                        badge="Campfire Tales"
                        badgeVariant="outline"
                        badgeIcon={<Tent className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />}
                        title={
                            <span className="text-4xl sm:text-6xl font-black font-display text-slate-900 tracking-tight block mt-2">
                                Loved by Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 drop-shadow-sm">Tiny Park Families</span>
                            </span>
                        }
                        subtitle="Unzip the adventure logbook! Read authentic milestones, field notes, and success stories penned directly by our loving parents and inspired educators."
                        className="font-display"
                    />
                </div>

                {/* --- 2. TRUST BAR: The Playground Scoreboard --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -0.5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 140, damping: 16 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-16 bg-amber-100 border-4 border-slate-900 p-6 sm:p-8 rounded-[2rem] shadow-[6px_6px_0_0_#0f172a] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-slate-900/[0.03] pointer-events-none" />
                    {[
                        { value: '500+', label: 'Happy Families', emoji: '🏡' },
                        { value: '4.9/5', label: 'Campfire Rating', emoji: '✨' },
                        { value: '98%', label: 'Joy Recommendation', emoji: '❤️' },
                        { value: '15+', label: 'Years Explored', emoji: '🌳' },
                    ].map(({ value, label, emoji }) => (
                        <div key={label} className="text-center min-w-[130px] flex flex-col items-center relative z-10">
                            <span className="text-2xl mb-1 filter drop-shadow-xs">{emoji}</span>
                            <p className="text-2xl sm:text-3xl font-black font-display text-slate-900 leading-none">{value}</p>
                            <p className="text-[10px] sm:text-xs text-slate-700 font-bold uppercase tracking-wider mt-1.5">{label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* --- 3. TESTIMONIALS GRID: Scrapbook Adventure Log --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => {
                        // Dynamically loop style setups so the park remains randomly asymmetric and colorful
                        const style = cardStyleVariants[i % cardStyleVariants.length];
                        const alternateRotation = i % 2 === 0 ? 1.5 : -1.5;

                        return (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, scale: 0.9, y: 35 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.06 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: alternateRotation,
                                    y: -8,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="h-full"
                            >
                                <Card className={`${style.bg} border-4 border-slate-900 rounded-[2rem] ${style.shadow} hover:shadow-[10px_10px_0_0_#0f172a] transition-all p-6 flex flex-col gap-5 h-full relative overflow-hidden group`}>

                                    {/* Top Metadata Row */}
                                    <div className="flex items-start justify-between gap-2 w-full">
                                        {/* Playful Floating Quote Bubble icon */}
                                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] transform group-hover:-rotate-12 transition-transform duration-300">
                                            <Quote className="w-5 h-5 fill-current text-yellow-300 stroke-[2.5]" />
                                        </div>

                                        {/* Stylized program tracker badge */}
                                        <Badge className={`${style.tagBg} border-2 border-slate-900 font-black text-[10px] tracking-wide uppercase px-3 py-1 rounded-full shadow-[2px_2px_0_0_#0f172a]`}>
                                            🎒 {t.program}
                                        </Badge>
                                    </div>

                                    {/* Playful Micro Animated Star Ratings */}
                                    <StarRow count={t.rating} />

                                    {/* Main Body Feedback Copy */}
                                    <p className="text-sm font-semibold text-slate-700 leading-relaxed flex-1 italic">
                                        "{t.text}"
                                    </p>

                                    {/* Author Profile Footer block with dashed landscape separator */}
                                    <div className="flex items-center gap-3 pt-4 border-t-4 border-dashed border-slate-900/10">
                                        <div className="w-12 h-12 rounded-full bg-white border-3 border-slate-900 flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#0f172a] flex-shrink-0 transform group-hover:scale-110 transition-transform duration-200">
                                            <span className="select-none filter drop-shadow-xs">{t.avatar}</span>
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-sm font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1 truncate">
                                                {t.name}
                                                {i === 0 && <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse flex-shrink-0" />}
                                            </p>
                                            <p className="text-xs font-bold text-slate-500 truncate mt-0.5">{t.role}</p>
                                        </div>
                                    </div>

                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}