const ConsultationSection = () => {
  return (
    <section
      className="consultations-wrapper section-padding bg-contain pb-0"
      style={{ backgroundImage: "url('/img/circle-bg-2.png')" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5">
            <h1>
              Don’t Hesitate To <br /> Contact With Us, We’re Very Friendly{' '}
            </h1>
            <p className="mt-3">
              Sed ut perspiciatis unde omnis natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam que ipsa quae
              ab illo inventore veritatis.
            </p>

            <div className="call-consultation mt-30">
              <div className="icon">
                <i className="fal fa-phone-plus"></i>
              </div>
              <div className="content">
                <span>Phone Number</span>
                <h5>
                  <a href="tel:+012 (345) 789 66">+012 (345) 789 66</a>
                </h5>
              </div>
            </div>
            <div className="call-consultation mt-30">
              <div className="icon">
                <i className="fal fa-phone-plus"></i>
              </div>
              <div className="content">
                <span>Email Address</span>
                <h5>
                  <a href="#">info@supportexam.com</a>
                </h5>
              </div>
            </div>
            <div className="call-consultation mt-30">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <span>Office Address</span>
                <h5>256 Elizaberth Ave, 90025</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-6 offset-xl-1 mt-5 mt-lg-0">
            <div className="consultations-form text-white">
              <p>let’s talk with us</p>
              <h1>Free Consultations</h1>
              <form action="#">
                <input type="text" placeholder="Full Name Here" />
                <input type="email" placeholder="Email Address" />
                <textarea placeholder="Write Message"></textarea>
                <button className="theme-btn" type="submit">
                  Get Free Quote <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ConsultationSection
