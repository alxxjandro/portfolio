import CursorWrapper from './CursorWrapper'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Projects from './components/Projects'
import Carrousel from './components/Carrousel'
import Experience from './components/Experience'
import './styles.css'

const App = () => {
  return (
    <CursorWrapper>
      <Carrousel>
        <Landing />
        <Projects />
        <Experience />
        <Contact />
      </Carrousel>
    </CursorWrapper>
  )
}

export default App
