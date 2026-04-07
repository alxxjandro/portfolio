const projects = [
  {
    name: 'ReBreath',
    desc: 'Web app using NASA satellite data, OpenWeather, and Gemini AI to deliver personalized air quality and health insights.',
    award: 'NASA Space Apps 2025 \u2014 Global Nominee',
    links: [
      { label: 'Live \u2197', href: 'https://hilarious-stroopwafel-c91aef.netlify.app/' },
      { label: 'Frontend \u2197', href: 'https://github.com/alxxjandro/frontendspaceapps/' },
      { label: 'Backend \u2197', href: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5' },
    ],
  },
  {
    name: 'zpinn.',
    desc: 'Modern vinyl record mock store focused on design and user experience. Fully responsive React app with smooth animations.',
    links: [
      { label: 'Live \u2197', href: 'https://zpinn.netlify.app/' },
      { label: 'GitHub \u2197', href: 'https://github.com/alxxjandro/zpinn.' },
    ],
  },
  {
    name: 'CV Builder',
    desc: 'Interactive resume generator built with React. Lets users create, preview, and export personalized CVs as PDF.',
    links: [
      { label: 'Live \u2197', href: 'https://alxscvbuilder.netlify.app/' },
      { label: 'GitHub \u2197', href: 'https://github.com/alxxjandro/cvbuilder' },
    ],
  },
  {
    name: 'HighPoint Ecoas',
    desc: 'Full-stack platform for managing teacher surveys. Includes auth, file uploads, and data dashboards built with React and Express.',
    links: [
      { label: 'Frontend \u2197', href: 'https://github.com/CLA-TC2005B-FJ2025/equipo5-prototipo' },
      { label: 'Backend \u2197', href: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5' },
    ],
  },
  {
    name: 'CasaHogar',
    desc: 'React Native + Node.js app for a local shelter. Handles inventory, donations, and multi-user access to improve management.',
    private: true,
  },
]

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <span className="section-label">// SELECTED WORK</span>
      <h2 className="section-heading">Projects</h2>
      <div className="projects-list">
        {projects.map(({ name, desc, award, links, private: isPrivate }, i) => (
          <div key={name} className="project-entry">
            <span className="project-number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="project-body">
              <span className="project-name">{name}</span>
              <p className="project-desc">{desc}</p>
              {award && (
                <span className="project-award">&#9733; {award}</span>
              )}
              <div className="project-links">
                {isPrivate ? (
                  <span className="project-private">Private project</span>
                ) : (
                  links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {label}
                    </a>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
