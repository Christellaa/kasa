import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function CurrentLocation(page, classIf, classElse) {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  return `${currentPath === page ? classIf : classElse}`
}

export default CurrentLocation
