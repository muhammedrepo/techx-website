import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import AboutSectionTwo from '@/components/about/AboutSectionTwo'
import FaqSection from '@/components/faq/FaqSection'
import FeatureServices from '@/components/features/ServiceSection'
import FunfactSection from '@/components/funfact/Funfact'
import TeamSection from '@/components/team/TeamSection'
import TestimonialSection from '@/components/testimonial/TestimonialSection'

const AboutPage = () => {
  return (
    <>
      <PageBanner pageTitle="About Us" currentPage="about" />
      <AboutSectionTwo />
      <div className="section-padding">
        <FaqSection />
      </div>
      <div className="section-padding">
        <TeamSection />
      </div>
      <FunfactSection />
      <FeatureServices />
      <TestimonialSection />
      <ClientBrands />
    </>
  )
}
export default AboutPage
