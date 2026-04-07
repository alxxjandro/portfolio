const entries = [
  {
    company: 'AutoZone BTSSC',
    period: 'Aug 2025 \u2014 Present',
    role: 'Frontend Developer Intern',
    desc: 'Maintaining, redesigning, and implementing scalable solutions for internal tools used daily.',
  },
  {
    company: 'Community Lab Alliance',
    period: 'Jun 2025 \u2014 Jul 2025',
    role: 'Frontend Developer Intern',
    desc: 'Migrated the main website from Zoho Sites to a modular Next.js app deployed on Vercel.',
  },
  {
    company: 'RedEmprende',
    period: 'Apr 2025 \u2014 Jun 2025',
    role: 'Frontend Developer Intern',
    desc: 'Built an interactive diagnostic test used by 50+ monthly users with real-time charts and auto-generated PDF reports.',
  },
]

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <span className="section-label">// EXPERIENCE · DEPTH &#8722;2 · SECTOR B</span>
      <h2 className="section-heading">Field Log</h2>
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
