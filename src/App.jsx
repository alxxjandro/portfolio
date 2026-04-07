import { useRef, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Navbar from './navbar'
import TechStack from './techStack'
import Experience from './experience'
import Projects from './projects'
import myCV from './assets/Alonso-Alarcon-Resume.pdf'
import './styles.css'

const App = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

  const aboutRef    = useRef(null)
  const techRef     = useRef(null)
  const projectsRef = useRef(null)
  const expRef      = useRef(null)

  // Parallax: sky moves slower than ground, selling depth
  useEffect(() => {
    const skyEl    = document.querySelector('.hero-sky')
    const groundEl = document.querySelector('.hero-ground')

    const onScroll = () => {
      const sy = window.scrollY
      if (skyEl)    skyEl.style.transform    = `translateY(${sy * 0.38}px)`
      if (groundEl) groundEl.style.transform = `translateY(${sy * 0.62}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        techRef={techRef}
        projectsRef={projectsRef}
        expRef={expRef}
      />

      <main>

        {/* ── HERO — Street level ── */}
        <section ref={aboutRef} className="hero-section">
          <div className="hero-sky"      aria-hidden="true" />
          <div className="hero-ground"   aria-hidden="true" />
          <div className="hero-horizon"  aria-hidden="true" />
          <div className="hero-vignette" aria-hidden="true" />

          <div className="hero-content">
            <span className="hero-spray">↓ ALONSO CITY / 2025</span>

            <h1 className="hero-name">
              ALONSO<br />ALARCON
            </h1>

            <p className="hero-role">
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                speed={48}
                deletionSpeed={62}
                wrapper="span"
                repeat={Infinity}
                sequence={[
                  'SOFTWARE DEVELOPER', 2800,
                  'FRONTEND ENGINEER',  2200,
                  'CS STUDENT',         2200,
                ]}
              />
            </p>

            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/alejandro-a-53b4ab294/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                Get in touch
              </a>
              <button
                type="button"
                className="hero-link"
                onClick={() => window.open(myCV, '_blank')}
              >
                View CV
              </button>
            </div>
          </div>

          <div className="hero-scroll-hint" aria-hidden="true">
            <span>Descend</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ── ABOUT — Manhole transition ── */}
        <section className="manhole-section">
          <div className="manhole-inner">
            <div className="about-text">
              <p className="about-label">// depth: 0m → street level</p>
              <h2 className="about-heading">About<br />the Dev</h2>
              <p className="about-bio">
                CS student building real things. I care about how software
                works and how it feels — from the logic underneath to the
                interface on top. Currently interning at AutoZone while
                shipping side projects.
              </p>
              <div className="about-data">
                <div>role     <span>Frontend Developer</span></div>
                <div>location <span>Mexico</span></div>
                <div>focus    <span>['web-dev', 'mobile', 'design']</span></div>
                <div>hobbies  <span>['running', 'cooking', 'coding']</span></div>
              </div>
            </div>

            <div className="manhole-svg-wrap" aria-hidden="true">
              <svg
                className="manhole-svg"
                viewBox="0 0 240 240"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="120" cy="120" r="117" fill="none" stroke="#3e3428" strokeWidth="5" />
                <circle cx="120" cy="120" r="109" fill="#161008" stroke="#2e2418" strokeWidth="2" />
                <circle cx="120" cy="120" r="101" fill="#111008" stroke="#222018" strokeWidth="1.5" />
                <circle cx="120" cy="120" r="82"  fill="none"   stroke="#1e1c14" strokeWidth="2" />
                <circle cx="120" cy="120" r="58"  fill="none"   stroke="#1e1c14" strokeWidth="2" />
                <circle cx="120" cy="120" r="34"  fill="none"   stroke="#1e1c14" strokeWidth="1.5" />
                <line x1="19"  y1="120" x2="221" y2="120" stroke="#1e1c14" strokeWidth="1.5" />
                <line x1="120" y1="19"  x2="120" y2="221" stroke="#1e1c14" strokeWidth="1.5" />
                <line x1="50"  y1="50"  x2="190" y2="190" stroke="#181610" strokeWidth="1" />
                <line x1="190" y1="50"  x2="50"  y2="190" stroke="#181610" strokeWidth="1" />
                <line x1="19"  y1="78"  x2="78"  y2="19"  stroke="#181610" strokeWidth="0.7" />
                <line x1="162" y1="19"  x2="221" y2="78"  stroke="#181610" strokeWidth="0.7" />
                <line x1="19"  y1="162" x2="78"  y2="221" stroke="#181610" strokeWidth="0.7" />
                <line x1="162" y1="221" x2="221" y2="162" stroke="#181610" strokeWidth="0.7" />
                <rect x="113" y="92"  width="14" height="7" rx="1.5" fill="#0a0806" />
                <rect x="113" y="141" width="14" height="7" rx="1.5" fill="#0a0806" />
                <circle cx="120" cy="120" r="3.5" fill="#1e1c14" />
                <rect x="116" y="20" width="8" height="3" fill="#302818" />
              </svg>
              <span className="manhole-label">UTILITY ACCESS · CLASS H-24</span>
            </div>
          </div>
        </section>

        {/* ── TECH STACK — Tunnel ── */}
        <div ref={techRef}>
          <TechStack />
        </div>

        {/* ── EXPERIENCE — Deep ── */}
        <div ref={expRef}>
          <Experience />
        </div>

        {/* ── PROJECTS — Chambers ── */}
        <div ref={projectsRef}>
          <Projects />
        </div>

      </main>
    </>
  )
}

export default App
