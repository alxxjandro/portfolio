import { useEffect } from 'react'
import useMouseCoordinates from './hooks/useMouseCoordinates'

export default function CursorWrapper({ children }) {
  const { coordinates } = useMouseCoordinates()

  useEffect(() => {
    console.log(coordinates)
  }, [coordinates])

  return (
    <>
      {coordinates && (
        <div
          className="cursor"
          style={{
            left: coordinates.clientX + 'px',
            top: coordinates.clientY + 'px',
          }}
        />
      )}

      {children}
    </>
  )
}
