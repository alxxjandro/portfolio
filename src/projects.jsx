const projects = [
  {
    name: 'ReBreath',
    desc: 'Web app using NASA satellite data, OpenWeather, and Gemini AI to deliver personalized air quality and health insights.',
    award: 'NASA Space Apps 2025 \u2014 Global Nominee',
    links: [
      { label: 'Live \u2197',     href: 'https://hilarious-stroopwafel-c91aef.netlify.app/' },
      { label: 'Frontend \u2197', href: 'https://github.com/alxxjandro/frontendspaceapps/' },
      { label: 'Backend \u2197',  href: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5' },
    ],
  },
  {
    name: 'zpinn.',
    desc: 'Modern vinyl record mock store focused on design and user experience. Fully responsive React app.',
    links: [
      { label: 'Live \u2197',   href: 'https://zpinn.netlify.app/' },
      { label: 'GitHub \u2197', href: 'https://github.com/alxxjandro/zpinn.' },
    ],
  },
  {
    name: 'CV Builder',
    desc: 'Interactive resume generator built with React. Create, preview, and export personalized CVs as PDF.',
    links: [
      { label: 'Live \u2197',   href: 'https://alxscvbuilder.netlify.app/' },
      { label: 'GitHub \u2197', href: 'https://github.com/alxxjandro/cvbuilder' },
    ],
  },
  {
    name: 'HighPoint Ecoas',
    desc: 'Full-stack platform for managing teacher surveys. Auth, file uploads, and data dashboards with React and Express.',
    links: [
      { label: 'Frontend \u2197', href: 'https://github.com/CLA-TC2005B-FJ2025/equipo5-prototipo' },
      { label: 'Backend \u2197',  href: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5' },
    ],
  },
  {
    name: 'CasaHogar',
    desc: 'React Native + Node.js app for a local shelter. Inventory, donations, and multi-user access.',
    private: true,
  },
]

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <span className="section-label">// SELECTED WORK</span>
      <h2 className="section-heading">Projects</h2>

      <div className="proj-masonry">
        {projects.map((p, i) => (
          <article key={p.name} className="proj-item">
            <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="proj-name">{p.name}</h3>
            <div className="proj-rule" aria-hidden="true" />
            <div className="proj-meta">
              {p.award && (
                <span className="proj-award">&#9733; {p.award}</span>
              )}
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-links">
                {p.private ? (
                  <span className="proj-private">Private project</span>
                ) : (
                  p.links?.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                    >
                      {label}
                    </a>
                  ))
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
