import PageBanner from '@/components/PageBanner'
import Address from '@/components/contact/Address'

const ContactPage = () => {
  return (
    <>
      <PageBanner pageTitle="Contact Us" currentPage="contact" />
      <Address />
    </>
  )
}
export default ContactPage
