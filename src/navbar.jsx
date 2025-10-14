import { useEffect, useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'
import { PiGithubLogoFill } from 'react-icons/pi'

const Navbar = ({ aboutRef, techRef, projectsRef, expRef }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    } else {
      toggleTheme()
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mainNavbar">
      <div className="navbarContent">
        <div className="actionBtn">
          <button className="themeToggle">
            <a href="https://github.com/alxxjandro" target="_blank">
              <PiGithubLogoFill size={22} />
            </a>
          </button>
        </div>
        <div>
          <button onClick={() => scrollToSection(aboutRef)}>about</button>
          <button onClick={() => scrollToSection(techRef)}>tech stack</button>
          <button onClick={() => scrollToSection(expRef)}>experience</button>
          <button onClick={() => scrollToSection(projectsRef)}>projects</button>
        </div>
        <div className="actionBtn">
          <button className="themeToggle" onClick={toggleTheme}>
            {theme === 'light' ? <IoMoon size={18} /> : <MdSunny size={18} />}
          </button>
        </div>
      </div>
      <span className="greenline"></span>
    </div>
  )
}

export default Navbar
