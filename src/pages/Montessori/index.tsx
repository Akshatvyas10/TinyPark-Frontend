import { motion } from 'framer-motion'
import { Sparkles, Check, ArrowRight, Sun, Cloud, Trees, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'

const principles = [
    { emoji: '🤲', title: 'Learning by Doing', desc: 'Children learn best through hands-on experience. Our Montessori materials make abstract concepts tangible and real.', color: 'bg-amber-50 border-amber-400 text-amber-600' },
    { emoji: '🌱', title: 'Self-Paced Growth', desc: 'Every child develops at their own pace. We respect individual learning timelines and celebrate each milestone.', color: 'bg-emerald-50 border-emerald-400 text-emerald-600' },
    { emoji: '🔍', title: 'Natural Curiosity', desc: 'We nurture the innate curiosity of children, encouraging them to ask questions, explore, and discover answers independently.', color: 'bg-sky-50 border-sky-400 text-sky-600' },
    { emoji: '🏠', title: 'Practical Life Skills', desc: 'Children develop real-world skills like organization, care for the environment, and independence through daily activities.', color: 'bg-purple-50 border-purple-400 text-purple-600' },
    { emoji: '🎨', title: 'Creative Expression', desc: 'Art, music, and creative play are integral to our curriculum, fostering imagination and self-expression.', color: 'bg-rose-50 border-rose-400 text-rose-600' },
    { emoji: '🤝', title: 'Social Development', desc: 'Mixed-age classrooms encourage peer learning, empathy, leadership, and collaborative problem-solving.', color: 'bg-indigo-50 border-indigo-400 text-indigo-600' },
]

const benefits = [
    'Builds strong foundation for lifelong learning',
    'Develops independence and self-confidence',
    'Encourages intrinsic motivation',
    'Fosters critical thinking skills',
    'Nurtures emotional intelligence',
    'Prepares for academic excellence',
    'Develops fine and gross motor skills',
    'Builds concentration and focus',
]

const ageGroups = [
    { range: '1.5 – 3 yrs', name: 'Toddler Trail', desc: 'Sensory exploration & early independence milestone labs.', emoji: '🍼', color: 'from-amber-100 to-orange-100 border-orange-400' },
    { range: '3 – 6 yrs', name: 'Primary Safari', desc: 'Core Montessori tools, practical lifeskills, and social games.', emoji: '🌟', color: 'from-sky-100 to-blue-100 border-blue-400' },
    { range: '6 – 9 yrs', name: 'Lower Discovery', desc: 'Academic foundations, creative research, and collaborative groups.', emoji: '📚', color: 'from-emerald-100 to-green-100 border-green-400' },
    { range: '9 – 12 yrs', name: 'Upper Expedition', desc: 'Advanced cosmic curriculum, laboratory research, and leadership.', emoji: '🔬', color: 'from-purple-100 to-indigo-100 border-indigo-400' },
]

export default function MontessoriPage() {
    return (
        <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden select-none">

            {/* --- Hero: The Park Entrance --- */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-sky-200 via-sky-50 to-[#fcfbf7] overflow-hidden">
                {/* Immersive Atmospheric Backdrop */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
                        className="absolute -top-16 -left-16 text-amber-400 opacity-90"
                    >
                        <Sun className="w-44 h-44 sm:w-56 sm:h-56 fill-current" />
                    </motion.div>

                    {/* Interactive Soft Clouds */}
                    <motion.div animate={{ x: [-10, 10, -10], y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-12 left-[15%] text-white opacity-80 hidden md:block">
                        <Cloud className="w-24 h-16 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ x: [10, -10, 10], y: [-6, 10, -6] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }} className="absolute top-16 right-[12%] text-white opacity-90 hidden lg:block">
                        <Cloud className="w-32 h-20 fill-current drop-shadow-sm" />
                    </motion.div>
                </div>

                <div className="container-max section-px relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}>
                            <Badge className="mb-5 bg-amber-400 hover:bg-amber-500 text-slate-900 border-2 border-slate-900 font-black px-4 py-1.5 rounded-full text-xs tracking-wider shadow-[2px_2px_0_0_#0f172a] transform -rotate-1 inline-flex items-center gap-1.5">
                                <Compass className="w-4 h-4 animate-spin-slow" /> MONTESSORI PATHWAY
                            </Badge>
                            <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none">
                                Education That Sparks <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 drop-shadow-sm">Natural Wonder</span>
                            </h1>
                            <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed mb-8">
                                The Montessori method honors your child's organic timeline. At Tiny Park, we transform traditional classrooms into vibrant living environments where playing and learning become one grand adventure.
                            </p>

                            {/* Thick Bubbly Customizable Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="xl" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100">
                                    <Link to="/admissions" className="flex items-center gap-2">
                                        Begin Expedition <ArrowRight className="w-5 h-5 stroke-[3]" />
                                    </Link>
                                </Button>
                                <Button asChild size="xl" variant="outline" className="bg-white hover:bg-slate-50 text-slate-800 font-black border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0_0_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100">
                                    <Link to="/contact">Meet Rangers</Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Scrapbook Style Frame */}
                        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: -1 }} transition={{ duration: 0.6, delay: 0.2, type: 'spring' }} className="relative mx-auto lg:ml-auto">
                            <div className="absolute inset-0 bg-amber-400 border-4 border-slate-900 rounded-[2.5rem] translate-x-3 translate-y-3 shadow-none" />
                            <div className="relative bg-white p-4 border-4 border-slate-900 rounded-[2.5rem]">
                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&q=85" alt="Montessori classroom" className="rounded-[1.8rem] border-2 border-slate-900 w-full h-80 lg:h-96 object-cover" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 text-emerald-500 hidden sm:block"><Trees className="w-12 h-12 fill-current stroke-[1.5]" /></div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#fcfbf7] rounded-t-[100%]" />
            </section>


            {/* --- Section: The Montessori Matrix Battle --- */}
            <section className="py-24 bg-white border-t-4 border-b-4 border-dashed border-slate-200">
                <div className="container-max section-px">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

                        {/* Whimsical Board Card Layout */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-5">
                            <Card className="p-6 sm:p-8 bg-amber-50/60 border-4 border-slate-900 rounded-[2rem] shadow-[6px_6px_0_0_#0f172a] relative overflow-hidden">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-white border-4 border-slate-900 rounded-2xl flex items-center justify-center mx-auto shadow-[3px_3px_0_0_#0f172a] text-3xl mb-3">🧩</div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">The Training Matrix</h3>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Comparing Exploration Methods</p>
                                </div>

                                <div className="space-y-4">
                                    {/* Traditional Matrix Box */}
                                    <div className="bg-white/80 border-2 border-slate-300 rounded-2xl p-4">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2.5">Traditional Schooling</p>
                                        {['Teacher-led desks', 'Rigid fixed paces', 'Passive listening'].map(item => (
                                            <div key={item} className="flex items-center gap-2 mb-1.5 last:mb-0">
                                                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 font-bold text-[10px] flex items-center justify-center">✕</span>
                                                <span className="text-xs font-semibold text-slate-500">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Montessori Matrix Box */}
                                    <div className="bg-emerald-100/90 border-4 border-slate-900 rounded-2xl p-4 shadow-[2px_2px_0_0_#0f172a]">
                                        <p className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-2.5">Tiny Park Montessori</p>
                                        {['Child-led discoveries', 'Self-paced journeys', 'Active spatial crafting'].map(item => (
                                            <div key={item} className="flex items-center gap-2 mb-1.5 last:mb-0">
                                                <div className="w-4 h-4 rounded-full bg-emerald-500 border border-slate-900 text-white flex items-center justify-center"><Check className="w-3 h-3 stroke-[3]" /></div>
                                                <span className="text-xs font-black text-slate-800">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-7 flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                                "Learning by Doing" — <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">The Heart of Montessori</span>
                            </h2>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Dr. Maria Montessori discovered that children flourish when they are the pilots of their own learning. Our classrooms are custom-crafted **Discovery Labs** equipped with hands-on, self-correcting materials that turn complex calculations into simple structural puzzles.
                            </p>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Our certified teachers act as protective Park Rangers—carefully mapping each individual child's milestones, introducing customized vectors at optimal windows, and ensuring absolute freedom of learning focus.
                            </p>

                            {/* Perks Checklist Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                {benefits.map(b => (
                                    <div key={b} className="flex items-center gap-3 bg-slate-50 border-2 border-slate-900/10 px-4 py-2.5 rounded-xl hover:border-slate-900/40 transition-colors duration-150">
                                        <div className="w-5 h-5 rounded-full bg-sky-400 border border-slate-900 text-slate-900 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 stroke-[3]" /></div>
                                        <span className="text-sm font-bold text-slate-800 tracking-tight leading-tight">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* --- Section: Creative Core Principles --- */}
            <section className="py-24 bg-[#faf8f2]">
                <div className="container-max section-px">
                    <SectionHeader
                        badge="Adventure Tactics"
                        badgeVariant="primary"
                        badgeIcon={<Sparkles className="w-3.5 h-3.5 fill-current" />}
                        title={<>Core Tactics of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">Montessori Program</span></>}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {principles.map(({ emoji, title, desc, color }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                                className="h-full"
                            >
                                <Card className="p-6 h-full bg-white border-4 border-slate-900 rounded-[2rem] shadow-[4px_4px_0_0_#0f172a] flex flex-col items-start transition-shadow duration-200 hover:shadow-[6px_6px_0_0_#0f172a]">
                                    <div className={`w-14 h-14 border-2 border-slate-900 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-[2px_2px_0_0_#0f172a] ${color.split(' ')[0]}`}>
                                        {emoji}
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- Section: The Age Group Expeditions --- */}
            <section className="py-24 bg-white border-t-4 border-slate-900">
                <div className="container-max section-px">
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <Badge className="bg-rose-500 text-white font-black border-2 border-slate-900 rounded-full px-4 py-1 mb-3 shadow-[2px_2px_0_0_#0f172a]">CAMP SECTORS</Badge>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Active Programs by Age Group</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ageGroups.map(({ range, name, desc, emoji, color }, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, type: 'spring', bounce: 0.2, delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="h-full"
                            >
                                <Card className={`p-6 text-center bg-gradient-to-b ${color} border-4 border-slate-900 rounded-[2.2rem] shadow-[5px_5px_0_0_#0f172a] h-full flex flex-col justify-between items-center transition-all duration-200`}>
                                    <div>
                                        <div className="w-16 h-16 bg-white border-4 border-slate-900 rounded-full flex items-center justify-center text-3xl mx-auto shadow-[2px_2px_0_0_#0f172a] mb-4">
                                            {emoji}
                                        </div>
                                        <Badge className="bg-slate-900 text-white font-black rounded-lg text-xs px-3 py-1 mb-3 pointer-events-none">
                                            {range}
                                        </Badge>
                                        <h4 className="text-lg font-black text-slate-900 mb-2 tracking-tight leading-none">{name}</h4>
                                        <p className="text-xs font-bold text-slate-700/80 leading-relaxed max-w-[180px] mx-auto">{desc}</p>
                                    </div>

                                    {/* Small micro decoration asset inside cards */}
                                    <div className="mt-5 w-8 h-1 bg-slate-900/20 rounded-full" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Themed Interactive Footer Banner --- */}
            <CtaBanner
                title="Ready to Join the Tiny Park Clan?"
                subtitle="Equip your little exploration unit with optimal developmental tools. Register for open house camp trials today."
                primaryLabel="Claim Camp Pass"
                primaryTo="/admissions"
            />
        </div>
    )
}