import { useState, useEffect, useRef } from 'react'
import ReBreath  from './assets/ReBreath.png'
import CasaHogar from './assets/CasaHogar.png'
import Highpoint from './assets/Highpoint.png'
import Zpinn     from './assets/zpinn.png'
import CVBuilder from './assets/cvbuilder.png'

const ProjectsInfo = [
  {
    name: 'ReBreath',
    description:
      'Web app using NASA satellite data, OpenWeather, and Gemini AI to deliver personalized air quality and health insights.',
    frontend: 'https://github.com/alxxjandro/frontendspaceapps/',
    backend:  'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5',
    link:     'https://hilarious-stroopwafel-c91aef.netlify.app/',
    photo:    ReBreath,
    award:    'NASA Space Apps 2025 — Global Nominee',
  },
  {
    name: 'zpinn.',
    description:
      'Modern vinyl record mock store focused on design and user experience. Fully responsive React app with smooth animations.',
    frontend: 'https://github.com/alxxjandro/zpinn.',
    backend:  '',
    link:     'https://zpinn.netlify.app/',
    photo:    Zpinn,
  },
  {
    name: 'CV Builder',
    description:
      'Interactive resume generator built with React. Lets users create, preview, and export personalized CVs as PDF.',
    frontend: 'https://github.com/alxxjandro/cvbuilder',
    backend:  '',
    link:     'https://alxscvbuilder.netlify.app/',
    photo:    CVBuilder,
  },
  {
    name: 'HighPoint Ecoas',
    description:
      'Full-stack platform for managing teacher surveys. Includes auth, file uploads, and data dashboards built with React and Express.',
    frontend: 'https://github.com/CLA-TC2005B-FJ2025/equipo5-prototipo',
    backend:  'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5',
    link:     '',
    photo:    Highpoint,
  },
  {
    name: 'CasaHogar',
    description:
      'React Native + Node.js app for a local shelter. Handles inventory, donations, and multi-user access to improve management.',
    frontend: '',
    backend:  '',
    link:     '',
    photo:    CasaHogar,
  },
]

const Projects = () => {
  const [modal, setModal]     = useState(null)
  const triggerRef = useRef(null)
  const modalRef   = useRef(null)

  const openRepo = (project, e) => {
    if (project.frontend && project.backend) {
      triggerRef.current = e.currentTarget
      setModal(project)
    } else {
      const repo = project.frontend || project.backend
      if (repo) window.open(repo, '_blank', 'noopener,noreferrer')
    }
  }

  const closeModal = () => {
    setModal(null)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!modal || !modalRef.current) return
    const m = modalRef.current
    const focusable = Array.from(
      m.querySelectorAll('a[href], button:not([disabled])')
    )
    focusable[0]?.focus()
    const handleKey = (e) => {
      if (e.key === 'Escape') { closeModal(); return }
      if (e.key === 'Tab') {
        const first = focusable[0]
        const last  = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [modal])

  const total = ProjectsInfo.length

  return (
    <>
      <div className="chambers-outer" aria-label="Projects">
        {ProjectsInfo.map((p, i) => (
          <article key={p.name} className={`chamber chamber--${i}`}>
            <div
              className="chamber-bg"
              style={{ backgroundImage: `url(${p.photo})` }}
              aria-hidden="true"
            />
            <div className="chamber-overlay" aria-hidden="true" />

            <div className="chamber-content">
              <span className="chamber-index">
                0{i + 1}&nbsp;/&nbsp;0{total}
              </span>

              {p.award && (
                <span className="chamber-award">{p.award}</span>
              )}

              <strong className="chamber-name">{p.name}</strong>
              <p className="chamber-desc">{p.description}</p>

              <div className="chamber-links">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chamber-link"
                  >
                    Live ↗
                  </a>
                )}

                {(p.frontend || p.backend) && (
                  <button
                    type="button"
                    className="chamber-link"
                    onClick={(e) => openRepo(p, e)}
                    aria-label={`Source code for ${p.name}`}
                  >
                    Source
                  </button>
                )}

                {/* Green use #4 — exit indicator on last chamber */}
                {i === total - 1 && (
                  <span className="chamber-exit">Exit ↑</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {modal && (
        <div className="modalOverlay" onClick={closeModal} aria-hidden="true">
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="modalCard"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="modal-title">Select repository</h3>
            <p>{modal.name}</p>
            <div className="modalButtons">
              <a
                href={modal.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn"
              >
                Frontend
              </a>
              <a
                href={modal.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn"
              >
                Backend
              </a>
            </div>
            <button
              type="button"
              className="modalClose"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
