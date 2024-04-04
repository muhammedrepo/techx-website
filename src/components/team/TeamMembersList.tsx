import { teamMembers } from '@/constants'
import Link from 'next/link'

const TeamMembersList = () => {
  return (
    <div className="team-members-list row">
      {teamMembers.map((member, index) => (
        <div className="col-12 col-md-6 col-xl-3" key={index}>
          <div className={`single-team-member ${index === 1 ? 'active' : ''}`}>
            <div
              className="member-img bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="member-bio">
              <h4>
                <Link href={member.link}>{member.name}</Link>
              </h4>
              <p>{member.role}</p>
            </div>
            <div className="social-profile">
              {Object.entries(member.social).map(([platform, link]) => (
                <Link key={platform} href={link}>
                  <i className={`fab fa-${platform}`}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TeamMembersList
