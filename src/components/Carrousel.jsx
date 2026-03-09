import { Children, useRef, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

export default function Carrousel({ children }) {
  const containerRef = useRef(null)
  const [sectionIndex, setSectionIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if (isScrolling) return
    const scrollLeft = containerRef.current.scrollLeft
    const index = Math.round(scrollLeft / window.innerWidth)
    setSectionIndex(index)
  }

  const scrollNext = () => {
    setSectionIndex((prev) => prev + 1)
    setIsScrolling(true)
    containerRef.current.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth',
    })
    setTimeout(() => setIsScrolling(false), 300)
  }

  const scrollPrev = () => {
    setSectionIndex((prev) => prev - 1)
    setIsScrolling(true)
    containerRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth',
    })
    setTimeout(() => setIsScrolling(false), 300)
  }

  const scrollToSection = (index) => {
    setSectionIndex(index)
    setIsScrolling(true)
    containerRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: 'smooth',
    })
    setTimeout(() => setIsScrolling(false), 300)
  }

  return (
    <div className="carrousel-container">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="carrousel-scroll"
      >
        {Children.map(children, (child, i) => (
          <div key={i} className="carrousel-section">
            {child}
          </div>
        ))}
      </div>

      <button
        className="scrollBtn carrousel-prev-btn"
        onClick={scrollPrev}
        disabled={sectionIndex === 0}
      >
        <ChevronLeftIcon />
      </button>

      <button
        className="scrollBtn carrousel-next-btn"
        onClick={scrollNext}
        disabled={sectionIndex === Children.count(children) - 1}
      >
        <ChevronRightIcon />
      </button>

      <div className="carrousel-dots">
        {Children.map(children, (_, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(i)}
            className={`dot ${i === sectionIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
