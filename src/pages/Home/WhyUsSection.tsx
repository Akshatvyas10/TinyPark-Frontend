import { motion } from 'framer-motion'
import {
    Shield,
    Globe,
    Heart,
    Award,
    DollarSign,
    Lightbulb,
    Home,
    Smile,
    BookOpen,
    Sun,
    Rocket,
    Sparkles,
    Compass,
    Trees
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
const SCRAPBOOK_THEMES = [
    { border: 'border-sky-400', shadow: 'shadow-[0_8px_0_0_#38bdf8]', rotation: '-rotate-2 hover:rotate-1 bg-sky-50 text-sky-700' },
    { border: 'border-amber-400', shadow: 'shadow-[0_8px_0_0_#fbbf24]', rotation: 'rotate-3 hover:rotate-1 bg-amber-50 text-amber-700' },
    { border: 'border-emerald-400', shadow: 'shadow-[0_8px_0_0_#34d399]', rotation: '-rotate-1 hover:rotate-2 bg-emerald-50 text-emerald-700' },
    { border: 'border-rose-400', shadow: 'shadow-[0_8px_0_0_#f43f5e]', rotation: 'rotate-2 hover:rotate-0 bg-rose-50 text-rose-700' },
    { border: 'border-indigo-400', shadow: 'shadow-[0_8px_0_0_#6366f1]', rotation: '-rotate-3 hover:rotate-1 bg-indigo-50 text-indigo-700' },
    { border: 'border-orange-400', shadow: 'shadow-[0_8px_0_0_#f97316]', rotation: 'rotate-1 hover:rotate-3 bg-orange-50 text-orange-700' },
]

// Custom data mapping designed to feed our child-centric token theme
const reasons = [
    {
        icon: Globe,
        title: 'Global Standards',
        desc: 'World-class curriculum preparing children for international opportunities.',
        color: 'text-sky-500',
        bg: 'bg-sky-100 border-sky-300'
    },
    {
        icon: Heart,
        title: 'Indian Values',
        desc: 'Deep-rooted in Indian culture, ethics, and traditions.',
        color: 'text-rose-500',
        bg: 'bg-rose-100 border-rose-300'
    },
    {
        icon: DollarSign,
        title: 'Affordable Fees',
        desc: 'Premium quality education made accessible to every family.',
        color: 'text-amber-500',
        bg: 'bg-amber-100 border-amber-300'
    },
    {
        icon: Shield,
        title: 'Safe & Secure',
        desc: 'Fully secured campus with CCTV, trained staff, and strict safety protocols.',
        color: 'text-purple-500',
        bg: 'bg-purple-100 border-purple-300'
    },
    {
        icon: Home,
        title: 'Homely Atmosphere',
        desc: 'A warm, welcoming environment where every child feels loved and at home.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-100 border-emerald-300'
    },
    {
        icon: Lightbulb,
        title: 'Montessori Approach',
        desc: 'Hands-on, child-led learning that builds independence and curiosity.',
        color: 'text-indigo-500',
        bg: 'bg-indigo-100 border-indigo-300'
    },
    {
        icon: BookOpen,
        title: 'UCMAS Program',
        desc: 'Globally recognized mental math program sharpening focus and memory.',
        color: 'text-orange-500',
        bg: 'bg-orange-100 border-orange-300'
    },
    {
        icon: Award,
        title: 'Certified Teachers',
        desc: 'Professionally trained, passionate educators who understand child development.',
        color: 'text-pink-500',
        bg: 'bg-pink-100 border-pink-300'
    },
    {
        icon: Smile,
        title: 'Holistic Development',
        desc: 'Balanced focus on academics, arts, sports, and social skills.',
        color: 'text-teal-500',
        bg: 'bg-teal-100 border-teal-300'
    },
]

// Spring transition variables for satisfying bounciness
const springTransition: any = { type: "spring", stiffness: 260, damping: 16 }

export default function WhyUsSection() {
    return (
        <section className="py-24 bg-[#FAF9F5] relative overflow-hidden select-none border-b-8 border-slate-900">

            {/* Whimsical Park Environment Elements (Floating Background Props) */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <Trees className="absolute -bottom-10 -left-10 w-48 h-48 text-emerald-600 stroke-[1.5]" />
                <Trees className="absolute top-10 -right-10 w-44 h-44 text-emerald-500 stroke-[1.5]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- HEADER ZONE: The Exploration Map Hub --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                        viewport={{ once: true }}
                        transition={springTransition}
                        className="inline-block mb-4"
                    >
                        <Badge className="bg-amber-400 hover:bg-amber-400 text-slate-900 border-4 border-slate-900 px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide shadow-[4px_4px_0_0_#0f172a] inline-flex items-center gap-2">
                            <Compass className="w-4 h-4 animate-spin-slow" />
                            ADVENTURE RADAR
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none"
                    >
                        Why Step Into Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 drop-shadow-sm">Tiny Park?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        We mix world-class global milestones with the warm hug of traditional values—creating a magical sanctuary where small steps make big visions!
                    </motion.p>
                </div>

                {/* --- DISCOVERY TRAIL: The Playful Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {reasons.map((r, i) => {
                        const theme: any = SCRAPBOOK_THEMES[i % SCRAPBOOK_THEMES.length];
                        return (
                            <motion.div
                                key={r.title}
                                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                                className="h-full"
                            >
                                <Card
                                    className={`p-6 border-4 ${theme.border} ${theme.shadow} ${theme.rotation} rounded-[2rem] transition-all duration-300 h-full flex flex-col justify-start relative overflow-hidden group`}
                                >
                                    {/* Decorative Pattern */}
                                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none"
                                        style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                    />

                                    {/* Icon Frame */}
                                    <div className={`w-14 h-14 bg-white border-3 border-slate-900 rounded-2xl flex items-center justify-center mb-5 shadow-[3px_3px_0_0_#0f172a] group-hover:rotate-12 transition-transform duration-300`}>
                                        <r.icon className={`w-7 h-7 ${r.color} stroke-[2.5]`} />
                                    </div>

                                    <h3 className={`text-lg font-black mb-2 tracking-tight transition-colors duration-200 relative z-10`}>
                                        {r.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed relative z-10">
                                        {r.desc}
                                    </p>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
                {/* --- ACHIEVEMENTS BANNER: The Mega Treehouse Scoreboard --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={springTransition}
                    className="bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500 border-4 border-slate-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-[8px_8px_0_0_#0f172a]"
                >
                    {/* Comic Book Polka-Dot Overlay */}
                    <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

                    {/* Floating ambient decorations inside the achievement zone */}
                    <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />

                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-6 right-20 opacity-20 hidden md:block"
                    >
                        <Sun className="w-12 h-12 fill-current animate-spin-slow" />
                    </motion.div>

                    <motion.div
                        animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute bottom-6 right-12 opacity-20 hidden md:block"
                    >
                        <Rocket className="w-10 h-10 rotate-45" />
                    </motion.div>

                    <Sparkles className="absolute top-10 left-1/4 w-6 h-6 opacity-20 animate-pulse" />

                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <span className="bg-slate-900/40 border-2 border-white/20 text-amber-300 text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5 fill-current" /> CHAMPION BADGES
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-black font-display text-center mb-12 tracking-tight drop-shadow-md">
                            Our Shiny Playground Achievements!
                        </h3>

                        {/* High Score Stats Bar Container Wrapper */}
                        <div className="bg-slate-900/20 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-inner">
                            {/* Insert your existing stats bar logic or map data inside */}
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-xs sm:text-sm font-black text-slate-100 tracking-wide text-center uppercase opacity-90">
                                    🌲 Generating live tracking metrics along the park trail... 🌲
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}