import HeaderCard from './headerCard'
import { TypeAnimation } from 'react-type-animation'
import CustomButton from './customButton'
import Navbar from './navbar'
import './styles.css'
import TechStack from './techStack'

const App = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

  return (
    <>
      <Navbar />
      <div className="header">
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
      <TechStack />
    </>
  )
}

export default App
