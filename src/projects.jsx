/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

import { useState } from 'react'

import currioEditor from './assets/currio2.webp'
import currioLanding from './assets/currio1.webp'
import currioTemplates from './assets/currio3.webp'
import munCommittees from './assets/mun2.webp'
import munLanding from './assets/mun1.webp'
import munLogin from './assets/mun3.webp'
import zpinnCart from './assets/zpinn3.webp'
import zpinnLanding from './assets/zpinn1.webp'
import zpinnShop from './assets/zpinn2.webp'

const projects = [
  {
    id: 'currio',
    name: 'currio',
    tagline: 'Let the world know about the best version of yourself!',
    stack: ['Supabase', 'React + Vite', 'Google SSO'],
    desc: 'A platform to create CVs from ready-made templates, with Google single sign-on and cloud persistence powered by Supabase.',
    shots: [
      { label: 'landing page', src: currioLanding },
      { label: 'cv editor', src: currioEditor },
      { label: 'template picker', src: currioTemplates },
    ],
    links: [
      { label: 'Live', href: 'https://currio-app.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/alxxjandro/cvbuilder' },
    ],
  },
  {
    id: 'zpinn',
    name: 'zpinn.',
    tagline: 'Vinyl store concept',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    desc: 'A modern vinyl record store concept focused on design and user experience, fully responsive and component-driven.',
    shots: [
      { label: 'landing page', src: zpinnLanding },
      { label: 'storefront grid', src: zpinnShop },
      { label: 'cart', src: zpinnCart },
    ],
    links: [
      { label: 'Live', href: 'https://zpinn.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/alxxjandro/zpinn.' },
    ],
  },
  {
    id: 'prepatec-mun',
    name: 'prepatec mun',
    tagline: 'MUN management · In progress',
    stack: ['React', 'Typescript', 'Django', 'Google SSO'],
    desc: 'A platform for PrepaTec Campus Chihuahua to manage everything around their Model United Nations program: committees, delegates and logistics in one place.',
    shots: [
      { label: 'landing page', src: munLanding },
      { label: 'committees', src: munCommittees },
      { label: 'sistema mun login', src: munLogin },
    ],
    links: [
      { label: 'Live', href: 'https://mun-frontend.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/alxxjandro/mun-frontend' },
    ],
  },
]

/**
 * Writes the pointer's position within the element as -1..1 CSS vars, so the
 * tilt can follow the cursor without re-rendering.
 */
const trackPointer = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--px', (e.clientX - left) / width - 0.5)
  e.currentTarget.style.setProperty('--py', (e.clientY - top) / height - 0.5)
}

const resetPointer = (e) => {
  e.currentTarget.style.setProperty('--px', 0)
  e.currentTarget.style.setProperty('--py', 0)
}

/**
 * Single screenshot slot. Thumbnails are buttons that promote themselves into
 * the hero; shots without an image fall back to a patterned placeholder.
 */
const Shot = ({ shot, className, labelled = false, onSelect }) => {
  if (!shot.src) {
    return (
      <div className={className}>
        {labelled && <span className="proj-shot-label">[ {shot.label} ]</span>}
      </div>
    )
  }

  const image = (
    <img src={shot.src} alt={shot.label} className="proj-shot-img" />
  )

  return onSelect ? (
    <button
      type="button"
      className={`${className} proj-shot-button`}
      onClick={() => onSelect(shot)}
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      aria-label={`Show ${shot.label}`}
    >
      {image}
    </button>
  ) : (
    <div className={className}>{image}</div>
  )
}

/**
 * Detail view for a single project, shared by the desktop split panel and the
 * mobile accordion: hero shot, thumbnails, tagline, description, stack and links.
 */
const ProjectDetail = ({ project }) => {
  const [heroLabel, setHeroLabel] = useState(project.shots[0].label)

  const hero =
    project.shots.find((s) => s.label === heroLabel) ?? project.shots[0]

  return (
    <div className="proj-detail">
      <Shot
        key={hero.label}
        shot={hero}
        className="proj-shot proj-shot-hero"
        labelled
      />
      <div className="proj-thumbs">
        {project.shots.map((shot) => (
          <Shot
            key={shot.label}
            shot={shot}
            className={`proj-shot proj-shot-thumb${
              shot.label === hero.label ? ' current' : ''
            }`}
            onSelect={(s) => setHeroLabel(s.label)}
          />
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
}

const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [openId, setOpenId] = useState(projects[0].id)

  const active = projects.find((p) => p.id === activeId) ?? projects[0]
  const toggleOpen = (id) =>
    setOpenId((current) => (current === id ? null : id))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">// SELECTED WORK</span>

        <div className="projectsWrapper">
          <div className="proj-list">
            <h2 className="section-heading">Projects</h2>
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`proj-row${p.id === active.id ? ' selected' : ''}`}
                onClick={() => setActiveId(p.id)}
              >
                <span className="proj-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="proj-name">{p.name}</span>
              </button>
            ))}
          </div>

          <div className="proj-split">
            <div key={active.id} className="proj-detail-wrap">
              <ProjectDetail project={active} />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <h2 className="section-heading section-heading-mobile">Projects</h2>
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
                  <span className="proj-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="proj-name">{p.name}</span>
                  <span className="proj-acc-sign" aria-hidden="true">
                    {open ? '-' : '+'}
                  </span>
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
