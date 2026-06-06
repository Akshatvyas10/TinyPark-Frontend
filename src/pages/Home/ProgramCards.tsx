import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Compass, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeader from '@/components/sections/SectionHeader'

// Reconstructed programs array with complete structural semantic color spaces matching the guidelines
const programs = [
    {
        emoji: '🦁',
        title: 'Adventure Zone (Montessori)',
        subtitle: 'Learning by Doing',
        desc: 'Child-led, hands-on learning that builds independence, curiosity, and a lifelong love of knowledge through specially designed materials.',
        badge: 'Ages 1.5 – 12 yrs',
        path: '/montessori',
        // Theme configs mapping to custom bubbly layouts
        accentClass: "bg-sky-400",
        shadowClass: "shadow-[0_12px_0_0_#38bdf8]",
        borderClass: "border-sky-300",
        badgeBg: "bg-sky-100 text-sky-700 border-sky-300",
        tagColor: "text-sky-600",
        bgPattern: "from-sky-50 to-white",
        icon: Compass,
        iconColor: "text-sky-400"
    },
    {
        emoji: '🐘',
        title: 'Brain Safari (UCMAS)',
        subtitle: 'Mental Math Mastery',
        desc: 'Globally recognized enrichment program developing extraordinary mental arithmetic, concentration, memory, and brain power in children.',
        badge: 'Ages 4 – 13 yrs',
        path: '/ucmas',
        // Theme configs mapping to custom bubbly layouts
        accentClass: "bg-emerald-400",
        shadowClass: "shadow-[0_12px_0_0_#34d399]",
        borderClass: "border-emerald-300",
        badgeBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
        tagColor: "text-emerald-600",
        bgPattern: "from-emerald-50 to-white",
        icon: Lightbulb,
        iconColor: "text-emerald-400"
    },
]

export default function ProgramCards() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0FDF4] via-[#FFFBEB] to-white relative overflow-hidden">

            {/* Whimsical Ambient Map Details */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200/40 rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-10 right-[-5%] w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

                {/* --- STYLED SECTION HEADER --- */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        badge="Adventure Zones"
                        badgeVariant="secondary"
                        badgeIcon={<Sparkles className="w-4 h-4 text-amber-500 animate-spin duration-3000" />}
                        title={
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                                Explore Our <span className="relative inline-block bg-amber-100 text-amber-600 px-4 py-1 rounded-2xl border-4 border-dashed border-amber-300">Tiny Park</span>
                            </h2>
                        }
                        subtitle="Discover exciting worlds inside our campsite reserve where learning feels like playing."
                    />
                </div>

                {/* --- BUBBLY TACTILE CARD MATRIX --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {programs.map((p, i) => {
                        const DecorativeIcon = p.icon;

                        return (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ type: "spring", stiffness: 200, damping: 18, delay: i * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02, rotate: i % 2 === 0 ? 0 : -0.5 }}
                                className="h-full group"
                            >
                                <Link to={p.path} className="block h-full">
                                    <Card className={`h-full border-4 border-solid ${p.borderClass} ${p.shadowClass} p-6 md:p-8 bg-gradient-to-b ${p.bgPattern} rounded-[2.5rem] flex flex-col justify-between gap-6 relative overflow-hidden transition-all duration-300 active:translate-y-2 active:shadow-none`}>

                                        {/* Floating Corner Background Icon (Thematic Motif) */}
                                        <DecorativeIcon className={`absolute -top-4 -right-4 w-28 h-28 ${p.iconColor} opacity-10 group-hover:scale-120 group-hover:rotate-12 transition-transform duration-500 pointer-events-none`} />

                                        {/* Card Upper Core Floor */}
                                        <div>
                                            <div className="flex items-start justify-between gap-4 mb-6">
                                                {/* 3D Round Badge Frame for Emojis */}
                                                <div className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl border-2 border-solid ${p.borderClass} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-[0_4px_0_0_rgba(0,0,0,0.05)] shrink-0`}>
                                                    <span className="text-3xl md:text-4xl filter drop-shadow-sm select-none">{p.emoji}</span>
                                                </div>

                                                {/* Thick Bubbly Age Category Stamp */}
                                                <Badge className={`font-black text-xs px-3 py-1.5 rounded-full border-2 border-solid shadow-[0_3px_0_0_currentColor] ${p.badgeBg} select-none`}>
                                                    {p.badge}
                                                </Badge>
                                            </div>

                                            {/* Content Blocks */}
                                            <div className="space-y-2">
                                                <p className={`text-xs md:text-sm font-black uppercase tracking-wider ${p.tagColor}`}>
                                                    ✨ {p.subtitle}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight">
                                                    {p.title}
                                                </h3>
                                                <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed pt-2">
                                                    {p.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* --- EXPEDITION CONTROLLER LINK (TACTILE TRIGGER FLOOR) --- */}
                                        <div className={`w-full pt-4 mt-2 border-t-4 border-dashed border-slate-100 flex items-center justify-between font-black text-sm ${p.tagColor}`}>
                                            <span>Explore Territory</span>
                                            <div className={`w-8 h-8 rounded-full ${p.accentClass} text-white flex items-center justify-center shadow-[0_3px_0_0_rgba(0,0,0,0.15)] group-hover:translate-x-1 transition-transform`}>
                                                <ArrowRight className="w-4 h-4 stroke-[3]" />
                                            </div>
                                        </div>

                                    </Card>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}