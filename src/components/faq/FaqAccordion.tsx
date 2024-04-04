'use client'
import { accordionData } from '@/constants'
import React, { useState } from 'react'

interface AccordionProps {
  id: string
  question: string
  answer: string
  activeId: string | null
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>
}

interface TotalItemsProps {
  totalItemsToShow?: number
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  question,
  answer,
  activeId,
  setActiveId,
}) => {
  const isActive = activeId === id

  const toggleAccordion = () => {
    setActiveId(isActive ? null : id)
  }

  return (
    <div className="card">
      <div className="card-header" id={id}>
        <p className="mb-0 text-capitalize">
          <a
            className={`collapsed ${isActive ? 'open' : ''}`}
            onClick={toggleAccordion}
            aria-expanded={isActive ? 'true' : 'false'}>
            {question}
          </a>
        </p>
      </div>
      <div
        id={id}
        className={`collapse ${isActive ? 'show' : ''}`}
        data-parent="#accordion">
        <div className="card-body">{answer}</div>
      </div>
    </div>
  )
}

const FaqAccordion = ({ totalItemsToShow }: TotalItemsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const filteredAccordionData = accordionData.slice(0, totalItemsToShow)

  return (
    <div className="faq-content">
      <div className="faq-accordion">
        <div id="accordion" className="accordion">
          {filteredAccordionData.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqAccordion
