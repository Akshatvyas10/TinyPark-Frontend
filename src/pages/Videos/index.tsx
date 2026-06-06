import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Film, Sparkles, Sun, Cloud } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { VIDEOS } from '@/data/school'

const categories = ['All Explored', ...Array.from(new Set(VIDEOS.map(v => v.category)))]

// Spring configs for bouncy interactions
const bubbleTransition: any = { type: "spring", stiffness: 400, damping: 15 }
const modalTransition: any = { type: "spring", stiffness: 300, damping: 20 }

export default function VideosPage() {
    const [active, setActive] = useState('All Explored')
    const [playing, setPlaying] = useState<typeof VIDEOS[0] | null>(null)

    const filtered = active === 'All Explored'
        ? VIDEOS
        : VIDEOS.filter(v => v.category === active)

    return (
        <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden selection:bg-amber-200">

            {/* --- HERO: The Park Amphitheater Gate --- */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-sky-100 via-sky-50 to-[#fcfbf7] overflow-hidden">
                {/* Whimsical Sky Background Props */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
                        className="absolute -top-12 -right-12 text-amber-400 opacity-80"
                    >
                        <Sun className="w-36 h-36 sm:w-48 sm:h-48 fill-current" />
                    </motion.div>

                    {/* Floating Soft Clouds */}
                    <motion.div
                        animate={{ x: [-10, 10, -10], y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-16 left-[10%] text-white opacity-70 hidden md:block"
                    >
                        <Cloud className="w-20 h-12 fill-current drop-shadow-sm" />
                    </motion.div>
                </div>

                <div className="container-max section-px relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={bubbleTransition}
                    >
                        <Badge className="mb-5 bg-rose-500 hover:bg-rose-600 text-white border-4 border-slate-900 font-black px-4 py-1.5 rounded-full text-xs tracking-wider shadow-[3px_3px_0_0_#0f172a] transform -rotate-2 inline-flex items-center gap-1.5">
                            <Film className="w-3.5 h-3.5 fill-current" /> TINY PARK THEATER
                        </Badge>
                        <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none">
                            Watch Our Park <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 drop-shadow-sm">Come To Life!</span>
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Grab your popcorn! Peer into our digital looking glass to discover magic classrooms, outdoor safaris, and real learning adventures happening daily.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* --- ADVENTURE ZONE: Video Gallery Hub --- */}
            <section className="py-16 bg-white relative z-10 border-t-4 border-slate-900">
                <div className="container-max section-px">

                    {/* Bubbly Category Filtering Station */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-3 justify-center mb-16"
                    >
                        {categories.map((cat, idx) => (
                            <motion.button
                                key={cat}
                                onClick={() => setActive(cat)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black tracking-tight border-4 border-slate-900 transition-all shadow-[4px_4px_0_0_#0f172a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_#0f172a] ${(active === cat || (active === 'All Explored' && idx === 0))
                                    ? 'bg-amber-400 text-slate-900'
                                    : 'bg-slate-50 text-slate-700 hover:bg-amber-100'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Featured Theater Presentation Screen */}
                    {active === 'All Explored' && VIDEOS[0] && (
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-14"
                        >
                            <div
                                className="relative bg-white border-4 border-slate-900 rounded-[2.5rem] p-4 shadow-[8px_8px_0_0_#0f172a] cursor-pointer group overflow-hidden"
                                onClick={() => setPlaying(VIDEOS[0])}
                            >
                                <div className="relative rounded-[1.8rem] overflow-hidden aspect-video md:h-[400px] w-full">
                                    <img src={VIDEOS[0].thumbnail} alt={VIDEOS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                                    {/* Oversized Comic-Style Play Target */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-rose-500 border-4 border-slate-900 text-white flex items-center justify-center shadow-[4px_4px_0_0_#0f172a]"
                                        >
                                            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1.5 stroke-[2.5]" />
                                        </motion.div>
                                    </div>

                                    {/* Timestamp tag */}
                                    <div className="absolute top-4 right-4 bg-slate-900 border-2 border-slate-700 text-amber-400 text-xs font-black px-3 py-1 rounded-xl">
                                        {VIDEOS[0].duration}
                                    </div>

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6 text-left max-w-2xl">
                                        <Badge className="mb-2 bg-sky-400 text-slate-900 border-2 border-slate-900 font-black">
                                            {VIDEOS[0].category}
                                        </Badge>
                                        <h3 className="text-white text-xl sm:text-3xl font-black font-display leading-tight drop-shadow-md">
                                            {VIDEOS[0].title}
                                        </h3>
                                        <p className="text-slate-200 text-sm mt-2 font-medium hidden sm:line-clamp-2">
                                            {VIDEOS[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Video Discovery Grid maps */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((v, i) => (
                                <motion.div
                                    key={v.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className="h-full"
                                >
                                    <Card
                                        className="overflow-hidden h-full border-4 border-slate-900 rounded-[2rem] bg-white shadow-[6px_6px_0_0_#0f172a] hover:shadow-[10px_10px_0_0_#0f172a] cursor-pointer flex flex-col justify-between transition-all duration-150"
                                        onClick={() => setPlaying(v)}
                                    >
                                        <div className="relative p-3 pb-0">
                                            <div className="relative rounded-[1.4rem] overflow-hidden aspect-video bg-slate-100 border-2 border-slate-900">
                                                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-slate-900/20" />

                                                {/* Mini Play Action Bubble */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-full bg-amber-400 border-3 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
                                                        <Play className="w-5 h-5 text-slate-900 fill-slate-900 ml-0.5" />
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[10px] font-black px-2 py-0.5 rounded-lg">
                                                    {v.duration}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 flex-1 flex flex-col justify-between items-start">
                                            <div className="w-full">
                                                <Badge className="mb-2.5 bg-purple-100 hover:bg-purple-100 text-purple-700 border border-purple-300 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                                                    {v.category}
                                                </Badge>
                                                <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug mb-1.5">
                                                    {v.title}
                                                </h3>
                                                <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-2">
                                                    {v.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>


            {/* --- VIDEO MODAL: The Secret Cinema Treasure Map --- */}
            <AnimatePresence>
                {playing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setPlaying(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotate: -2, y: 50 }}
                            animate={{ scale: 1, rotate: 0, y: 0 }}
                            exit={{ scale: 0.8, rotate: 2, y: 50 }}
                            transition={modalTransition}
                            className="relative w-full max-w-4xl bg-[#fffdf9] border-4 border-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 shadow-[0_16px_0_0_#0f172a]"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Comic Style Outward-Popping Close Button */}
                            <button
                                onClick={() => setPlaying(null)}
                                className="absolute -top-5 -right-3 sm:-right-5 w-12 h-12 rounded-2xl bg-rose-500 border-4 border-slate-900 flex items-center justify-center shadow-[3px_3px_0_0_#0f172a] hover:bg-rose-600 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all z-20"
                            >
                                <X className="w-6 h-6 text-white stroke-[3]" />
                            </button>

                            {/* Inner Screen Border Frame */}
                            <div className="relative rounded-[1.5rem] sm:rounded-[1.8rem] overflow-hidden bg-slate-950 border-4 border-slate-900 aspect-video shadow-inner">
                                <iframe
                                    src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1`}
                                    title={playing.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Footnote Details */}
                            <div className="mt-5 text-center px-2 max-w-2xl mx-auto">
                                <div className="inline-flex items-center gap-1 text-amber-500 font-black text-xs tracking-wider uppercase bg-amber-50 border-2 border-amber-300 px-3 py-1 rounded-full mb-2">
                                    <Sparkles className="w-3.5 h-3.5 fill-current" /> Now Playing
                                </div>
                                <h2 className="text-slate-900 font-black text-xl sm:text-2xl tracking-tight leading-tight">
                                    {playing.title}
                                </h2>
                                <p className="text-slate-600 font-medium text-xs sm:text-sm mt-2 leading-relaxed">
                                    {playing.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}