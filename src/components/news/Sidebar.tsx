import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        <div className="single-sidebar-widget author-box-widegts">
          <div className="wid-title">
            <h3>About Me</h3>
          </div>
          <div className="author-info text-center">
            <div
              className="author-img"
              style={{
                backgroundImage: "url('/img/blog/author_img.jpg')",
              }}></div>
            <h4>Rosalina D. Willaimson</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className="social-profile">
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
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Search Objects</h3>
          </div>
          <div className="search_widget">
            <form action="#">
              <input type="text" placeholder="Search your keyword..." />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Popular Feeds</h3>
          </div>
          <div className="popular-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: "url('/img/blog/pp1.jpg')",
                }}></div>
              <div className="post-content">
                <h5>
                  <a href="news-details.html">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </a>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt"></i>24th March 2019
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: "url('/img/blog/pp2.jpg')",
                }}></div>
              <div className="post-content">
                <h5>
                  <a href="news-details.html">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </a>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt"></i>25th March 2019
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: "url('/img/blog/pp3.jpg')",
                }}></div>
              <div className="post-content">
                <h5>
                  <a href="news-details.html">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </a>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt"></i>26th March 2019
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: "url('/img/blog/pp4.jpg')",
                }}></div>
              <div className="post-content">
                <h5>
                  <a href="news-details.html">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </a>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt"></i>29th March 2019
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Categories</h3>
          </div>
          <div className="widget_categories">
            <ul>
              <li>
                <a href="news.html">
                  Consultant <span>23</span>
                </a>
              </li>
              <li>
                <a href="news.html">
                  Help <span>24</span>
                </a>
              </li>
              <li>
                <a href="news.html">
                  Education <span>11</span>
                </a>
              </li>
              <li>
                <a href="news.html">
                  Technology <span>05</span>
                </a>
              </li>
              <li>
                <a href="news.html">
                  business <span>06</span>
                </a>
              </li>
              <li>
                <a href="news.html">
                  Events <span>10</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Never Miss News</h3>
          </div>
          <div className="social-link">
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
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="single-sidebar-widget instagram-widget">
          <div className="wid-title">
            <h3>Instagram Feeds</h3>
          </div>
          <div className="instagram-gallery">
            <a
              href="/img/blog/ip1.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip1.jpg')" }}></a>
            <a
              href="/img/blog/ip2.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip2.jpg')" }}></a>
            <a
              href="/img/blog/ip3.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip3.jpg')" }}></a>
            <a
              href="/img/blog/ip4.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip4.jpg')" }}></a>
            <a
              href="/img/blog/ip5.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip5.jpg')" }}></a>
            <a
              href="/img/blog/ip7.jpg"
              className="single-photo-item bg-cover popup-gallery"
              style={{ backgroundImage: "url('/img/blog/ip7.jpg')" }}></a>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h3>Popular Tags</h3>
          </div>
          <div className="tagcloud">
            <a href="#">event</a>
            <a href="#">help</a>
            <a href="#">ux</a>
            <a href="#">food</a>
            <a href="#">ui</a>
            <a href="#">water</a>
            <a href="#">charity</a>
            <a href="#">donate</a>
          </div>
        </div>
        <div className="sidebar-ad-widget">
          <div className="ad-wraper">
            <a href="#" target="_blank">
              <img src="/img/blog/blog-ad.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
