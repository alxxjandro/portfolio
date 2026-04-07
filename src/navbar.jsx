import { useEffect, useState } from 'react'
import { PiGithubLogoFill } from 'react-icons/pi'

const Navbar = ({ aboutRef, techRef, projectsRef, expRef }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`main-nav${scrolled ? ' scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <span className="nav-brand">AA</span>

        <div className="nav-links">
          <button type="button" onClick={() => scrollTo(aboutRef)}>About</button>
          <button type="button" onClick={() => scrollTo(techRef)}>Tech</button>
          <button type="button" onClick={() => scrollTo(expRef)}>Experience</button>
          <button type="button" onClick={() => scrollTo(projectsRef)}>Projects</button>
        </div>

        <a
          href="https://github.com/alxxjandro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="nav-github"
        >
          <PiGithubLogoFill size={20} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
