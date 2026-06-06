import { motion } from 'framer-motion'
import { Sparkles, Compass, GraduationCap, Heart, Coins, Globe, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Map icons dynamically to give the checklist a narrative, playful look
const highlights = [
    { text: 'World-class Montessori curriculum', icon: Compass, color: 'bg-amber-100 text-amber-600 border-amber-300' },
    { text: 'UCMAS mental math program', icon: GraduationCap, color: 'bg-sky-100 text-sky-600 border-sky-300' },
    { text: 'Safe, secure & homely environment', icon: ShieldCheck, color: 'bg-emerald-100 text-emerald-600 border-emerald-300' },
    { text: 'Affordable fee structure', icon: Coins, color: 'bg-rose-100 text-rose-600 border-rose-300' },
    { text: 'Indian values with global standards', icon: Globe, color: 'bg-indigo-100 text-indigo-600 border-indigo-300' },
    { text: 'Holistic all-round development', icon: Heart, color: 'bg-fuchsia-100 text-fuchsia-600 border-fuchsia-300' },
]

export default function WelcomeSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFBEB] via-[#F0FDF4] to-white overflow-hidden relative">

            {/* Ambient Park Accents */}
            <div className="absolute top-12 left-6 text-yellow-400/30 animate-spin duration-10000 pointer-events-none">✨</div>
            <div className="absolute bottom-20 right-8 text-emerald-400/30 animate-bounce pointer-events-none">🎈</div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* --- LEFT SIDE: THE ASYMMETRICAL STICKER ALBUM (IMAGE COLLAGE) --- */}
                    <div className="lg:col-span-5 relative pb-12 w-full max-w-md lg:max-w-none mx-auto">

                        {/* Whimsical structural background card block backing the grid */}
                        <div className="absolute inset-2 bg-gradient-to-tr from-amber-200 to-yellow-100 rounded-[3rem] -rotate-3 border-4 border-dashed border-amber-400/50 -z-10 shadow-inner" />

                        <div className="grid grid-cols-12 gap-4 items-end">
                            {/* Image 1: Tall learning block */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="col-span-7 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-solid border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transform -rotate-2 bg-slate-100"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80"
                                    alt="Children learning happily"
                                    className="w-full h-full object-cover select-none"
                                />
                            </motion.div>

                            {/* Image 2: Secondary offset element */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 4 }}
                                className="col-span-5 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-solid border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transform rotate-3 translate-y-6 bg-slate-100"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&q=80"
                                    alt="Montessori coordination task"
                                    className="w-full h-full object-cover select-none"
                                />
                            </motion.div>

                            {/* Image 3: Wide foundational layout */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                className="col-span-6 aspect-video rounded-3xl overflow-hidden border-4 border-solid border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transform translate-y-2 bg-slate-100"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500&q=80"
                                    alt="Kids playing collectively"
                                    className="w-full h-full object-cover select-none"
                                />
                            </motion.div>

                            {/* Image 4: Core visual element */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -3 }}
                                className="col-span-6 aspect-video rounded-3xl overflow-hidden border-4 border-solid border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transform rotate-1 translate-y-8 bg-slate-100"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80"
                                    alt="Creative art workshop"
                                    className="w-full h-full object-cover select-none"
                                />
                            </motion.div>
                        </div>

                        {/* Floating Award Medallion */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] px-5 py-3.5 flex items-center gap-3 border-2 border-solid border-amber-300 whitespace-nowrap z-20"
                        >
                            <div className="text-3xl bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center border-b-4 border-amber-400">🏆</div>
                            <div>
                                <p className="text-xs font-black text-slate-800 uppercase tracking-wide">Award Winning Camp</p>
                                <p className="text-[11px] font-bold text-slate-400">Excellence in Early Education</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT SIDE: DISCOVERY HUB & STORY CORES --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        {/* Whimsical Rounded Shading Badge */}
                        <Badge className="w-fit bg-sky-100 text-sky-700 font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-solid border-sky-300 shadow-[0_3px_0_0_rgba(14,165,233,0.2)] select-none">
                            <Sparkles className="w-4 h-4 mr-1.5 inline text-sky-500 animate-pulse" /> Discovery Lab
                        </Badge>

                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-800 mb-5 leading-tight tracking-tight">
                                Excellence in Education,{' '}
                                <span className="relative inline-block text-emerald-600 bg-emerald-50 px-3 py-1 rounded-2xl border-4 border-dashed border-emerald-300/80">
                                    Rooted in Values
                                </span>
                            </h2>

                            <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                                <p>
                                    At <strong className="text-slate-800 font-black">Tiny Park International School</strong>, we are committed to excellence in early education at an affordable fee — creating a whimsical educational framework that is world-class in every respect.
                                </p>
                                <p>
                                    We are a school with an Indian mind, an Indian heart, and an Indian soul — a sanctuary that celebrates the culture of individual excellence and is an embodiment of core lifelong values.
                                </p>
                            </div>
                        </div>

                        {/* Checklist refactored into modern organic puzzle pieces */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                            {highlights.map((h, i) => {
                                const IconComponent = h.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        className="flex items-center gap-3 bg-white/70 border-2 border-solid border-slate-100 rounded-2xl p-2.5 shadow-sm"
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-solid shrink-0 ${h.color}`}>
                                            <IconComponent className="w-5 h-5 stroke-[2.5]" />
                                        </div>
                                        <span className="text-xs sm:text-sm font-black text-slate-700 leading-tight">{h.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Founder Quote transformed into a whimsical Map Scroll banner */}
                        <div className="bg-amber-50/50 rounded-[2rem] border-4 border-dashed border-amber-300 p-6 shadow-sm mt-4 relative">
                            <span className="absolute -top-4 left-6 bg-amber-400 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                Campsite Vision
                            </span>
                            <p className="text-sm md:text-base font-bold text-slate-700 italic leading-relaxed mb-4">
                                "Our mission is to provide an immersive, play-based learning territory that encourages children to bring out the very best in themselves — intellectually, emotionally, and socially."
                            </p>
                            <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-xl shadow-[0_4px_0_0_rgba(217,119,6,0.3)] border border-amber-300">
                                    👩‍🏫
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-800 leading-none">Mrs. Surekha Mujumdar</p>
                                    <p className="text-xs font-bold text-slate-400 mt-1">Founder, Tiny Park Educational Reserve</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}