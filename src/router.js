import React, { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import Context from './context'

const history = createBrowserHistory()
const computeRootMatch = (pathname) => ({
  path: '/',
  url: '/',
  params: {},
  isExact: pathname === '/'
})

const Router = ({ children }) => {
  const [location, setLocation] = useState(history.location)

  useEffect(() => {
    const unlisten = history.listen(({ location }) => setLocation(location))
    return () => unlisten()
  }, [])

  const value = {
    history,
    location,
    match: computeRootMatch(location.pathname)
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Router
