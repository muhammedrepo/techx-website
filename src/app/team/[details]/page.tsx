import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import BlogSection from '@/components/blog/BlogSection'
import FunfactSection from '@/components/funfact/Funfact'

const TeamDetails = () => {
  return (
    <>
      <PageBanner pageTitle="Team Member" currentPage="member" />
      <section className="team-member-wrapper section-padding">
        <div className="container">
          <div className="member-details-wrap">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-12 col-lg-6">
                <div className="member-card mr-0 mr-xl-3">
                  <div
                    className="member-photo bg-cover"
                    style={{
                      backgroundImage: `url('/img/team/team7.jpg')`,
                    }}></div>
                  <div className="member-info">
                    <h4>Wallace S. Camacho</h4>
                    <p>Business Manager</p>
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

              <div className="col-xl-4 mt-5 col-lg-6 col-12 mt-lg-0">
                <div className="member-about">
                  <div className="sec-title">
                    <h2>Abuot Me</h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis natus sit voluptatem accusa
                    ntium doloremque ntium totam rem aperiameaqueipsa quae
                    inventore veritatis quasi architect beatae vitae dicta sunt
                    explicabo.
                  </p>
                  <p>
                    Doloremque lauda ntium totam reameaq ueipsa quae inventore
                    veritatis
                  </p>

                  <div className="sec-title mt-4">
                    <h2>Contact Me</h2>
                  </div>

                  <div className="member-contact-info mt-4">
                    <div className="single-contact-info d-flex">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-info">
                        <p>256 Elizaberth Ave, 90025</p>
                      </div>
                    </div>
                    <div className="single-contact-info d-flex">
                      <div className="icon">
                        <i className="fas fa-envelope-open-text"></i>
                      </div>
                      <div className="contact-info">
                        <p>info@supportexam.com</p>
                      </div>
                    </div>
                    <div className="single-contact-info d-flex">
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-info">
                        <p>+012 (345) 678 99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 mt-5 col-lg-12 col-12 mt-xl-0">
                <div className="member-skills">
                  <div className="sec-title">
                    <h2>Skills</h2>
                  </div>
                  <p>
                    Accusa ntium doloremque ntium totam rem aperiameaqueipsa
                    quae inventore veritatis quasi architect beatae
                  </p>

                  <div className="single-skill-bar">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Product Engineering</h4>
                      <span>95%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="single-skill-bar">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Digital Solutions</h4>
                      <span>85%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="single-skill-bar">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>IT Consultancy</h4>
                      <span>90%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="single-skill-bar">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>UX/UI Strategy</h4>
                      <span>70%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FunfactSection />
      <BlogSection />
      <ClientBrands />
    </>
  )
}
export default TeamDetails
