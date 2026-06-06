import HeroSlider from './HeroSlider'
import WelcomeSection from './WelcomeSection'
import ProgramCards from './ProgramCards'
import WhyUsSection from './WhyUsSection'
import GalleryPreview from './GalleryPreview'
import VideoPreview from './VideoPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FaqPreview from './FaqPreview'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <WelcomeSection />
            <ProgramCards />
            <WhyUsSection />
            <GalleryPreview />
            <VideoPreview />
            <TestimonialsSection />
            <FaqPreview />
            <CtaBanner />
        </>
    )
}
