import HeaderCard from './headerCard'
import { TypeAnimation } from 'react-type-animation'
import './styles.css'

const App = () => {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'

  return (
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
        </div>
      </h1>
      <HeaderCard />
    </div>
  )
}

export default App
