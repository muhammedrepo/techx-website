import ClientBrands from '@/components/ClientBrands'
import AboutSection from '@/components/about/AboutSection'
import BlogSection from '@/components/blog/BlogSection'
import FunfactSection from '@/components/funfact/Funfact'
import PricingSection from '@/components/pricing/PricingSection'
import TeamSection from '@/components/team/TeamSection'
import TestimonialSection from '@/components/testimonial/TestimonialSection'
import Cases from './cases/page'
import ServiceSection from '@/components/features/ServiceSection'
import Hero from '@/components/hero/Hero'
import FeatureSection from '@/components/features/FeatureSection'

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <FunfactSection />
      <TeamSection />
      <Cases />
      <ClientBrands />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  )
}

export default Home
