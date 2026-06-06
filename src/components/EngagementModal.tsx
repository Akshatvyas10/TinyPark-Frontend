import { useEffect, useState } from 'react'
import { Phone, MessageSquare, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
    Dialog,
    DialogPortal,
    DialogContent,
} from "@/components/ui/dialog"

const STORAGE_KEY = 'tinypark_engagement_shown'

export default function EngagementModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        // if (!mounted) return

        // Check if modal has already been shown in this session
        // if (sessionStorage.getItem(STORAGE_KEY) === '1') return

        // Set 10-second timer on page mount/reload
        const timer = setTimeout(() => {
            // if (sessionStorage.getItem(STORAGE_KEY) !== '1') {
            setIsOpen(true)
            // }
        }, 10000)

        return () => clearTimeout(timer)
    }, [])

    const handleClose = (openState: boolean) => {
        setIsOpen(openState)
        if (!openState) {
            sessionStorage.setItem(STORAGE_KEY, '1')
        }
    }

    const handleEnquire = () => {
        handleClose(false)
        navigate('/contact')
    }

    const handleCall = () => {
        handleClose(false)
        window.location.href = 'tel:+919876543210'
    }

    if (!mounted) return null

    return (
        <Dialog open={isOpen} onOpenChange={handleClose} modal={false}>
            <DialogPortal>
                <DialogContent
                    showOverlay={false}
                    showCloseButton={true}
                    className="w-full max-w-[calc(100%-2rem)] sm:max-w-md p-6 rounded-3xl border-4 border-slate-900 bg-white shadow-[8px_8px_0_0_#0f172a] overflow-hidden gap-0 pointer-events-auto fixed duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-48 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                >
                    {/* Decorative background accent blobs */}
                    <div className="absolute -left-16 -top-16 -z-10 h-36 w-36 rounded-full bg-amber-200/40 blur-xl" aria-hidden="true" />
                    <div className="absolute -right-16 -bottom-16 -z-10 h-36 w-36 rounded-full bg-sky-200/40 blur-xl" aria-hidden="true" />

                    {/* Top Celestial Style Header Context */}
                    <div className="flex flex-col items-center justify-center gap-3 pt-2">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-500 shadow-[3px_3px_0_0_#fbbf24] transition-all duration-200 hover:scale-110 hover:rotate-4 cursor-pointer">
                            <Sparkles size={26} className="animate-pulse fill-amber-100" />
                        </div>

                        <div className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    fill="currentColor"
                                    className="animate-bounce"
                                    style={{ animationDelay: `${i * 150}ms`, animationDuration: '2s' }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Primary Content Grid Typography Section */}
                    <div className="mt-4 text-center">
                        <p className="text-xs font-black tracking-wider uppercase text-amber-500">
                            🌟 Welcome to TinyPark!
                        </p>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-800 leading-tight tracking-tight">
                            Ready to Start Your<br />
                            <span className="inline-block mt-1 px-3 py-1 bg-sky-50 text-sky-500 rounded-xl border-2 border-sky-400 shadow-[3px_3px_0_0_#38bdf8]">
                                Child's Journey?
                            </span>
                        </h2>
                        <p className="mt-4 text-sm text-slate-600 font-bold leading-relaxed max-w-sm mx-auto">
                            Give your little one the best early learning experience.
                            Our experts are here to guide you every step of the way.
                        </p>
                    </div>

                    {/* Interactive Action CTA Matrix Structure */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                        <button
                            onClick={handleEnquire}
                            className="flex-1 relative overflow-hidden flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-black text-white border-b-4 border-slate-950 transition-all active:scale-95 group hover:bg-slate-800"
                        >
                            <MessageSquare size={16} className="stroke-[2.5]" />
                            <span>Enquire Now</span>
                        </button>

                        <button
                            onClick={handleCall}
                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-black text-sky-500 border-2 border-sky-400 shadow-[3px_3px_0_0_#38bdf8] transition-all active:scale-95 hover:bg-sky-50/50"
                        >
                            <Phone size={16} className="stroke-[2.5]" />
                            <span>Call Us</span>
                        </button>
                    </div>

                    {/* Structural Footer Footnote Notation */}
                    <p className="mt-4 text-center text-[11px] font-black tracking-wide text-slate-400">
                        ✨ Free consultation • No commitment required
                    </p>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    )
}