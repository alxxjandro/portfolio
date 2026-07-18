/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

import { useState } from 'react'

const projects = [
  {
    id: 'currio',
    name: 'Currio',
    tagline: 'CV builder platform',
    stack: ['Supabase', 'React', 'Google SSO'],
    desc: 'A platform to create CVs from ready-made templates, with Google single sign-on and cloud persistence powered by Supabase. Formerly CVBuilder.',
    shots: [
      { label: 'template gallery' },
      { label: 'cv editor' },
      { label: 'exported pdf' },
    ],
    links: [
      { label: 'Live', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    id: 'zpinn',
    name: 'zpinn.',
    tagline: 'Vinyl store concept',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    desc: 'A modern vinyl record store concept focused on design and user experience, fully responsive and component-driven.',
    shots: [
      { label: 'storefront grid' },
      { label: 'product detail' },
      { label: 'cart flow' },
    ],
    links: [
      { label: 'Live', href: 'https://zpinn.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/alxxjandro/zpinn.' },
    ],
  },
  {
    id: 'prepatec-mun',
    name: 'PrepaTec - MUN',
    tagline: 'MUN management · In progress',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'A platform for PrepaTec Campus Chihuahua to manage everything around their Model United Nations program: committees, delegates and logistics in one place.',
    shots: [
      { label: 'dashboard' },
      { label: 'committees' },
      { label: 'delegates' },
    ],
    links: [
      { label: 'Live', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
]

/**
 * Single screenshot slot. Renders the image when `shot.src` is set, otherwise a
 * patterned placeholder that optionally shows the shot label.
 */
const Shot = ({ shot, className, labelled = false }) => (
  <div className={className}>
    {shot.src ? (
      <img src={shot.src} alt={shot.label} className="proj-shot-img" />
    ) : (
      labelled && <span className="proj-shot-label">[ {shot.label} ]</span>
    )}
  </div>
)

/**
 * Detail view for a single project, shared by the desktop split panel and the
 * mobile accordion: hero shot, thumbnails, tagline, description, stack and links.
 */
const ProjectDetail = ({ project }) => (
  <div className="proj-detail">
    <Shot shot={project.shots[0]} className="proj-shot proj-shot-hero" labelled />
    <div className="proj-thumbs">
      {project.shots.map((shot) => (
        <Shot key={shot.label} shot={shot} className="proj-shot proj-shot-thumb" />
      ))}
    </div>

    <div className="proj-tagline">{project.tagline}</div>
    <p className="proj-desc">{project.desc}</p>
    <div className="proj-stack">{project.stack.join('   ·   ')}</div>

    <div className="proj-links">
      {project.links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-link"
        >
          {label} ↗
        </a>
      ))}
    </div>
  </div>
)

const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [openId, setOpenId] = useState(projects[0].id)

  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  const toggleOpen = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">// SELECTED WORK</span>
        <h2 className="section-heading">Projects</h2>

        <div className="proj-split">
          <div className="proj-list">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`proj-row${p.id === active.id ? ' selected' : ''}`}
                onClick={() => setActiveId(p.id)}
              >
                <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="proj-name">{p.name}</span>
              </button>
            ))}
          </div>

          <div key={active.id} className="proj-detail-wrap">
            <ProjectDetail project={active} />
          </div>
        </div>

        <div className="proj-accordion">
          {projects.map((p, i) => {
            const open = p.id === openId
            return (
              <div key={p.id} className="proj-acc-item">
                <button
                  type="button"
                  className="proj-acc-head"
                  onClick={() => toggleOpen(p.id)}
                  aria-expanded={open}
                >
                  <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="proj-name">{p.name}</span>
                  <span className="proj-acc-sign" aria-hidden="true">{open ? '–' : '+'}</span>
                </button>
                {open && <ProjectDetail project={p} />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
