
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { NAV_LINKS, SCHOOL } from '@/data/school';
import logoUrl from '@/assets/logo.png';
import { useEffect, useState } from 'react';

export default function PremiumNavbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pb-2 pointer-events-none">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`pointer-events-auto w-full max-w-8xl transition-all duration-500 rounded-full border ${isScrolled
                    ? 'bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-white/50 py-2 px-4'
                    : 'bg-white/60 backdrop-blur-md shadow-sm border-white/30 py-3 px-4 md:px-6'
                    }`}
            >
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-3 group relative shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={logoUrl}
                                alt={`${SCHOOL.shortName} Logo`}
                                className="relative h-10 md:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden xl:flex items-center justify-center gap-2 flex-1 px-8">
                        {NAV_LINKS.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="relative group px-4 py-2"
                                >
                                    <span className={`relative z-10 text-sm font-bold tracking-wide font-display transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-600 group-hover:text-primary'
                                        }`}>
                                        {item.label}
                                    </span>

                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-primary/5 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out" />

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-4 shrink-0">
                        {/* Desktop Contact */}
                        <div className="hidden lg:flex items-center gap-3 mr-2 group">
                            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                <PhoneCall className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Contact Us</span>
                                <a href={`tel:${SCHOOL.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-black text-slate-700 group-hover:text-emerald-600 transition-colors">
                                    {SCHOOL.phone}
                                </a>
                            </div>
                        </div>

                        <Button
                            asChild
                            className="hidden md:flex relative group overflow-hidden rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black tracking-wide px-8 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all duration-300 border-none hover:-translate-y-0.5"
                        >
                            <Link to="/admissions">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Enroll Now
                                </span>
                            </Link>
                        </Button>

                        {/* MOBILE MENU TRIGGER */}
                        <div className="xl:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors h-11 w-11"
                                    >
                                        <Menu className="h-5 w-5" />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent
                                    side="right"
                                    className="w-full sm:w-[400px] bg-white/95 backdrop-blur-xl border-none p-0 flex flex-col shadow-2xl"
                                >
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                                    {/* Mobile Header */}
                                    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                        <img src={logoUrl} alt={SCHOOL.shortName} className="h-10 w-auto object-contain" />
                                    </div>

                                    {/* Mobile Links */}
                                    <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                                        {NAV_LINKS.map((item) => {
                                            const isActive = location.pathname === item.path;
                                            return (
                                                <SheetClose asChild key={item.path}>
                                                    <Link
                                                        to={item.path}
                                                        className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${isActive
                                                            ? 'bg-primary/5 text-primary'
                                                            : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                                                            }`}
                                                    >
                                                        <span className="font-display font-bold text-lg">{item.label}</span>
                                                        <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-primary' : 'text-slate-300 group-hover:text-slate-400 group-hover:translate-x-1'}`} />
                                                    </Link>
                                                </SheetClose>
                                            );
                                        })}
                                    </div>

                                    {/* Mobile Footer CTA */}
                                    <div className="p-6 bg-slate-50 border-t border-slate-100">
                                        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                                <PhoneCall className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Us Directly</span>
                                                <a href={`tel:${SCHOOL.phone.replace(/[^0-9+]/g, '')}`} className="font-black text-slate-700">
                                                    {SCHOOL.phone}
                                                </a>
                                            </div>
                                        </div>
                                        <SheetClose asChild>
                                            <Button
                                                asChild
                                                className="w-full rounded-2xl bg-primary hover:bg-primary text-primary-foreground font-black text-base py-6 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 border-none transition-all duration-300"
                                            >
                                                <Link to="/admissions">
                                                    <Sparkles className="w-4 h-4 mr-2" />
                                                    Enroll Now
                                                </Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                    </div>
                </div>
            </motion.header>
        </div>
    );
}