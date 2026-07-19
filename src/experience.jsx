/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

const entries = [
  {
    company: 'Oracle',
    period: 'July 2026 - Present',
    role: 'Software Engineer Intern',
    desc: 'Focused on agentic development with Oracle Cloud Infrastructure, completing OCI training on agent frameworks and applying it to internal tooling.',
  },
  {
    company: 'AutoZone BTSSC',
    period: 'Aug 2025 - July 2026',
    role: 'Software Engineer Intern',
    desc: 'Migrated two enterprise apps from PCF to GCP and their databases from MySQL to PostgreSQL, cutting costs by 7%. Rebuilt an internal 360-degree evaluation platform that scaled to production use across three countries. Earning 2 awards in the process',
  },
  {
    company: 'RedEmprende',
    period: 'Apr 2025 - Jun 2025',
    role: 'Frontend Developer Intern',
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
