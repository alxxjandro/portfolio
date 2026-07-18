/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

const entries = [
  {
    company: 'AutoZone BTSSC',
    period: 'Aug 2025 - Present',
    role: 'Software Engineer Intern',
    desc: 'Maintaining and redesigning internal tools used daily, migrating services to Google Cloud (Cloud Run, Cloud SQL) and standing up CI/CD pipelines for reliable releases.',
  },
  {
    company: 'Community Lab Alliance',
    period: 'Jun 2025 - Jul 2025',
    role: 'Software Developer Intern',
    desc: 'Migrated the main website from Zoho Sites to a modular Next.js application deployed on Vercel.',
  },
  {
    company: 'RedEmprende',
    period: 'Apr 2025 - Jun 2025',
    role: 'Software Developer Intern',
    desc: 'Built an interactive diagnostic tool used by 50+ monthly users, with real-time charts and auto-generated PDF reports.',
  },
]

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <span className="section-label">// Experience</span>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-list">
        {entries.map(({ company, period, role, desc }) => (
          <div key={company} className="experience-entry">
            <div className="exp-left">
              <p className="exp-company">{company}</p>
              <p className="exp-period">{period}</p>
            </div>
            <div className="exp-right">
              <p className="exp-role">{role}</p>
              <p className="exp-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
