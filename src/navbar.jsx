import { useEffect, useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'
import { PiGithubLogoFill } from 'react-icons/pi'

const Navbar = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
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
          <button>about</button>
          <button>tech stack</button>
          <button>projects</button>
          <button>experience</button>
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
