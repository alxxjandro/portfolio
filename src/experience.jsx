const Experience = () => {
  const prevExperience = [
    {
      companyName: 'AutoZone BTSSC',
      roleName: 'Frontend Developer Intern',
      description:
        'Maintaining, redesigning, and implementing scalable solutions for internal tools used daily.',
      startDate: 'August 2025',
      endDate: 'Currently',
    },
    {
      companyName: 'Community Lab Alliance',
      roleName: 'Frontend Developer Intern',
      description:
        'Worked on migrating the main website from Zoho Sites to a modular Next.js app deployed on Vercel.',
      startDate: 'June 2025',
      endDate: 'July 2025',
    },
    {
      companyName: 'RedEmprende',
      roleName: 'Frontend Developer Intern',
      description:
        'Developed an interactive diagnostic test used by 50+ monthly users with real-time charts and auto-generated PDF reports.',
      startDate: 'April 2025',
      endDate: 'June 2025',
    },
  ]

  return (
    <section id="experience" className="experienceWrapper">
      <div className="techHeader">
        <h1 style={{ textAlign: 'center' }}>
          <span>Professional</span> Experience
        </h1>
      </div>
      <div className="timeline">
        {prevExperience.map((exp, index) => (
          <div key={index} className="timelineItem">
            <div className="timelineBullet" />
            <div className="timelineContent">
              <h3>
                {exp.roleName} <span>@ {exp.companyName}</span>
              </h3>
              <p className="timelineDate">
                {exp.startDate} — {exp.endDate}
              </p>
              <p className="timelineDescription">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
