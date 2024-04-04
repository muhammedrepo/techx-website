import Link from 'next/link'
import TeamMembersList from './TeamMembersList'

const TeamSection = () => {
  return (
    <section className="our-team-wrapper section-padding pb-0">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-12 col-md-6">
            <div className="section-title">
              <p>Exclusive Members</p>
              <h1>Meet Our Experience Team Members</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0 text-md-end">
            <Link href="/team" className="theme-btn off-white">
              View all Members <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        <TeamMembersList />
      </div>
    </section>
  )
}

export default TeamSection
