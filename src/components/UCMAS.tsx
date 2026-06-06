import { motion } from 'framer-motion'
import {
    Brain,
    Zap,
    Target,
    TrendingUp,
    Award,
    CheckCircle2,
    ArrowRight,
    Star,
    Dices,
    Sparkles,
    GraduationCap,
    Compass
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const benefits = [
    {
        icon: Brain,
        title: 'Mental Math Mastery',
        desc: 'Children develop the ability to perform complex calculations mentally with speed and accuracy.',
        color: 'text-sky-500',
        bg: 'bg-sky-100 border-sky-300',
    },
    {
        icon: Zap,
        title: 'Lightning Speed',
        desc: 'UCMAS-trained children can solve math problems faster than a calculator using mental visualization.',
        color: 'text-rose-500',
        bg: 'bg-rose-100 border-rose-300',
    },
    {
        icon: Target,
        title: 'Laser Focus',
        desc: 'The program dramatically improves concentration, attention span, and the ability to focus under pressure.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-100 border-emerald-300',
    },
    {
        icon: TrendingUp,
        title: 'Academic Confidence',
        desc: 'Children who complete UCMAS show marked improvement in overall academic performance and self-confidence.',
        color: 'text-amber-500',
        bg: 'bg-amber-100 border-amber-300',
    },
    {
        icon: Award,
        title: 'Global Recognition',
        desc: 'UCMAS is recognized in 80+ countries and has helped over 3 million children worldwide.',
        color: 'text-purple-500',
        bg: 'bg-purple-100 border-purple-300',
    },
    {
        icon: Star,
        title: 'Memory Enhancement',
        desc: 'Regular abacus practice strengthens both short-term and long-term memory capabilities.',
        color: 'text-orange-500',
        bg: 'bg-orange-100 border-orange-300',
    },
]

const levels = [
    { level: 'Level 1–2', name: 'Foundation Track', desc: 'Introduction to abacus, basic addition & subtraction antics.', duration: '4 months' },
    { level: 'Level 3–4', name: 'Elementary Expedition', desc: 'Multiplication, division & mental visualization wizardry begins.', duration: '4 months' },
    { level: 'Level 5–6', name: 'Intermediate Jungle', desc: 'Advanced mental arithmetic without physical abacus tools.', duration: '4 months' },
    { level: 'Level 7–8', name: 'Advanced Peak', desc: 'Expert-level mental calculations & global competition prep.', duration: '4 months' },
]

const skills = [
    'Photographic memory',
    'Listening skills',
    'Observation skills',
    'Concentration',
    'Speed & accuracy',
    'Creativity',
    'Self-confidence',
    'Problem-solving',
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const popInVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: { type: "spring", stiffness: 240, damping: 16, opacity: 1, scale: 1, y: 0 }
}

export default function UCMAS() {
    return (
        <section id="ucmas" className="py-24 bg-[#FAFAF4] relative overflow-hidden select-none border-b-8 border-slate-900">

            {/* Whimsical Lab Confetti & Background Props */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <Dices className="absolute top-12 left-8 w-32 h-32 text-orange-400 rotate-12 stroke-[1]" />
                <GraduationCap className="absolute bottom-16 right-4 w-40 h-40 text-sky-400 -rotate-12 stroke-[1]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- 1. SECTION HEADER: The Laboratory Radar --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 14 }}
                        className="inline-block mb-4"
                    >
                        <Badge className="bg-emerald-400 hover:bg-emerald-400 text-slate-900 border-4 border-slate-900 px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wider shadow-[4px_4px_0_0_#0f172a] inline-flex items-center gap-2">
                            <Dices className="w-4 h-4 animate-bounce" />
                            Discovery Lab
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none"
                    >
                        Unlock Your Tiny <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-indigo-600 drop-shadow-sm">Brain Potential!</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        UCMAS is a globally acclaimed brain enrichment system designed as a number playground—activating both brain hemispheres to turn math into a magical adventure!
                    </motion.p>
                </div>

                {/* --- 2. HERO BANNER: The Magic Abacus Field Station --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                    className="bg-gradient-to-br from-orange-400 via-rose-400 to-amber-400 border-4 border-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-slate-900 mb-20 relative overflow-hidden shadow-[8px_8px_0_0_#0f172a]"
                >
                    <div className="absolute inset-0 bg-grid-slate-900/5 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 text-left">
                            <div className="inline-flex items-center justify-center text-5xl bg-white border-4 border-slate-900 w-16 h-16 rounded-2xl shadow-[3px_3px_0_0_#0f172a] mb-5 animate-bounce">
                                🧮
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-black font-display mb-4 tracking-tight text-slate-900">
                                The Superpowers of the Abacus!
                            </h3>
                            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed mb-8 max-w-xl">
                                The abacus isn't just an ancient tool—it's a mental gym dynamic! UCMAS transforms it into an imaginative visual anchor, sharpening focus and photographic memory cells that stay with children forever.
                            </p>

                            {/* Bubbly Clickable shadcn Custom Button Adaptation */}
                            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-black text-sm px-8 py-6 rounded-2xl border-4 border-slate-900 shadow-[0_5px_0_0_rgba(255,255,255,0.4)] active:translate-y-1 active:shadow-none transition-all duration-100 group">
                                <a href="#contact">
                                    Join the Number Safari
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform stroke-[3]" />
                                </a>
                            </Button>
                        </div>

                        {/* Interactive Stat Badges */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            {[
                                { value: '80+', label: 'Countries Included', emoji: '🌍', color: 'bg-sky-100' },
                                { value: '3M+', label: 'Active Explorers', emoji: '🎒', color: 'bg-purple-100' },
                                { value: '4–13', label: 'Perfect Age Camp', emoji: '👦', color: 'bg-emerald-100' },
                                { value: '8', label: 'Levels of Magic', emoji: '🏆', color: 'bg-yellow-100' },
                            ].map(({ value, label, emoji, color }) => (
                                <motion.div
                                    key={label}
                                    whileHover={{ scale: 1.06, rotate: Math.random() > 0.5 ? 2 : -2 }}
                                    className={`${color} border-3 border-slate-900 rounded-2xl p-4 text-center shadow-[4px_4px_0_0_#0f172a]`}
                                >
                                    <div className="text-3xl mb-1 filter drop-shadow-sm">{emoji}</div>
                                    <p className="text-xl sm:text-2xl font-black font-display text-slate-900 leading-tight">{value}</p>
                                    <p className="text-[10px] sm:text-xs font-black text-slate-600 uppercase tracking-tight mt-0.5">{label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* --- 3. BENEFITS GRID: The Safari Features --- */}
                <div className="mb-24">
                    <h3 className="text-2xl sm:text-4xl font-black font-display text-slate-900 text-center mb-12 tracking-tight">
                        🧠 Brain Powers Developed on the Trail
                    </h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {benefits.map(({ icon: Icon, title, desc, color, bg }, idx) => (
                            <motion.div
                                key={title}
                                variants={popInVariants}
                                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1.5 : -1.5, y: -4 }}
                            >
                                <Card className="bg-white border-4 border-slate-900 rounded-[2rem] p-6 shadow-[5px_5px_0_0_#0f172a] hover:shadow-[9px_9px_0_0_#0f172a] transition-all duration-150 h-full flex flex-col items-start relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-bl-[2rem] -z-10 group-hover:bg-amber-50 transition-colors" />

                                    <div className={`w-14 h-14 ${bg} border-3 border-slate-900 rounded-2xl flex items-center justify-center mb-5 shadow-[2px_2px_0_0_#0f172a] transform group-hover:rotate-12 transition-transform`}>
                                        <Icon className={`w-7 h-7 ${color} stroke-[2.5]`} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
                                    <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* --- 4. SKILLS & LEVELS ASYMMETRICAL SPLIT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Skills Playground Sticker-book Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-sky-100 border-4 border-slate-900 rounded-[2.5rem] p-6 sm:p-8 shadow-[6px_6px_0_0_#0f172a] relative overflow-hidden"
                    >
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-sky-200 rounded-full opacity-40 pointer-events-none" />
                        <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 mb-6 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-sky-600 fill-current" /> Ranger Gear Acquired
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center gap-2 bg-white border-2 border-slate-900 rounded-2xl px-4 py-3 shadow-[2px_2px_0_0_#0f172a] transform hover:translate-y-[-2px] transition-transform">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[3] flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-black text-slate-700 tracking-tight">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Level Steps Timeline Map */}
                    <div className="lg:col-span-7">
                        <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900 mb-6 flex items-center gap-2 px-2">
                            <Compass className="w-5 h-5 text-rose-500 animate-spin-slow" /> Adventure Levels Map
                        </h3>

                        <div className="space-y-4">
                            {levels.map(({ level, name, desc, duration }, index) => (
                                <motion.div
                                    key={level}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 6 }}
                                    className="bg-white border-4 border-slate-900 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow-[4px_4px_0_0_#0f172a] hover:bg-slate-50 transition-all duration-150 relative group"
                                >
                                    {/* Timeline Marker badge */}
                                    <div className="bg-purple-100 border-3 border-slate-900 rounded-2xl px-4 py-2 text-center flex-shrink-0 shadow-[2px_2px_0_0_#0f172a] group-hover:bg-purple-200 transition-colors">
                                        <p className="text-xs font-black text-purple-700 uppercase tracking-wider">{level}</p>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h4 className="text-base font-black text-slate-900 tracking-tight">{name}</h4>
                                            <span className="text-[10px] font-black text-slate-700 bg-amber-300 border-2 border-slate-900 px-2 py-0.5 rounded-full uppercase tracking-wider shadow-[1px_1px_0_0_#0f172a]">
                                                ⏱️ {duration}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-normal">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}