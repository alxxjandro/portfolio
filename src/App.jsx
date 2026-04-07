import Navbar from './navbar'
import About from './about'
import TechStack from './techStack'
import Experience from './experience'
import Projects from './projects'
import './styles.css'

const App = () => (
  <>
    {/* SVG Noise Filter */}
    <svg
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
    </svg>

    <Navbar />

    {/* Hero */}
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-name-first">Alonso</span>
        <span className="hero-name-last">Alarcon.</span>
        <p className="hero-tagline">
          frontend developer&nbsp;&nbsp;&middot;&nbsp;&nbsp;student&nbsp;&nbsp;&middot;&nbsp;&nbsp;chihuahua, mx
        </p>
      </div>
      <span className="hero-aside" aria-hidden="true">PORTFOLIO 2025</span>
    </section>

    <About />
    <TechStack />
    <Experience />
    <Projects />

    {/* Footer */}
    <footer className="footer">
      <p className="footer-name">Alonso Alarcon</p>
      <p className="footer-meta">
        alxxjandro&nbsp;&nbsp;&middot;&nbsp;&nbsp;github.com/alxxjandro&nbsp;&nbsp;&middot;&nbsp;&nbsp;2025
      </p>
    </footer>
  </>
)

export default App
