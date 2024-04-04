import Link from 'next/link'

const Hero = () => {
  return (
    <section className="hero-slide-wrapper hero-1">
      <div className="hero-slider-active">
        <div className="single-slide bg-cover">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-8 col-lg-10">
                <div className="hero-contents">
                  <h2>The Software</h2>
                  <h1 className="fs-lg">Engineer's Journey</h1>
                  <p>
                    Welcome to The Software Engineer's Journey, a website
                    dedicated to the personal experiences of software engineers.
                  </p>
                  <Link href="/services" className="theme-btn">
                    Service we provide <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link href="/about" className="theme-btn minimal-btn">
                    learn more <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide-top-img d-none d-lg-block bg-overlay bg-cover"
            style={{ backgroundImage: `url(${'/img/home1.jpg'})` }}></div>
          <div
            className="slide-bottom-img d-none d-xl-block bg-overlay bg-cover"
            style={{ backgroundImage: `url(${'/img/home1/hero2.jpg'})` }}></div>
        </div>
      </div>
    </section>
  )
}
export default Hero
