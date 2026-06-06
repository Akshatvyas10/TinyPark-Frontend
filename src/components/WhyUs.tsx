import { motion } from 'framer-motion'
import {
    Shield,
    Globe,
    Heart,
    BookOpen,
    Smile,
    Award,
    DollarSign,
    Lightbulb,
    Home,
    Sparkles,
    Compass,
    Trees
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const reasons = [
    {
        icon: Globe,
        title: 'Global Standards',
        desc: 'World-class curriculum that prepares children for international opportunities and 21st-century challenges.',
        color: 'text-sky-500',
        bg: 'bg-sky-100 border-sky-300',
    },
    {
        icon: Heart,
        title: 'Indian Values',
        desc: 'Deep-rooted in Indian culture, ethics, and traditions — nurturing character alongside academics.',
        color: 'text-rose-500',
        bg: 'bg-rose-100 border-rose-300',
    },
    {
        icon: DollarSign,
        title: 'Affordable Fees',
        desc: 'Premium quality education made accessible to every family without compromising on excellence.',
        color: 'text-amber-500',
        bg: 'bg-amber-100 border-amber-300',
    },
    {
        icon: Shield,
        title: 'Safe & Secure',
        desc: 'A fully secure campus with CCTV, trained staff, and strict safety protocols for complete peace of mind.',
        color: 'text-purple-500',
        bg: 'bg-purple-100 border-purple-300',
    },
    {
        icon: Home,
        title: 'Homely Atmosphere',
        desc: 'A warm, welcoming environment where every child feels loved, comfortable, and at home.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-100 border-emerald-300',
    },
    {
        icon: Lightbulb,
        title: 'Montessori Approach',
        desc: 'Hands-on, child-led learning that builds independence, curiosity, and a genuine love for knowledge.',
        color: 'text-indigo-500',
        bg: 'bg-indigo-100 border-indigo-300',
    },
    {
        icon: BookOpen,
        title: 'UCMAS Program',
        desc: 'Globally recognized mental math program that sharpens focus, memory, and calculation abilities.',
        color: 'text-orange-500',
        bg: 'bg-orange-100 border-orange-300',
    },
    {
        icon: Award,
        title: 'Certified Teachers',
        desc: 'Professionally trained, passionate educators who understand child development and learning styles.',
        color: 'text-pink-500',
        bg: 'bg-pink-100 border-pink-300',
    },
    {
        icon: Smile,
        title: 'Holistic Development',
        desc: 'Balanced focus on academics, arts, sports, and social skills for all-round growth.',
        color: 'text-teal-500',
        bg: 'bg-teal-100 border-teal-300',
    },
]

const achievements = [
    { value: '500+', label: 'Happy Explorers', icon: '👧' },
    { value: '15+', label: 'Years of Joy', icon: '⭐' },
    { value: '50+', label: 'Park Rangers', icon: '👩‍🏫' },
    { value: '98%', label: 'Parent High-Fives', icon: '❤️' },
    { value: '3', label: 'Magic Tracks', icon: '📚' },
    { value: '100%', label: 'Safe Safe Campus', icon: '🛡️' },
]

// Frame spring variant configurations for playful staggered rendering
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: { type: "spring", stiffness: 260, damping: 18, opacity: 1, scale: 1, y: 0 }
}

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-[#fbfaf5] border-t-4 border-b-4 border-slate-900 relative overflow-hidden select-none">
            {/* Background Decorative Park Motifs */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <Trees className="absolute bottom-12 -left-10 w-44 h-44 text-emerald-600 stroke-[1.5]" />
                <Trees className="absolute top-12 -right-10 w-40 h-40 text-emerald-500 stroke-[1.5]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- Section Header: The Park Lookout Notice --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 border-4 border-slate-900 px-5 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0_0_#0f172a] mb-6"
                    >
                        <Compass className="w-4 h-4 animate-spin-slow" />
                        Adventure Field Guide
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 leading-none tracking-tight"
                    >

                        Why Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 drop-shadow-sm">Tiny Park?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        We merge high global learning standards with deep, authentic traditional roots—building a bright, interactive playground where your child's curiosity takes flight!
                    </motion.p>
                </div>

                {/* --- Reasons Grid: The Discovery Milestones --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {reasons.map(({ icon: Icon, title, desc, color, bg }, idx) => (
                        <motion.div
                            key={title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1, y: -5 }}
                            className="h-full"
                        >
                            <Card className="bg-white border-4 border-slate-900 rounded-[2rem] p-6 shadow-[5px_5px_0_0_#0f172a] hover:shadow-[8px_8px_0_0_#0f172a] flex flex-col items-start h-full transition-all duration-150 relative overflow-hidden group">
                                {/* Subtle decorative background card shape */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[3rem] -z-10 transition-colors group-hover:bg-amber-50/50" />

                                <div className={`w-14 h-14 ${bg} border-3 border-slate-900 rounded-2xl flex items-center justify-center mb-5 shadow-[2px_2px_0_0_#0f172a] transform group-hover:rotate-6 transition-transform`}>
                                    <Icon className={`w-7 h-7 ${color} stroke-[2.5]`} />
                                </div>

                                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">
                                    {title}
                                </h3>

                                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                                    {desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- Achievements: The High Scoreboard --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    className="bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500 border-4 border-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-[8px_8px_0_0_#0f172a]"
                >
                    {/* Comic Book Polka Dot Grid Overlap effect */}
                    <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

                    {/* Whimsical clouds inside the badge wrapper */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/10 blur-xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-center items-center gap-1.5 text-amber-300 font-black text-xs tracking-widest uppercase bg-slate-900/40 border border-white/20 px-4 py-1.5 rounded-full mb-6 w-max mx-auto">
                            <Sparkles className="w-3.5 h-3.5 fill-current" /> School Trophies
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-black font-display text-center mb-14 tracking-tight drop-shadow-md">
                            Our Shiny Playground Stats!
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
                            {achievements.map(({ value, label, icon }, index) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", delay: index * 0.05 }}
                                    className="text-center group-stats bg-slate-900/20 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-inner"
                                >
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: index * 0.2, ease: "easeInOut" }}
                                        className="text-4xl mb-2 drop-shadow-sm filter select-none"
                                    >
                                        {icon}
                                    </motion.div>

                                    <p className="text-3xl sm:text-4xl font-black font-display text-amber-300 tracking-tight drop-shadow">
                                        {value}
                                    </p>

                                    <p className="text-slate-100 text-[11px] sm:text-xs font-black tracking-wide leading-tight mt-1 opacity-90">
                                        {label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}