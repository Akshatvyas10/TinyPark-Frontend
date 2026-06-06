import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, MapPin, Phone, Mail, ArrowRight, Camera, Users, Play, MessageCircle } from 'lucide-react'
import { SCHOOL, NAV_LINKS } from '@/data/school'
import logoSrc from '@/assets/logo.png'

const programs = [
    { label: 'Montessori Education', path: '/montessori' },
    { label: 'UCMAS Program', path: '/ucmas' },
    { label: 'Admissions Hub', path: '/admissions' },
]

const socials = [
    { icon: Camera, label: 'Instagram', href: SCHOOL.social.instagram, color: 'group-hover:text-rose-400 group-hover:border-rose-400/50 group-hover:bg-rose-400/10' },
    { icon: Users, label: 'Facebook', href: SCHOOL.social.facebook, color: 'group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:bg-blue-400/10' },
    { icon: Play, label: 'YouTube', href: SCHOOL.social.youtube, color: 'group-hover:text-red-400 group-hover:border-red-400/50 group-hover:bg-red-400/10' },
    { icon: MessageCircle, label: 'Twitter', href: SCHOOL.social.twitter, color: 'group-hover:text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-400/10' },
]

export default function Footer() {
    return (
        <div className="px-2 pb-2 md:px-6 md:pb-6 pt-16 mt-auto">
            <footer className="relative bg-[#0b1121] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-800/50">
                
                {/* Ambient Decorative Glows */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                        
                        {/* --- 1. BRAND --- */}
                        <div className="flex flex-col gap-6 lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 group w-max">
                                <div className="bg-white/5 p-2 rounded-2xl backdrop-blur-md border border-white/10 transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={logoSrc}
                                        alt={`${SCHOOL.shortName} Logo`}
                                        className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="font-display font-black text-2xl tracking-tight text-white">
                                        {SCHOOL.shortName}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                                Nurturing confident explorers, joyful creators, and bright minds inside an immersive park built just for primary milestones.
                            </p>
                            
                            {/* Interactive Socials */}
                            <div className="flex flex-wrap gap-3 mt-2">
                                {socials.map(({ icon: Icon, label, href, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        whileHover={{ y: -4, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 ${color}`}
                                    >
                                        <Icon className="w-5 h-5 transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* --- 2. PROGRAMS --- */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold tracking-wider text-white uppercase font-display">
                                Programs
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {programs.map(({ label, path }) => (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className="group flex items-center text-slate-400 hover:text-white transition-all duration-300 text-sm font-semibold"
                                        >
                                            <div className="w-0 overflow-hidden opacity-0 group-hover:w-6 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-start text-primary">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                            <span>
                                                {label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* --- 3. QUICK LINKS --- */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold tracking-wider text-white uppercase font-display">
                                Quick Links
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {NAV_LINKS.slice(0, 5).map(({ label, path }) => (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            className="group flex items-center text-slate-400 hover:text-white transition-all duration-300 text-sm font-semibold"
                                        >
                                            <div className="w-0 overflow-hidden opacity-0 group-hover:w-6 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-start text-primary">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                            <span>
                                                {label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* --- 4. CONTACT --- */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold tracking-wider text-white uppercase font-display">
                                Contact Us
                            </h4>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-4 items-start group cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-slate-400">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed pt-1">
                                        {SCHOOL.address}
                                    </p>
                                </div>
                                <a href={`tel:${SCHOOL.phone}`} className="flex gap-4 items-center group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors text-slate-400">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                                        {SCHOOL.phone}
                                    </span>
                                </a>
                                <a href={`mailto:${SCHOOL.email}`} className="flex gap-4 items-center group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors text-slate-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-sky-400 transition-colors truncate">
                                        {SCHOOL.email}
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* --- BOTTOM BAR --- */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-slate-500 text-sm font-medium text-center md:text-left">
                            © {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
                        </p>
                        <p className="text-slate-400 text-sm font-bold flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-slate-200">
                            Crafted with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> for little explorers
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}