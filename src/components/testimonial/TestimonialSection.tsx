'use client'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { testimonials } from '@/constants'

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper section-padding">
      <div
        className="testimonial-bg bg-cover"
        style={{ backgroundImage: `url('/img/testi_bg.jpg')` }}></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-4 col-xl-5 offset-xl-7">
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="testimonial-carousel-active owl-carousel owl-theme">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className={`single-testimonial ${
                    index === 0 ? 'active' : '' // Add 'active' class to the first slide
                  }`}>
                  <div className="icon">
                    <i className="flaticon-right-quote"></i>
                  </div>
                  <h2>{testimonial.quote}</h2>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                      }}></div>
                    <div className="client-bio">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TestimonialSection
