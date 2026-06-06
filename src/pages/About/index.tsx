import { motion } from 'framer-motion'
import {
    Target, Eye, Heart, Lightbulb, Globe, Star,
    BookOpen, Users, Cloud, Sun, Sparkles, Map
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeader from '@/components/sections/SectionHeader'
import StatsBar from '@/components/sections/StatsBar'
import CtaBanner from '@/components/sections/CtaBanner'
import { SCHOOL } from '@/data/school'

const values = [
    { icon: Eye, title: 'Our Vision', desc: 'To provide a learning environment that encourages children to bring out the very best in themselves — intellectually, emotionally, and socially.', color: 'text-sky-500', bg: 'bg-sky-50 border-sky-200' },
    { icon: Target, title: 'Our Mission', desc: 'To deliver world-class education at an affordable fee, blending Indian values with global standards to prepare children for 21st-century challenges.', color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200' },
    { icon: Heart, title: 'Our Values', desc: 'We celebrate the culture of excellence — with an Indian mind, an Indian heart, and an Indian soul — an embodiment of values.', color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-200' },
]

const pillars = [
    { icon: Globe, label: 'Global Citizenship', desc: 'Preparing children for a connected world', color: 'bg-sky-400' },
    { icon: Lightbulb, label: 'Awakened Intellect', desc: 'Multi-dimensional learning approaches', color: 'bg-amber-400' },
    { icon: BookOpen, label: 'Joy of Learning', desc: 'Making education fun and meaningful', color: 'bg-emerald-400' },
    { icon: Users, label: 'All-Round Development', desc: 'Holistic growth in every dimension', color: 'bg-purple-400' },
    { icon: Star, label: 'Abiding Values', desc: 'Character and integrity at the core', color: 'bg-rose-400' },
    { icon: Heart, label: 'Homely Atmosphere', desc: 'Safe, warm, and nurturing environment', color: 'bg-orange-400' },
]

const timeline = [
    { year: '2010', event: 'Tiny Park International School founded by Mrs. Surekha Mujumdar', icon: '🌱' },
    { year: '2012', event: 'Launched Montessori program with certified educators', icon: '🎈' },
    { year: '2015', event: 'Introduced UCMAS mental math program', icon: '🧮' },
    { year: '2018', event: 'Started professional Teacher Training program', icon: '🎨' },
    { year: '2020', event: 'Expanded to serve 300+ students across multiple programs', icon: '🚀' },
    { year: '2024', event: '500+ students, 50+ educators, 98% parent satisfaction', icon: '🏆' },
]

// Playful Spring Animation Physics configuration
const springTransition = { type: 'spring' as const, stiffness: 300, damping: 18 };

export default function AboutPage() {
    return (
        <div className="overflow-hidden bg-[#FFFDF9] text-[#333333]">

            {/* 1. HERO SECTION: The Park Entrance Gate */}
            <section className="relative py-24 lg:py-36 bg-gradient-to-b from-sky-200 via-sky-100 to-[#FFFDF9] overflow-hidden">
                {/* Whimsical Environmental Elements */}
                {/* --- Background Floating Elements (Skybox Layout) --- */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

                    {/* Rotating Sun - Top Left Background */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                        className="absolute -top-12 -left-12 text-amber-400/70 z-0"
                    >
                        <Sun className="w-36 h-36 sm:w-44 sm:h-44 fill-current" />
                    </motion.div>

                    {/* Cloud 1: Top Left Front */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-12 left-[8%] text-sky-400/35 hidden md:block z-10"
                    >
                        <Cloud className="w-24 h-16 fill-current" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-12 left-[10%] text-sky-400/35 hidden md:block z-10"
                    >
                        <Cloud className="w-24 h-16 fill-current" />
                    </motion.div>

                    {/* Cloud 2: Top Center Deep Background */}
                    <motion.div
                        initial={{ y: -5 }}
                        animate={{ y: [-5, 8, -5] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-8 left-[45%] text-sky-300/20 hidden lg:block scale-75 z-0"
                    >
                        <Cloud className="w-28 h-16 fill-current blur-[1px]" />
                    </motion.div>

                    {/* Cloud 3: Top Right Main Pair (Large) */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 14, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                        className="absolute top-16 right-[10%] text-sky-400/30 hidden md:block z-10"
                    >
                        <Cloud className="w-32 h-20 fill-current" />
                    </motion.div>

                    {/* Cloud 4: Top Right Main Pair (Small Offset Anchor) */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.3 }}
                        className="absolute top-24 right-[6%] text-sky-400/25 hidden md:block scale-75 z-0"
                    >
                        <Cloud className="w-20 h-12 fill-current" />
                    </motion.div>

                    {/* Cloud 5: Mid Left Lower Horizon */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-24 left-[4%] text-sky-400/20 hidden lg:block scale-90 z-0"
                    >
                        <Cloud className="w-28 h-16 fill-current" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-24 left-[6%] text-sky-400/20 hidden lg:block scale-90 z-0"
                    >
                        <Cloud className="w-28 h-16 fill-current" />
                    </motion.div>
                    {/* Cloud 6: Mid Right Lower Horizon */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 1.7 }}
                        className="absolute bottom-16 right-[35%] text-violet-400/15 hidden xl:block scale-110 z-0"
                    >
                        <Cloud className="w-36 h-20 fill-current" />
                    </motion.div>

                </div>

                <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={springTransition}
                    >
                        <Badge variant="outline" className="mb-6 px-6 py-2 bg-amber-400 text-amber-950 border-4 border-amber-500 font-black text-sm rounded-full transform -rotate-2 shadow-[0_4px_0_0_rgba(0,0,0,0.15)]">
                            ✨ STEP INSIDE OUR PARK
                        </Badge>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
                            A School with an <br />
                            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent px-2">
                                Indian Heart
                            </span> 🏫
                        </h1>

                        <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-3xl border-4 border-dashed border-sky-300 shadow-xl">
                            Founded by Mrs. Surekha Mujumdar, Tiny Park International School has been nurturing curious little adventurers with world-class education rooted deeply in rich Indian values since {SCHOOL.established}.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Bottom Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" className="fill-[#FFFDF9]"></path>
                    </svg>
                </div>
            </section>

            {/* 2. INTRODUCTION SECTION: The Safari Map */}
            <section className="py-20 bg-[#FFFDF9]">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Safari Dashboard / Badges */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={springTransition}
                            className="relative"
                        >
                            {/* Giant Floating Crest Base */}
                            <div className="bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400 rounded-[2rem] p-8 text-center relative overflow-hidden border-8 border-white shadow-[0_12px_24px_rgba(0,0,0,0.15)] transform -rotate-1">
                                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/20 blur-md" />
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-yellow-300/30" />

                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="text-8xl mb-4 filter drop-shadow-md inline-block"
                                    >
                                        🎪
                                    </motion.div>
                                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-sm">{SCHOOL.name}</h3>
                                    <div className="inline-block bg-white text-emerald-600 px-4 py-1 rounded-full font-black text-xs mb-2 border-2 border-emerald-100">
                                        EST. {SCHOOL.established}
                                    </div>
                                    <p className="text-emerald-950 font-bold text-sm">Guided by vision: {SCHOOL.founder}</p>
                                </div>
                            </div>

                            {/* Playful Stats Grid System */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { v: '500+', l: 'Happy Campers', e: '👧🏽', bg: 'bg-orange-100 border-orange-400 text-orange-600' },
                                    { v: '15+', l: 'Golden Years', e: '🌳', bg: 'bg-amber-100 border-amber-400 text-amber-600' },
                                    { v: '50+', l: 'Park Rangers', e: '👩‍🎤', bg: 'bg-purple-100 border-purple-400 text-purple-600' },
                                    { v: '3', l: 'Fun Tracks', e: '🎨', bg: 'bg-sky-100 border-sky-400 text-sky-600' },
                                ].map((s, index) => (
                                    <motion.div
                                        key={s.l}
                                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                                        transition={springTransition}
                                        className={`bg-white rounded-3xl border-4 border-dashed p-5 text-center shadow-[0_6px_0_0_rgba(0,0,0,0.05)] ${s.bg}`}
                                    >
                                        <div className="text-4xl mb-1 filter drop-shadow-sm">{s.e}</div>
                                        <p className="text-3xl font-black tracking-tight">{s.v}</p>
                                        <p className="text-xs font-black uppercase tracking-wider opacity-80">{s.l}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interactive Values Manifesto */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...springTransition, delay: 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                                Excellence in Learning, <br />
                                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                    Rooted in Deep Values
                                </span> 🧭
                            </h2>
                            <div className="space-y-4 text-slate-600 font-medium text-base leading-relaxed">
                                <p>At Tiny Park International School, we are committed to providing magical learning spaces at affordable thresholds. We design real-world dimensional environments that transform basic learning targets into unforgettable journeys.</p>
                                <p>We maintain an Indian mind, an Indian heart, and an Indian soul — constructing foundational platforms that allow natural capabilities to flourish safely.</p>
                            </div>

                            {/* Custom Thick Interactive Shadow Values Cards */}
                            <div className="space-y-4 mt-2">
                                {values.map(({ icon: Icon, title, desc, color, bg }) => (
                                    <motion.div
                                        key={title}
                                        whileHover={{ x: 6 }}
                                        className={`${bg} rounded-2xl p-5 flex gap-4 border-4 shadow-[0_6px_0_0_rgba(0,0,0,0.08)] transition-all`}
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 border-2 border-slate-100 shadow-inner">
                                            <Icon className={`w-7 h-7 ${color}`} />
                                        </div>
                                        <div>
                                            <h4 className={`font-black text-lg ${color} mb-1 flex items-center gap-1`}>
                                                {title} <Sparkles className="w-3.5 h-3.5 opacity-60" />
                                            </h4>
                                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. FOUNDER SECTION: The Ranger Station HQ */}
            <section className="py-20 bg-amber-50/60 border-y-4 border-dashed border-amber-200 relative">
                <div className="container max-w-5xl mx-auto px-4">
                    <SectionHeader
                        badge="Our Founder"
                        badgeVariant="rose"
                        badgeIcon={<Heart className="w-3.5 h-3.5 fill-current" />}
                        title={<>Meet Chief Ranger <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">Mrs. Surekha Mujumdar</span></>}
                        subtitle="The visionary guide steering our tiny explorers toward bright new horizons."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={springTransition}
                        className="mt-12"
                    >
                        <Card className="bg-white rounded-[2.5rem] border-4 border-amber-400 p-8 lg:p-12 shadow-[0_12px_0_0_rgba(251,191,36,0.2)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 text-6xl opacity-10 select-none">🍃</div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                                <div className="text-center bg-amber-50/80 p-6 rounded-3xl border-2 border-amber-200">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 4 }}
                                        className="w-36 h-36 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center text-7xl mx-auto mb-4 shadow-xl border-4 border-white"
                                    >
                                        👩🏽‍🏫
                                    </motion.div>
                                    <h3 className="font-black text-xl text-slate-800">Mrs. Surekha Mujumdar</h3>
                                    <p className="text-rose-500 text-sm font-black uppercase tracking-wider mt-1">Founder & Director</p>
                                    <p className="text-slate-400 text-xs font-bold mt-1">{SCHOOL.name}</p>
                                </div>

                                <div className="md:col-span-2 space-y-4 text-slate-600 font-medium text-base leading-relaxed">
                                    <div className="relative">
                                        <span className="text-5xl text-amber-400 font-serif absolute -top-5 -left-2 select-none">“</span>
                                        <p className="text-slate-800 font-extrabold text-lg italic pl-6 relative z-10 leading-snug">
                                            Education is not just about academics — it is about shaping the whole child, nurturing their unique character code, and preparing them to step boldly into the world.
                                        </p>
                                    </div>
                                    <p className="pt-2">Mrs. Surekha Mujumdar founded Tiny Park with a transparent dream: to establish an ecosystem overflowing with world-class frameworks while maintaining deep allegiance to cultural foundations.</p>
                                    <p>With over 15 years of active devotion to early development tracks, she has engineered an architecture celebrated across the region for its unparalleled warmth, empathy, and academic brilliance.</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* 4. PILLARS SECTION: The Adventure Zone */}
            <section className="py-20 bg-[#FFFDF9]">
                <div className="container max-w-6xl mx-auto px-4">
                    <SectionHeader
                        badge="Our Pillars"
                        badgeVariant="accent"
                        badgeIcon={<Star className="w-3.5 h-3.5 fill-current" />}
                        title={<>Six Pillars of Our <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Adventure Model</span></>}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {pillars.map(({ icon: Icon, label, desc, color }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...springTransition, delay: i * 0.06 }}
                            >
                                <Card className="p-6 text-center bg-white border-4 border-slate-100 rounded-3xl shadow-[0_8px_0_0_rgba(0,0,0,0.03)] hover:shadow-[0_12px_0_0_rgba(14,165,233,0.1)] hover:border-sky-300 transition-all duration-300 h-full flex flex-col items-center group">
                                    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg mb-4`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-lg font-black text-slate-800 mb-2">{label}</p>
                                    <p className="text-sm font-medium text-slate-500 leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TIMELINE SECTION: The Discovery Trail */}
            <section className="py-20 bg-sky-50/50 border-t-4 border-dashed border-sky-200 relative">
                <div className="container max-w-3xl mx-auto px-4">
                    <SectionHeader
                        badge="Our Journey"
                        badgeVariant="primary"
                        badgeIcon={<Map className="w-3.5 h-3.5" />}
                        title={<>Steps Along The <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">Discovery Trail</span></>}
                    />

                    <div className="relative mt-16 pl-4 sm:pl-0">
                        {/* Wavy Colorful Timeline Center Spine */}
                        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 via-purple-400 to-rose-400 rounded-full transform sm:-translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map(({ year, event, icon }, i) => {
                                const isEven = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={year}
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={springTransition}
                                        className={`flex flex-col sm:flex-row items-start sm:items-center relative ${isEven ? 'sm:flex-row-reverse' : ''}`}
                                    >
                                        {/* Timeline Marker Point */}
                                        <div className="absolute left-4 sm:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-purple-500 flex items-center justify-center transform -translate-x-1/2 z-20 shadow-md">
                                            <span className="text-sm font-black text-purple-600">{year.slice(2)}</span>
                                        </div>

                                        {/* Spacer for structural balance on large viewports */}
                                        <div className="w-full sm:w-1/2 hidden sm:block" />

                                        {/* Map Milestone Description Card */}
                                        <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                className="bg-white rounded-2xl border-4 border-slate-100 p-5 shadow-[0_6px_0_0_rgba(0,0,0,0.04)] relative group hover:border-purple-300 transition-all"
                                            >
                                                <div className="absolute -top-5 right-4 text-3xl bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center border-2 border-amber-300 shadow-sm">
                                                    {icon}
                                                </div>
                                                <span className="inline-block px-3 py-0.5 bg-purple-100 text-purple-700 font-black text-xs rounded-full mb-1">
                                                    YEAR {year}
                                                </span>
                                                <p className="text-sm font-bold text-slate-700 leading-relaxed mt-1">{event}</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. STATS WRAPPER SECTION: The Grand Campfire */}
            <section className="py-16 bg-[#FFFDF9]">
                <div className="container max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={springTransition}
                        className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-[3rem] p-8 lg:p-14 text-white relative overflow-hidden border-8 border-white shadow-2xl"
                    >
                        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none blur-sm" />
                        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-yellow-400/20 pointer-events-none blur-sm" />

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-8 flex items-center justify-center gap-2 drop-shadow-md">
                                🏅 15+ Years of Magical Milestones
                            </h3>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-inner">
                                <StatsBar />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Callout Segment */}
            <CtaBanner />
        </div>
    )
}