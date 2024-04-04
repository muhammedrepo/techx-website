import ClientBrands from '@/components/ClientBrands'
import PageBanner from '@/components/PageBanner'
import FunfactSection from '@/components/funfact/Funfact'
import OurSkills from '@/components/services/OurSkills'
import TeamMembersList from '@/components/team/TeamMembersList'

const TeamPage = () => {
  return (
    <>
      <PageBanner pageTitle="Our Team" currentPage="team" />
      <section className="our-team-wrapper section-padding">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-12 text-center col-md-8 offset-md-2">
              <div className="section-title">
                <p>Exclusive Members</p>
                <h1>Meet Our Experience Team</h1>
              </div>
            </div>
          </div>

          <TeamMembersList />
        </div>
      </section>
      <FunfactSection />
      <OurSkills />
      <ClientBrands />
    </>
  )
}
export default TeamPage
