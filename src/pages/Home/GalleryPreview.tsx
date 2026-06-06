import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Images, Sparkles, Camera, X, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
import SectionHeader from '@/components/sections/SectionHeader'
import { GALLERY_IMAGES } from '@/data/school'

// Custom playful themes mapped dynamically across scrapbook tiles
const SCRAPBOOK_THEMES = [
    { border: 'border-sky-400', shadow: 'shadow-[0_8px_0_0_#38bdf8]', rotation: '-rotate-2 hover:rotate-1 bg-sky-50 text-sky-700' },
    { border: 'border-amber-400', shadow: 'shadow-[0_8px_0_0_#fbbf24]', rotation: 'rotate-3 hover:rotate-1 bg-amber-50 text-amber-700' },
    { border: 'border-emerald-400', shadow: 'shadow-[0_8px_0_0_#34d399]', rotation: '-rotate-1 hover:rotate-2 bg-emerald-50 text-emerald-700' },
    { border: 'border-rose-400', shadow: 'shadow-[0_8px_0_0_#f43f5e]', rotation: 'rotate-2 hover:rotate-0 bg-rose-50 text-rose-700' },
    { border: 'border-indigo-400', shadow: 'shadow-[0_8px_0_0_#6366f1]', rotation: '-rotate-3 hover:rotate-1 bg-indigo-50 text-indigo-700' },
    { border: 'border-orange-400', shadow: 'shadow-[0_8px_0_0_#f97316]', rotation: 'rotate-1 hover:rotate-3 bg-orange-50 text-orange-700' },
]

export interface GalleryImage {
    id: string | number
    src: string
    alt: string
    category: string
}

export default function GalleryPreview() {
    const preview: GalleryImage[] = GALLERY_IMAGES.slice(0, 6)
    const [activePhoto, setActivePhoto] = useState<GalleryImage | null>(null)

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFBEB] via-white to-[#F0FDF4] relative overflow-hidden">

            {/* Decorative Natural Map Accents */}
            <div className="absolute top-12 left-6 text-sky-300 animate-bounce pointer-events-none hidden lg:block" style={{ animationDuration: '4s' }}>
                <Camera className="w-10 h-10 transform -rotate-12" />
            </div>
            <div className="absolute bottom-20 right-8 text-amber-300 animate-pulse pointer-events-none hidden lg:block">
                <Sparkles className="w-8 h-8" />
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

                {/* --- DESCRIPTIVE WHIMSICAL HEADER --- */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        badge="Discovery Lab"
                        badgeVariant="violet"
                        badgeIcon={<Images className="w-4 h-4 text-indigo-500 animate-pulse" />}
                        title={
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                                A Glimpse of <span className="relative inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-2xl border-4 border-dashed border-indigo-300">Life at Tiny Park</span>
                            </h2>
                        }
                        subtitle="Open up our magical field guide memory book! Take a look at our happy campers, outdoor classrooms, and daily adventures."
                    />
                </div>

                {/* --- GEOMETRIC SCRAPBOOK GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
                    {preview.map((img, i) => {
                        const theme: any = SCRAPBOOK_THEMES[i % SCRAPBOOK_THEMES.length]

                        return (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ type: "spring", stiffness: 220, damping: 18, delay: i * 0.08 }}
                                whileHover={{ y: -8, scale: 1.04 }}
                                onClick={() => setActivePhoto(img)}
                                className={`bg-white p-4 pb-7 rounded-[2rem] border-4 border-solid ${theme.border} ${theme.shadow} ${theme.rotation} transition-all duration-300 ease-out cursor-pointer group`}
                            >
                                {/* Image Masking Core */}
                                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] mb-4 bg-slate-50 border border-slate-100 shadow-inner">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    {/* Subtle color overlay shadow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Glass Interactive Magnifying Hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1.5 rounded-full font-black text-xs shadow-md border border-slate-100 flex items-center gap-1.5">
                                            🔍 Peek Inside
                                        </span>
                                    </div>
                                </div>

                                {/* Polaroid Sticker Footnote Stamp */}
                                <div className="flex items-center justify-between px-1">
                                    <Badge className={`font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border-2 border-solid shadow-[0_2px_0_0_currentColor] ${theme.bg} border-current`}>
                                        {img.category}
                                    </Badge>
                                    <span className="text-slate-300 text-sm font-black group-hover:text-slate-400 transition-colors select-none">📌</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* --- THICK BUBBLY INTERACTIVE TRIGGER --- */}
                <div className="text-center">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black text-base rounded-full px-8 py-6 border-b-4 border-indigo-700 shadow-[0_6px_0_0_rgba(99,102,241,0.25)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-1 active:border-b-0 transition-all duration-150 group"
                    >
                        <Link to="/gallery" className="flex items-center gap-2">
                            View Full Gallery Expedition
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform stroke-[3]" />
                        </Link>
                    </Button>
                </div>

            </div>

            {/* --- SHADCN DIALOG ADAPTED AS A TREASURE CHEST --- */}
            <Dialog open={!!activePhoto} onOpenChange={(open) => !open && setActivePhoto(null)}>
                <AnimatePresence>
                    {activePhoto && (
                        <>
                            <DialogOverlay asChild>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50"
                                />
                            </DialogOverlay>

                            <DialogContent asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                                    className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[92vw] max-w-2xl bg-white p-5 rounded-[2.5rem] border-4 border-solid border-amber-400 shadow-[0_16px_0_0_#fbbf24] z-50 overflow-hidden focus:outline-none"
                                >
                                    {/* Whimsical Chest Modal Inner Header */}
                                    <div className="flex items-center justify-between gap-4 mb-4 border-b-4 border-dashed border-slate-100 pb-3">
                                        <div className="flex items-center gap-2 text-amber-500">
                                            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                                            <span className="font-black text-sm uppercase tracking-wider text-slate-700">Memory Chest Vault</span>
                                        </div>

                                        {/* Bouncy Custom Close Button Plate */}
                                        <button
                                            onClick={() => setActivePhoto(null)}
                                            className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 border-2 border-solid border-rose-300 flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
                                        >
                                            <X className="w-4 h-4 stroke-[3]" />
                                        </button>
                                    </div>

                                    {/* Expanded Visual Core */}
                                    <div className="rounded-2xl overflow-hidden aspect-[4/3] relative border border-slate-100 shadow-inner bg-slate-50">
                                        <img
                                            src={activePhoto.src}
                                            alt={activePhoto.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-3 left-3">
                                            <Badge className="bg-slate-900/80 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wide border border-white/20">
                                                🗺️ {activePhoto.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Accessible Label Content */}
                                    <div className="mt-4 px-1">
                                        <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
                                            {activePhoto.alt || "Capturing wonderful learning milestones and magical memories at Tiny Park."}
                                        </p>
                                    </div>
                                </motion.div>
                            </DialogContent>
                        </>
                    )}
                </AnimatePresence>
            </Dialog>

        </section>
    )
}