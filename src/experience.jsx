const entries = [
  {
    company: 'AutoZone BTSSC',
    role: 'Frontend Developer Intern',
    description:
      'Maintaining, redesigning, and implementing scalable solutions for internal tools used daily.',
    start: 'Aug 2025',
    end: 'Present',
  },
  {
    company: 'Community Lab Alliance',
    role: 'Frontend Developer Intern',
    description:
      'Migrated the main website from Zoho Sites to a modular Next.js app deployed on Vercel.',
    start: 'Jun 2025',
    end: 'Jul 2025',
  },
  {
    company: 'RedEmprende',
    role: 'Frontend Developer Intern',
    description:
      'Built an interactive diagnostic test used by 50+ monthly users with real-time charts and auto-generated PDF reports.',
    start: 'Apr 2025',
    end: 'Jun 2025',
  },
]

const Experience = () => (
  <section className="deep-section">
    <div className="deep-light" aria-hidden="true" />

    <div className="deep-inner">
      <h2 className="deep-heading">Field Log</h2>
      <p className="deep-subtitle">// EXPERIENCE · DEPTH −2 · SECTOR B</p>

      <div className="wall-timeline">
        {entries.map((entry, i) => (
          <div key={i} className="wall-entry">
            <p className="entry-date">{entry.start} — {entry.end}</p>
            <p className="entry-role">{entry.role}</p>
            <p className="entry-company">@ {entry.company}</p>
            <p className="entry-desc">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
