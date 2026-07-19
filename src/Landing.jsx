import resume from './assets/Alonso-Alarcon-Resume.pdf'

const Landing = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-name-first">Alonso</span>
        <span className="hero-name-last">Alarcon.</span>
        <div className="hero-tagline">
          <p>
            <a href="mailto:alejandro33p@icloud.com">
              email me{' '}
              <svg className="hero-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 7 12 13l8.5-6" />
              </svg>
            </a>
          </p>
          <p>
            <a href={resume} download="Alonso-Alarcon-Resume.pdf">
              my curriculum{' '}
              <span className="hero-download" aria-hidden="true">
                ↓
              </span>
            </a>
          </p>
          <p>
            guadalajara, mexico
            <svg className="hero-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.5c4.2-4.6 6.5-8 6.5-11a6.5 6.5 0 1 0-13 0c0 3 2.3 6.4 6.5 11z" />
              <circle cx="12" cy="10.5" r="2.4" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Landing
