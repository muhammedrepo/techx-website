'use client'
import PageBanner from '@/components/PageBanner'
import useSWR from 'swr'

const Dashboard = () => {
  return (
    <>
      <PageBanner pageTitle="Dashboard" currentPage="dashboard" />
      <div className="contact-form-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <h2>Let's Send Us a Message Below</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4">
              <div className="contact-info mr-20">
                <span>Blog Info</span>
                <h2>Blog Posts</h2>
                <p>Add, Delete, or Update your blog</p>
                <ul>
                  <li>
                    <div className="content d-flex gap-2">
                      <img src="" alt="blog image" />
                      <div>
                        <h3>Post title</h3>
                        <p>Post content</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                <form action="#" className="row conact-form">
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <label htmlFor="fname">Full Name</label>
                      <input type="text" id="fname" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="single-personal-info">
                      <label htmlFor="subject">Enter Message</label>
                      <textarea placeholder="Enter message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 text-center">
                    <button type="submit" className="theme-btn">
                      send message <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard
