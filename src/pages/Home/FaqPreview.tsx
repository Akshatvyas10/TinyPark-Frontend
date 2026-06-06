import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, HelpCircle, Sparkles, MessageCircleQuestion } from 'lucide-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/sections/SectionHeader'
import { FAQ_DATA } from '@/data/school'

// High-contrast, playful park themes applied to accordion segments
const FAQ_THEMES = [
    { border: 'border-amber-400', shadow: 'shadow-[0_8px_0_0_#fbbf24]', bg: 'bg-gradient-to-br from-amber-50 to-white', text: 'text-amber-700', marker: 'bg-amber-400' },
    { border: 'border-sky-400', shadow: 'shadow-[0_8px_0_0_#38bdf8]', bg: 'bg-gradient-to-br from-sky-50 to-white', text: 'text-sky-700', marker: 'bg-sky-400' },
    { border: 'border-emerald-400', shadow: 'shadow-[0_8px_0_0_#34d399]', bg: 'bg-gradient-to-br from-emerald-50 to-white', text: 'text-emerald-700', marker: 'bg-emerald-400' },
    { border: 'border-rose-400', shadow: 'shadow-[0_8px_0_0_#f43f5e]', bg: 'bg-gradient-to-br from-rose-50 to-white', text: 'text-rose-700', marker: 'bg-rose-400' },
]

export default function FaqPreview() {
    const preview = FAQ_DATA.slice(0, 4)

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F0FDF4] to-[#FFFBEB] relative overflow-hidden">

            {/* Whimsical Park Grid Elements */}
            <div className="absolute top-8 right-12 text-emerald-300 animate-bounce pointer-events-none hidden lg:block" style={{ animationDuration: '6s' }}>
                <Sparkles className="w-12 h-12" />
            </div>
            <div className="absolute bottom-16 left-8 text-sky-300/60 pointer-events-none hidden lg:block">
                <MessageCircleQuestion className="w-24 h-24 transform -rotate-12" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

                {/* --- THEMATIC DISCOVERY HEADER --- */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        badge="Riddle Outpost"
                        badgeVariant="primary"
                        badgeIcon={<HelpCircle className="w-4 h-4 text-emerald-500" />}
                        title={
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                                Common <span className="relative inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-2xl border-4 border-dashed border-emerald-300">Questions Answered</span>
                            </h2>
                        }
                        subtitle="Everything parents want to know about our campsite reserve guidelines and system milestones."
                    />
                </div>

                {/* --- STAGGERED TACTILE ACCORDION LIST --- */}
                <div className="max-w-3xl mx-auto mb-14">
                    <Accordion type="single" collapsible className="flex flex-col gap-6">
                        {preview.map((item, i) => {
                            const theme = FAQ_THEMES[i % FAQ_THEMES.length]

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.08 }}
                                >
                                    <AccordionItem
                                        value={`item-${i}`}
                                        className={`border-4 border-solid ${theme.border} ${theme.shadow} ${theme.bg} rounded-[2rem] px-5 md:px-7 overflow-hidden transition-all duration-300 group`}
                                    >
                                        {/* Trigger Strip tailored into a Custom Bubbly Row */}
                                        <AccordionTrigger className="hover:no-underline py-5 font-black text-base md:text-lg text-slate-800 text-left gap-4 [&[data-state=open]>div>span]:rotate-180 [&[data-state=open]]:text-slate-950">
                                            <div className="flex items-center gap-3.5 flex-1">
                                                {/* Custom Question Mark Badge Node */}
                                                <div className={`w-8 h-8 rounded-xl ${theme.marker} text-white font-black text-sm flex items-center justify-center shadow-[0_3px_0_0_rgba(0,0,0,0.1)] shrink-0 group-hover:scale-110 transition-transform`}>
                                                    ?
                                                </div>
                                                <span className="leading-snug">{item.q}</span>
                                            </div>

                                            {/* Styled Custom Chevron Guard */}
                                            <div className="shrink-0 pl-2">
                                                <span className="block w-8 h-8 rounded-full bg-slate-100 text-slate-600 border border-slate-200 flex items-center justify-center font-black text-sm transition-transform duration-300 shadow-sm">
                                                    ▼
                                                </span>
                                            </div>
                                        </AccordionTrigger>

                                        {/* Content Layer customized as an Inner Playground Map Grid */}
                                        <AccordionContent className="pb-6 pt-1 text-slate-600 font-medium text-sm md:text-base leading-relaxed border-t-2 border-dashed border-slate-100">
                                            <div className="flex items-start gap-2.5 pt-4">
                                                <span className={`text-xl font-black ${theme.text} select-none`}>💡</span>
                                                <p>{item.a}</p>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            )
                        })}
                    </Accordion>
                </div>

                {/* --- THICK SHADCN TRIGGER EXCURSION CONTROL --- */}
                <div className="text-center">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-amber-400 to-orange-400 text-white font-black text-base rounded-full px-8 py-6 border-b-4 border-orange-600 shadow-[0_6px_0_0_rgba(249,115,22,0.25)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all duration-150 group"
                    >
                        <Link to="/faq" className="flex items-center gap-2">
                            View All FAQs Expedition
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[3]" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}