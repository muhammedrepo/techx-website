'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { funfactData } from '@/constants'
import { usePathname } from 'next/navigation'

const FunfactSection = () => {
  const pathname = usePathname()
  const [animated, setAnimated] = useState(false)
  const [visibleRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true)
    }
  }, [inView, animated])

  return (
    <section
      ref={visibleRef}
      className={`funfact-wrapper text-white ${
        pathname === '/about' ? 'bottom' : ''
      } ${pathname === '/team' ? 'no-bg' : ''} ${
        pathname === '/team/detail' ? 'no-bg' : ''
      }`}>
      <div className="container">
        <div
          className="funfact-content-grid bg-cover"
          style={{ backgroundImage: 'url(/img/funfact-line.png)' }}>
          {funfactData.map((funfact, index) => (
            <div className="single-funfact-item" key={index}>
              <div className="icon">
                <i className={funfact.icon}></i>
              </div>
              <h3>
                {animated ? (
                  <CountUp end={parseInt(funfact.number)} duration={4} />
                ) : (
                  funfact.number
                )}
              </h3>
              <p>{funfact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunfactSection
