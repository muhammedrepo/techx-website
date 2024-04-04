import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import Details from '@/app/cases/Details'

const SingleDetail = () => {
  return (
    <>
      <PageBanner pageTitle="Case Study Details" currentPage="case details" />
      <Details />
      <ClientBrands />
    </>
  )
}
export default SingleDetail
