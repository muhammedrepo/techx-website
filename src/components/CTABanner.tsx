import Link from 'next/link'

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div
        className="container-fluid bg-cover section-bg"
        style={{ backgroundImage: `url('/img/cta_bg1.png')` }}>
        <div className="cta-content">
          <div className="row align-items-center">
            <div className="col-xl-7 text-white col-12 text-center text-xl-left">
              <h1>
                Ready To Get Free Consulations For <br /> Any Kind Of It
                Solutions ?{' '}
              </h1>
            </div>
            <div className="col-xl-5 col-12 text-center text-xl-right">
              <Link href="contact.html" className="theme-btn mt-4 mt-xl-0">
                Get a quote <i className="fas fa-arrow-right"></i>
              </Link>
              <Link
                href="services-details.html"
                className="ml-10 mt-4 mt-xl-0 theme-btn minimal-btn">
                read more <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTABanner
