import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import FeatureServices from '@/components/features/ServiceSection'
import FunfactSection from '@/components/funfact/Funfact'
import OurServices from '@/components/services/OurServices'
import OurSkills from '@/components/services/OurSkills'

const ServicesPage = () => {
  return (
    <>
      <PageBanner pageTitle="Services" currentPage="services" />
      <OurServices />
      <FeatureServices />
      <FunfactSection />
      <OurSkills />
      <ClientBrands />
    </>
  )
}
export default ServicesPage
