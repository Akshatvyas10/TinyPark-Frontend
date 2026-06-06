import { motion } from 'framer-motion'
import { Brain, Zap, Target, TrendingUp, Award, Star, Check, ArrowRight, Sun, Cloud, Sparkles, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'

const benefits = [
    { icon: Brain, title: 'Mental Math Mastery', desc: 'Children develop the ability to perform complex calculations mentally with speed and accuracy.', color: 'text-amber-500', bg: 'bg-amber-100 border-amber-400' },
    { icon: Zap, title: 'Lightning Speed', desc: 'UCMAS-trained children can solve math problems faster than a calculator using mental visualization.', color: 'text-rose-500', bg: 'bg-rose-100 border-rose-400' },
    { icon: Target, title: 'Laser Focus', desc: 'The program dramatically improves concentration, attention span, and the ability to focus under pressure.', color: 'text-sky-500', bg: 'bg-sky-100 border-sky-400' },
    { icon: TrendingUp, title: 'Academic Confidence', desc: 'Children who complete UCMAS show marked improvement in overall academic performance and self-confidence.', color: 'text-emerald-500', bg: 'bg-emerald-100 border-emerald-400' },
    { icon: Award, title: 'Global Recognition', desc: 'UCMAS is recognized in 80+ countries and has helped over 3 million children worldwide.', color: 'text-purple-500', bg: 'bg-purple-100 border-purple-400' },
    { icon: Star, title: 'Memory Enhancement', desc: 'Regular abacus practice strengthens both short-term and long-term memory capabilities.', color: 'text-orange-500', bg: 'bg-orange-100 border-orange-400' },
]

const levels = [
    { level: 'Staging 1–2', name: 'Foundation Outpost', desc: 'Introduction to abacus mechanics, basic addition & subtraction trails.', duration: '4 Mo.', color: 'bg-amber-400 text-slate-900' },
    { level: 'Staging 3–4', name: 'Elementary Safari', desc: 'Multiplication, division & mental visualization fields begin.', duration: '4 Mo.', color: 'bg-sky-400 text-slate-900' },
    { level: 'Staging 5–6', name: 'Intermediate Jungle', desc: 'Advanced mental arithmetic without the physical abacus grid.', duration: '4 Mo.', color: 'bg-emerald-400 text-white' },
    { level: 'Staging 7–8', name: 'Advanced Peak', desc: 'Expert-level calculations & global championship tournament prep.', duration: '4 Mo.', color: 'bg-purple-400 text-white' },
]

const skills = ['Photographic memory', 'Listening skills', 'Observation skills', 'Concentration', 'Speed & accuracy', 'Creativity', 'Self-confidence', 'Problem-solving']

export default function UCMASPage() {
    return (
        <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden select-none">

            {/* --- Hero: The Park Entrance Gate --- */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-amber-100 via-amber-50 to-[#fcfbf7] overflow-hidden">
                {/* Sky Elements & Park Motifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                        className="absolute -top-16 -left-16 text-amber-400 opacity-90"
                    >
                        <Sun className="w-44 h-44 sm:w-56 sm:h-56 fill-current" />
                    </motion.div>

                    {/* Floating Soft Clouds */}
                    <motion.div animate={{ x: [-12, 12, -12], y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute top-12 left-[18%] text-white opacity-80 hidden md:block">
                        <Cloud className="w-24 h-16 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ x: [10, -10, 10], y: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }} className="absolute top-16 right-[15%] text-white opacity-90 hidden lg:block scale-110">
                        <Cloud className="w-32 h-20 fill-current drop-shadow-sm" />
                    </motion.div>
                </div>

                <div className="container-max section-px relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Block */}
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
                            <Badge className="mb-5 bg-purple-500 hover:bg-purple-600 text-white border-2 border-slate-900 font-black px-4 py-1.5 rounded-full text-xs tracking-wider shadow-[2px_2px_0_0_#0f172a] transform -rotate-2 inline-flex items-center gap-1.5">
                                <Compass className="w-4 h-4 animate-spin-slow" /> DISCOVERY LAB
                            </Badge>
                            <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none">
                                Unlock Your Child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 drop-shadow-sm">Superbrain Radar</span>
                            </h1>
                            <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed mb-8">
                                UCMAS is an explosive mental gymnastics course using the abacus system to forge mathematical agility, immense focus, and photographic visualization.
                            </p>

                            {/* Bubbly Clickable Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="xl" className="bg-orange-500 hover:bg-orange-600 text-white font-black border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100">
                                    <Link to="/admissions" className="flex items-center gap-2">
                                        Claim Lab Pass <ArrowRight className="w-5 h-5 stroke-[3]" />
                                    </Link>
                                </Button>
                                <Button asChild size="xl" variant="outline" className="bg-white hover:bg-slate-50 text-slate-800 font-black border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100">
                                    <Link to="/contact">Tour the Hub</Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Asymmetric Scrapbook Frame */}
                        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 1 }} transition={{ duration: 0.6, delay: 0.1, type: 'spring' }} className="relative mx-auto lg:ml-auto">
                            <div className="absolute inset-0 bg-purple-400 border-4 border-slate-900 rounded-[2.5rem] translate-x-3 translate-y-3 shadow-none" />
                            <div className="relative bg-white p-4 border-4 border-slate-900 rounded-[2.5rem]">
                                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=85" alt="UCMAS mental math" className="rounded-[1.8rem] border-2 border-slate-900 w-full h-80 lg:h-96 object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* --- Stats Banner: The Scoreboard --- */}
            <section className="py-12 bg-slate-900 border-t-4 border-b-4 border-slate-900 shadow-xl relative z-10">
                <div className="container-max section-px">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[{ v: '80+', l: 'Sectors Explored', e: '🌍' }, { v: '3M+', l: 'Active Rangers', e: '👧' }, { v: '4–13', l: 'Age Cadets', e: '📅' }, { v: '8', l: 'Evolution Levels', e: '🏆' }].map(({ v, l, e }, idx) => (
                            <motion.div
                                key={l}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05, type: 'spring' }}
                                className="p-2"
                            >
                                <div className="text-4xl mb-1.5">{e}</div>
                                <p className="text-4xl font-black font-display text-amber-400 tracking-tight">{v}</p>
                                <p className="text-slate-300 text-xs font-black uppercase tracking-wider mt-0.5">{l}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- Benefits Section: Adventure Zone Modifiers --- */}
            <section className="py-24 bg-white">
                <div className="container-max section-px">
                    <SectionHeader
                        badge="Brain Catalysts"
                        badgeVariant="secondary"
                        badgeIcon={<Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />}
                        title={<>Attributes Developed In Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Little Ranger</span></>}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {benefits.map(({ icon: Icon, title, desc, color, bg }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                                className="h-full"
                            >
                                <Card className="p-6 h-full bg-white border-4 border-slate-900 rounded-[2rem] shadow-[4px_4px_0_0_#0f172a] flex flex-col items-start hover:shadow-[6px_6px_0_0_#0f172a] transition-all duration-150">
                                    <div className={`w-14 h-14 border-4 border-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-[2px_2px_0_0_#0f172a] ${bg}`}>
                                        <Icon className={`w-7 h-7 ${color} stroke-[2.5]`} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- Skills & Levels: The Trail Layout --- */}
            <section className="py-24 bg-[#faf8f2] border-t-4 border-b-4 border-dashed border-slate-200">
                <div className="container-max section-px">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

                        {/* Left Column: Skill Badges Grid */}
                        <div className="lg:col-span-5">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Expedition Perks</h3>
                            <p className="text-slate-600 font-medium text-sm mb-8">Tangible brain updates logged across every playground activity map.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.04 }}
                                        className="flex items-center gap-3 bg-white border-3 border-slate-900 p-3 rounded-2xl shadow-[2px_2px_0_0_#0f172a]"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 text-slate-900 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className="text-xs font-black text-slate-800 tracking-tight">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Interactive Level Pipeline */}
                        <div className="lg:col-span-7">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Evolution Timeline</h3>
                            <p className="text-slate-600 font-medium text-sm mb-8">Four major pipeline zones mapping complete abacus mastery.</p>

                            <div className="space-y-4 relative">
                                {levels.map(({ level, name, desc, duration, color }, idx) => (
                                    <motion.div
                                        key={level}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.06, type: 'spring' }}
                                    >
                                        <Card className="p-5 border-4 border-slate-900 rounded-3xl bg-white shadow-[4px_4px_0_0_#0f172a] flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden hover:bg-slate-50/50 transition-colors">
                                            <div className={`rounded-2xl px-4 py-2 border-2 border-slate-900 text-center flex-shrink-0 shadow-[2px_2px_0_0_#0f172a] font-black text-xs ${color}`}>
                                                {level}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                                    <h4 className="text-base font-black text-slate-900 tracking-tight">{name}</h4>
                                                    <span className="text-[10px] font-black text-purple-700 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                        {duration}
                                                    </span>
                                                </div>
                                                <p className="text-xs font-medium text-slate-500 leading-normal">{desc}</p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Dynamic Banner Component Pass --- */}
            <CtaBanner
                title="Ready to Awaken the Abacus Catalyst?"
                subtitle="Equip your child with calculation speed metrics that surpass digital computational tools. Book your trial outpost workspace today."
                primaryLabel="Claim Lab Pass"
                primaryTo="/admissions"
            />
        </div>
    )
}