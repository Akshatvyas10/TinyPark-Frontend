import { motion } from 'framer-motion'
import { HelpCircle, Compass, Sun, Cloud, MessageCircle, Trees, Star, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import CtaBanner from '@/components/sections/CtaBanner'
import { FAQ_DATA } from '@/data/school'
import { Card } from '@/components/ui/card'

// Multi-color thematic mapping for unique park zones (No corporate black lines!)
const categories = [
    {
        label: 'Basecamp Admissions',
        subtitle: 'Joining the Park Crew',
        items: FAQ_DATA.slice(0, 2),
        icon: Compass,
        color: 'text-amber-500',
        borderColor: 'border-amber-400',
        shadowColor: 'shadow-[5px_5px_0_0_#fbbf24]',
        bg: 'bg-amber-50/70',
        badgeBg: 'bg-amber-400 text-amber-950',
        markerColor: 'bg-amber-400 text-white'
    },
    {
        label: 'Discovery Programs',
        subtitle: 'Learning Expeditions',
        items: FAQ_DATA.slice(2, 5),
        icon: GraduationCap,
        color: 'text-sky-500',
        borderColor: 'border-sky-400',
        shadowColor: 'shadow-[5px_5px_0_0_#38bdf8]',
        bg: 'bg-sky-50/70',
        badgeBg: 'bg-sky-400 text-sky-950',
        markerColor: 'bg-sky-400 text-white'
    },
    {
        label: 'Park Life & Safety',
        subtitle: 'Daily Fun & Care',
        items: FAQ_DATA.slice(5, 8),
        icon: Trees,
        color: 'text-emerald-500',
        borderColor: 'border-emerald-400',
        shadowColor: 'shadow-[5px_5px_0_0_#34d399]',
        bg: 'bg-emerald-50/70',
        badgeBg: 'bg-emerald-400 text-emerald-950',
        markerColor: 'bg-emerald-400 text-white'
    },
    {
        label: 'General Curiosities',
        subtitle: 'Other Little Details',
        items: FAQ_DATA.slice(8),
        icon: Star,
        color: 'text-purple-500',
        borderColor: 'border-purple-400',
        shadowColor: 'shadow-[5px_5px_0_0_#c084fc]',
        bg: 'bg-purple-50/70',
        badgeBg: 'bg-purple-400 text-purple-950',
        markerColor: 'bg-purple-400 text-white'
    },
]

export default function FAQPage() {
    return (
        <div className="bg-[#FFFDF9] min-h-screen overflow-x-hidden select-none pb-12">

            {/* --- HERO: THE PARK ENTRANCE SIGNPOST --- */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-b from-sky-300 via-sky-100 to-[#FFFDF9] overflow-hidden">
                {/* Micro-Interaction Sky Ambiance */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Glowing Sun */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                        className="absolute -top-10 -left-10 text-amber-400 filter drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                    >
                        <Sun className="w-36 h-36 sm:w-48 sm:h-48 fill-current" />
                    </motion.div>

                    {/* Staggered Floating Clouds */}
                    <motion.div
                        animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-12 left-[12%] text-white drop-shadow-md hidden md:block"
                    >
                        <Cloud className="w-24 h-16 fill-current" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-10, 15, -10], x: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.8 }}
                        className="absolute top-8 right-[15%] text-white drop-shadow-md hidden lg:block scale-125"
                    >
                        <Cloud className="w-32 h-20 fill-current" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
                    >
                        <Badge className="mb-6 bg-purple-400 text-purple-950 border-4 border-purple-500 font-black px-5 py-2 rounded-full text-xs tracking-wider shadow-[0_4px_0_0_#a855f7] transform rotate-2 inline-flex items-center gap-1.5 hover:bg-purple-400">
                            <HelpCircle className="w-4 h-4 stroke-[3]" /> QUEST BOARD
                        </Badge>

                        <h1 className="text-4xl sm:text-6xl font-black text-slate-800 mb-6 tracking-tight leading-none max-w-4xl mx-auto">
                            The Great Book of <span className="relative inline-block bg-amber-100 text-amber-600 px-4 py-1 rounded-3xl border-4 border-dashed border-amber-400 transform -rotate-1">Curious Questions</span>
                        </h1>

                        <p className="text-lg sm:text-xl font-bold text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Everything explorers and parents need to know about Tiny Park—uncovering adventures, daily missions, routes, and magical milestones!
                        </p>
                    </motion.div>
                </div>

                {/* Soft Organic Grass Landscape Curve */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#FFFDF9] rounded-t-[120%]" />
            </section>


            {/* --- FAQ ACCORDION DISCOVERY TRAIL --- */}
            <section className="pb-24 pt-4 px-4 sm:px-6 relative">
                <div className="max-w-3xl mx-auto space-y-16">
                    {categories.map(({ label, subtitle, items, icon: Icon, color, borderColor, shadowColor, badgeBg, markerColor }, ci) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: ci * 0.08, type: 'spring', bounce: 0.2 }}
                            className="relative"
                        >
                            {/* Whimsical Signpost Header Row */}
                            <div className="flex items-center gap-4 mb-6 transform -rotate-1">
                                <div className={`w-14 h-14 bg-white border-4 ${borderColor} rounded-2xl flex items-center justify-center flex-shrink-0 ${shadowColor} transform hover:rotate-6 transition-transform duration-200`}>
                                    <Icon className={`w-7 h-7 ${color} stroke-[3]`} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-1">{label}</h2>
                                    <span className={`inline-block px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider ${badgeBg}`}>
                                        {subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Colorful Custom Accordion Array */}
                            <Accordion type="single" collapsible className="flex flex-col gap-5">
                                {items.map((item, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`${label}-${i}`}
                                        className="border-none"
                                    >
                                        <Card className={`overflow-hidden border-4 ${borderColor} rounded-[2rem] bg-white ${shadowColor} hover:scale-[1.02] transition-transform duration-300 dynamic-bounce`}>

                                            {/* Interactive Bouncy Header Tab */}
                                            <AccordionTrigger className="w-full text-left font-black text-base sm:text-lg text-slate-800 p-5 hover:no-underline transition-colors duration-200 focus:ring-0 focus-visible:outline-none group [&[data-state=open]>span>span>span]:rotate-90">
                                                <span className="pr-4 flex items-center gap-3">
                                                    <span className={`w-8 h-8 rounded-xl ${markerColor} flex items-center justify-center text-sm font-black shadow-[0_3px_0_0_currentColor] brightness-95 shrink-0 transition-transform duration-300`}>
                                                        <span className="block transition-transform duration-300">✨</span>
                                                    </span>
                                                    <span className="leading-snug group-hover:text-slate-900 transition-colors">{item.q}</span>
                                                </span>
                                            </AccordionTrigger>

                                            {/* Smooth Playground Drop-down Area */}
                                            <AccordionContent className="text-slate-600 font-bold text-sm sm:text-base px-6 pb-6 pt-2 border-t-4 border-dashed border-slate-100/80 bg-gradient-to-b from-white to-slate-50/40">
                                                <motion.div
                                                    initial={{ opacity: 0, y: -6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="leading-relaxed flex items-start gap-2"
                                                >
                                                    <span className="text-xl select-none shrink-0">🌿</span>
                                                    <p className="pt-0.5">{item.a}</p>
                                                </motion.div>
                                            </AccordionContent>

                                        </Card>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* --- SECONDARY DISCOVERY / SUPPORT OUTPOST --- */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="bg-white border-4 border-dashed border-emerald-400 rounded-[2.5rem] p-8 sm:p-12 text-center shadow-[0_12px_24px_-8px_rgba(52,211,153,0.3)] relative overflow-hidden"
                    >
                        {/* Soft Transparent Backdrop Props */}
                        <div className="absolute top-4 left-4 text-emerald-300/30 -rotate-12 pointer-events-none">
                            <Trees className="w-14 h-14 fill-current" />
                        </div>
                        <div className="absolute bottom-4 right-4 text-purple-300/30 rotate-12 pointer-events-none">
                            <Star className="w-14 h-14 fill-current" />
                        </div>

                        {/* Bouncy Contact Avatar Crest */}
                        <div className="w-20 h-20 bg-amber-100 border-4 border-amber-400 rounded-full flex items-center justify-center mx-auto shadow-[0_6px_0_0_#fbbf24] mb-6 animate-bounce" style={{ animationDuration: '3.5s' }}>
                            <MessageCircle className="w-10 h-10 text-amber-600 fill-amber-200 stroke-[2.5]" />
                        </div>

                        <h2 className="text-3xl font-black text-slate-800 mb-4">Still Wandering the Trails?</h2>
                        <p className="text-base font-bold text-slate-500 max-w-lg mx-auto">
                            Our friendly Park Rangers are stationed at the basecamp ready to translate any confusion. Reach out via signal fire or email, and we’ll fly back to you within 24 hours!
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* --- IMMERSIVE THEMED CALL TO ACTION BANNER --- */}
            <div className="px-4">
                <CtaBanner
                    title="Ready to Start the Expedition?"
                    subtitle="Don't let questions stall the journey. Enlist your little ranger today and discover our learning layout together."
                    primaryLabel="Claim Camp Ticket 🎫"
                    primaryTo="/contact"
                    className="font-black rounded-[3rem] border-4 border-solid border-rose-400 bg-gradient-to-r from-rose-400 to-orange-400 shadow-[0_8px_0_0_#f43f5e]"
                />
            </div>
        </div>
    )
}