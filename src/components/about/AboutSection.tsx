const AboutSection = () => {
  return (
    <section className="about-us-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 pr-lg-5 order-2 order-lg-1 mt-5 mt-lg-0">
            <div className="section-title mb-30">
              <p>About Company</p>
              <h1>
                Get’s IT Solutions For <br />
                Expert Consultants
              </h1>
            </div>

            <p className="pr-5">
              Sed ut perspiciatis unde omnis natus error sit voluptatem accusa
              ntium doloremque laudantium totam rem aperiamea queipsa quae
              abillo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>

            <div className="about-icon-box">
              <div className="icon">
                <i className="fal fa-users"></i>
              </div>
              <div className="content">
                <h3>Professinoal Consultants</h3>
                <p>
                  Quis autem vel eum iure reprehenderit quin voluptate velit
                  esse quam
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pl-lg-5 col-12 order-1 order-lg-2">
            <span className="dot-circle"></span>
            <div
              className="about-us-img"
              style={{
                backgroundImage: `url(${'/img/home1/about-us.jpg'})`,
              }}></div>
            <span className="triangle-bottom-right"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
