const groups = [
  {
    label: 'Web Development',
    priority: true,
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Jest', 'Vite'],
  },
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C++', 'Python'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'T-SQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'Figma', 'Postman', 'ESLint', 'Prettier'],
  },
]

const TechStack = () => (
  <section id="tech" className="tech">
    <div className="container">
      <span className="section-label">// PIPE SYSTEM · FLOOR &#8722;1 · UTILITY LAYER</span>
      <h2 className="section-heading">Infrastructure</h2>
      <div className="tech-groups">
        {groups.map(({ label, items, priority }) => (
          <div key={label} className={`tech-group${priority ? ' priority' : ''}`}>
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
