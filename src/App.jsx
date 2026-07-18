/**
 * Alonso Alarcon
 * Portfolio - 2026
 */

import Navbar from './navbar'
import About from './about'
import TechStack from './techStack'
import Experience from './experience'
import Projects from './projects'
import './styles.css'

const App = () => (
  <>
    <Navbar />

    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-name-first">Alonso</span>
        <span className="hero-name-last">Alarcon.</span>
        <div className="hero-tagline">
          <p>student</p>
          <p>software engineer</p>
          <p>guadalajara, mexico</p>
        </div>
      </div>
    </section>

    <About />
    <TechStack />
    <Experience />
    <Projects />

    <footer className="footer">
      <p className="footer-name">Alonso Alarcon</p>
      <p className="footer-meta">
        alxxjandro&nbsp;&nbsp;·&nbsp;&nbsp;github.com/alxxjandro&nbsp;&nbsp;·&nbsp;&nbsp;2025
      </p>
    </footer>
  </>
)

export default App
