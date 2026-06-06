import { createBrowserRouter } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import HomePage from '@/pages/Home'
import AboutPage from '@/pages/About'
import MontessoriPage from '@/pages/Montessori'
import UCMASPage from '@/pages/UCMAS'
import GalleryPage from '@/pages/Gallery'
import VideosPage from '@/pages/Videos'
import ContactPage from '@/pages/Contact'
import FAQPage from '@/pages/FAQ'
import AdmissionsPage from '@/pages/Admissions'

function Layout({ children }: { children: React.ReactNode }) {
    return <PageLayout>{children}</PageLayout>
}

export const router = createBrowserRouter([
    { path: '/', element: <Layout><HomePage /></Layout> },
    { path: '/about', element: <Layout><AboutPage /></Layout> },
    { path: '/montessori', element: <Layout><MontessoriPage /></Layout> },
    { path: '/ucmas', element: <Layout><UCMASPage /></Layout> },
    { path: '/gallery', element: <Layout><GalleryPage /></Layout> },
    { path: '/videos', element: <Layout><VideosPage /></Layout> },
    { path: '/contact', element: <Layout><ContactPage /></Layout> },
    { path: '/faq', element: <Layout><FAQPage /></Layout> },
    { path: '/admissions', element: <Layout><AdmissionsPage /></Layout> },
    { path: '*', element: <Layout><NotFound /></Layout> },
])

function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center section-px">
            <div className="text-8xl mb-6">🔍</div>
            <h1 className="text-4xl font-black font-display text-foreground mb-3">Page Not Found</h1>
            <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">
                Go Home
            </a>
        </div>
    )
}
