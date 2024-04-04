import React from 'react'

const pricingPlans = [
  {
    title: 'Basic Plan',
    description: 'Quis autem vel eum iure reprehes derit quin voluptate velite',
    price: '25.63',
    features: ['IT Consulting', 'Product Engineering', 'Digital Solutions'],
  },
  {
    title: 'Regular Plan',
    description: 'Quis autem vel eum iure reprehes derit quin voluptate velite',
    price: '54.99',
    features: ['IT Consulting', 'Product Engineering', 'Digital Solutions'],
    active: true,
  },
  {
    title: 'Premium Plan',
    description: 'Quis autem vel eum iure reprehes derit quin voluptate velite',
    price: '95.75',
    features: ['IT Consulting', 'Product Engineering', 'Digital Solutions'],
  },
]

const PricingSection = () => {
  return (
    <section className="our-pricing-wrapper section-bg section-padding">
      <div className="container">
        <div className="row mb-35">
          <div className="col-12">
            <div className="section-title text-white text-center">
              <p>Our Pricing Plan</p>
              <h1>Awesome Pricing Plan</h1>
            </div>
          </div>
        </div>

        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              className={`col-xl-4 col-md-6${plan.active ? ' active' : ''}`}
              key={index}>
              <div className={`single-pricing-plan ${index === 1 && 'active'}`}>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="pricing">
                  <span>$</span>
                  <h2>{plan.price}</h2>
                  <p>monthly</p>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="buy-btn">
                  <a href="contact.html" className="theme-btn">
                    Get started <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
