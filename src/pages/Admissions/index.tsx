import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, FileText, Phone, Calendar, CheckCircle2, Send, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SelectField } from '@/components/ui/select-field'

const steps = [
    { step: '01', icon: Phone, title: 'Enquire', desc: 'Call us or fill out the enquiry form to learn about our programs and fee structure.', color: 'text-primary', bg: 'bg-primary-light' },
    { step: '02', icon: Calendar, title: 'Schedule a Visit', desc: 'Book a school tour to see our facilities, meet our teachers, and experience Tiny Park.', color: 'text-secondary', bg: 'bg-secondary-light' },
    { step: '03', icon: FileText, title: 'Submit Application', desc: "Complete the admission form with your child's details and submit the required documents.", color: 'text-accent', bg: 'bg-accent-light' },
    { step: '04', icon: GraduationCap, title: 'Welcome!', desc: 'Receive your admission confirmation and prepare your child for an exciting new journey.', color: 'text-violet', bg: 'bg-violet-light' },
]

const documents = ['Birth certificate of the child', 'Passport-size photographs (4)', 'Government ID card of parents/guardian', 'Previous school records (if applicable)', 'Medical/vaccination records', 'Address proof']

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

export default function AdmissionsPage() {
    const [form, setForm] = useState({ parentName: '', childName: '', phone: '', email: '', childAge: '', program: '', message: '' })
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
        <>
            {/* Hero */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-light/50 via-white to-violet-light/30 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
                <div className="container-max section-px relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Badge variant="primary" size="lg" className="mb-4">🎓 Admissions Open</Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-foreground mb-5 leading-tight">
                                Begin Your Child's <span className="text-gradient">Journey With Us</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Admissions are open for the 2024–25 academic year. Limited seats available. Give your child the best start in life at Tiny Park International School.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {['World-class education', 'Affordable fees', 'Safe environment', 'Indian values'].map(t => (
                                    <div key={t} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-semibold text-foreground">{t}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="lg"><a href="#enquiry-form" className="flex items-center gap-2">Apply Now <ArrowRight className="w-4 h-4" /></a></Button>
                                <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=85" alt="Happy students" className="rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="section-py bg-white">
                <div className="container-max section-px">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black font-display text-foreground mb-3">How to Apply — <span className="text-gradient">4 Simple Steps</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map(({ step, icon: Icon, title, desc, color, bg }, i) => (
                            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
                                <Card className="p-6 text-center h-full">
                                    <div className="relative inline-block mb-4">
                                        <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mx-auto`}>
                                            <Icon className={`w-7 h-7 ${color}`} />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-black">{step}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section id="enquiry-form" className="section-py bg-muted/30">
                <div className="container-max section-px">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                        {/* Trust sidebar */}
                        <div className="lg:col-span-2 flex flex-col gap-5">
                            <div>
                                <h2 className="text-2xl font-black font-display text-foreground mb-3">Why Enroll at Tiny Park?</h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">Join hundreds of families who have trusted Tiny Park International School with their child's education and development.</p>
                            </div>
                            {[
                                { emoji: '🌍', title: 'Global Curriculum', desc: 'World-class Montessori education' },
                                { emoji: '❤️', title: 'Indian Values', desc: 'Rooted in culture and tradition' },
                                { emoji: '💰', title: 'Affordable Fees', desc: 'Premium quality at accessible cost' },
                                { emoji: '🛡️', title: 'Safe Campus', desc: 'CCTV, trained staff, secure environment' },
                                { emoji: '👩‍🏫', title: 'Expert Teachers', desc: 'Certified, passionate educators' },
                            ].map(({ emoji, title, desc }) => (
                                <div key={title} className="flex items-center gap-3 bg-white rounded-2xl border border-border p-4 card-shadow">
                                    <span className="text-2xl">{emoji}</span>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">{title}</p>
                                        <p className="text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Documents */}
                            <Card className="p-5">
                                <h4 className="font-bold text-sm text-foreground mb-3">Documents Required</h4>
                                <div className="space-y-2">
                                    {documents.map(doc => (
                                        <div key={doc} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                            <span className="text-xs text-muted-foreground">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <Card className="p-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-violet to-rose" />

                                    {submitted ? (
                                        <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                                            <div className="w-20 h-20 bg-accent-light rounded-full flex items-center justify-center">
                                                <CheckCircle2 className="w-10 h-10 text-accent" />
                                            </div>
                                            <h3 className="text-2xl font-black font-display text-foreground">Application Received!</h3>
                                            <p className="text-muted-foreground max-w-sm">Thank you for your interest in Tiny Park International School. Our admissions team will contact you within 24 hours.</p>
                                            <button onClick={() => { setSubmitted(false); setForm({ parentName: '', childName: '', phone: '', email: '', childAge: '', program: '', message: '' }) }} className="text-sm font-bold text-primary hover:underline">
                                                Submit another application
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-black font-display text-foreground mb-6">Admission Enquiry Form</h3>
                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="parentName">Parent / Guardian Name <span className="text-rose">*</span></Label>
                                                        <Input id="parentName" name="parentName" value={form.parentName} onChange={handleChange} required placeholder="Your full name" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="childName">Child's Name <span className="text-rose">*</span></Label>
                                                        <Input id="childName" name="childName" value={form.childName} onChange={handleChange} required placeholder="Child's full name" />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="phone">Phone Number <span className="text-rose">*</span></Label>
                                                        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="email">Email Address</Label>
                                                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="childAge">Child's Age Group <span className="text-rose">*</span></Label>
                                                        <SelectField
                                                            id="childAge"
                                                            name="childAge"
                                                            value={form.childAge}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Select age group"
                                                            options={ageOptions}
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="program">Program of Interest</Label>
                                                        <SelectField
                                                            id="program"
                                                            name="program"
                                                            value={form.program}
                                                            onChange={handleChange}
                                                            placeholder="Select program"
                                                            options={programOptions}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="message">Additional Message</Label>
                                                    <Textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any specific questions or requirements..." />
                                                </div>
                                                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                                    {loading ? (
                                                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                                                    ) : (
                                                        <><Send className="w-4 h-4" /> Submit Application</>
                                                    )}
                                                </Button>
                                                <p className="text-xs text-muted-foreground text-center">We respect your privacy. Your information will never be shared with third parties.</p>
                                            </form>
                                        </>
                                    )}
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}