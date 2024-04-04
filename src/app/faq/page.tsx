import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import ConsultationSection from '@/components/faq/ConsultationSection'
import FaqAccordion from '@/components/faq/FaqAccordion'
import TestimonialLists from '@/components/testimonial/TestimonialLists'

const FaqPage = () => {
  return (
    <>
      <PageBanner pageTitle="Faq" currentPage="faq" />
      <div className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="wow fadeInUp">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>

      <ConsultationSection />
      <TestimonialLists />
      <ClientBrands />
    </>
  )
}
export default FaqPage
