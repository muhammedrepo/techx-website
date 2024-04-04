const TopBar = () => {
  return (
    <div className="top-header d-none d-md-block">
      <div className="container-flud">
        <div className="row">
          <div className="col-md-7 pr-md-0 col-12">
            <div className="header-cta">
              <ul>
                <li>
                  <a href="mailto:support@gmail.com">
                    <i className="fal fa-envelope"></i> support@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8801700080702">
                    <i className="fal fa-phone"></i> +012 (345) 67 89
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="header-right-cta d-flex justify-content-end">
              <div className="social-profile mr-30">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              |
              <div className="lan-select ml-30">
                <form>
                  <select id="lan">
                    <option>English</option>
                    <option>China</option>
                    <option>Bangla</option>
                    <option>Hindi</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopBar
