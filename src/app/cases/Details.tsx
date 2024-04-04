const Details = () => {
  return (
    <section className="case-study-post-wrapper section-padding">
      <div className="container">
        <div className="case-grid-photos">
          <div className="single-photo-grid">
            <img src="/img/case/p1.jpg" alt="" />
          </div>
          <div className="single-photo-grid">
            <img src="/img/case/p2.jpg" alt="" />
          </div>
          <div className="single-photo-grid">
            <img src="/img/case/p3.jpg" alt="" />
          </div>
          <div className="single-photo-grid">
            <img src="/img/case/p4.jpg" alt="" />
          </div>
        </div>
        <div className="case-contents-wrap">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="case-details-content mr-0 mr-lg-5">
                <h2>A Real Store For Digital Solutions</h2>
                <p>
                  wquis autem vel eum iure reprehenderit quiin voluptate velit
                  esse quam nihil molestiae onsequatur, vel illum solorem eum
                  fugiat quo voluptas nulla pariatur laudantium totam rem
                  aperquae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quiluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{' '}
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepte ursint occaecat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                <h3>How It Works Benefit For Projects</h3>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are beguiled and demoralized by the charms of
                  pleasure of the moment so blinded by desire that they cannot
                  foresee the pain and trouble that are bound to ensue and
                  equals.
                </p>

                <ul>
                  <li>Need To Know To Increase Mobile Checkout Conversions</li>
                  <li>Improve Your Design Process With Data-Based</li>
                  <li>
                    Analyzing Your Company’s Social Media Presence With IBM
                    Watson
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="case-info-card">
                <div
                  className="case-head bg-cover"
                  style={{ backgroundImage: `url('/img/case/case-head.png')` }}>
                  <h3>Project Details</h3>
                </div>
                <div className="project-data">
                  <div className="single-info-item">
                    <div className="left-data">Clients</div>
                    <div className="right-data">Robert C. Saavedra</div>
                  </div>
                  <div className="single-info-item">
                    <div className="left-data">Project</div>
                    <div className="right-data">IT Consulting</div>
                  </div>
                  <div className="single-info-item">
                    <div className="left-data">Service</div>
                    <div className="right-data">Digital Solutions</div>
                  </div>
                  <div className="single-info-item">
                    <div className="left-data">Category</div>
                    <div className="right-data">IT Services</div>
                  </div>
                  <div className="single-info-item">
                    <div className="left-data">Date</div>
                    <div className="right-data">30 Aug 2021</div>
                  </div>
                  <div className="single-info-item">
                    <div className="left-data">share</div>
                    <div className="right-data">
                      <div className="social-link">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Details
