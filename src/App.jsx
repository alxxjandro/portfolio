import HeaderCard from './headerCard'
import { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import CustomButton from './customButton'
import TechStack from './techStack'
import Projects from './projects'
import Navbar from './navbar'
import './styles.css'

const App = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

  const aboutRef = useRef(null)
  const techStackRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        techStackRef={techStackRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
      />
      <div ref={aboutRef} className="header">
        <h1>
          <div className="headerh1">
            <span>Hi I'm </span>
            <span className="typing">
              <TypeAnimation
                cursor={false}
                className={CURSOR_CLASS_NAME}
                speed={50}
                deletionSpeed={55}
                wrapper="span"
                sequence={[
                  (el) => el.classList.add(CURSOR_CLASS_NAME),
                  'Alonso',
                  2000,
                  'a Software Developer',
                  2000,
                  'a CS Student',
                  2000,
                  'Alonso :)',
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
              />
            </span>
            <p className="subHeader">Always learning, always building.</p>
            <div className="headerActions">
              <CustomButton
                text="My Projects"
                onClick={() => console.log('projects')}
              />
              <CustomButton
                text="My CV"
                onClick={() => window.open('/resume.pdf', '_blank')}
                variant="secondary"
              />
            </div>
          </div>
        </h1>
        <HeaderCard />
      </div>
      <div ref={techStackRef}>
        <TechStack />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </>
  )
}

export default App
