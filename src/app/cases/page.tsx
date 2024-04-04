'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import CaseList from './CaseList'
import Categories from './Categories'
import { items } from './data'

const Cases = () => {
  const [caseItems, setCaseItems] = useState(items)
  const [categories, setCategories] = useState(() => [
    'all',
    ...new Set(items.map((item) => item.category)),
  ])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const pathname = usePathname()

  const filterItems = (category: string) => {
    if (category === 'all') {
      setCaseItems(items)
    } else {
      const newItems = items.filter((item) => item.category === category)
      setCaseItems(newItems)
    }
    setSelectedCategory(category)
  }
  return (
    <>
      {pathname === '/cases' && (
        <PageBanner
          pageTitle="Case Study"
          currentPage={
            selectedCategory === 'all' ? 'All Projects' : selectedCategory
          }
        />
      )}
      <section className="case-study-wrapper section-padding">
        <div className="container">
          <div className="row mb-50 align-items-center">
            <div className="col-12 col-md-5">
              <div className="section-title">
                <p>our Recent project</p>
                <h1>
                  {selectedCategory === 'all'
                    ? 'All Projects'
                    : selectedCategory}
                </h1>
              </div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
          </div>

          <CaseList items={caseItems} />
        </div>
      </section>
    </>
  )
}
export default Cases
