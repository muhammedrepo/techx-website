import Link from 'next/link'

type PageBannerProps = {
  pageTitle: String
  currentPage: String
}

const PageBanner = ({ pageTitle, currentPage }: PageBannerProps) => {
  return (
    <section
      className="page-banner-wrap bg-cover"
      style={{ backgroundImage: `url('/img/page-banner.jpg')` }}>
      <div className="banner-text">{currentPage}</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <div className="page-heading text-white">
              <div className="page-title">
                <h1>{pageTitle}</h1>
              </div>
            </div>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {currentPage}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageBanner
