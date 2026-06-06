import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import EngagementModal from '@/components/EngagementModal'

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    const { pathname } = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 pt-16 lg:pt-18">
                {children}
            </main>
            <Footer />
            {/* Kept independent of navigation render hooks to persist timers */}
            <EngagementModal />
        </div>
    )
}
