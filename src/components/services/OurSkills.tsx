const OurSkills = () => {
  return (
    <section className="our-skill-wrapper section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="section-title">
              <p>Popular IT services</p>
              <h1>
                Our Professional Solutions <br />
                For IT Business
              </h1>
            </div>
            <p className="mt-20">
              Sed ut perspiciatis omnis natus error sit voluptatem accusan
              doloremque laudantium totam rem aperiam
            </p>

            <div className="single-skill-bar">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Product Engineering</h4>
                <span>95%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="single-skill-bar">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Digital Solutions</h4>
                <span>85%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="single-skill-bar">
              <div className="d-flex justify-content-between align-items-center">
                <h4>IT Consultancy</h4>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="single-skill-bar">
              <div className="d-flex justify-content-between align-items-center">
                <h4>UX/UI Strategy</h4>
                <span>70%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-xl-5 offset-xl-2">
            <div className="skill-banner mt-5 mt-lg-0">
              <img src="/img/skill_freatured_img.jpg" alt="" />
              <div
                className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                style={{ backgroundImage: `url('/img/skill_video_bg.jpg')` }}>
                <div className="video-play-btn">
                  <a
                    href="https://www.youtube.com/watch?v=E1xkXZs0cAQ"
                    className="popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OurSkills
