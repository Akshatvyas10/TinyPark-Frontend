import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Award, CheckCircle2, ArrowRight, Lightbulb, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/sections/SectionHeader'
import CtaBanner from '@/components/sections/CtaBanner'

const modules = [
    { icon: BookOpen, title: 'Child Development & Psychology', desc: 'Understanding how children think, learn, and grow at each developmental stage.', color: 'text-primary', bg: 'bg-primary-light' },
    { icon: Lightbulb, title: 'Activity-Based Learning', desc: 'Designing engaging, hands-on lessons that make learning fun and effective.', color: 'text-secondary', bg: 'bg-secondary-light' },
    { icon: Users, title: 'Classroom Management', desc: 'Creating a positive, structured environment where every child can thrive.', color: 'text-accent', bg: 'bg-accent-light' },
    { icon: Heart, title: 'Emotional Intelligence', desc: 'Building empathy, patience, and emotional awareness in both teachers and students.', color: 'text-rose', bg: 'bg-rose-light' },
    { icon: Award, title: 'Assessment & Evaluation', desc: 'Modern, holistic methods to assess child progress beyond traditional testing.', color: 'text-violet', bg: 'bg-violet-light' },
    { icon: Star, title: 'Montessori Methodology', desc: 'Hands-on training in Montessori principles, materials, and classroom setup.', color: 'text-primary', bg: 'bg-primary-light' },
]

const outcomes = [
    'Certified Montessori educator credential',
    'Practical classroom experience',
    'Child-friendly teaching techniques',
    'Curriculum planning & design skills',
    'Parent communication strategies',
    'Special needs awareness & inclusion',
    'Digital tools for modern classrooms',
    'Ongoing mentorship & support',
]

const whoShouldJoin = [
    { emoji: '👩‍🎓', title: 'Fresh Graduates', desc: 'Education or related field graduates looking to start their teaching career' },
    { emoji: '👩‍🏫', title: 'Practicing Teachers', desc: 'Educators seeking to upgrade their skills and teaching methodology' },
    { emoji: '👩‍👧', title: 'Parents & Caregivers', desc: 'Parents who want to better understand child development and learning' },
    { emoji: '🏫', title: 'School Owners', desc: 'Entrepreneurs looking to start or improve their preschool or kindergarten' },
]

export default function TeacherTrainingPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-br from-accent-light/50 via-white to-primary-light/30 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
                <div className="container-max section-px relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Badge variant="accent" size="lg" className="mb-4">👩‍🏫 Teacher Training</Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-foreground mb-5 leading-tight">
                                Empowering Educators to <span className="text-gradient-green">Inspire Children</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Great teachers create great futures. Our comprehensive teacher training program equips educators with the skills, knowledge, and confidence to make a lasting difference in every child's life.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="lg" variant="accent"><Link to="/admissions" className="flex items-center gap-2">Apply for Training <ArrowRight className="w-4 h-4" /></Link></Button>
                                <Button asChild variant="outline" size="lg"><Link to="/contact">Learn More</Link></Button>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
                            <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=85" alt="Teacher training" className="rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="section-py bg-white">
                <div className="container-max section-px">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Card className="p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-primary" />
                                <div className="text-center mb-6">
                                    <div className="text-7xl mb-4">👩‍🏫</div>
                                    <h3 className="text-xl font-black font-display text-foreground">Professional Development Program</h3>
                                    <p className="text-muted-foreground text-sm mt-1">Transforming good teachers into great educators</p>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Program Duration', value: '3–6 Months', icon: '📅' },
                                        { label: 'Mode', value: 'In-Person & Practical', icon: '🏫' },
                                        { label: 'Certification', value: 'Recognized Certificate', icon: '🏆' },
                                        { label: 'Batch Size', value: 'Small Groups (15–20)', icon: '👥' },
                                    ].map(({ label, value, icon }) => (
                                        <div key={label} className="flex items-center justify-between bg-muted rounded-xl px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{icon}</span>
                                                <span className="text-sm font-medium text-muted-foreground">{label}</span>
                                            </div>
                                            <span className="text-sm font-bold text-foreground">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-5">
                            <h2 className="text-3xl font-black font-display text-foreground">Quality Teaching Starts with <span className="text-gradient">Quality Training</span></h2>
                            <p className="text-muted-foreground leading-relaxed">At Tiny Park International School, we believe that the quality of education is directly linked to the quality of teachers. Our training program creates educators who are not just knowledgeable, but truly passionate about child development.</p>
                            <p className="text-muted-foreground leading-relaxed">Our curriculum combines theoretical foundations with extensive practical experience, ensuring that every trained educator is ready to create a positive, engaging, and effective learning environment from day one.</p>
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-4">What You'll Gain</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {outcomes.map(o => (
                                        <div key={o} className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                            <span className="text-sm font-medium text-foreground">{o}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules */}
            <section className="section-py bg-muted/30">
                <div className="container-max section-px">
                    <SectionHeader badge="Training Modules" badgeVariant="accent" badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
                        title={<>What You'll <span className="text-gradient-green">Learn</span></>}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {modules.map(({ icon: Icon, title, desc, color, bg }, i) => (
                            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} whileHover={{ y: -4 }}>
                                <Card className="p-6 h-full group hover:card-shadow-hover transition-all duration-300">
                                    <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                        <Icon className={`w-6 h-6 ${color}`} />
                                    </div>
                                    <h4 className="text-base font-bold text-foreground mb-2">{title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Should Join */}
            <section className="section-py bg-white">
                <div className="container-max section-px">
                    <SectionHeader badge="Who Should Join" badgeVariant="primary" title={<>Is This Program <span className="text-gradient">Right for You?</span></>} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {whoShouldJoin.map(({ emoji, title, desc }, i) => (
                            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }} whileHover={{ y: -4 }}>
                                <Card className="p-6 text-center border-accent/20 hover:card-shadow-hover transition-all duration-300 h-full">
                                    <div className="text-4xl mb-3">{emoji}</div>
                                    <h4 className="text-base font-bold text-foreground mb-2">{title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner title="Start Your Teaching Journey" subtitle="Join our next teacher training batch and transform your approach to education. Limited seats available." primaryLabel="Apply Now" />
        </>
    )
}
