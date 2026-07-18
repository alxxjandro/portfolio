/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

const groups = [
  {
    label: 'Frontend',
    items: ['Typescript', 'React', 'Next', 'Vite', 'Zustand'],
  },
  {
    label: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Fast API'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'OCI', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'T-SQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'Linux / Bash', 'Figma'],
  },
]

const TechStack = () => (
  <section id="tech" className="tech">
    <div className="container">
      <span className="section-label">//tech Stack</span>
      <h2 className="section-heading">Engineering toolkit</h2>
      <div className="tech-groups">
        {groups.map(({ label, items, priority }) => (
          <div
            key={label}
            className={`tech-group${priority ? ' priority' : ''}`}
          >
            <p className="tech-group-label">{label}</p>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
