const stacks = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C++', 'Python'],
    priority: false,
  },
  {
    title: 'Web Development',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Jest', 'Vite'],
    priority: true,   // green highlight — the core stack
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'T-SQL'],
    priority: false,
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'Figma', 'Postman', 'ESLint', 'Prettier'],
    priority: false,
  },
]

const TechStack = () => (
  <section className="tunnel-section">
    <div className="tunnel-light" aria-hidden="true" />

    <div className="tunnel-inner">
      <h2 className="tunnel-heading">Infrastructure</h2>
      <p className="tunnel-subtitle">// PIPE SYSTEM · FLOOR −1 · UTILITY LAYER</p>

      <div className="pipe-system">
        {stacks.map((group) => (
          <div
            key={group.title}
            className={`pipe-group${group.priority ? ' pipe-group--priority' : ''}`}
          >
            <p className="pipe-header">{group.title}</p>
            <div className="pipe-items">
              {group.items.map((item) => (
                <span key={item} className="pipe-label">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="tunnel-section-fade" aria-hidden="true" />
  </section>
)

export default TechStack
