import { useEffect, useState } from 'react'

/**
 * Custom hook capture the current user mouse coordinates
 * @returns object containing the X and Y mouse coordinates
 */
export default function useMouseCoordinates() {
  /**
   * React state to hold and update the coordinates on user movement
   */
  const [coordinates, setCoordinates] = useState(null)

  /**
   * Effect to add a mouse event listener on mount
   */
  useEffect(() => {
    const updateCoords = (ev) => {
      setCoordinates({ clientX: ev.clientX, clientY: ev.clientY })
    }

    window.addEventListener('mousemove', updateCoords)

    return () => {
      window.removeEventListener('mousemove', updateCoords)
    }
  }, [])

  return { coordinates }
}
