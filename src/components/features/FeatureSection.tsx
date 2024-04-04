import { featuresData } from '@/constants'

const FeatureSection = () => {
  return (
    <section className="features-wrapper features-1 section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <p>How can we help you</p>
              <h1>We Help Your IT Business</h1>
            </div>
          </div>
        </div>

        <div className="row mt-3 mt-lg-5">
          <div className="col-xl-4 d-none d-xl-block">
            <div
              className="features-banner mt-30 bg-cover"
              style={{
                backgroundImage: `url(${'/img/home1/feature_img.jpg'})`,
              }}></div>
          </div>
          <div className="col-xl-8 col-12">
            <div className="row">
              {featuresData.map((feature, index) => (
                <div className="col-md-6 col-12" key={index}>
                  <div className="single-features-item">
                    <div className="icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12">
                <div
                  className="feature-cta bg-cover bg-center text-white"
                  style={{ backgroundImage: `url('/img/home1/wave.png')` }}>
                  <p>
                    Sed perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    quae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeatureSection
