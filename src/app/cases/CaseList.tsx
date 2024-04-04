import Link from 'next/link'

interface CaseItem {
  id: number
  image: string
  title: string
  description: string
}

interface CaseListProps {
  items: CaseItem[]
}

const CaseList = ({ items }: CaseListProps) => {
  return (
    <div className="row grid">
      {items.map((caseItem) => (
        <div key={caseItem.id} className="col-xl-4 col-md-6 grid-caseItem">
          <div className="single-case-study">
            <div
              className="features-thumb bg-cover"
              style={{
                backgroundImage: `url('${caseItem.image}')`,
              }}></div>
            <div className="content">
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              <Link href="/cases/details">
                Read more <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CaseList
