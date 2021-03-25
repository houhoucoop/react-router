import React, { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import RouterContext from './context'

const history = createBrowserHistory()

const Router = ({ children }) => {
  const [location, setLocation] = useState(history.location)

  useEffect(() => {
    const unlisten = history.listen(({ location }) => setLocation(location))
    return () => unlisten()
  }, [])

  const value = {
    history,
    location
  }

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  )
}

export default Router
