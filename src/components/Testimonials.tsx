import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Parent of Aarav (Age 5)',
        text: 'Tiny Park has been a blessing for our family. Aarav has blossomed into a confident, curious child who absolutely loves going to school. The Montessori approach has made such a difference in how he learns and explores the world.',
        rating: 5,
        emoji: '👩',
        program: 'Montessori Program',
        accentColor: 'from-amber-400 to-orange-400',
        borderColor: 'border-amber-400'
    },
    {
        name: 'Rajesh & Meena Patel',
        role: 'Parents of Diya (Age 7)',
        text: 'The UCMAS program at Tiny Park is phenomenal. Diya can now do mental calculations faster than we can! But more importantly, her confidence and focus have improved dramatically across all subjects.',
        rating: 5,
        emoji: '👨‍👩‍👧',
        program: 'UCMAS Program',
        accentColor: 'from-sky-400 to-blue-400',
        borderColor: 'border-sky-400'
    },
    {
        name: 'Sunita Verma',
        role: 'Parent of Rohan (Age 4)',
        text: 'What sets Tiny Park apart is the warmth and care of every teacher. Rohan was shy when he joined, but the nurturing environment helped him open up beautifully. The school truly feels like a second home.',
        rating: 5,
        emoji: '👩',
        program: 'Montessori Program',
        accentColor: 'from-emerald-400 to-teal-400',
        borderColor: 'border-emerald-400'
    },
    {
        name: 'Anita Desai',
        role: 'Trained Teacher, Batch 2023',
        text: "The teacher training program at Tiny Park completely transformed my approach to education. I learned practical, child-friendly techniques that I use every day. Mrs. Mujumdar's guidance has been invaluable.",
        rating: 5,
        emoji: '👩‍🏫',
        program: 'Teacher Training',
        accentColor: 'from-purple-400 to-indigo-400',
        borderColor: 'border-purple-400'
    },
    {
        name: 'Vikram & Pooja Nair',
        role: 'Parents of Arjun (Age 6)',
        text: 'We were looking for a school that balances Indian values with modern education. Tiny Park delivers exactly that. Arjun is learning with joy, and we can see his all-round development every single day.',
        rating: 5,
        emoji: '👨‍👩‍👦',
        program: 'Montessori Program',
        accentColor: 'from-rose-400 to-pink-400',
        borderColor: 'border-rose-400'
    },
    {
        name: 'Kavitha Reddy',
        role: 'Parent of Ishaan (Age 8)',
        text: 'The affordable fee structure was what first attracted us, but the quality of education is what made us stay. Tiny Park offers world-class learning without the premium price tag. Truly exceptional.',
        rating: 5,
        emoji: '👩',
        program: 'UCMAS Program',
        accentColor: 'from-orange-400 to-amber-500',
        borderColor: 'border-orange-500'
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: { type: "spring", stiffness: 200, damping: 15, opacity: 1, scale: 1, y: 0 }
}

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.15, ease: "easeInOut" }}
                >
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[1px_1px_0_rgba(0,0,0,0.15)]" />
                </motion.div>
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#FCFBF7] border-t-4 border-slate-900 relative overflow-hidden select-none">
            {/* Ambient background organic blobs */}
            <div className="absolute top-20 -left-16 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-20 -right-16 w-80 h-80 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- HEADER SECTION: Park Announcement Billboard --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 14 }}
                        className="inline-block mb-4"
                    >
                        <Badge className="bg-rose-500 hover:bg-rose-500 text-white border-4 border-slate-900 px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wider shadow-[4px_4px_0_0_#0f172a] inline-flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 fill-current" />
                            PARK ECHOES
                        </Badge>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none"
                    >
                        Loved by Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 drop-shadow-sm">Campfire Families</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Flip through our magical park journal to see how little steps turn into giant leaps of learning and confidence!
                    </motion.p>
                </div>

                {/* --- TRUST BAR: The Playground Scoreboard --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-16 bg-amber-100 border-4 border-slate-900 p-6 sm:p-8 rounded-[2rem] shadow-[6px_6px_0_0_#0f172a] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-slate-900 opacity-5 pointer-events-none" />
                    {[
                        { value: '500+', label: 'Happy Families', icon: '⛺' },
                        { value: '4.9/5', label: 'Average Rating', icon: '✨' },
                        { value: '98%', label: 'Would Recommend', icon: '❤️' },
                        { value: '15+', label: 'Years Trusted', icon: '🌳' },
                    ].map(({ value, label, icon }) => (
                        <div key={label} className="text-center relative z-10 flex flex-col items-center min-w-[120px]">
                            <span className="text-2xl mb-1 filter drop-shadow-sm">{icon}</span>
                            <p className="text-2xl sm:text-3xl font-black font-display text-slate-900 leading-none">{value}</p>
                            <p className="text-[11px] sm:text-xs text-slate-700 font-bold uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* --- TESTIMONIALS GRID: Scrapbook Adventure Entries --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1 : -1, y: -6 }}
                            className="h-full"
                        >
                            <Card className="bg-white rounded-[2rem] border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] hover:shadow-[10px_10px_0_0_#0f172a] transition-all duration-150 flex flex-col h-full relative overflow-hidden group">
                                {/* Color accent accentuation strip along the bottom */}
                                <div className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${t.accentColor} border-t-3 border-slate-900`} />

                                <div className="flex justify-between items-center mb-4 w-full">
                                    {/* Playful Floating Quote Bubble Container */}
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] transform group-hover:-rotate-12 transition-transform duration-300">
                                        <Quote className="w-5 h-5 fill-current text-amber-300 stroke-[2.5]" />
                                    </div>
                                    <StarRating count={t.rating} />
                                </div>

                                {/* Text Area */}
                                <p className="text-sm font-semibold text-slate-600 leading-relaxed flex-1 italic mb-6">
                                    "{t.text}"
                                </p>

                                {/* Specialized Program Badge */}
                                <div className="mb-5">
                                    <span className={`inline-block border-2 border-slate-900 bg-slate-50 text-slate-800 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0_0_#0f172a]`}>
                                        🌿 {t.program}
                                    </span>
                                </div>

                                {/* Author Signature Profile Block */}
                                <div className="flex items-center gap-3 pt-4 border-t-3 border-dashed border-slate-200 pb-2">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accentColor} border-3 border-slate-900 flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#0f172a] transform group-hover:scale-110 transition-transform duration-200`}>
                                        <span className="select-none filter drop-shadow-sm">{t.emoji}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 tracking-tight leading-tight flex items-center gap-1">
                                            {t.name}
                                            {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />}
                                        </p>
                                        <p className="text-xs font-bold text-slate-500 mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}