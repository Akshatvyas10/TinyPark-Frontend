import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Camera, Sun, Cloud, Sparkles, Trees, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { GALLERY_IMAGES } from '@/data/school'

const categories = ['All Snapshots', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))]

// Visual themes for the tabs based on a cheerful park palette
const tabStyles: Record<string, string> = {
    'All Snapshots': 'bg-amber-400 text-slate-900 border-amber-500 hover:bg-amber-500',
    'Classrooms': 'bg-sky-400 text-slate-900 border-sky-500 hover:bg-sky-500',
    'Activities': 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500',
    'Events': 'bg-rose-400 text-white border-rose-500 hover:bg-rose-500',
    'Default': 'bg-purple-400 text-white border-purple-500 hover:bg-purple-500'
}

export default function GalleryPage() {
    const [active, setActive] = useState('All Snapshots')
    const [lightbox, setLightbox] = useState<typeof GALLERY_IMAGES[0] | null>(null)

    const normalizedActive = active === 'All Snapshots' ? 'All' : active
    const filtered = normalizedActive === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === normalizedActive)

    return (
        <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden select-none">

            {/* --- Hero: The Park Lens Portal --- */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-sky-200 via-sky-50 to-[#fcfbf7] overflow-hidden">
                {/* Sky Environment Motifs */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                        className="absolute -top-14 -left-14 text-amber-400 opacity-90"
                    >
                        <Sun className="w-40 h-40 sm:w-52 sm:h-52 fill-current" />
                    </motion.div>

                    {/* Multi-layered Clouds */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-12 left-[12%] text-white opacity-80 hidden md:block">
                        <Cloud className="w-24 h-16 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ y: [-6, 14, -6] }} transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 0.4 }} className="absolute top-10 right-[18%] text-white opacity-90 hidden lg:block scale-110">
                        <Cloud className="w-32 h-20 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.1 }} className="absolute top-24 right-[6%] text-white opacity-75 hidden md:block scale-75">
                        <Cloud className="w-20 h-12 fill-current drop-shadow-sm" />
                    </motion.div>
                </div>

                <div className="container-max section-px relative text-center z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}>
                        <Badge className="mb-5 bg-rose-500 hover:bg-rose-600 text-white border-2 border-slate-900 font-black px-4 py-1.5 rounded-full text-xs tracking-widest shadow-[2px_2px_0_0_#0f172a] transform -rotate-2 inline-flex items-center gap-1.5">
                            <Camera className="w-4 h-4 fill-current" /> SAFARI SNAPSHOTS
                        </Badge>
                        <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none">
                            Our Shiny <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 drop-shadow-sm">Adventure Scrapbook</span>
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Peek through the magnifying glass! See our little rangers mapping maps, building castles, and discovering their bright futures.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#fcfbf7] rounded-t-[100%]" />
            </section>

            {/* --- Scrapbook Grid Section --- */}
            <section className="pb-32 pt-4 px-4 sm:px-6">
                <div className="container-max max-w-7xl mx-auto">

                    {/* Filter Tabs: Bubbly Bouncy Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-wrap gap-3 justify-center mb-16"
                    >
                        {categories.map(cat => {
                            const isSelected = active === cat;
                            const customColor = tabStyles[cat] || tabStyles['Default'];

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`px-5 py-3 rounded-2xl text-sm font-black tracking-tight border-4 border-slate-900 transition-all duration-150 relative ${isSelected
                                            ? `${customColor} translate-y-1 shadow-[0_1px_0_0_#0f172a]`
                                            : 'bg-white text-slate-700 hover:text-slate-900 shadow-[0_5px_0_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_0_#0f172a]'
                                        }`}
                                >
                                    <span className="flex items-center gap-1.5">
                                        {isSelected && <Sparkles className="w-4 h-4 fill-current animate-spin-slow" />}
                                        {cat}
                                    </span>
                                </button>
                            )
                        })}
                    </motion.div>

                    {/* Polaroid Grid Container */}
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((img, i) => (
                                <motion.div
                                    key={img.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -2 : 2 }}
                                    animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -1 : 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                                    whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                                    onClick={() => setLightbox(img)}
                                    className="relative group cursor-pointer bg-white p-4 pb-12 border-4 border-slate-900 rounded-3xl shadow-[6px_6px_0_0_#0f172a] transition-shadow duration-300"
                                >
                                    {/* Snapshot Frame Window */}
                                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-100">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Color overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Zoom Discovery Glass */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-14 h-14 rounded-full bg-amber-400 border-4 border-slate-900 flex items-center justify-center shadow-[3px_3px_0_0_#0f172a] animate-bounce">
                                                <Eye className="w-6 h-6 text-slate-900 stroke-[3]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Whimsical Text/Handwritten Title Area at Bottom */}
                                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                                        <p className="text-sm font-black text-slate-800 truncate pr-2 max-w-[70%] tracking-tight">
                                            {img.alt}
                                        </p>
                                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border border-purple-300 rounded-lg text-[10px] font-black uppercase px-2 py-0.5">
                                            {img.category}
                                        </Badge>
                                    </div>

                                    {/* Deco push pins */}
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-2 border-slate-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* --- Lightbox: The Secret Treasure Chest Pop-up --- */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                            className="relative max-w-4xl w-full bg-[#fcfbf7] border-4 border-slate-900 rounded-[2rem] p-4 sm:p-6 shadow-[10px_10px_0_0_#0f172a] overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Decorative Top Map Strip */}
                            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sky-400 via-amber-400 to-rose-400 border-b-4 border-slate-900" />

                            {/* Big Close Button styled as Bubble Target */}
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-5 right-5 w-12 h-12 rounded-full bg-rose-500 border-4 border-slate-900 text-white flex items-center justify-center shadow-[2px_2px_0_0_#0f172a] hover:bg-rose-600 hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all z-10"
                            >
                                <X className="w-6 h-6 stroke-[3]" />
                            </button>

                            <div className="mt-6 rounded-2xl border-4 border-slate-900 overflow-hidden bg-slate-900 max-h-[65vh]">
                                <img
                                    src={lightbox.src.replace('w=600', 'w=1200')}
                                    alt={lightbox.alt}
                                    className="w-full h-full object-contain mx-auto"
                                />
                            </div>

                            {/* Info Banner Inside Chest */}
                            <div className="mt-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-1.5">
                                        <span>🔍</span> {lightbox.alt}
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 mt-0.5 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                                        <Trees className="w-3.5 h-3.5 text-emerald-500" /> Location Sector: {lightbox.category}
                                    </p>
                                </div>
                                <Badge className="bg-amber-400 border-2 border-slate-900 text-slate-900 font-black px-4 py-1.5 rounded-xl shadow-[2px_2px_0_0_#0f172a]">
                                    Snapshot Secured!
                                </Badge>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}