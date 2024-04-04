'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '@/constants'

const TestimonialLists = () => {
  return (
    <section className="testimonial-wrapper pt-50 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <Swiper
              className="testimonial-carousel-2 owl-carousel owl-theme"
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              initialSlide={0} // Set the initial slide to 0 (first slide)
            >
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

export default TestimonialLists
