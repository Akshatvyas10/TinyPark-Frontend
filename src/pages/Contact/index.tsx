import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sun, Cloud, Compass, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SelectField } from '@/components/ui/select-field'
import { SCHOOL } from '@/data/school'

const contactInfo = [
    { icon: MapPin, title: 'Our Secret Base', lines: [SCHOOL.address], color: 'text-emerald-500', bg: 'bg-emerald-50 border-emerald-200' },
    { icon: Phone, title: 'Tin Can Phone', lines: [SCHOOL.phone, '+91 98765 43211'], color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200' },
    { icon: Mail, title: 'Carrier Pigeon Email', lines: [SCHOOL.email, 'admissions@tinyparkschool.com'], color: 'text-sky-500', bg: 'bg-sky-50 border-sky-200' },
    { icon: Clock, title: 'Adventure Hours', lines: ['Mon–Sat: 8:00 AM – 2:00 PM', 'Office: 8:00 AM – 5:00 PM'], color: 'text-purple-500', bg: 'bg-purple-50 border-purple-200' },
]

const ageOptions = [
    { value: 'under-1.5', label: 'Under 1.5 years' },
    { value: '1.5-3', label: '1.5 – 3 years' },
    { value: '3-6', label: '3 – 6 years' },
    { value: '6-9', label: '6 – 9 years' },
    { value: '9-12', label: '9 – 12 years' },
    { value: 'above-12', label: 'Above 12 years' },
]

const programOptions = [
    { value: 'montessori', label: 'Montessori Education' },
    { value: 'ucmas', label: 'UCMAS Program' },
    { value: 'general', label: 'General Enquiry' },
]

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', childAge: '', program: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
    }

    return (
        <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden select-none">
            {/* --- Hero: The Park Entrance --- */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-b from-sky-200 via-sky-50 to-[#fcfbf7] overflow-hidden">
                {/* Immersive Sky Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Rotating Sun */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                        className="absolute -top-10 -left-10 text-amber-400 opacity-90"
                    >
                        <Sun className="w-36 h-36 sm:w-48 sm:h-48 fill-current" />
                    </motion.div>

                    {/* Staggered Floating Clouds */}
                    <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-12 left-[15%] text-white opacity-80 hidden md:block">
                        <Cloud className="w-24 h-16 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ y: [-6, 10, -6] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }} className="absolute top-8 right-[20%] text-white opacity-90 hidden lg:block scale-110">
                        <Cloud className="w-32 h-20 fill-current drop-shadow-sm" />
                    </motion.div>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }} className="absolute top-28 right-[8%] text-white opacity-70 hidden md:block scale-75">
                        <Cloud className="w-20 h-12 fill-current drop-shadow-sm" />
                    </motion.div>
                </div>

                <div className="container-max section-px relative text-center z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}>
                        <Badge className="mb-5 bg-amber-400 hover:bg-amber-500 text-slate-900 border-2 border-slate-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-[2px_2px_0_0_#0f172a] transform -rotate-2 inline-flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 fill-current" /> Say Hello!
                        </Badge>
                        <h1 className="text-4xl sm:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight leading-none">
                            Step Into Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 drop-shadow-sm">Adventure Outpost</span>
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our play spaces, magic schedules, or basecamp fees? Drop us a line! Our park rangers will guide you along the trail.
                        </p>
                    </motion.div>
                </div>

                {/* Ground Grass Wave Transition Style */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#fcfbf7] rounded-t-[100%]" />
            </section>

            {/* --- Core Content Grid --- */}
            <section className="pb-24 pt-4 px-4 sm:px-6">
                <div className="container-max max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                        {/* Discovery Information Side */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="space-y-4">
                                {contactInfo.map(({ icon: Icon, title, lines, color, bg }, i) => (
                                    <motion.div
                                        key={title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1, type: 'spring', bounce: 0.2 }}
                                    >
                                        <Card className={`p-5 flex gap-5 ${bg} rounded-3xl border-4 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:scale-[1.02] transition-transform duration-300`}>
                                            <div className={`w-14 h-14 bg-white border-2 border-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#0f172a]`}>
                                                <Icon className={`w-7 h-7 ${color} stroke-[2.5]`} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-base font-black text-slate-900 mb-1">{title}</h4>
                                                {lines.map(line => (
                                                    <p key={line} className="text-sm font-semibold text-slate-700/90 leading-tight">{line}</p>
                                                ))}
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Adventure Map Block */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="h-full min-h-[220px]"
                            >
                                <Card className="overflow-hidden h-full rounded-3xl border-4 border-slate-900 shadow-[6px_6px_0_0_#0f172a] bg-gradient-to-br from-emerald-100 to-sky-100 p-6 flex flex-col items-center justify-center text-center relative group">
                                    <div className="absolute top-3 right-3 text-emerald-600 opacity-20 group-hover:rotate-12 transition-transform">
                                        <Compass className="w-16 h-16" />
                                    </div>
                                    <div className="w-16 h-16 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center shadow-[2px_2px_0_0_#0f172a] mb-3 animate-bounce">
                                        <MapPin className="w-8 h-8 text-rose-500 fill-rose-200" />
                                    </div>
                                    <p className="text-base font-black text-slate-900">X Marks the Spot!</p>
                                    <p className="text-xs font-bold text-slate-600 mt-1 max-w-[200px]">{SCHOOL.name}</p>

                                    <a
                                        href={SCHOOL.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 px-4 py-2 bg-white border-2 border-slate-900 text-xs font-black text-slate-900 rounded-xl shadow-[2px_2px_0_0_#0f172a] hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        Open Trail Map →
                                    </a>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Form Side - The Secret Treasure Map */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                            >
                                <Card className="p-6 sm:p-10 relative overflow-hidden bg-amber-50/40 border-4 border-dashed border-amber-400 rounded-3xl shadow-[8px_8px_0_0_#0f172a]">

                                    {submitted ? (
                                        <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                                            <motion.div
                                                animate={{ scale: [1, 1.15, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="w-24 h-24 bg-emerald-100 border-4 border-emerald-500 rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#0f172a]"
                                            >
                                                <CheckCircle2 className="w-12 h-12 text-emerald-600 stroke-[3]" />
                                            </motion.div>
                                            <h3 className="text-3xl font-black text-slate-900">Message Delivered!</h3>
                                            <p className="text-slate-700 font-medium max-w-sm">We've loaded your scroll onto our speediest carrier pigeon. Keep an eye out for our response within 24 hours!</p>
                                            <button
                                                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', childAge: '', program: '', message: '' }) }}
                                                className="mt-2 text-sm font-black text-emerald-600 hover:text-emerald-700 underline underline-offset-4 decoration-2"
                                            >
                                                Send another message
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                                                    📜 Secret Message Scroll
                                                </h3>
                                                <p className="text-sm font-semibold text-slate-500 mt-1">Fill this out to instantly alert the Park Keepers.</p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name" className="font-black text-slate-800 text-sm">Your Explorer Name <span className="text-rose-500">*</span></Label>
                                                        <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Parent / Guardian full name" className="h-12 rounded-2xl border-2 border-slate-900 bg-white px-4 font-medium focus-visible:ring-0 focus-visible:border-amber-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] text-slate-900" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone" className="font-black text-slate-800 text-sm">Tin Can Number <span className="text-rose-500">*</span></Label>
                                                        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="h-12 rounded-2xl border-2 border-slate-900 bg-white px-4 font-medium focus-visible:ring-0 focus-visible:border-amber-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] text-slate-900" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="font-black text-slate-800 text-sm">Pigeon Mail Address</Label>
                                                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="h-12 rounded-2xl border-2 border-slate-900 bg-white px-4 font-medium focus-visible:ring-0 focus-visible:border-amber-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] text-slate-900" />
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="childAge" className="font-black text-slate-800 text-sm">Little Explorer Age <span className="text-rose-500">*</span></Label>
                                                        <SelectField
                                                            id="childAge"
                                                            name="childAge"
                                                            value={form.childAge}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Select age group"
                                                            options={ageOptions}
                                                            className="h-12 rounded-2xl border-2 border-slate-900 bg-white font-medium shadow-[2px_2px_0_0_#0f172a]"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="program" className="font-black text-slate-800 text-sm">Adventure Route</Label>
                                                        <SelectField
                                                            id="program"
                                                            name="program"
                                                            value={form.program}
                                                            onChange={handleChange}
                                                            placeholder="Select track"
                                                            options={programOptions}
                                                            className="h-12 rounded-2xl border-2 border-slate-900 bg-white font-medium shadow-[2px_2px_0_0_#0f172a]"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="message" className="font-black text-slate-800 text-sm">Your Message Scroll</Label>
                                                    <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your child's superpowers, interests, or any questions..." className="rounded-2xl border-2 border-slate-900 bg-white p-4 font-medium focus-visible:ring-0 focus-visible:border-amber-400 text-slate-900" />
                                                </div>

                                                {/* Thick, Bouncy Shadcn Button Adaptation */}
                                                <Button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="w-full h-14 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-base border-4 border-slate-900 shadow-[0_5px_0_0_#0f172a] transition-all duration-150 active:translate-y-1 active:shadow-[0_1px_0_0_#0f172a] flex items-center justify-center gap-2 mt-4"
                                                >
                                                    {loading ? (
                                                        <><div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" /> Casting Teleportation Spell...</>
                                                    ) : (
                                                        <><Send className="w-5 h-5 fill-current" /> Blast Message Off!</>
                                                    )}
                                                </Button>

                                                <p className="text-xs font-bold text-slate-400 text-center">🛡️ Tiny Park Ranger Promise: Your coordinates are safe with us.</p>
                                            </form>
                                        </>
                                    )}
                                </Card>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}