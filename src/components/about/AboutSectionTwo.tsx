const AboutSectionTwo = () => {
  return (
    <section className="about-us-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 pr-5">
            <div className="section-title mb-30">
              <p>About Company</p>
              <h1>
                Get’s IT Solutions For <br />
                Expert Consultants
              </h1>
            </div>

            <p className="pr-lg-5">
              Sed ut perspiciatis unde omnis natus error sit voluptatem accusa
              ntium doloremque laudantium totam.
            </p>

            <div className="about-icon-box style-2">
              <div className="icon">
                <i className="fal fa-users"></i>
              </div>
              <div className="content">
                <h3>Professinoal Consultants</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque
                </p>
              </div>
            </div>
            <div className="about-icon-box style-2">
              <div className="icon">
                <i className="fal fa-bullseye-arrow"></i>
              </div>
              <div className="content">
                <h3>Managed IT Solutions</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pl-lg-5 mt-5 mt-lg-0 col-12">
            <div className="about-right-img">
              <span className="dot-circle"></span>
              <div
                className="about-us-img"
                style={{
                  backgroundImage: `url('/img/home1/about-us.jpg')`,
                }}></div>
              <span className="triangle-bottom-right"></span>
            </div>
          </div>
        </div>

        <div className="row mpt-50 pt-100">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-speech-bubble"></i>
              </div>
              <div className="content">
                <h3>IT Consultancy</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-unlock"></i>
              </div>
              <div className="content">
                <h3>Cyber Security</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-mobile-app"></i>
              </div>
              <div className="content">
                <h3>Development</h3>
                <p>Faster & Smarter Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSectionTwo
