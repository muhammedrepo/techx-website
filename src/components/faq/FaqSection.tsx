import FaqAccordion from './FaqAccordion'

const FaqSection = () => {
  return (
    <section className="faq-section section-padding">
      <div
        className="faq-bg bg-cover d-none d-lg-block"
        style={{ backgroundImage: `url('/img/faq_home_2.jpg')` }}></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7">
            <div className="col-12 col-lg-12 mb-40">
              <div className="section-title">
                <p>Why choose us</p>
                <h1>
                  Innovating Solutions <br /> Digital Mindset
                </h1>
              </div>
            </div>

            <FaqAccordion totalItemsToShow={4} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default FaqSection
