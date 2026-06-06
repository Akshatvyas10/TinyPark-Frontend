import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Clapperboard, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SectionHeader from '@/components/sections/SectionHeader'
import { VIDEOS } from '@/data/school'

// Custom thematic accent colors to rotate across video frames
const STICKER_THEMES = [
    { border: 'border-sky-400', shadow: 'shadow-[0_8px_0_0_#38bdf8]', bg: 'bg-sky-50 text-sky-700', fill: 'fill-sky-500' },
    { border: 'border-amber-400', shadow: 'shadow-[0_8px_0_0_#fbbf24]', bg: 'bg-amber-50 text-amber-700', fill: 'fill-amber-500' },
    { border: 'border-emerald-400', shadow: 'shadow-[0_8px_0_0_#34d399]', bg: 'bg-emerald-50 text-emerald-700', fill: 'fill-emerald-500' },
]

export default function VideoPreview() {
    // Pulling the top 3 items for the interactive campsite preview
    const preview = VIDEOS.slice(0, 3)

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-rose-50/40 to-[#FFFBEB] relative overflow-hidden">

            {/* Whimsical Ambient Motifs */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-white/40 blur-md rounded-full -z-10 pointer-events-none" />
            <div className="absolute top-16 right-10 text-rose-300 animate-pulse pointer-events-none hidden md:block">
                <Sparkles className="w-8 h-8" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

                {/* --- CUSTOMIZED ADVENTURE THEATER HEADER --- */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        badge="Adventure Theater"
                        badgeVariant="rose"
                        badgeIcon={<Clapperboard className="w-4 h-4 text-rose-500 animate-bounce" />}
                        title={
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                                See Tiny Park <span className="relative inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-2xl border-4 border-dashed border-rose-300">in Action</span>
                            </h2>
                        }
                        subtitle="Take a look through our magic magnifying glass! Watch our real campsite interactions, joyful classrooms, and student achievements unfold."
                    />
                </div>

                {/* --- DYNAMIC POLAROID STICKER GALLERY --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {preview.map((v, i) => {
                        const theme = STICKER_THEMES[i % STICKER_THEMES.length]

                        return (
                            <motion.div
                                key={v.id}
                                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
                                className={`group cursor-pointer bg-white p-4 rounded-[2rem] border-4 border-solid ${theme.border} ${theme.shadow} transition-shadow duration-300 flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Aspect Video Screening Mask */}
                                    <div className="relative rounded-[1.5rem] overflow-hidden aspect-video mb-4 shadow-inner border border-slate-100 bg-slate-50">
                                        <img
                                            src={v.thumbnail}
                                            alt={v.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Living Ambient Color Scrim */}
                                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-300" />

                                        {/* Bubbly Squishy Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-14 h-14 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-[0_6px_0_0_rgba(0,0,0,0.1)] border-2 border-solid group-hover:border-rose-400 group-hover:scale-110 active:scale-95 active:shadow-none transition-all duration-200`}>
                                                <Play className="w-6 h-6 text-rose-500 fill-rose-500 ml-1 transform group-hover:rotate-12 transition-transform" />
                                            </div>
                                        </div>

                                        {/* Duration Stamp */}
                                        <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase border border-white/20">
                                            ⏱️ {v.duration}
                                        </div>
                                    </div>

                                    {/* Playful Category Tag */}
                                    <Badge className={`mb-3 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border-2 border-solid ${theme.bg} border-current shadow-[0_2px_0_0_currentColor]`}>
                                        {v.category}
                                    </Badge>

                                    {/* Accessible Heading Title */}
                                    <h3 className="text-base font-black text-slate-800 leading-tight group-hover:text-rose-600 transition-colors duration-200">
                                        {v.title}
                                    </h3>
                                </div>

                                {/* Decorative Tiny Park Bottom Border Slot */}
                                <div className="w-full h-2 border-t-2 border-dashed border-slate-100 mt-4 pt-1 flex justify-end">
                                    <span className="text-xs opacity-40 group-hover:opacity-100 transition-opacity">🔍 Explore</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* --- THICK BUBBLY INTERACTIVE TRIGGER --- */}
                <div className="text-center">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-rose-400 to-orange-400 text-white font-black text-base rounded-full px-8 py-6 border-b-4 border-orange-600 shadow-[0_6px_0_0_rgba(244,63,94,0.2)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all duration-150 group"
                    >
                        <Link to="/videos" className="flex items-center gap-2">
                            View All Video Expeditions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}