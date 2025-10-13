import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ReBreath from './assets/ReBreath.png'
import CasaHogar from './assets/CasaHogar.png'
import Highpoint from './assets/Highpoint.png'
import Zpinn from './assets/zpinn.png'
import CVBuilder from './assets/cvbuilder.png'

const ProjectsInfo = [
  {
    name: 'ReBreath',
    description:
      'Winner of NASA Space Apps 2025 (Global Nominee). Web app that uses NASA satellite data, OpenWeather, and Gemini AI to deliver personalized air quality and health insights.',
    frontend: 'https://github.com/alxxjandro/frontendspaceapps/',
    backend: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5',
    link: 'https://hilarious-stroopwafel-c91aef.netlify.app/',
    photoUrl: ReBreath,
  },
  {
    name: 'zpinn.',
    description:
      'Modern vinyl record mock store focused on design and user experience. Fully responsive React app with smooth animations and a clean aesthetic.',
    frontend: 'https://github.com/alxxjandro/zpinn.',
    backend: '',
    link: 'https://zpinn.netlify.app/',
    photoUrl: Zpinn,
  },
  {
    name: 'CV Builder',
    description:
      'Interactive resume generator built with React. Lets users create, preview, and export personalized CVs as PDF.',
    frontend: 'https://github.com/alxxjandro/cvbuilder',
    backend: '',
    link: 'https://alxscvbuilder.netlify.app/',
    photoUrl: CVBuilder,
  },
  {
    name: 'HighPoint Ecoas',
    description:
      'Full-stack platform for managing teacher surveys. Includes auth, file uploads, and data dashboards built with React and Express.',
    frontend: 'https://github.com/CLA-TC2005B-FJ2025/equipo5-prototipo',
    backend: 'https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5',
    link: '',
    photoUrl: Highpoint,
  },
  {
    name: 'CasaHogar',
    description:
      'React Native + Node.js app for a local shelter. Handles inventory, donations, and multi-user access to improve management.',
    frontend: '',
    backend: '',
    link: '',
    photoUrl: CasaHogar,
  },
]

const Projects = () => {
  const [modalProject, setModalProject] = useState(null)

  const handleGithubClick = (project) => {
    if (project.frontend && project.backend) {
      setModalProject(project)
    } else {
      const repo = project.frontend || project.backend
      if (repo) window.open(repo, '_blank')
    }
  }

  const closeModal = () => setModalProject(null)

  return (
    <section id="projects" className="projectsWrapper">
      <div className="techHeader">
        <h1 style={{ textAlign: 'center' }}>
          Featured <span>Projects</span>
        </h1>
        <p>
          A few of the projects that pushed me to learn, experiment, and grow as
          a developer.
        </p>
        <div className="greenDivider"></div>
      </div>
      <div className="projectsGrid">
        {ProjectsInfo.map((project) => (
          <div key={project.name} className="projectCard">
            <img
              src={project.photoUrl}
              alt={project.name}
              className="projectImage"
            />
            <div className="projectContent">
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              {(project.link || project.frontend || project.backend) && (
                <div className="projectButtons">
                  {project.link && (
                    <button
                      className="customButton primary"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <FiExternalLink /> Live
                    </button>
                  )}

                  {(project.frontend || project.backend) && (
                    <button
                      className="customButton secondary"
                      onClick={() => handleGithubClick(project)}
                    >
                      <FiGithub size={18} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <h3>Select a repository</h3>
            <p>{modalProject.name}</p>
            <div className="modalButtons">
              <a
                href={modalProject.frontend}
                target="_blank"
                className="customButton primary"
              >
                Frontend
              </a>
              <a
                href={modalProject.backend}
                target="_blank"
                className="customButton secondary"
              >
                Backend
              </a>
            </div>
            <button className="modalClose" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
