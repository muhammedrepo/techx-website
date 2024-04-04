import PageBanner from '@/components/PageBanner'
import Sidebar from '@/components/news/Sidebar'

const NewsDetails = async () => {
  return (
    <>
      <PageBanner pageTitle="News Details" currentPage="details" />

      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details border-wrap">
                <div className="single-blog-post post-details">
                  <div className="post-content">
                    <div className="post-cat">
                      <a href="#">business</a>
                      <a href="#">it</a>
                    </div>
                    <h2>Tittle</h2>
                    <div className="post-meta">
                      <span>
                        <i className="fal fa-eye"></i>232 Views
                      </span>
                      <span>
                        <i className="fal fa-comments"></i>35 Comments
                      </span>
                      <span>
                        <i className="fal fa-calendar-alt"></i>24th March 2019
                      </span>
                    </div>
                    <p>
                      Flyingfish Kafue pike cow shark California smoothtongue
                      golden loach temperate ocean-bass gulper eel. Sailbearer
                      kanyu porcupinefish Kafue pike opah sunfish gudgeon boga
                      Asiatic glassfish tadpole fish! Alewife, poacher
                      airbreathing catfish; zebra tilapia northern pearleye
                      naked-back knifefish pupfish dojo loach,
                    </p>
                    <p>
                      Asian carps sailback scorpionfish; dragon goby lemon sole
                      triplefin blenny hog sucker. Smelt sleeper shovelnose
                      sturgeon merluccid hake cow shark herring smelt
                      trout-perch barbeled houndshark. Shell-ear Asian carps
                      blackfish Port Jackson shark Atlantic saury. Sacramento
                      blackfish pricklefish, Atlantic cod
                    </p>
                    <p>
                      Northern anchovy–bass yellowtail barracuda zander
                      yellowfin grouper gurnard skipjack tuna shark burrowing
                      goby eulachon wobbegong. Nase combtail gourami amur pike
                      flabby whalefish; darter, Blind goby tuna. Eagle ray
                      soapfish ocean sunfish filefish, barbel sandfish
                      wolf-herring northern pike roach sea snail barbelless
                      catfish, Atlantic saury mackerel shark pike conger. Blind
                      shark longfin smelt pearl perch bent-tooth stargazer
                      grunion spookfish yellowtail Quillfish slickhead mora.
                      snake worm mackerel sockeye salmon banjo catfish toadfish
                      sauger four-eyed fish
                    </p>
                    <img src="/img/blog/p1.jpg" alt="" />
                    <h2>A cleansing hot shower or bath</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incidid unt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in repreh enderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <blockquote>
                      Viral dreamcatcher keytar typewriter, aest hetic offal
                      umami. Aesthetic polaroid pug pitchfork post-ironic.
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incidid unt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute.
                    </p>

                    <ul>
                      <li>We track every dollar</li>
                      <li>We’re an open book</li>
                      <li>100% goes to the field</li>
                      <li>Received the highest grades</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus
                    </p>
                    <img
                      className="alignleft"
                      src="/img/blog/post-inner.jpg"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus.
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap">
                  <div className="col-lg-6 col-12">
                    <h4>Releted Tags</h4>
                    <div className="tagcloud">
                      <a href="news-details.html">Technology</a>
                      <a href="news-details.html">it</a>
                      <a href="news-details.html">business</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 text-lg-right">
                    <h4>Social Share</h4>
                    <div className="social-share">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>

                <div className="related-post-wrap">
                  <h3>Releted Post</h3>

                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="single-related-post">
                        <div
                          className="featured-thumb bg-cover"
                          style={{
                            backgroundImage: `url('/img/blog/b1.jpg')`,
                          }}></div>
                        <div className="post-content">
                          <div className="post-date">
                            <span>
                              <i className="fal fa-calendar-alt"></i>27th March
                              2021
                            </span>
                          </div>
                          <h4>
                            <a href="news-details.html">
                              How To Provide Fresh Water In Nigeria
                            </a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctet ur
                            adipisicing elit, sed doing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="single-related-post">
                        <div
                          className="featured-thumb bg-cover"
                          style={{
                            backgroundImage: `url('/img/blog/b3.jpg')`,
                          }}></div>
                        <div className="post-content">
                          <div className="post-date">
                            <span>
                              <i className="fal fa-calendar-alt"></i>24th July
                              2020
                            </span>
                          </div>
                          <h4>
                            <a href="news-details.html">
                              How Does Malnutrition Affect Children.
                            </a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctet ur
                            adipisicing elit, sed doing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comments-section-wrap pt-40">
                  <div className="comments-heading">
                    <h3>03 Comments</h3>
                  </div>
                  <ul className="comments-item-list">
                    <li className="single-comment-item">
                      <div className="author-img">
                        <img src="/img/blog/author_img.jpg" alt="" />
                      </div>
                      <div className="author-info-comment">
                        <div className="info">
                          <h5>
                            <a href="#">Rosalina Kelian</a>
                          </h5>
                          <span>19th May 2018</span>
                          <a href="#" className="theme-btn minimal-btn">
                            <i className="fal fa-reply"></i>Reply
                          </a>
                        </div>
                        <div className="comment-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna. Ut enim ad minim veniam, quis nostrud
                            laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="single-comment-item">
                      <div className="author-img">
                        <img src="/img/blog/author2.jpg" alt="" />
                      </div>
                      <div className="author-info-comment">
                        <div className="info">
                          <h5>
                            <a href="#">Arista Williamson</a>
                          </h5>
                          <span>21th Feb 2020</span>
                          <a href="#" className="theme-btn minimal-btn">
                            <i className="fal fa-reply"></i>Reply
                          </a>
                        </div>
                        <div className="comment-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                        </div>
                      </div>

                      <ul className="replay-comment">
                        <li className="single-comment-item">
                          <div className="author-img">
                            <img src="/img/blog/author3.jpg" alt="" />
                          </div>
                          <div className="author-info-comment">
                            <div className="info">
                              <h5>
                                <a href="#">Salman Ahmed</a>
                              </h5>
                              <span>29th Jan 2021</span>
                              <a href="#" className="theme-btn minimal-btn">
                                <i className="fal fa-reply"></i>Reply
                              </a>
                            </div>
                            <div className="comment-text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam..
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="comment-form-wrap mt-40">
                  <h3>Post Comment</h3>

                  <form action="#" className="comment-form">
                    <div className="single-form-input">
                      <textarea placeholder="Type your comments...."></textarea>
                    </div>
                    <div className="single-form-input">
                      <input type="text" placeholder="Type your name...." />
                    </div>
                    <div className="single-form-input">
                      <input type="email" placeholder="Type your email...." />
                    </div>
                    <div className="single-form-input">
                      <input type="text" placeholder="Type your website...." />
                    </div>
                    <button className="submit-btn" type="submit">
                      <i className="fal fa-comments"></i>Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  )
}
export default NewsDetails
