import React from 'react'

interface Icon {
  src: string
  alt: string
}

interface ServiceItem {
  icon: Icon
  title: string
  description: string
}

const ServiceSection: React.FC = () => {
  const serviceItems: ServiceItem[] = [
    {
      icon: { src: '/img/icon/sicon1.png', alt: 'service 1' },
      title: 'Manage IT Services',
      description: 'Sed perspicias unde omnis natus error volute',
    },
    {
      icon: { src: '/img/icon/sicon2.png', alt: 'service 2' },
      title: 'Product Engineering',
      description: 'Sed perspicias unde omnis natus error volute',
    },
    {
      icon: { src: '/img/icon/sicon3.png', alt: 'service 3' },
      title: 'Web Development',
      description: 'Sed perspicias unde omnis natus error volute',
    },
    {
      icon: { src: '/img/icon/sicon4.png', alt: 'service 4' },
      title: 'Digital Solutions',
      description: 'Sed perspicias unde omnis natus error volute',
    },
  ]

  return (
    <section className="services-wrapper service-1 section-padding section-bg">
      <div className="container">
        <div className="row mb-4 mb-lg-5">
          <div className="col-12 col-lg-12">
            <div className="section-title text-white text-center">
              <p>Popular IT services</p>
              <h1>
                Our Professional Solutions <br />
                For IT Business
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          {serviceItems.map((item, index) => (
            <ServiceItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceItemProps {
  item: ServiceItem
}

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const { icon, title, description } = item

  return (
    <div className="col-md-6 col-xl-3 col-12">
      <div className="single-service-item">
        <div className="icon">
          <img src={icon.src} alt={icon.alt} />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="services-details.html">
          learn more <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default ServiceSection
